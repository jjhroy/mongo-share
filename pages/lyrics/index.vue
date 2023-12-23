<template>
  <div
    class="lyrics-container"
    ref="scrollContainer">
    <div
      v-for="(line, index) in lyrics"
      :key="index"
      :class="{ active: isActive(index) }"
      class="lyric-line">
      {{ line.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';

  interface LyricLine {
    timestamp: number;
    content: string;
  }

  const lyrics: LyricLine[] = [
    { timestamp: 0, content: 'Verse 1' },
    { timestamp: 10000, content: 'Line 1' },
    { timestamp: 15000, content: 'Line 2' },
    { timestamp: 20000, content: 'Line 3' },
    // ...
  ];

  const scrollContainer = ref<HTMLElement | null>(null);
  const currentLineIndex = ref(0);

  const isActive = (index: number): boolean => {
    return index === currentLineIndex.value;
  };

  const getCurrentTime = (): number => {
    // 根据实际情况获取当前时间戳的方法实现
    return Date.now();
  };

  onMounted(() => {
    const container = scrollContainer.value;
    if (container) {
      container.scrollTop = 0;
    }
    const lineHeight = 30; // 歌词行的高度，根据实际情况自行调整
    const scrollOffset = 60; // 歌词滚动的偏移量，根据实际情况自行调整

    const scrollToLine = () => {
      const activeLine = container?.querySelector(
        '.active'
      ) as HTMLElement;
      if (activeLine) {
        container.scrollTop =
          activeLine.offsetTop - scrollOffset;
      }
    };

    const updateCurrentLine = () => {
      console.log('updateCurrentLine');

      const currentTime = getCurrentTime();
      for (let i = 0; i < lyrics.length; i++) {
        if (lyrics[i].timestamp > currentTime) {
          currentLineIndex.value = i > 0 ? i - 1 : 0;
          break;
        }
      }
      scrollToLine();
    };

    setInterval(updateCurrentLine, 1000);
  });
</script>

<style scoped>
  .lyrics-container {
    position: relative;
    overflow-y: auto;
    height: 300px;
  }

  .lyric-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    transition: all 0.3s;
  }

  .active {
    color: red;
  }
</style>
