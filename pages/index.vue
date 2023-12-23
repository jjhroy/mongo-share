<template>
  <div>
    Index

    <div class="board-mask"></div>
  </div>
</template>

<script setup lang="ts">
  import { insertBoard } from '~/mongo-board/mongo-board';
  onMounted(() => {
    insertBoard({
      sign: 'board-test',
      imgUrl: [
        'https://img.linkstarted.top/blog/wallhaven-1p2m2w.jpg',
      ],
      swipeTimeInterval: '',
      style: 'default',
      onlyOnce: true,
      popTimeInterval: '',
      closeAble: true,
    });
  });
</script>

<style scoped lang="scss">
  .board-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 1);
  }
</style>
