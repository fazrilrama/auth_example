import { _ as _export_sfc, h as defineStore, a as __nuxt_component_0$1, n as navigateTo, b as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DejPlH3z.mjs';
import { resolveComponent, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import MetisMenu from 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/metismenujs/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/hookable/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unctx/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/h3/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/radix3/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/defu/dist/defu.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/ufo/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unified/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/remark-parse/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/remark-rehype/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/remark-gfm/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/rehype-external-links/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/rehype-raw/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/detab/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/scule/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/hast-util-to-string/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/github-slugger/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/destr/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/klona/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/pathe/dist/index.mjs';

const LAYOUT_TYPE = {
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal"
};
const LAYOUT_MODE = {
  LIGHT: "light",
  DARK: "dark"
};
const { VERTICAL: VERTICAL$1 } = LAYOUT_TYPE;
const { DARK: DARK$1, LIGHT: LIGHT$1 } = LAYOUT_MODE;
const useLayoutStore = defineStore({
  id: "layout-store",
  state: () => ({
    layoutType: VERTICAL$1,
    layoutWidth: "fluid",
    leftSidebarType: "light",
    topbar: "light",
    loader: false,
    mode: LIGHT$1
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
      return state.mode === DARK$1;
    },
    isLightMode(state) {
      return state.mode === LIGHT$1;
    }
  },
  get layoutType() {
    return this.state.layoutType || VERTICAL$1;
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
    return this.state.mode || LIGHT$1;
  }
});
const _imports_0$1 = publicAssetsURL("/images/logo-sm.png");
const _imports_1$1 = publicAssetsURL("/images/logo-dark.png");
const _imports_1 = publicAssetsURL("/images/logo-light.png");
const _sfc_main$b = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar-brand-box" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "logo logo-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="logo-sm"${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} alt="logo-sm" height="22"${_scopeId}></span><span class="logo-lg"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="logo-dark" height="20"${_scopeId}></span>`);
      } else {
        return [
          createVNode("span", { class: "logo-sm" }, [
            createVNode("img", {
              src: _imports_0$1,
              alt: "logo-sm",
              height: "22"
            })
          ]),
          createVNode("span", { class: "logo-lg" }, [
            createVNode("img", {
              src: _imports_1$1,
              alt: "logo-dark",
              height: "20"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "logo logo-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="logo-sm"${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} alt="logo-sm" height="22"${_scopeId}></span><span class="logo-lg"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="logo-light" height="20"${_scopeId}></span>`);
      } else {
        return [
          createVNode("span", { class: "logo-sm" }, [
            createVNode("img", {
              src: _imports_0$1,
              alt: "logo-sm",
              height: "22"
            })
          ]),
          createVNode("span", { class: "logo-lg" }, [
            createVNode("img", {
              src: _imports_1,
              alt: "logo-light",
              height: "20"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/common/HeaderLogo.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const HederLogo = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _imports_0 = publicAssetsURL("/images/users/avatar-4.jpg");
const _sfc_main$a = {
  data() {
    return {
      name: localStorage.getItem("name")
    };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BDropdown = resolveComponent("BDropdown");
  _push(ssrRenderComponent(_component_BDropdown, mergeProps({
    class: "d-inline-block",
    "toggle-class": "header-item",
    right: "",
    variant: "white",
    "menu-class": "dropdown-menu-end"
  }, _attrs), {
    "button-content": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="rounded-circle header-profile-user"${ssrRenderAttr("src", _imports_0)} alt="Header Avatar"${_scopeId}><span class="d-none d-xl-inline-block ms-1 fw-medium font-size-15"${_scopeId}>${ssrInterpolate($data.name)}</span><i class="uil-angle-down d-none d-xl-inline-block font-size-15"${_scopeId}></i>`);
      } else {
        return [
          createVNode("img", {
            class: "rounded-circle header-profile-user",
            src: _imports_0,
            alt: "Header Avatar"
          }),
          createVNode("span", { class: "d-none d-xl-inline-block ms-1 fw-medium font-size-15" }, toDisplayString($data.name), 1),
          createVNode("i", { class: "uil-angle-down d-none d-xl-inline-block font-size-15" })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a class="dropdown-item" href="javascript: void(0);"${_scopeId}><i class="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"${_scopeId}></i><span class="align-middle"${_scopeId}>${ssrInterpolate(_ctx.$t("navbar.dropdown.marcus.list.logout"))}</span></a>`);
      } else {
        return [
          createVNode("a", {
            class: "dropdown-item",
            onClick: ($event) => _ctx.$emit("logoutUser"),
            href: "javascript: void(0);"
          }, [
            createVNode("i", { class: "uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted" }),
            createVNode("span", { class: "align-middle" }, toDisplayString(_ctx.$t("navbar.dropdown.marcus.list.logout")), 1)
          ], 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/common/Profile.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {
  data() {
    return {
      current_language: this.$i18n.locale,
      text: null,
      flag: null,
      value: null,
      config: useRuntimeConfig(),
      name: localStorage.getItem("name")
    };
  },
  components: {
    HederLogo,
    Profile
  },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    initFullScreen() {
      (void 0).body.classList.toggle("fullscreen-enable");
      if (!(void 0).fullscreenElement && /* alternative standard method */
      !(void 0).mozFullScreenElement && !(void 0).webkitFullscreenElement) {
        if ((void 0).documentElement.requestFullscreen) {
          (void 0).documentElement.requestFullscreen();
        } else if ((void 0).documentElement.mozRequestFullScreen) {
          (void 0).documentElement.mozRequestFullScreen();
        } else if ((void 0).documentElement.webkitRequestFullscreen) {
          (void 0).documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if ((void 0).cancelFullScreen) {
          (void 0).cancelFullScreen();
        } else if ((void 0).mozCancelFullScreen) {
          (void 0).mozCancelFullScreen();
        } else if ((void 0).webkitCancelFullScreen) {
          (void 0).webkitCancelFullScreen();
        }
      }
    },
    logoutUser() {
      this.config.public.auth;
      localStorage.removeItem("name");
      navigateTo({ path: "/login" });
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/vertical/TopBar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const TopBar$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const menuItems = [
  {
    id: 1,
    label: "menuitems.menu.text",
    isTitle: true
  },
  {
    id: 2,
    label: "menuitems.dashboard.text",
    icon: "uil-home-alt",
    link: "/"
  }
];
const horizontalMenu = [
  {
    id: 1,
    label: "menuitems.dashboard.text",
    icon: "uil-home-alt",
    link: "/"
  }
];
const _sfc_main$8 = {
  data() {
    return {
      menuItems
    };
  },
  props: {
    type: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    }
  },
  watch: {
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              (void 0).body.setAttribute("data-sidebar", "dark");
              (void 0).body.removeAttribute("data-topbar");
              (void 0).body.removeAttribute("data-sidebar-size");
              break;
            case "light":
              (void 0).body.setAttribute("data-sidebar", "light");
              (void 0).body.removeAttribute("data-sidebar-size");
              (void 0).body.classList.remove("vertical-collpsed");
              break;
            case "compact":
              (void 0).body.setAttribute("data-sidebar-size", "small");
              (void 0).body.setAttribute("data-sidebar", "dark");
              (void 0).body.classList.remove("vertical-collpsed");
              (void 0).body.removeAttribute("data-topbar", "dark");
              break;
            case "icon":
              (void 0).body.setAttribute("data-keep-enlarged", "true");
              (void 0).body.classList.add("vertical-collpsed");
              (void 0).body.setAttribute("data-sidebar", "dark");
              (void 0).body.removeAttribute("data-topbar", "dark");
              break;
            case "colored":
              (void 0).body.setAttribute("data-sidebar", "colored");
              (void 0).body.removeAttribute("data-keep-enlarged");
              (void 0).body.classList.remove("vertical-collpsed");
              (void 0).body.removeAttribute("data-sidebar-size");
              break;
            default:
              (void 0).body.setAttribute("data-sidebar", "dark");
              break;
          }
        }
      }
    },
    width: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              (void 0).body.setAttribute("data-layout-size", "boxed");
              break;
            case "fluid":
              (void 0).body.setAttribute("data-layout-mode", "fluid");
              (void 0).body.removeAttribute("data-layout-size");
              break;
            default:
              (void 0).body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    }
  },
  mounted() {
    const element = (void 0).getElementById("side-menu");
    if (element) {
      new MetisMenu("#side-menu");
      this._activateMenuDropdown();
      this.$router.afterEach((routeTo, routeFrom) => {
        this._activateMenuDropdown();
      });
    }
  },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    hasItems(item) {
      return item.subItems !== void 0 ? item.subItems.length > 0 : false;
    },
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
      const els = (void 0).getElementsByClassName(className);
      while (els[0]) {
        els[0].classList.remove(className);
      }
    },
    _activateMenuDropdown() {
      this._removeAllClass("mm-active");
      this._removeAllClass("mm-show");
      var links = (void 0).getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      const paths = [];
      for (var i = 0; i < links.length; i++) {
        paths.push(links[i]["pathname"]);
      }
      var itemIndex = paths.indexOf((void 0).location.pathname);
      if (itemIndex === -1) {
        const strIndex = (void 0).location.pathname.lastIndexOf("/");
        const item = (void 0).location.pathname.substr(0, strIndex).toString();
        matchingMenuItem = links[paths.indexOf(item)];
      } else {
        matchingMenuItem = links[itemIndex];
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;
        if (parent) {
          parent.classList.add("mm-active");
          const parent2 = parent.parentElement.closest("ul");
          if (parent2 && parent2.id !== "side-menu") {
            parent2.classList.add("mm-show");
            const parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.add("mm-active");
              var childAnchor = parent3.querySelector(".has-arrow");
              var childDropdown = parent3.querySelector(".has-dropdown");
              if (childAnchor) childAnchor.classList.add("mm-active");
              if (childDropdown) childDropdown.classList.add("mm-active");
              const parent4 = parent3.parentElement;
              if (parent4 && parent4.id !== "side-menu") {
                parent4.classList.add("mm-show");
                const parent5 = parent4.parentElement;
                if (parent5 && parent5.id !== "side-menu") {
                  parent5.classList.add("mm-active");
                  const childanchor = parent5.querySelector(".is-parent");
                  if (childanchor && parent5.id !== "side-menu") {
                    childanchor.classList.add("mm-active");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "vertical-menu" }, _attrs))}><div class="navbar-brand-box">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "logo logo-dark"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="logo-sm"${_scopeId}> Project Auth </span><span class="logo-lg"${_scopeId}> Project Auth </span>`);
      } else {
        return [
          createVNode("span", { class: "logo-sm" }, " Project Auth "),
          createVNode("span", { class: "logo-lg" }, " Project Auth ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "logo logo-light"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="logo-sm"${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} alt height="22"${_scopeId}></span><span class="logo-lg"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt height="20"${_scopeId}></span>`);
      } else {
        return [
          createVNode("span", { class: "logo-sm" }, [
            createVNode("img", {
              src: _imports_0$1,
              alt: "",
              height: "22"
            })
          ]),
          createVNode("span", { class: "logo-lg" }, [
            createVNode("img", {
              src: _imports_1,
              alt: "",
              height: "20"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><button type="button" class="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn"><i class="fa fa-fw fa-bars"></i></button><div data-simplebar class="sidebar-menu-scroll"><div id="sidebar-menu"><ul class="metismenu list-unstyled" id="side-menu"><!--[-->`);
  ssrRenderList($data.menuItems, (item) => {
    _push(`<!--[-->`);
    if (item.isTitle) {
      _push(`<li class="menu-title">${ssrInterpolate(_ctx.$t(item.label))}</li>`);
    } else {
      _push(`<!---->`);
    }
    if (!item.isTitle && !item.isLayout) {
      _push(`<li>`);
      if ($options.hasItems(item)) {
        _push(`<a href="javascript:void(0);" class="${ssrRenderClass([{
          "has-arrow": !item.badge,
          "has-dropdown": item.badge
        }, "is-parent"])}">`);
        if (item.icon) {
          _push(`<i class="${ssrRenderClass(`${item.icon}`)}"></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${ssrInterpolate(_ctx.$t(item.label))}</span>`);
        if (item.badge) {
          _push(`<span class="${ssrRenderClass(`badge rounded-pill bg-${item.badge.variant} float-end`)}">${ssrInterpolate(_ctx.$t(item.badge.text))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (!$options.hasItems(item)) {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: item.link,
          class: "side-nav-link-ref"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (item.icon) {
                _push2(`<i class="${ssrRenderClass(`${item.icon}`)}"${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t(item.label))}</span>`);
              if (item.badge) {
                _push2(`<span class="${ssrRenderClass(`badge rounded-pill bg-${item.badge.variant} float-end`)}"${_scopeId}>${ssrInterpolate(_ctx.$t(item.badge.text))}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                item.icon ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: `${item.icon}`
                }, null, 2)) : createCommentVNode("", true),
                createVNode("span", null, toDisplayString(_ctx.$t(item.label)), 1),
                item.badge ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: `badge rounded-pill bg-${item.badge.variant} float-end`
                }, toDisplayString(_ctx.$t(item.badge.text)), 3)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if ($options.hasItems(item)) {
        _push(`<ul class="sub-menu" aria-expanded="false"><!--[-->`);
        ssrRenderList(item.subItems, (subitem, index) => {
          _push(`<li>`);
          if (!$options.hasItems(subitem)) {
            _push(ssrRenderComponent(_component_nuxt_link, {
              to: subitem.link,
              class: "side-nav-link-ref"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t(subitem.label))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t(subitem.label)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if ($options.hasItems(subitem)) {
            _push(`<a class="side-nav-link-a-ref has-arrow" href="javascript:void(0);">${ssrInterpolate(_ctx.$t(subitem.label))}</a>`);
          } else {
            _push(`<!---->`);
          }
          if ($options.hasItems(subitem)) {
            _push(`<ul class="sub-menu mm-collapse" aria-expanded="false"><!--[-->`);
            ssrRenderList(subitem.subItems, (subSubitem, index2) => {
              _push(`<li>`);
              _push(ssrRenderComponent(_component_nuxt_link, {
                to: subSubitem.link,
                class: "side-nav-link-ref"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(_ctx.$t(subSubitem.label))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t(subSubitem.label)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></ul></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/common/SideBar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SideBarComponent = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BContainer = resolveComponent("BContainer");
  const _component_BRow = resolveComponent("BRow");
  const _component_BCol = resolveComponent("BCol");
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BContainer, { fluid: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BRow, { class: "justify-content-between" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BCol, {
                sm: "6",
                class: "text-start"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString((/* @__PURE__ */ new Date()).getFullYear()), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_BCol, { sm: "6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text-sm-end d-none d-sm-block"${_scopeId3}> by `);
                    _push4(ssrRenderComponent(_component_nuxt_link, {
                      href: "https://themesbrand.com/",
                      target: "_blank",
                      class: "text-reset"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Fazril Ramadhan`);
                        } else {
                          return [
                            createTextVNode("Fazril Ramadhan")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-sm-end d-none d-sm-block" }, [
                        createTextVNode(" by "),
                        createVNode(_component_nuxt_link, {
                          href: "https://themesbrand.com/",
                          target: "_blank",
                          class: "text-reset"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Fazril Ramadhan")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BCol, {
                  sm: "6",
                  class: "text-start"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString((/* @__PURE__ */ new Date()).getFullYear()), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_BCol, { sm: "6" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-sm-end d-none d-sm-block" }, [
                      createTextVNode(" by "),
                      createVNode(_component_nuxt_link, {
                        href: "https://themesbrand.com/",
                        target: "_blank",
                        class: "text-reset"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Fazril Ramadhan")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BRow, { class: "justify-content-between" }, {
            default: withCtx(() => [
              createVNode(_component_BCol, {
                sm: "6",
                class: "text-start"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString((/* @__PURE__ */ new Date()).getFullYear()), 1)
                ]),
                _: 1
              }),
              createVNode(_component_BCol, { sm: "6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-sm-end d-none d-sm-block" }, [
                    createTextVNode(" by "),
                    createVNode(_component_nuxt_link, {
                      href: "https://themesbrand.com/",
                      target: "_blank",
                      class: "text-reset"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Fazril Ramadhan")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</footer>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/common/Footer.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  props: {
    title: {
      type: String,
      default: ""
    },
    key: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Boolean],
      default: ""
    },
    options: {
      type: Array,
      default: []
    }
  },
  computed: {
    modelValue: {
      get() {
        return this.$props.value;
      },
      set(newVal) {
        this.$emit("change", newVal);
      }
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BFormGroup = resolveComponent("BFormGroup");
  const _component_BFormRadioGroup = resolveComponent("BFormRadioGroup");
  _push(`<div${ssrRenderAttrs(_attrs)}><h6>${ssrInterpolate($props.title)}</h6>`);
  _push(ssrRenderComponent(_component_BFormGroup, { key: $props.key }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BFormRadioGroup, {
          modelValue: $options.modelValue,
          "onUpdate:modelValue": ($event) => $options.modelValue = $event,
          options: $props.options
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BFormRadioGroup, {
            modelValue: $options.modelValue,
            "onUpdate:modelValue": ($event) => $options.modelValue = $event,
            options: $props.options
          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/RadioGroup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const { LIGHT, DARK } = LAYOUT_MODE;
const { VERTICAL, HORIZONTAL } = LAYOUT_TYPE;
const layoutOptions = [
  { text: "Vertical", value: VERTICAL },
  { text: "Horizontal", value: HORIZONTAL }
];
const widthOptions = [
  { text: "Fluid", value: "fluid" },
  { text: "Boxed", value: "boxed" }
];
const sideBarTypeOptions = [
  { text: "Dark", value: "dark" },
  { text: "Light", value: "light" },
  { text: "Compact", value: "compact" },
  { text: "Icon", value: "icon" },
  { text: "Colored", value: "colored" }
];
const topBarOptions = [
  { text: "Dark", value: "dark" },
  { text: "Light", value: "light" },
  { text: "Colored", value: "colored" }
];
const layoutModeOptions = [
  { text: "Dark", value: DARK },
  { text: "Light", value: LIGHT }
];
publicAssetsURL("/images/layouts/layout-1.jpg");
publicAssetsURL("/images/layouts/layout-2.jpg");
publicAssetsURL("/images/layouts/layout-3.jpg");
const _sfc_main$5 = {
  data() {
    return {
      layoutOptions,
      widthOptions,
      sideBarTypeOptions,
      topBarOptions,
      layoutModeOptions
    };
  },
  components: {
    RadioGroup
  },
  computed: {
    layoutData() {
      return useLayoutStore() ? useLayoutStore() : {};
    },
    layout: {
      get() {
        return this.layoutData.layoutType;
      },
      set(newVal) {
        useLayoutStore().changeLayoutType(newVal);
      }
    },
    width: {
      get() {
        return this.layoutData.layoutWidth;
      },
      set(newVal) {
        useLayoutStore().changeLayoutWidth(newVal);
      }
    },
    topbar: {
      get() {
        return this.layoutData.topbar;
      },
      set(newVal) {
        useLayoutStore().changeTopBar(newVal);
      }
    },
    sidebarType: {
      get() {
        return this.layoutData.leftSidebarType;
      },
      set(newVal) {
        useLayoutStore().changeLeftSideBarType(newVal);
      }
    },
    mode: {
      get() {
        const mode = this.layoutData.mode;
        (void 0).body.setAttribute("data-bs-theme", mode);
        return this.layoutData.mode;
      },
      set(newVal) {
        useLayoutStore().changeLayoutMode(newVal);
        useLayoutStore().changeLeftSideBarType(newVal);
        useLayoutStore().changeTopBar(newVal);
        (void 0).body.setAttribute("data-bs-theme", newVal);
      }
    }
  },
  mounted() {
    this.addEventListener();
  },
  methods: {
    hide() {
      this.$parent.toggleRightSidebar();
    },
    addEventListener() {
      (void 0).body.addEventListener("click", this.hideRightBar);
    },
    hideRightBar(event) {
      const classes = event.target.classList;
      if (classes.contains("rightbar-overlay")) {
        this.$parent.hideRightSidebar();
      }
    }
  },
  beforeUnmount() {
    (void 0).body.removeEventListener("click", this.hideRightBar);
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`<div class="rightbar-overlay"></div><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/common/RightSideBar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const RightSideBar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "Vertical",
  created() {
    (void 0).body.removeAttribute("data-layout");
    (void 0).body.removeAttribute("data-topbar");
  },
  components: {
    TopBar: TopBar$1,
    SideBarComponent,
    Footer,
    RightSideBar
  },
  computed: {
    ...useLayoutStore(),
    layout() {
      return useLayoutStore() ? useLayoutStore() : {};
    }
  },
  methods: {
    toggleRightSidebar() {
      (void 0).body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      (void 0).body.classList.remove("right-bar-enabled");
    },
    toggleMenu() {
      (void 0).body.classList.toggle("sidebar-enable");
      if ((void 0).screen.width >= 992) {
        this.$router.afterEach((routeTo, routeFrom) => {
          (void 0).body.classList.remove("sidebar-enable");
          (void 0).body.classList.remove("vertical-collpsed");
        });
        (void 0).body.classList.toggle("vertical-collpsed");
      } else {
        this.$router.afterEach((routeTo, routeFrom) => {
          (void 0).body.classList.remove("sidebar-enable");
        });
        (void 0).body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TopBar = resolveComponent("TopBar");
  const _component_SideBarComponent = resolveComponent("SideBarComponent");
  const _component_BContainer = resolveComponent("BContainer");
  const _component_Footer = resolveComponent("Footer");
  const _component_RightSideBar = resolveComponent("RightSideBar");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "layout-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TopBar, null, null, _parent));
  _push(ssrRenderComponent(_component_SideBarComponent, {
    class: "side-br",
    type: $options.layout.leftSidebarType,
    width: $options.layout.layoutWidth
  }, null, _parent));
  _push(`<div class="main-content"><div class="page-content">`);
  _push(ssrRenderComponent(_component_BContainer, { fluid: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_RightSideBar, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/vertical/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Vertical = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  name: "MenuComponent",
  data() {
    return {
      horizontalMenu
    };
  },
  methods: {
    hasItems(item) {
      return item.subItems !== void 0 ? item.subItems.length > 0 : false;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BContainer = resolveComponent("BContainer");
  const _component_nuxt_link = __nuxt_component_0;
  const _component_BRow = resolveComponent("BRow");
  const _component_BCol = resolveComponent("BCol");
  _push(ssrRenderComponent(_component_BContainer, mergeProps({ fluid: "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="topnav"${_scopeId}><nav class="navbar navbar-light navbar-expand-lg topnav-menu"${_scopeId}><div class="collapse navbar-collapse" id="topnav-menu-content"${_scopeId}><ul class="navbar-nav"${_scopeId}><!--[-->`);
        ssrRenderList($data.horizontalMenu, (item, index) => {
          _push2(`<li class="nav-item dropdown"${_scopeId}>`);
          if (!item.subItems) {
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: item.link,
              class: "nav-link dropdown-toggle arrow-none side-nav-link-ref"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="${ssrRenderClass(`${item.icon} me-2`)}"${_scopeId2}></i> ${ssrInterpolate(_ctx.$t(item.label))}`);
                } else {
                  return [
                    createVNode("i", {
                      class: `${item.icon} me-2`
                    }, null, 2),
                    createTextVNode(" " + toDisplayString(_ctx.$t(item.label)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          if (item.subItems) {
            _push2(`<a class="nav-link dropdown-toggle arrow-none" href="javascript: void(0);" id="topnav-components" role="button"${_scopeId}><i class="${ssrRenderClass(`${item.icon} me-2`)}"${_scopeId}></i> ${ssrInterpolate(_ctx.$t(item.label))} <div class="arrow-down"${_scopeId}></div></a>`);
          } else {
            _push2(`<!---->`);
          }
          if ($options.hasItems(item)) {
            _push2(`<div aria-labelledby="topnav-dashboard" class="${ssrRenderClass([{
              "dropdown-mega-menu-xl px-2": item.subItems.length > 11
            }, "dropdown-menu"])}"${_scopeId}><!--[-->`);
            ssrRenderList(item.subItems, (subitem, index2) => {
              _push2(`<!--[-->`);
              if (item.subItems.length < 11 && !$options.hasItems(subitem)) {
                _push2(ssrRenderComponent(_component_nuxt_link, {
                  key: index2,
                  class: "col dropdown-item side-nav-link-ref",
                  to: subitem.link
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t(subitem.label))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t(subitem.label)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (item.subItems.length > 11) {
                _push2(`<div${_scopeId}>`);
                if (index2 % 3 == 0) {
                  _push2(ssrRenderComponent(_component_BRow, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_BCol, { lg: "4" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_nuxt_link, {
                                class: "dropdown-item side-nav-link-ref",
                                to: subitem.link
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(_ctx.$t(item.subItems[index2].label))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2].label)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_nuxt_link, {
                                  class: "dropdown-item side-nav-link-ref",
                                  to: subitem.link
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2].label)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        if (item.subItems[index2 + 1]) {
                          _push3(ssrRenderComponent(_component_BCol, { lg: "4" }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(ssrRenderComponent(_component_nuxt_link, {
                                  class: "dropdown-item side-nav-link-ref",
                                  to: item.subItems[index2 + 1].link
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`${ssrInterpolate(_ctx.$t(item.subItems[index2 + 1].label))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2 + 1].label)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                return [
                                  createVNode(_component_nuxt_link, {
                                    class: "dropdown-item side-nav-link-ref",
                                    to: item.subItems[index2 + 1].link
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2 + 1].label)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        if (item.subItems[index2 + 2]) {
                          _push3(ssrRenderComponent(_component_BCol, { lg: "4" }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(ssrRenderComponent(_component_nuxt_link, {
                                  class: "dropdown-item side-nav-link-ref",
                                  to: item.subItems[index2 + 2].link
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`${ssrInterpolate(_ctx.$t(item.subItems[index2 + 2].label))}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2 + 2].label)), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                return [
                                  createVNode(_component_nuxt_link, {
                                    class: "dropdown-item side-nav-link-ref",
                                    to: item.subItems[index2 + 2].link
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2 + 2].label)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_component_BCol, { lg: "4" }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                class: "dropdown-item side-nav-link-ref",
                                to: subitem.link
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2].label)), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1024),
                          item.subItems[index2 + 1] ? (openBlock(), createBlock(_component_BCol, {
                            key: 0,
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                class: "dropdown-item side-nav-link-ref",
                                to: item.subItems[index2 + 1].link
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2 + 1].label)), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          item.subItems[index2 + 2] ? (openBlock(), createBlock(_component_BCol, {
                            key: 1,
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                class: "dropdown-item side-nav-link-ref",
                                to: item.subItems[index2 + 2].link
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2 + 2].label)), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if ($options.hasItems(subitem)) {
                _push2(`<div class="dropdown"${_scopeId}><a class="dropdown-item" href="javascript: void(0);"${_scopeId}>${ssrInterpolate(_ctx.$t(subitem.label))} <div class="arrow-down"${_scopeId}></div></a><div class="dropdown-menu"${_scopeId}><!--[-->`);
                ssrRenderList(subitem.subItems, (subSubitem, index3) => {
                  _push2(ssrRenderComponent(_component_nuxt_link, {
                    key: index3,
                    to: subSubitem.link,
                    class: "dropdown-item side-nav-link-ref"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.$t(subSubitem.label))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t(subSubitem.label)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</li>`);
        });
        _push2(`<!--]--></ul></div></nav></div>`);
      } else {
        return [
          createVNode("div", { class: "topnav" }, [
            createVNode("nav", { class: "navbar navbar-light navbar-expand-lg topnav-menu" }, [
              createVNode("div", {
                class: "collapse navbar-collapse",
                id: "topnav-menu-content"
              }, [
                createVNode("ul", { class: "navbar-nav" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList($data.horizontalMenu, (item, index) => {
                    return openBlock(), createBlock("li", {
                      key: index,
                      class: "nav-item dropdown"
                    }, [
                      !item.subItems ? (openBlock(), createBlock(_component_nuxt_link, {
                        key: 0,
                        to: item.link,
                        class: "nav-link dropdown-toggle arrow-none side-nav-link-ref"
                      }, {
                        default: withCtx(() => [
                          createVNode("i", {
                            class: `${item.icon} me-2`
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(_ctx.$t(item.label)), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])) : createCommentVNode("", true),
                      item.subItems ? (openBlock(), createBlock("a", {
                        key: 1,
                        class: "nav-link dropdown-toggle arrow-none",
                        onClick: _ctx.onMenuClick,
                        href: "javascript: void(0);",
                        id: "topnav-components",
                        role: "button"
                      }, [
                        createVNode("i", {
                          class: `${item.icon} me-2`
                        }, null, 2),
                        createTextVNode(" " + toDisplayString(_ctx.$t(item.label)) + " ", 1),
                        createVNode("div", { class: "arrow-down" })
                      ], 8, ["onClick"])) : createCommentVNode("", true),
                      $options.hasItems(item) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: ["dropdown-menu", {
                          "dropdown-mega-menu-xl px-2": item.subItems.length > 11
                        }],
                        "aria-labelledby": "topnav-dashboard"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.subItems, (subitem, index2) => {
                          return openBlock(), createBlock(Fragment, null, [
                            item.subItems.length < 11 && !$options.hasItems(subitem) ? (openBlock(), createBlock(_component_nuxt_link, {
                              key: index2,
                              class: "col dropdown-item side-nav-link-ref",
                              to: subitem.link
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.$t(subitem.label)), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"])) : createCommentVNode("", true),
                            item.subItems.length > 11 ? (openBlock(), createBlock("div", { key: index2 }, [
                              index2 % 3 == 0 ? (openBlock(), createBlock(_component_BRow, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_BCol, { lg: "4" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_nuxt_link, {
                                        class: "dropdown-item side-nav-link-ref",
                                        to: subitem.link
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2].label)), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  item.subItems[index2 + 1] ? (openBlock(), createBlock(_component_BCol, {
                                    key: 0,
                                    lg: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_nuxt_link, {
                                        class: "dropdown-item side-nav-link-ref",
                                        to: item.subItems[index2 + 1].link
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2 + 1].label)), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true),
                                  item.subItems[index2 + 2] ? (openBlock(), createBlock(_component_BCol, {
                                    key: 1,
                                    lg: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_nuxt_link, {
                                        class: "dropdown-item side-nav-link-ref",
                                        to: item.subItems[index2 + 2].link
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.$t(item.subItems[index2 + 2].label)), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            $options.hasItems(subitem) ? (openBlock(), createBlock("div", {
                              class: "dropdown",
                              key: index2
                            }, [
                              createVNode("a", {
                                class: "dropdown-item",
                                href: "javascript: void(0);",
                                onClick: _ctx.onMenuClick
                              }, [
                                createTextVNode(toDisplayString(_ctx.$t(subitem.label)) + " ", 1),
                                createVNode("div", { class: "arrow-down" })
                              ], 8, ["onClick"]),
                              createVNode("div", { class: "dropdown-menu" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(subitem.subItems, (subSubitem, index3) => {
                                  return openBlock(), createBlock(_component_nuxt_link, {
                                    key: index3,
                                    to: subSubitem.link,
                                    class: "dropdown-item side-nav-link-ref"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(_ctx.$t(subSubitem.label)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true)
                          ], 64);
                        }), 256))
                      ], 2)) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/horizontal/MenuComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MenuComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  data() {
    return {
      current_language: this.$i18n.locale,
      text: null,
      flag: null,
      value: null
    };
  },
  components: {
    HederLogo,
    Profile,
    MenuComponent
  },
  props: {
    type: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    }
  },
  computed: {
    // ...layoutComputed
  },
  mounted() {
    this.activateParentDropdown();
    this.$router.afterEach((routeTo, routeFrom) => {
      this.activateParentDropdown();
    });
  },
  methods: {
    // ...authFackMethods,
    _removeAllClass(className) {
      const els = (void 0).getElementsByClassName(className);
      while (els[0]) {
        els[0].classList.remove(className);
      }
    },
    activateParentDropdown() {
      const resetParent = (el) => {
        const parent2 = el.parentElement;
        this._removeAllClass("mm-active");
        this._removeAllClass("mm-show");
        if (parent2) {
          parent2.classList.remove("active");
          const parent22 = parent2.parentElement;
          if (parent22) {
            parent22.classList.remove("active");
            const parent3 = parent22.parentElement;
            if (parent3) {
              parent3.classList.remove("active");
              const parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("active");
                const parent5 = parent4.parentElement;
                if (parent5) {
                  parent5.classList.remove("active");
                  const menuelement = (void 0).getElementById(
                    "topnav-menu-content"
                  );
                  if (menuelement !== null) {
                    if (menuelement.classList.contains("show"))
                      (void 0).getElementById("topnav-menu-content").classList.remove("show");
                  }
                }
              }
            }
          }
        }
      };
      var links = (void 0).getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      for (let i2 = 0; i2 < links.length; i2++) {
        resetParent(links[i2]);
      }
      for (var i = 0; i < links.length; i++) {
        if ((void 0).location.pathname === links[i].pathname) {
          matchingMenuItem = links[i];
          break;
        }
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");
        var parent = matchingMenuItem.parentElement;
        if (parent) {
          parent.classList.add("active");
          const parent2 = parent.parentElement;
          if (parent2) {
            parent2.classList.add("active");
          }
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            var childAnchor = parent3.querySelector(".has-dropdown");
            if (childAnchor) childAnchor.classList.add("active");
          }
          const parent4 = parent3.parentElement;
          if (parent4) parent4.classList.add("active");
          const parent5 = parent4.parentElement;
          if (parent5) parent5.classList.add("active");
        }
      }
    },
    /**
     * Full-screen
     */
    initFullScreen() {
      (void 0).body.classList.toggle("fullscreen-enable");
      if (!(void 0).fullscreenElement && /* alternative standard method */
      !(void 0).mozFullScreenElement && !(void 0).webkitFullscreenElement) {
        if ((void 0).documentElement.requestFullscreen) {
          (void 0).documentElement.requestFullscreen();
        } else if ((void 0).documentElement.mozRequestFullScreen) {
          (void 0).documentElement.mozRequestFullScreen();
        } else if ((void 0).documentElement.webkitRequestFullscreen) {
          (void 0).documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if ((void 0).cancelFullScreen) {
          (void 0).cancelFullScreen();
        } else if ((void 0).mozCancelFullScreen) {
          (void 0).mozCancelFullScreen();
        } else if ((void 0).webkitCancelFullScreen) {
          (void 0).webkitCancelFullScreen();
        }
      }
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextElementSibling;
      if (nextEl) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("show");
        }
        nextEl.classList.toggle("show");
      }
      return false;
    },
    /**
     * Language set
     */
    setLanguage(data) {
      const { language, country, flag } = data;
      this.$i18n.locale = language;
      this.current_language = language;
      this.text = country;
      this.flag = flag;
    },
    toggleMenu() {
      let element = (void 0).getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
    logoutUser() {
      this.$router.push({
        path: "/login"
      });
    }
  },
  watch: {
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              (void 0).body.setAttribute("data-topbar", "dark");
              break;
            case "light":
              (void 0).body.setAttribute("data-topbar", "light");
              (void 0).body.removeAttribute("data-layout-size", "boxed");
              break;
            case "colored":
              (void 0).body.setAttribute("data-topbar", "colored");
              (void 0).body.removeAttribute("data-layout-size", "boxed");
              break;
            default:
              (void 0).body.setAttribute("data-topbar", "dark");
              break;
          }
        }
      }
    },
    width: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              (void 0).body.setAttribute("data-layout-size", "boxed");
              break;
            case "fluid":
              (void 0).body.setAttribute("data-layout-mode", "fluid");
              (void 0).body.removeAttribute("data-layout-size");
              break;
            default:
              (void 0).body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HederLogo = resolveComponent("HederLogo");
  const _component_AppSearch = resolveComponent("AppSearch");
  const _component_MobileAppSearch = resolveComponent("MobileAppSearch");
  const _component_LanguageDropdown = resolveComponent("LanguageDropdown");
  const _component_AppList = resolveComponent("AppList");
  const _component_Notifications = resolveComponent("Notifications");
  const _component_Profile = resolveComponent("Profile");
  const _component_MenuComponent = resolveComponent("MenuComponent");
  _push(`<header${ssrRenderAttrs(mergeProps({ id: "page-topbar" }, _attrs))}><div class="navbar-header"><div class="d-flex">`);
  _push(ssrRenderComponent(_component_HederLogo, null, null, _parent));
  _push(`<button type="button" class="btn btn-sm px-3 font-size-16 d-lg-none header-item" data-toggle="collapse" data-target="#topnav-menu-content"><i class="fa fa-fw fa-bars"></i></button>`);
  _push(ssrRenderComponent(_component_AppSearch, null, null, _parent));
  _push(`</div><div class="d-flex">`);
  _push(ssrRenderComponent(_component_MobileAppSearch, null, null, _parent));
  _push(ssrRenderComponent(_component_LanguageDropdown, {
    flag: $data.flag,
    languages: _ctx.languages,
    current_language: $data.current_language,
    onOnChange: $options.setLanguage
  }, null, _parent));
  _push(ssrRenderComponent(_component_AppList, null, null, _parent));
  _push(`<div class="dropdown d-none d-lg-inline-block ms-1"><button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen"><i class="uil-minus-path"></i></button></div>`);
  _push(ssrRenderComponent(_component_Notifications, null, null, _parent));
  _push(ssrRenderComponent(_component_Profile, { onLogoutUser: $options.logoutUser }, null, _parent));
  _push(`<div class="dropdown d-inline-block"><button type="button" class="btn header-item noti-icon right-bar-toggle toggle-right"><i class="uil-cog toggle-right"></i></button></div></div></div>`);
  _push(ssrRenderComponent(_component_MenuComponent, null, null, _parent));
  _push(`</header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/horizontal/TopBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TopBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  created() {
    (void 0).body.setAttribute("data-layout", "horizontal");
    (void 0).body.setAttribute("data-topbar", "colored");
  },
  components: {
    TopBar,
    Footer,
    RightSideBar
  },
  methods: {
    toggleRightSidebar() {
      (void 0).body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      (void 0).body.classList.remove("right-bar-enabled");
    }
  },
  computed: {
    ...useLayoutStore(),
    layout() {
      return useLayoutStore() ? useLayoutStore() : {};
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TopBar = resolveComponent("TopBar");
  const _component_Footer = resolveComponent("Footer");
  const _component_RightSideBar = resolveComponent("RightSideBar");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "layout-wrapper" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TopBar, {
    type: $options.layout.topbar,
    width: $options.layout.layoutWidth
  }, null, _parent));
  _push(`<div class="main-content"><div class="page-content"><div class="container-fluid">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_RightSideBar, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/horizontal/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Horizontal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      LAYOUT_TYPE
    };
  },
  components: {
    Vertical,
    Horizontal
  },
  computed: {
    ...useLayoutStore(),
    layoutType() {
      return useLayoutStore() ? useLayoutStore().layoutType : {};
    },
    isVertical() {
      return this.layoutType === LAYOUT_TYPE.VERTICAL;
    },
    isHorizontal() {
      return this.layoutType === LAYOUT_TYPE.HORIZONTAL;
    }
  },
  mounted() {
    (void 0).body.classList.remove("authentication-bg");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-Ce1Uq123.mjs.map
