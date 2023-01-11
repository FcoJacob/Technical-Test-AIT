import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import IntersectionObserver from "../components/IntersetionObserver/IntersectionObserver.vue";

describe("IntersectionObserver", () => {
  const mockIntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  beforeEach(() => {
    (<any>window).IntersectionObserver = mockIntersectionObserver;
  });

  it("renders properly", () => {
    const wrapper = mount(IntersectionObserver);

    expect(wrapper.find({ ref: "intersection" }));
    expect(wrapper.html()).toBe("<div></div>");
    expect(wrapper.html({ raw: true })).toBe("<div></div>");
  });
});
