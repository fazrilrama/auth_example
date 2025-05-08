import { LAYOUT_TYPE, LAYOUT_MODE } from "~/app/const.js";
const { LIGHT, DARK } = LAYOUT_MODE;
const { VERTICAL, HORIZONTAL } = LAYOUT_TYPE;

export const layoutOptions = [
  { text: "Vertical", value: VERTICAL },
  { text: "Horizontal", value: HORIZONTAL }
];

export const widthOptions = [
  { text: "Fluid", value: "fluid" },
  { text: "Boxed", value: "boxed" }
];

export const sideBarTypeOptions = [
  { text: "Dark", value: "dark" },
  { text: "Light", value: "light" },
  { text: "Compact", value: "compact" },
  { text: "Icon", value: "icon" },
  { text: "Colored", value: "colored" }
];

export const topBarOptions = [
  { text: "Dark", value: "dark" },
  { text: "Light", value: "light" },
  { text: "Colored", value: "colored" }
];

export const layoutModeOptions = [
  { text: "Dark", value: DARK },
  { text: "Light", value: LIGHT }
];
