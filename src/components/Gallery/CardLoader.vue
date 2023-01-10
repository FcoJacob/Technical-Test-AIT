<template>
  <img
    id="cover-img"
    class="rounded-md w-44 h-44 md:w-80 md:h-80 skeleton"
    alt=""
  />
</template>

<style scoped>
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
