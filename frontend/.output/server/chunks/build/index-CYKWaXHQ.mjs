import __nuxt_component_0 from './SiteHeader-BtGUFK1A.mjs';
import { resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';
import './v3-DqVe7xMq.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
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

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _imports_0 = publicAssetsURL("/images/coming-soon-img.png");
const _sfc_main$1 = {
  data() {
    return {
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      starttime: "Nov 5, 2020 15:37:25",
      endtime: "Dec 31, 2024 16:37:25"
    };
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    this.timerCount(this.start, this.end);
    this.interval = setInterval();
  },
  methods: {
    timerCount(start, end) {
      var now = (/* @__PURE__ */ new Date()).getTime();
      var distance = start - now;
      var passTime = end - now;
      if (distance < 0 && passTime < 0) {
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
      }
    },
    calcTime(dist) {
      this.days = Math.floor(dist / (1e3 * 60 * 60 * 24));
      this.hours = Math.floor(
        dist % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      );
      this.minutes = Math.floor(dist % (1e3 * 60 * 60) / (1e3 * 60));
      this.seconds = Math.floor(dist % (1e3 * 60) / 1e3);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BRow = resolveComponent("BRow");
  const _component_BCol = resolveComponent("BCol");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_BRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BCol, { lg: "12" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="text-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_BRow, { class: "justify-content-center mt-5" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_BCol, {
                      lg: "4",
                      sm: "5"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="maintenance-img"${_scopeId4}><img${ssrRenderAttr("src", _imports_0)} alt class="img-fluid mx-auto d-block"${_scopeId4}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "maintenance-img" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "",
                                class: "img-fluid mx-auto d-block"
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_BCol, {
                        lg: "4",
                        sm: "5"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "maintenance-img" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "img-fluid mx-auto d-block"
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
              _push3(`<h4 class="mt-5"${_scopeId2}>Let&#39;s get started with Minible</h4><p class="text-muted"${_scopeId2}> It will be as simple as Occidental in fact it will be Occidental. </p>`);
              _push3(ssrRenderComponent(_component_BRow, { class: "justify-content-center mt-5" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_BCol, { lg: "10" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div data-countdown="2020/12/31" class="counter-number"${_scopeId4}><div class="coming-box"${_scopeId4}>${ssrInterpolate($data.days)} <span${_scopeId4}>Days</span></div><div class="coming-box"${_scopeId4}>${ssrInterpolate($data.hours)} <span${_scopeId4}>Hours</span></div><div class="coming-box"${_scopeId4}>${ssrInterpolate($data.minutes)} <span${_scopeId4}>Minutes</span></div><div class="coming-box"${_scopeId4}>${ssrInterpolate($data.seconds)} <span${_scopeId4}>Seconds</span></div></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              "data-countdown": "2020/12/31",
                              class: "counter-number"
                            }, [
                              createVNode("div", { class: "coming-box" }, [
                                createTextVNode(toDisplayString($data.days) + " ", 1),
                                createVNode("span", null, "Days")
                              ]),
                              createVNode("div", { class: "coming-box" }, [
                                createTextVNode(toDisplayString($data.hours) + " ", 1),
                                createVNode("span", null, "Hours")
                              ]),
                              createVNode("div", { class: "coming-box" }, [
                                createTextVNode(toDisplayString($data.minutes) + " ", 1),
                                createVNode("span", null, "Minutes")
                              ]),
                              createVNode("div", { class: "coming-box" }, [
                                createTextVNode(toDisplayString($data.seconds) + " ", 1),
                                createVNode("span", null, "Seconds")
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_BCol, { lg: "10" }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            "data-countdown": "2020/12/31",
                            class: "counter-number"
                          }, [
                            createVNode("div", { class: "coming-box" }, [
                              createTextVNode(toDisplayString($data.days) + " ", 1),
                              createVNode("span", null, "Days")
                            ]),
                            createVNode("div", { class: "coming-box" }, [
                              createTextVNode(toDisplayString($data.hours) + " ", 1),
                              createVNode("span", null, "Hours")
                            ]),
                            createVNode("div", { class: "coming-box" }, [
                              createTextVNode(toDisplayString($data.minutes) + " ", 1),
                              createVNode("span", null, "Minutes")
                            ]),
                            createVNode("div", { class: "coming-box" }, [
                              createTextVNode(toDisplayString($data.seconds) + " ", 1),
                              createVNode("span", null, "Seconds")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_BRow, { class: "justify-content-center mt-5" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_BCol, { lg: "6" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="input-section pt-4"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_BRow, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_BCol, { class: "col" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="position-relative"${_scopeId6}><input type="email" class="form-control" placeholder="Enter email address..."${_scopeId6}></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "position-relative" }, [
                                          createVNode("input", {
                                            type: "email",
                                            class: "form-control",
                                            placeholder: "Enter email address..."
                                          })
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_BCol, { class: "col-auto" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_BButton, {
                                        variant: "primary",
                                        type: "submit",
                                        class: "w-md waves-effect waves-light"
                                      }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(` Subscribe `);
                                          } else {
                                            return [
                                              createTextVNode(" Subscribe ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_BButton, {
                                          variant: "primary",
                                          type: "submit",
                                          class: "w-md waves-effect waves-light"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Subscribe ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_BCol, { class: "col" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "position-relative" }, [
                                        createVNode("input", {
                                          type: "email",
                                          class: "form-control",
                                          placeholder: "Enter email address..."
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BCol, { class: "col-auto" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BButton, {
                                        variant: "primary",
                                        type: "submit",
                                        class: "w-md waves-effect waves-light"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Subscribe ")
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
                          }, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "input-section pt-4" }, [
                              createVNode(_component_BRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BCol, { class: "col" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "position-relative" }, [
                                        createVNode("input", {
                                          type: "email",
                                          class: "form-control",
                                          placeholder: "Enter email address..."
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BCol, { class: "col-auto" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BButton, {
                                        variant: "primary",
                                        type: "submit",
                                        class: "w-md waves-effect waves-light"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Subscribe ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
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
                      createVNode(_component_BCol, { lg: "6" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "input-section pt-4" }, [
                            createVNode(_component_BRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_BCol, { class: "col" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "position-relative" }, [
                                      createVNode("input", {
                                        type: "email",
                                        class: "form-control",
                                        placeholder: "Enter email address..."
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BCol, { class: "col-auto" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BButton, {
                                      variant: "primary",
                                      type: "submit",
                                      class: "w-md waves-effect waves-light"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Subscribe ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
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
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_BRow, { class: "justify-content-center mt-5" }, {
                    default: withCtx(() => [
                      createVNode(_component_BCol, {
                        lg: "4",
                        sm: "5"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "maintenance-img" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "",
                              class: "img-fluid mx-auto d-block"
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("h4", { class: "mt-5" }, "Let's get started with Minible"),
                  createVNode("p", { class: "text-muted" }, " It will be as simple as Occidental in fact it will be Occidental. "),
                  createVNode(_component_BRow, { class: "justify-content-center mt-5" }, {
                    default: withCtx(() => [
                      createVNode(_component_BCol, { lg: "10" }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            "data-countdown": "2020/12/31",
                            class: "counter-number"
                          }, [
                            createVNode("div", { class: "coming-box" }, [
                              createTextVNode(toDisplayString($data.days) + " ", 1),
                              createVNode("span", null, "Days")
                            ]),
                            createVNode("div", { class: "coming-box" }, [
                              createTextVNode(toDisplayString($data.hours) + " ", 1),
                              createVNode("span", null, "Hours")
                            ]),
                            createVNode("div", { class: "coming-box" }, [
                              createTextVNode(toDisplayString($data.minutes) + " ", 1),
                              createVNode("span", null, "Minutes")
                            ]),
                            createVNode("div", { class: "coming-box" }, [
                              createTextVNode(toDisplayString($data.seconds) + " ", 1),
                              createVNode("span", null, "Seconds")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BRow, { class: "justify-content-center mt-5" }, {
                    default: withCtx(() => [
                      createVNode(_component_BCol, { lg: "6" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "input-section pt-4" }, [
                            createVNode(_component_BRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_BCol, { class: "col" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "position-relative" }, [
                                      createVNode("input", {
                                        type: "email",
                                        class: "form-control",
                                        placeholder: "Enter email address..."
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BCol, { class: "col-auto" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BButton, {
                                      variant: "primary",
                                      type: "submit",
                                      class: "w-md waves-effect waves-light"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Subscribe ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
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
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BCol, { lg: "12" }, {
            default: withCtx(() => [
              createVNode("div", { class: "text-center" }, [
                createVNode(_component_BRow, { class: "justify-content-center mt-5" }, {
                  default: withCtx(() => [
                    createVNode(_component_BCol, {
                      lg: "4",
                      sm: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "maintenance-img" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "",
                            class: "img-fluid mx-auto d-block"
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("h4", { class: "mt-5" }, "Let's get started with Minible"),
                createVNode("p", { class: "text-muted" }, " It will be as simple as Occidental in fact it will be Occidental. "),
                createVNode(_component_BRow, { class: "justify-content-center mt-5" }, {
                  default: withCtx(() => [
                    createVNode(_component_BCol, { lg: "10" }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          "data-countdown": "2020/12/31",
                          class: "counter-number"
                        }, [
                          createVNode("div", { class: "coming-box" }, [
                            createTextVNode(toDisplayString($data.days) + " ", 1),
                            createVNode("span", null, "Days")
                          ]),
                          createVNode("div", { class: "coming-box" }, [
                            createTextVNode(toDisplayString($data.hours) + " ", 1),
                            createVNode("span", null, "Hours")
                          ]),
                          createVNode("div", { class: "coming-box" }, [
                            createTextVNode(toDisplayString($data.minutes) + " ", 1),
                            createVNode("span", null, "Minutes")
                          ]),
                          createVNode("div", { class: "coming-box" }, [
                            createTextVNode(toDisplayString($data.seconds) + " ", 1),
                            createVNode("span", null, "Seconds")
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_BRow, { class: "justify-content-center mt-5" }, {
                  default: withCtx(() => [
                    createVNode(_component_BCol, { lg: "6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "input-section pt-4" }, [
                          createVNode(_component_BRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_BCol, { class: "col" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "position-relative" }, [
                                    createVNode("input", {
                                      type: "email",
                                      class: "form-control",
                                      placeholder: "Enter email address..."
                                    })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BCol, { class: "col-auto" }, {
                                default: withCtx(() => [
                                  createVNode(_component_BButton, {
                                    variant: "primary",
                                    type: "submit",
                                    class: "w-md waves-effect waves-light"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Subscribe ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utility/comingSoon/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const UtilityComingSoonComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      title: "Coming-soon"
    };
  },
  components: {
    UtilityComingSoonComponent
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SiteHeader = __nuxt_component_0;
  const _component_UtilityComingSoonComponent = resolveComponent("UtilityComingSoonComponent");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SiteHeader, { title: $data.title }, null, _parent));
  _push(ssrRenderComponent(_component_UtilityComingSoonComponent, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/utility/comingsoon/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CYKWaXHQ.mjs.map
