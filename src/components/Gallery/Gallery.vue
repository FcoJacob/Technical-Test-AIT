<script setup lang="ts">
import type Image from "@/Models/Image";
import { ref, watch } from "vue";
import { useFetch } from "@/utils";
import Card from "./Card.vue";
import IntersectionObserver from "../IntersetionObserver/IntersectionObserver.vue";

const startImage = ref(0);
const limit = ref(20);

const { data: images, loading } = useFetch(
  `https://jsonplaceholder.typicode.com/photos?_start=${startImage.value}&_limit=${limit.value}`
);
const allImages = ref<Image[]>([]);

watch(images, (newValue) => {
  allImages.value = [...newValue];
});

const targetDeletedCardId = ref<number | null>(null);

const deleteImage = (id) => {
  if (targetDeletedCardId.value === null) {
    targetDeletedCardId.value = id;
    setTimeout(() => {
      allImages.value = allImages.value.filter((image) => image?.id !== id);
      targetDeletedCardId.value = null;
    }, 600);
  }
};

const loadImages = () => {
  startImage.value += 20;
  fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=${startImage.value}&_limit=${limit.value}`
  )
    .then((res) => res.json())
    .then((newImages) => {
      allImages.value = [...allImages.value, ...newImages];
    });
};
</script>

<template>
  <div
    class="grid grid-cols-2 gap-2 px-2 md:grid-cols-auto-fit place-content-center"
  >
    <Card
      v-for="{ id, url, title: alt } in allImages"
      :key="id"
      class="cursor-pointer"
      :class="{
        'animation-zoomOut': id === targetDeletedCardId,
        'blocked-card cursor-not-allowed': targetDeletedCardId !== null,
      }"
      :url="url"
      :alt="alt"
      @click="deleteImage(id)"
    />
    <IntersectionObserver @on-collision="loadImages" />
  </div>
</template>

<style scoped>
.blocked {
  pointer-events: none;
}
.animation-zoomOut {
  animation: zoomOut 0.5s linear;
}

@keyframes zoomOut {
  0% {
    scale: 0.85;
    opacity: 1;
  }
  25% {
    scale: 1;
  }
  50% {
    scale: 1.1;
  }
  100% {
    scale: 0;
    opacity: 0;
  }
}
</style>
