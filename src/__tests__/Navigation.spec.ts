import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Navigation from "../components/Navigation/Navigation.vue";

describe("Navigation", () => {
  it("renders properly", () => {
    const wrapper = mount(Navigation);
    expect(wrapper.text()).toContain("Technical Test Azertium");
  });
});
