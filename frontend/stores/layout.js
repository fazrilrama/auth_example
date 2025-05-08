import { defineStore } from "pinia";
import { LAYOUT_TYPE, LAYOUT_MODE } from "~/app/const";
const { VERTICAL } = LAYOUT_TYPE;
const { DARK, LIGHT } = LAYOUT_MODE;

export const useLayoutStore = defineStore({
  id: "layout-store",
  state: () => ({
    layoutType: VERTICAL,
    layoutWidth: "fluid",
    leftSidebarType: "light",
    topbar: "light",
    loader: false,
    mode: LIGHT
  }),
  actions: {
    changeLayoutType(layoutType) {
      this.layoutType = layoutType;
    },
    changeLayoutWidth(layoutWidth) {
      this.layoutWidth = layoutWidth;
    },
    changeLeftSideBarType(leftSidebarType) {
      this.leftSidebarType = leftSidebarType;
    },
    changeTopBar(topbar) {
      this.topbar = topbar;
    },
    changeLoader(loader) {
      this.loader = loader;
    },
    changeLayoutMode(mode) {
      this.mode = mode;
    }
  },
  getters: {
    isDarkMode(state) {
      return state.mode === DARK;
    },
    isLightMode(state) {
      return state.mode === LIGHT;
    }
  },
  get layoutType() {
    return this.state.layoutType || VERTICAL;
  },
  get layoutWidth() {
    return this.state.layoutWidth || "fluid";
  },
  get leftSidebarType() {
    return this.state.leftSidebarType || "light";
  },
  get topbar() {
    return this.state.topbar || "colored";
  },
  get loader() {
    return this.state.loader || false;
  },
  get mode() {
    return this.state.mode || LIGHT;
  }
});
