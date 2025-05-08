import __nuxt_component_0 from "./SiteHeader-BtGUFK1A.js";
import __nuxt_component_1 from "./PageHeader-CVAN-gj1.js";
import "simplebar";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./v3-DqVe7xMq.js";
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
const _sfc_main = {
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "Project Auth"
        },
        {
          text: "Dashboard",
          active: true
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SiteHeader = __nuxt_component_0;
  const _component_PageHeader = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SiteHeader, { title: $data.title }, null, _parent));
  _push(ssrRenderComponent(_component_PageHeader, {
    title: $data.title,
    items: $data.items
  }, null, _parent));
  _push(` Hello World <!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-NvHEAWRR.js.map
