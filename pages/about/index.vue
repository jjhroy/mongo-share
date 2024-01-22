<template>
  <div>
    <audio controls src="/ptpy.mp3"></audio>
    <div class="container">
      <ul class="lrc-list"></ul>
    </div>
  </div>
</template>

<script setup>
const lyricsText = ref('')
const getLyric = () => {
  // const { data, pending, error, refresh } = await useFetch(`https://music.linkstarted.top/lyric?id=150623`)
  let text = "[00:00.000] 作词 : 陶喆/娃娃\n[00:00.000] 作曲 : 陶喆\n[00:00.000] 编曲 : 陶喆\n[00:00.000] 制作人 : 陶喆\n[00:00.000] 母带后期处理录音室 : A&M Mastering Studios\n[00:00.000] 录音师 : Craig Burbidge/陶喆\n[00:00.000] 贝斯 : Reggie Hamilton\n[00:00.000] 混音师 : Craig Burbidge\n[00:00.000] 演奏 : 陶喆\n[00:00.000] 混音室 : Encore Studios/ EMI Studios, Santa Monica\n[00:00.000] 剪辑录音室 : 异术录音室\n[00:00.000] 母带后期处理工程师 : Stephen Marcussen/Maggie Chen\n[00:00.000] 吉他 : 陶喆 (Steel)/ Annas Allaf (Nylon Strings)\n[00:00.000] Programmed : 陶喆\n[00:00.000] 录音室 : Jojo Eyeball Studios/Backroom Studios\n[00:00.000] 和声 : 陶喆\n[00:00.000]\n[00:19.000]等待\n[00:22.000]我随时随地在等待\n[00:27.000]做你感情上的依赖\n[00:33.000]我没有任何的疑问\n[00:37.000]这是爱\n[00:41.000]我猜\n[00:43.000]你早就想要说明白\n[00:49.000]我觉得自己好失败\n[00:54.000]从天堂掉落到深渊\n[00:59.000]多无奈\n[01:01.999]我愿意改变 (what can I do)\n[01:07.998]重新再来一遍(just give me a chance)\n[01:13.998]我无法只是普通朋友\n[01:18.998]感情已那么深\n[01:20.998]叫我怎么能放手\n[01:25.998]但你说 I\n[01:28.998]I only wanna be your friend\n[01:34.000]做个朋友\n[01:37.000]我在\n[01:40.000]你心中只是just a friend\n[01:45.000]不是情人\n[01:48.000]我感激你对我这样的坦白\n[01:53.000]但我给你的爱暂时收不回来\n[01:59.000]So I\n[02:02.998]我不能只是be your friend\n[02:09.000]I just can't be your friend\n[02:15.000]我猜\n[02:18.000]你早就想要说明白\n[02:23.000]我觉得自己好失败\n[02:29.000]从天堂掉落到深渊\n[02:33.000]多无奈\n[02:37.000]我愿意改变 (what can I do?)\n[02:42.000]重新再来一遍(just give me a chance)\n[02:47.000]我无法只是普通朋友\n[02:53.000]感情已那么深\n[02:55.000]叫我怎么能放手\n[03:01.000]但你说 I\n[03:04.000]I only wanna be your friend\n[03:08.000]做个朋友\n[03:12.000]我在\n[03:15.000]你心中只是just a friend\n[03:19.000]不是情人\n[03:23.000]我感激你对我这样的坦白\n[03:28.000]但我给你的爱暂时收不回来\n[03:33.000]So I\n[03:36.000]我不能只是be your friend\n[03:47.000]I just can't be your friend\n[03:51.000]no,no,no,\n[03:57.000]不能只是做你的朋友\n[04:01.000]不能做普通朋友\n"
  lyricsText.value = parseLrc(text)
  console.log('lyricsText.value', lyricsText.value);
}
const parseLrc = (lrc) => {
  const lines = lrc.split("\n");
  const result = []; // 歌词对象数组
  for (let i = 0; i < lines.length; i++) {
    const str = lines[i];
    const parts = str.split("]");
    const timeStr = parts[0].substring(1);
    const obj = {
      time: parseTime(timeStr),
      words: parts[1]
    };
    result.push(obj);
  }
  return result;
}
const parseTime = (timeStr) => {
  const parts = timeStr.split(":");
  return +parts[0] * 60 + +parts[1]; // +一元运算符转数字
}
const createElements = () => {
  getLyric();
  const frag = document.createDocumentFragment(); // 文档片段
  for (let i = 0; i < lyricsText.value.length; i++) {
    const li = document.createElement("li");
    li.textContent = lyricsText.value[i].words;
    frag.appendChild(li);
  }
  console.log('frag', frag);
  document.querySelector(".lrc-list").appendChild(frag);
}
const findIndex = (doms) => {
  const curTime = doms.audio.currentTime;
  console.log(doms.audio.currentTime);
  for (let i = 0; i < lyricsText.value.length; i++) {
    if (curTime < lyricsText.value[i].time) {
      return lyricsText.value[i - 1].words ? i - 1 : i - 2;
    }
  }
  // 找遍了没有找到（说明播放到歌词的最后一句）
  return lyricsText.value.length - 1;
}
const setOffset = (doms, liHight, containerHight, maxOffset) => {
  console.log('滚动更新');
  // 设置ul元素的偏移
  const index = findIndex(doms);
  console.log('index: ' + index);
  let offset = liHight * index + liHight / 2 - containerHight / 2;
  if (offset < 0) {
    offset = 0;
  }
  if (offset > maxOffset) {
    offset = maxOffset;
  }
  // 设置偏移量给ul
  doms.ul.style.transform = `translateY(-${offset}px)`;
  // 去掉之前的样式
  let li = doms.ul.querySelector(".active");
  if (li) {
    li.classList.remove("active");
  }
  // 高亮
  li = doms.ul.children[index];
  if (li) {
    li.classList.add("active");
  }
}
const init = () => {
  // 获取需要的dom
  const doms = {
    audio: document.querySelector("audio"),
    ul: document.querySelector(".lrc-list"),
    container: document.querySelector(".container")
  };
  createElements();
  console.log('doms', doms);
  if (doms.container && doms.ul && doms.audio) {
    // 容器高度
    const containerHight = doms.container.clientHeight;
    // li的高度
    const liHight = doms.ul.children[0].clientHeight;
    // 偏移最大值
    const maxOffset = doms.ul.clientHeight - containerHight
    // 事件
    doms.audio.addEventListener("timeupdate", () => {
      setOffset(doms, liHight, containerHight, maxOffset)
      // // 获取当前播放时间和总时长
      // const currentTime = doms.audio.currentTime;
      // const duration = doms.audio.duration;

      // // 计算播放进度百分比
      // const progress = (currentTime / duration) * 100;

      // // 打印播放进度
      // console.log(`当前播放进度：${progress.toFixed(2)}%`);
    });
  }
}

onMounted(() => {
  if (process.client)
    init()
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #000;
  color: #666;
  text-align: center;
}

audio {
  width: 450px;
  margin: 30px 0;
}

.container {
  height: 420px;
  overflow: hidden;
}

.container ul {
  list-style: none;
  transition: 0.2s;
}

.container li {
  height: 30px;
  line-height: 30px;
  transition: 0.6s;
}

.container li.active {
  color: red;
  transform: scale(1.2);
  /* 放大，不影响集合属性，没有reflow */
}
</style>
