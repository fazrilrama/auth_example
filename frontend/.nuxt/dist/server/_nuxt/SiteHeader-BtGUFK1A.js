import { defineComponent, inject, reactive, provide, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { u as useHead } from "./v3-DqVe7xMq.js";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/hookable/dist/index.mjs";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unctx/dist/index.mjs";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/radix3/dist/index.mjs";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/defu/dist/defu.mjs";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/ufo/dist/index.mjs";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/klona/dist/index.mjs";
const HeadComponentCtxSymbol = Symbol("head-component");
const TagPositionProps = {
  /**
   * @deprecated Use tagPosition
   */
  body: { type: Boolean, default: void 0 },
  tagPosition: { type: String }
};
const normalizeProps = (_props) => {
  const props = Object.fromEntries(
    Object.entries(_props).filter(([_, value]) => value !== void 0)
  );
  if (typeof props.body !== "undefined") {
    props.tagPosition = props.body ? "bodyClose" : "head";
  }
  if (typeof props.renderPriority !== "undefined") {
    props.tagPriority = props.renderPriority;
  }
  return props;
};
function useHeadComponentCtx() {
  return inject(HeadComponentCtxSymbol, createHeadComponentCtx, true);
}
function createHeadComponentCtx() {
  const prev = inject(HeadComponentCtxSymbol, null);
  if (prev) {
    return prev;
  }
  const input = reactive({});
  const entry = useHead(input);
  const ctx = { input, entry };
  provide(HeadComponentCtxSymbol, ctx);
  return ctx;
}
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: { type: [String, Object, Array], default: void 0 },
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: { type: [String, Object, Array], default: void 0 },
  tabindex: String,
  title: String,
  translate: String,
  /**
   * @deprecated Use tagPriority
   */
  renderPriority: [String, Number],
  /**
   * Unhead prop to modify the priority of the tag.
   */
  tagPriority: { type: [String, Number] }
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    title: String
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.noscript || (input.noscript = []);
    const idx = input.noscript.push({}) - 1;
    return () => {
      var _a;
      const noscript = normalizeProps(props);
      const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
      if (textContent) {
        noscript.innerHTML = textContent;
      }
      input.noscript[idx] = noscript;
      return null;
    };
  }
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.link || (input.link = []);
    const idx = input.link.push({}) - 1;
    return () => {
      input.link[idx] = normalizeProps(props);
      return null;
    };
  }
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    return () => {
      input.base = normalizeProps(props);
      return null;
    };
  }
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup(_, { slots }) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b, _c;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      input.title = ((_b = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _b.children) ? String((_c = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _c.children) : void 0;
      return null;
    };
  }
});
defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    property: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.meta || (input.meta = []);
    const idx = input.meta.push({}) - 1;
    return () => {
      const meta = { "http-equiv": props.httpEquiv, ...normalizeProps(props) };
      if ("httpEquiv" in meta) {
        delete meta.httpEquiv;
      }
      input.meta[idx] = meta;
      return null;
    };
  }
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.style || (input.style = []);
    const idx = input.style.push({}) - 1;
    return () => {
      var _a, _b, _c;
      const style = normalizeProps(props);
      const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
      if (textContent) {
        input.style[idx] = style;
        style.textContent = textContent;
      }
      return null;
    };
  }
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => {
    createHeadComponentCtx();
    return () => {
      var _a, _b;
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.htmlAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.bodyAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
const _sfc_main = {
  props: {
    title: {
      type: String,
      default: "Dashboard"
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = Head;
  const _component_Title = Title;
  _push(ssrRenderComponent(_component_Head, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($props.title)} | Project Auth `);
            } else {
              return [
                createTextVNode(toDisplayString($props.title) + " | Project Auth ", 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($props.title) + " | Project Auth ", 1)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/SiteHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=SiteHeader-BtGUFK1A.js.map
