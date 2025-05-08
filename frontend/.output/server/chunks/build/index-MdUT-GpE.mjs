import __nuxt_component_0 from './SiteHeader-BtGUFK1A.mjs';
import __nuxt_component_1 from './PageHeader-CVAN-gj1.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './v3-DqVe7xMq.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      title: "Starter Page",
      items: [
        {
          text: "Utility",
          href: "/"
        },
        {
          text: "Starter Page",
          active: true
        }
      ]
    };
  },
  components: {}
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
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/utility/starter/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-MdUT-GpE.mjs.map
