// const lyricsText =
//   '[00:00.000] 作词 : 内澤崇仁\n[00:00.566] 作曲 : 内澤崇仁\n[00:01.132] 编曲 : 内澤崇仁/玉井健二/飛内将大\n[00:01.700]例えば君の顔に昔よりシワが増えても\n[00:08.700]それでもいいんだ\n[00:10.700]僕がギターを思うように弾けなくなっても\n[00:15.700]心の歌は君で溢れているよ\n[00:19.700]高い声も出せずに思い通り歌えない\n[00:25.250]それでもうなずきながら一緒に歌ってくれるかな\n[00:30.250]割れんばかりの拍手も 響き渡る歓声もいらない\n[00:35.250]君だけ 分かってよ 分かってよ\n[00:40.250]Darling 夢が叶ったの\n[00:45.250]お似合いの言葉が見つからないよ\n[00:50.360]Darling 夢が叶ったの\n[00:54.700]「愛してる」\n[00:57.700]たった一度の たった一人の\n[01:02.250]生まれてきた幸せ味わってるんだよ\n[01:07.700]今日がメインディッシュで\n[01:09.700]終わりの日には甘酸っぱいデザートを食べるの\n[01:13.700]山も谷も全部フルコースで\n[01:17.250]気が利くような言葉はいらない\n[01:20.250]素晴らしい特別もいらない\n[01:22.700]ただずっと ずっと側に置いていてよ\n[01:27.569]僕の想いは歳をとると増えてくばっかだ 好きだよ\n[01:33.250]分かってよ 分かってよ\n[01:36.700]ねえ、Darling 夢が叶ったの\n[01:41.700]お似合いの言葉が見つからないよ\n[01:47.250]Darling 夢が叶ったの\n[01:51.700]愛が溢れていく\n[02:19.250]君が僕を忘れてしまっても ちょっと辛いけど…\n[02:26.699]それでもいいから\n[02:29.250]僕より先に どこか遠くに\n[02:34.030]旅立つことは 絶対 許さないから\n[02:38.699]生まれ変わったとしても 出会い方が最悪でも\n[02:44.250]また僕は君に恋するんだよ\n[02:49.250]僕の心は君にいつも片想い 好きだよ\n[02:54.699]分かってよ 分かってよ 分かってよ\n[03:01.250]Darling 夢が叶ったの\n[03:06.250]お似合いの言葉が見つからないよ\n[03:11.250]Darling 夢が叶ったの\n[03:16.250]ねえ Darling「愛してる」\n'; // 从文件中读取的歌词文本
// const lines = lyricsText.split('\n'); // 按行分割
// const lyrics = [];

// const timestampRegex = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/; // 匹配时间戳的正则表达式

// lines.forEach((line) => {
//   const match = line.match(timestampRegex);
//   if (match) {
//     const minutes = parseInt(match[1]);
//     const seconds = parseInt(match[2]);
//     const milliseconds = parseInt(match[3]);
//     const timestamp =
//       minutes * 60 * 1000 + seconds * 1000 + milliseconds;
//     const content = line.replace(timestampRegex, '').trim();
//     lyrics.push({ timestamp, content });
//   }
// });

// console.log(lyrics); // 处理后的歌词数据
