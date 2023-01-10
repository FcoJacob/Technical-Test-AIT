import { ref } from "vue";

export const darkMode = ref(false);
export const isMobile = ref(window.innerWidth < 968);

window.addEventListener("resize", () => {
  isMobile.value = window.innerWidth < 968;
});

export default { darkMode, isMobile };
