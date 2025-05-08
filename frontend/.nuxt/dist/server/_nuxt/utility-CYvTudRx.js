import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {
  mounted() {
    (void 0).body.classList.add("authentication-bg");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/utility.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const utility = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  utility as default
};
//# sourceMappingURL=utility-CYvTudRx.js.map
