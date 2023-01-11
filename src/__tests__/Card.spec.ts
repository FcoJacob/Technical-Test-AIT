import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "../components/Gallery/Card.vue";
import CardLoaderVue from "@/components/Gallery/CardLoader.vue";

describe("Card", () => {
  it("renders properly", () => {
    const wrapper = mount(Card, {
      props: {
        url: "https://via.placeholder.com/600/771796",
        alt: "prueba",
      },
    });

    expect(wrapper.find("img").isVisible()).toBe(false);
  });

  it("should display a box while loading the image", async () => {
    const wrapper = mount(Card, {
      props: {
        url: "",
        alt: "",
      },
    });

    expect(wrapper.findComponent(CardLoaderVue).isVisible());
    expect(wrapper.find("img").isVisible()).toBe(false);

    await wrapper.setProps({
      url: "https://via.placeholder.com/600/771796",
      alt: "prueba",
    });

    await wrapper.get("img").trigger("load", () => {
      expect(wrapper.findComponent(CardLoaderVue).isVisible()).toBe(false);
      expect(wrapper.find("img").isVisible());
    });
  });
});
