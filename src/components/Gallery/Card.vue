<script lang="ts" setup>
import { ref } from "vue";
import CardLoader from "./CardLoader.vue";

defineProps<{
  url: string;
  alt: string;
}>();

const isLoad = ref(false);
const onLoadImage = () => {
  setTimeout(() => {
    isLoad.value = true;
  }, 150);
};
</script>

<template>
  <figure class="flex justify-center items-center">
    <img
      v-show="isLoad"
      class="rounded-md w-44 h-44 md:w-80 md:h-80"
      :src="url"
      :alt="alt"
      @load="onLoadImage"
    />
    <CardLoader v-show="!isLoad" />
  </figure>
</template>
