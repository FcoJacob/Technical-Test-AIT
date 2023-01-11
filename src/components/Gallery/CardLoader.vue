<template>
  <div class="w-full h-full relative">
    <div class="loader-bar"></div>
    <img class="rounded-md w-full h-full bg-gray-300" alt="" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  isLoad: {
    type: Boolean,
  },
});
</script>

<style scoped>
.loader-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #7878780c, #ffffff, #7878780c);
  background-size: 300% 300%;
  animation: gradient-animation 2s linear infinite alternate;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
