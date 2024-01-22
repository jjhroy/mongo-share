<template>
  <div class="flex flex-col m-auto justify-center items-center">
    <SearchEngine />
    <NavigationPanel />
  </div>
</template>

<script setup lang="ts">
  import SearchEngine from '~/components/home/SearchEngine.vue';
  import NavigationPanel from '~/components/home/NavigationPanel.vue';
  import { initBoard } from '~/mongo-board';

  onMounted(() => {
    initBoard({
      sign: 'board-test',
      imgUrl: ['https://img.linkstarted.top/blog/wallhaven-1p2m2w.jpg'],
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
    specialConsole();
  });
</script>
<style>
  @import url('~/mongo-board/board.scss');
  .ex {
    color: #1a84ed;
  }
</style>
