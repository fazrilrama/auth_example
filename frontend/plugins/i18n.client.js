import { createI18n } from "vue-i18n";
import localeMessages from "~/app/modules/locales/index.js";
import nuxtStorage from "nuxt-storage";

const locale =
  (nuxtStorage &&
    nuxtStorage.sessionStorage &&
    nuxtStorage.sessionStorage.getData("locale")) ||
  "en";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: locale || "en",
  fallbackLocale: "en",
  messages: { ...localeMessages }
});
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n);
});
