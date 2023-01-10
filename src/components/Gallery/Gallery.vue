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

const deleteImage = (id) => {
  allImages.value = allImages.value.filter((image) => image?.id !== id);
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
      :url="url"
      :alt="alt"
      @click="deleteImage(id)"
    />
    <IntersectionObserver @on-collision="loadImages" />
  </div>
</template>

<style scoped></style>
