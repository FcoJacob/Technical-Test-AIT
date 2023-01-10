<script setup lang="ts">
import Navigation from "./components/Navigation/Navigation.vue";
import Gallery from "./components/Gallery/Gallery.vue";
</script>

<template>
  <header class="dark:bg-slate-900 dark:text-gray-200">
    <Navigation />
  </header>
  <main class="dark:bg-slate-900 dark:text-gray-200">
    <Gallery />
  </main>
</template>

<style scoped></style>
