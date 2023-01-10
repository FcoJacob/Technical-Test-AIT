<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from "vue";

const emit = defineEmits(["onCollision"]);

const observer = ref<IntersectionObserver | null>(null);
const intersection = ref<HTMLElement | null>(null);

onMounted(() => {
  observer.value = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      emit("onCollision");
    }
  }, {});
  observer.value.observe(intersection.value!);
});

onUnmounted(() => {
  observer.value!.disconnect();
});
</script>

<template>
  <div ref="intersection" />
</template>
