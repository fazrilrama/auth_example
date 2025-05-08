import { _ as __nuxt_component_0 } from './nuxt-link-DejPlH3z.mjs';
import { resolveComponent, withCtx, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-router';

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
