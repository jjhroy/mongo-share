<template>
  <div>Index</div>
</template>

<script setup lang="ts">
  import { initBoard } from '~/mongo-board';
  // import '~/mongo-board/board.css';

  console.log(
    ' %c   ___       ___       ___    ___    ___ \n' +
      '%c   /\\__\\     /\\  \\     /\\__\\  /\\__\\  /\\  \\  \n' +
      '%c  /:/__/_   /::\\  \\   /:/  / /:/  / /::\\  \\                %c每天来上班只干三件事，摸鱼，%c摸鱼，%c还是TMD摸鱼 \n' +
      '%c /::\\/\\__\\ /::\\:\\__\\ /:/__/ /:/__/ /:/\\:\\__\\                                                %c---来自一个报仇雪恨般摸鱼的工作日下午 \n' +
      '%c \\/\\::/  / \\:\\:\\/  / \\:\\  \\ \\:\\  \\ \\:\\/:/  / \n' +
      '%c   /:/  /   \\:\\/  /   \\:\\__\\ \\:\\__\\ \\::/  / \n' +
      '%c   \\/__/     \\/__/     \\/__/  \\/__/  \\/__/ \n' +
      '',
    'color: #FF0000;font-weight:600;font-size:14px;',
    'color: #FFA500;font-weight:600;font-size:14px;',
    'color: #DF2E4A;font-weight:600;font-size:14px;',
    'color: #1A1A1A;font-weight:900;font-size:14px;',
    'color: #1A1A1A;font-weight:900;font-size:16px;',
    'color: #1A1A1A;font-weight:900;font-size:18px;',
    'color: #00FF00;font-weight:600;font-size:14px;',
    'color: #2411C2;font-weight:600;font-size:14px;',
    'color: #00FFFF;font-weight:600;font-size:14px;',
    'color: #0000FF;font-weight:600;font-size:14px;',
    'color: #FF00FF;font-weight:600;font-size:14px;'
  );
  onMounted(() => {
    initBoard({
      sign: 'board-test',
      imgUrl: [
        'https://img.linkstarted.top/blog/wallhaven-1p2m2w.jpg',
      ],
      expirationTime: '2023-12-31',
      swipeTimeInterval: 0,
      style: 'default',
      onlyOnce: true,
      popTimeInterval: 0,
      closeAble: true,
      autoClose: false,
      autoCloseInterval: 5,
      onlyOnceShowed: false,
      statusCode: 0,
    });
  });
</script>
<style>
  @import url('~/mongo-board/board.scss');
</style>
