import { ref } from "vue";
import type Image from "../Models/Image";

export const darkMode = ref(false);

export const useFetch = (url, config = {}) => {
  const data = ref<Image[]>([]);
  const loading = ref(false);
  const error = ref("");

  (async () => {
    try {
      loading.value = true;
      data.value = await fetch(url, config).then((res) => res.json());
    } catch (err: any) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  })();

  return { data, loading, error };
};

export default { darkMode, useFetch };
