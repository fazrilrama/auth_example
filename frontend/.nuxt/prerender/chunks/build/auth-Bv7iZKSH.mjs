import { _ as __nuxt_component_0 } from './nuxt-link-DejPlH3z.mjs';
import { resolveComponent, withCtx, createVNode, renderSlot, useSSRContext } from 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/ufo/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/h3/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unified/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/remark-parse/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/remark-rehype/index.js';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/defu/dist/defu.mjs';
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
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/hookable/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/klona/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unctx/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/pathe/dist/index.mjs';
import 'file:///Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  mounted() {
    (void 0).body.classList.add("authentication-bg");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BContainer = resolveComponent("BContainer");
  const _component_BRow = resolveComponent("BRow");
  const _component_BCol = resolveComponent("BCol");
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="account-pages my-5">`);
  _push(ssrRenderComponent(_component_BContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BRow, { class: "d-flex justify-content-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BCol, { cols: "12" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_nuxt_link, {
                      to: "/",
                      class: "mb-5 d-block auth-logo"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_nuxt_link, {
                        to: "/",
                        class: "mb-5 d-block auth-logo"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(_component_nuxt_link, {
                      to: "/",
                      class: "mb-5 d-block auth-logo"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          createVNode(_component_BRow, { class: "d-flex justify-content-center" }, {
            default: withCtx(() => [
              createVNode(_component_BCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_nuxt_link, {
                    to: "/",
                    class: "mb-5 d-block auth-logo"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { auth as default };
//# sourceMappingURL=auth-Bv7iZKSH.mjs.map
