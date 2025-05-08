import __nuxt_component_0$1 from "./SiteHeader-BtGUFK1A.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/hookable/dist/index.mjs";
import { _ as __nuxt_component_0 } from "./nuxt-link-DejPlH3z.js";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./v3-DqVe7xMq.js";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/unctx/dist/index.mjs";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/radix3/dist/index.mjs";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/defu/dist/defu.mjs";
import "/Users/fazrilramadhan/Documents/project/template-nuxt-dashboard/Starterkit/node_modules/klona/dist/index.mjs";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_BRow = resolveComponent("BRow");
  const _component_BCol = resolveComponent("BCol");
  const _component_BCard = resolveComponent("BCard");
  const _component_BCardBody = resolveComponent("BCardBody");
  const _component_BForm = resolveComponent("BForm");
  const _component_nuxt_link = __nuxt_component_0;
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_BRow, mergeProps({ class: "align-items-center justify-content-center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BCol, {
          md: "8",
          lg: "6",
          cols: "xl-5"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BCard, { "no-body": "" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_BCardBody, { class: "p-4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="text-center mt-2"${_scopeId4}><h5 class="text-primary"${_scopeId4}>Welcome</h5><p class="text-muted"${_scopeId4}>Sign in to continue to Project Auth.</p></div><div class="p-2 mt-4"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_BForm, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<div class="mb-3"${_scopeId5}><label for="username"${_scopeId5}>Email</label><input type="email" class="form-control" id="email" placeholder="Enter Email"${_scopeId5}></div><div class="mb-3"${_scopeId5}><div class="float-end"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_nuxt_link, {
                                  to: "/auth/recoverpwd",
                                  class: "text-muted"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Forgot password?`);
                                    } else {
                                      return [
                                        createTextVNode(" Forgot password?")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`</div><label for="userpassword"${_scopeId5}>Password</label><input type="password" class="form-control" id="userpassword" placeholder="Enter password"${_scopeId5}></div><div class="form-check"${_scopeId5}><input type="checkbox" class="form-check-input" id="auth-remember-check"${_scopeId5}><label class="form-check-label" for="auth-remember-check"${_scopeId5}>Remember me</label></div><div class="mt-3 text-end"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_BButton, {
                                  variant: "primary",
                                  class: "w-sm waves-effect waves-light",
                                  type: "submit"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Log In `);
                                    } else {
                                      return [
                                        createTextVNode(" Log In ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`</div><div class="mt-4 text-center"${_scopeId5}><p class="mb-0"${_scopeId5}> Don&#39;t have an account ? `);
                                _push6(ssrRenderComponent(_component_nuxt_link, {
                                  to: "/auth/register-1",
                                  class: "fw-medium text-primary"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Signup now`);
                                    } else {
                                      return [
                                        createTextVNode(" Signup now")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`</p></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "mb-3" }, [
                                    createVNode("label", { for: "username" }, "Email"),
                                    createVNode("input", {
                                      type: "email",
                                      class: "form-control",
                                      id: "email",
                                      placeholder: "Enter Email"
                                    })
                                  ]),
                                  createVNode("div", { class: "mb-3" }, [
                                    createVNode("div", { class: "float-end" }, [
                                      createVNode(_component_nuxt_link, {
                                        to: "/auth/recoverpwd",
                                        class: "text-muted"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Forgot password?")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("label", { for: "userpassword" }, "Password"),
                                    createVNode("input", {
                                      type: "password",
                                      class: "form-control",
                                      id: "userpassword",
                                      placeholder: "Enter password"
                                    })
                                  ]),
                                  createVNode("div", { class: "form-check" }, [
                                    createVNode("input", {
                                      type: "checkbox",
                                      class: "form-check-input",
                                      id: "auth-remember-check"
                                    }),
                                    createVNode("label", {
                                      class: "form-check-label",
                                      for: "auth-remember-check"
                                    }, "Remember me")
                                  ]),
                                  createVNode("div", { class: "mt-3 text-end" }, [
                                    createVNode(_component_BButton, {
                                      variant: "primary",
                                      class: "w-sm waves-effect waves-light",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Log In ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "mt-4 text-center" }, [
                                    createVNode("p", { class: "mb-0" }, [
                                      createTextVNode(" Don't have an account ? "),
                                      createVNode(_component_nuxt_link, {
                                        to: "/auth/register-1",
                                        class: "fw-medium text-primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Signup now")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-center mt-2" }, [
                              createVNode("h5", { class: "text-primary" }, "Welcome"),
                              createVNode("p", { class: "text-muted" }, "Sign in to continue to Project Auth.")
                            ]),
                            createVNode("div", { class: "p-2 mt-4" }, [
                              createVNode(_component_BForm, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-3" }, [
                                    createVNode("label", { for: "username" }, "Email"),
                                    createVNode("input", {
                                      type: "email",
                                      class: "form-control",
                                      id: "email",
                                      placeholder: "Enter Email"
                                    })
                                  ]),
                                  createVNode("div", { class: "mb-3" }, [
                                    createVNode("div", { class: "float-end" }, [
                                      createVNode(_component_nuxt_link, {
                                        to: "/auth/recoverpwd",
                                        class: "text-muted"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Forgot password?")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("label", { for: "userpassword" }, "Password"),
                                    createVNode("input", {
                                      type: "password",
                                      class: "form-control",
                                      id: "userpassword",
                                      placeholder: "Enter password"
                                    })
                                  ]),
                                  createVNode("div", { class: "form-check" }, [
                                    createVNode("input", {
                                      type: "checkbox",
                                      class: "form-check-input",
                                      id: "auth-remember-check"
                                    }),
                                    createVNode("label", {
                                      class: "form-check-label",
                                      for: "auth-remember-check"
                                    }, "Remember me")
                                  ]),
                                  createVNode("div", { class: "mt-3 text-end" }, [
                                    createVNode(_component_BButton, {
                                      variant: "primary",
                                      class: "w-sm waves-effect waves-light",
                                      type: "submit"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Log In ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "mt-4 text-center" }, [
                                    createVNode("p", { class: "mb-0" }, [
                                      createTextVNode(" Don't have an account ? "),
                                      createVNode(_component_nuxt_link, {
                                        to: "/auth/register-1",
                                        class: "fw-medium text-primary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Signup now")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_BCardBody, { class: "p-4" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-center mt-2" }, [
                            createVNode("h5", { class: "text-primary" }, "Welcome"),
                            createVNode("p", { class: "text-muted" }, "Sign in to continue to Project Auth.")
                          ]),
                          createVNode("div", { class: "p-2 mt-4" }, [
                            createVNode(_component_BForm, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mb-3" }, [
                                  createVNode("label", { for: "username" }, "Email"),
                                  createVNode("input", {
                                    type: "email",
                                    class: "form-control",
                                    id: "email",
                                    placeholder: "Enter Email"
                                  })
                                ]),
                                createVNode("div", { class: "mb-3" }, [
                                  createVNode("div", { class: "float-end" }, [
                                    createVNode(_component_nuxt_link, {
                                      to: "/auth/recoverpwd",
                                      class: "text-muted"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Forgot password?")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("label", { for: "userpassword" }, "Password"),
                                  createVNode("input", {
                                    type: "password",
                                    class: "form-control",
                                    id: "userpassword",
                                    placeholder: "Enter password"
                                  })
                                ]),
                                createVNode("div", { class: "form-check" }, [
                                  createVNode("input", {
                                    type: "checkbox",
                                    class: "form-check-input",
                                    id: "auth-remember-check"
                                  }),
                                  createVNode("label", {
                                    class: "form-check-label",
                                    for: "auth-remember-check"
                                  }, "Remember me")
                                ]),
                                createVNode("div", { class: "mt-3 text-end" }, [
                                  createVNode(_component_BButton, {
                                    variant: "primary",
                                    class: "w-sm waves-effect waves-light",
                                    type: "submit"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Log In ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "mt-4 text-center" }, [
                                  createVNode("p", { class: "mb-0" }, [
                                    createTextVNode(" Don't have an account ? "),
                                    createVNode(_component_nuxt_link, {
                                      to: "/auth/register-1",
                                      class: "fw-medium text-primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Signup now")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
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
              }, _parent3, _scopeId2));
              _push3(`<div class="mt-5 text-center"${_scopeId2}><p${_scopeId2}> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} by Fazril Ramadhan </p></div>`);
            } else {
              return [
                createVNode(_component_BCard, { "no-body": "" }, {
                  default: withCtx(() => [
                    createVNode(_component_BCardBody, { class: "p-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center mt-2" }, [
                          createVNode("h5", { class: "text-primary" }, "Welcome"),
                          createVNode("p", { class: "text-muted" }, "Sign in to continue to Project Auth.")
                        ]),
                        createVNode("div", { class: "p-2 mt-4" }, [
                          createVNode(_component_BForm, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-3" }, [
                                createVNode("label", { for: "username" }, "Email"),
                                createVNode("input", {
                                  type: "email",
                                  class: "form-control",
                                  id: "email",
                                  placeholder: "Enter Email"
                                })
                              ]),
                              createVNode("div", { class: "mb-3" }, [
                                createVNode("div", { class: "float-end" }, [
                                  createVNode(_component_nuxt_link, {
                                    to: "/auth/recoverpwd",
                                    class: "text-muted"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Forgot password?")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("label", { for: "userpassword" }, "Password"),
                                createVNode("input", {
                                  type: "password",
                                  class: "form-control",
                                  id: "userpassword",
                                  placeholder: "Enter password"
                                })
                              ]),
                              createVNode("div", { class: "form-check" }, [
                                createVNode("input", {
                                  type: "checkbox",
                                  class: "form-check-input",
                                  id: "auth-remember-check"
                                }),
                                createVNode("label", {
                                  class: "form-check-label",
                                  for: "auth-remember-check"
                                }, "Remember me")
                              ]),
                              createVNode("div", { class: "mt-3 text-end" }, [
                                createVNode(_component_BButton, {
                                  variant: "primary",
                                  class: "w-sm waves-effect waves-light",
                                  type: "submit"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Log In ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "mt-4 text-center" }, [
                                createVNode("p", { class: "mb-0" }, [
                                  createTextVNode(" Don't have an account ? "),
                                  createVNode(_component_nuxt_link, {
                                    to: "/auth/register-1",
                                    class: "fw-medium text-primary"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Signup now")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mt-5 text-center" }, [
                  createVNode("p", null, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " by Fazril Ramadhan ", 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BCol, {
            md: "8",
            lg: "6",
            cols: "xl-5"
          }, {
            default: withCtx(() => [
              createVNode(_component_BCard, { "no-body": "" }, {
                default: withCtx(() => [
                  createVNode(_component_BCardBody, { class: "p-4" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center mt-2" }, [
                        createVNode("h5", { class: "text-primary" }, "Welcome"),
                        createVNode("p", { class: "text-muted" }, "Sign in to continue to Project Auth.")
                      ]),
                      createVNode("div", { class: "p-2 mt-4" }, [
                        createVNode(_component_BForm, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-3" }, [
                              createVNode("label", { for: "username" }, "Email"),
                              createVNode("input", {
                                type: "email",
                                class: "form-control",
                                id: "email",
                                placeholder: "Enter Email"
                              })
                            ]),
                            createVNode("div", { class: "mb-3" }, [
                              createVNode("div", { class: "float-end" }, [
                                createVNode(_component_nuxt_link, {
                                  to: "/auth/recoverpwd",
                                  class: "text-muted"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Forgot password?")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("label", { for: "userpassword" }, "Password"),
                              createVNode("input", {
                                type: "password",
                                class: "form-control",
                                id: "userpassword",
                                placeholder: "Enter password"
                              })
                            ]),
                            createVNode("div", { class: "form-check" }, [
                              createVNode("input", {
                                type: "checkbox",
                                class: "form-check-input",
                                id: "auth-remember-check"
                              }),
                              createVNode("label", {
                                class: "form-check-label",
                                for: "auth-remember-check"
                              }, "Remember me")
                            ]),
                            createVNode("div", { class: "mt-3 text-end" }, [
                              createVNode(_component_BButton, {
                                variant: "primary",
                                class: "w-sm waves-effect waves-light",
                                type: "submit"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Log In ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "mt-4 text-center" }, [
                              createVNode("p", { class: "mb-0" }, [
                                createTextVNode(" Don't have an account ? "),
                                createVNode(_component_nuxt_link, {
                                  to: "/auth/register-1",
                                  class: "fw-medium text-primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Signup now")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "mt-5 text-center" }, [
                createVNode("p", null, " © " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " by Fazril Ramadhan ", 1)
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/login/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AuthLoginComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      title: "Log in"
    };
  },
  components: {
    AuthLoginComponent
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SiteHeader = __nuxt_component_0$1;
  const _component_AuthLoginComponent = resolveComponent("AuthLoginComponent");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SiteHeader, { title: $data.title }, null, _parent));
  _push(ssrRenderComponent(_component_AuthLoginComponent, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login-1/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-UK7UPkuS.js.map
