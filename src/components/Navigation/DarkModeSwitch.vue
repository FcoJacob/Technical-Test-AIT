<template>
  <div class="flex justify-center items-center mr-4">
    <label for="checkbox" class="cursor-pointer mx-1">
      <input
        id="checkbox"
        type="checkbox"
        class="hidden"
        @click.prevent="toggleDarkMode"
      />
      <span
        class="box-checkbox"
        :class="{
          'justify-start': !darkMode,
          'justify-end': darkMode,
        }"
      >
        <img
          :src="mode"
          alt="Imagen de noche"
          class="w-4 h-4 absolute left-1"
        />
        <span
          class="w-5 h-5 bg-black dark:bg-gray-200 rounded-full relative z-10 m-0.5"
        />
        <img :src="mode" alt="Imagen de día" class="w-4 h-4 absolute right-1" />
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, computed } from "vue";
import { darkMode } from "../../utils";
import day from "@/assets/img/SVG/day.svg";
import night from "@/assets/img/SVG/night.svg";

defineComponent({
  name: "DarkModeSwitch",
});

const mode = computed(() => (darkMode.value ? day : night));

function toggleDarkMode() {
  const html = document.querySelector("html");

  if (!darkMode.value) {
    html?.classList.add("dark");
  } else {
    html?.classList.remove("dark");
  }

  darkMode.value = !darkMode.value;
}
</script>

<style scoped></style>
