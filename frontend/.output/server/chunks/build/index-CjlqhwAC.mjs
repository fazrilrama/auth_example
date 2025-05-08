import __nuxt_component_0 from './SiteHeader-BtGUFK1A.mjs';
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/images/maintenance.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BRow = resolveComponent("BRow");
  const _component_BCol = resolveComponent("BCol");
  const _component_BCard = resolveComponent("BCard");
  const _component_BCardBody = resolveComponent("BCardBody");
  _push(ssrRenderComponent(_component_BRow, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BCol, {
          cols: "12",
          class: "text-center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="home-wrapper"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_BRow, { class: "justify-content-center" }, {
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
              _push3(`<h3 class="mt-5"${_scopeId2}>Site is Under Maintenance</h3><p${_scopeId2}>Please check back in sometime.</p>`);
              _push3(ssrRenderComponent(_component_BRow, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_BCol, { md: "4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BCard, {
                            "no-body": "",
                            class: "mt-4 maintenance-box"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_BCardBody, { class: "p-4" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="avatar-sm mx-auto mb-4"${_scopeId6}><div class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-20"${_scopeId6}><i class="uil uil-cloud-wifi"${_scopeId6}></i></div></div><h5 class="font-size-15 text-uppercase"${_scopeId6}> Why is the Site Down? </h5><p class="text-muted mb-0"${_scopeId6}> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. </p>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                          createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                            createVNode("i", { class: "uil uil-cloud-wifi" })
                                          ])
                                        ]),
                                        createVNode("h5", { class: "font-size-15 text-uppercase" }, " Why is the Site Down? "),
                                        createVNode("p", { class: "text-muted mb-0" }, " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_BCardBody, { class: "p-4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                        createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                          createVNode("i", { class: "uil uil-cloud-wifi" })
                                        ])
                                      ]),
                                      createVNode("h5", { class: "font-size-15 text-uppercase" }, " Why is the Site Down? "),
                                      createVNode("p", { class: "text-muted mb-0" }, " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BCard, {
                              "no-body": "",
                              class: "mt-4 maintenance-box"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BCardBody, { class: "p-4" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                      createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                        createVNode("i", { class: "uil uil-cloud-wifi" })
                                      ])
                                    ]),
                                    createVNode("h5", { class: "font-size-15 text-uppercase" }, " Why is the Site Down? "),
                                    createVNode("p", { class: "text-muted mb-0" }, " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. ")
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
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BCol, { md: "4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BCard, {
                            "no-body": "",
                            class: "mt-4 maintenance-box"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_BCardBody, { class: "p-4" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="avatar-sm mx-auto mb-4"${_scopeId6}><div class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-20"${_scopeId6}><i class="uil uil-clock"${_scopeId6}></i></div></div><h5 class="font-size-15 text-uppercase"${_scopeId6}> What is the Downtime? </h5><p class="text-muted mb-0"${_scopeId6}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical. </p>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                          createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                            createVNode("i", { class: "uil uil-clock" })
                                          ])
                                        ]),
                                        createVNode("h5", { class: "font-size-15 text-uppercase" }, " What is the Downtime? "),
                                        createVNode("p", { class: "text-muted mb-0" }, " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_BCardBody, { class: "p-4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                        createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                          createVNode("i", { class: "uil uil-clock" })
                                        ])
                                      ]),
                                      createVNode("h5", { class: "font-size-15 text-uppercase" }, " What is the Downtime? "),
                                      createVNode("p", { class: "text-muted mb-0" }, " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical. ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BCard, {
                              "no-body": "",
                              class: "mt-4 maintenance-box"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BCardBody, { class: "p-4" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                      createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                        createVNode("i", { class: "uil uil-clock" })
                                      ])
                                    ]),
                                    createVNode("h5", { class: "font-size-15 text-uppercase" }, " What is the Downtime? "),
                                    createVNode("p", { class: "text-muted mb-0" }, " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical. ")
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
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_BCol, { md: "4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_BCard, {
                            "no-body": "",
                            class: "mt-4 maintenance-box"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_BCardBody, { class: "p-4" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<div class="avatar-sm mx-auto mb-4"${_scopeId6}><div class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-20"${_scopeId6}><i class="uil uil-envelope-alt"${_scopeId6}></i></div></div><h5 class="font-size-15 text-uppercase"${_scopeId6}> Do you need Support? </h5><p class="text-muted mb-0"${_scopeId6}> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#39;t anything embar.. <a href="mailto:no-reply@domain.com" class="text-decoration-underline"${_scopeId6}>no-reply@domain.com</a></p>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                          createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                            createVNode("i", { class: "uil uil-envelope-alt" })
                                          ])
                                        ]),
                                        createVNode("h5", { class: "font-size-15 text-uppercase" }, " Do you need Support? "),
                                        createVNode("p", { class: "text-muted mb-0" }, [
                                          createTextVNode(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. "),
                                          createVNode("a", {
                                            href: "mailto:no-reply@domain.com",
                                            class: "text-decoration-underline"
                                          }, "no-reply@domain.com")
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_BCardBody, { class: "p-4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                        createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                          createVNode("i", { class: "uil uil-envelope-alt" })
                                        ])
                                      ]),
                                      createVNode("h5", { class: "font-size-15 text-uppercase" }, " Do you need Support? "),
                                      createVNode("p", { class: "text-muted mb-0" }, [
                                        createTextVNode(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. "),
                                        createVNode("a", {
                                          href: "mailto:no-reply@domain.com",
                                          class: "text-decoration-underline"
                                        }, "no-reply@domain.com")
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_BCard, {
                              "no-body": "",
                              class: "mt-4 maintenance-box"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BCardBody, { class: "p-4" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                      createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                        createVNode("i", { class: "uil uil-envelope-alt" })
                                      ])
                                    ]),
                                    createVNode("h5", { class: "font-size-15 text-uppercase" }, " Do you need Support? "),
                                    createVNode("p", { class: "text-muted mb-0" }, [
                                      createTextVNode(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. "),
                                      createVNode("a", {
                                        href: "mailto:no-reply@domain.com",
                                        class: "text-decoration-underline"
                                      }, "no-reply@domain.com")
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_BCol, { md: "4" }, {
                        default: withCtx(() => [
                          createVNode(_component_BCard, {
                            "no-body": "",
                            class: "mt-4 maintenance-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BCardBody, { class: "p-4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                    createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                      createVNode("i", { class: "uil uil-cloud-wifi" })
                                    ])
                                  ]),
                                  createVNode("h5", { class: "font-size-15 text-uppercase" }, " Why is the Site Down? "),
                                  createVNode("p", { class: "text-muted mb-0" }, " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BCol, { md: "4" }, {
                        default: withCtx(() => [
                          createVNode(_component_BCard, {
                            "no-body": "",
                            class: "mt-4 maintenance-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BCardBody, { class: "p-4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                    createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                      createVNode("i", { class: "uil uil-clock" })
                                    ])
                                  ]),
                                  createVNode("h5", { class: "font-size-15 text-uppercase" }, " What is the Downtime? "),
                                  createVNode("p", { class: "text-muted mb-0" }, " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BCol, { md: "4" }, {
                        default: withCtx(() => [
                          createVNode(_component_BCard, {
                            "no-body": "",
                            class: "mt-4 maintenance-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BCardBody, { class: "p-4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                    createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                      createVNode("i", { class: "uil uil-envelope-alt" })
                                    ])
                                  ]),
                                  createVNode("h5", { class: "font-size-15 text-uppercase" }, " Do you need Support? "),
                                  createVNode("p", { class: "text-muted mb-0" }, [
                                    createTextVNode(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. "),
                                    createVNode("a", {
                                      href: "mailto:no-reply@domain.com",
                                      class: "text-decoration-underline"
                                    }, "no-reply@domain.com")
                                  ])
                                ]),
                                _: 1
                              })
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
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "home-wrapper" }, [
                  createVNode(_component_BRow, { class: "justify-content-center" }, {
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
                  createVNode("h3", { class: "mt-5" }, "Site is Under Maintenance"),
                  createVNode("p", null, "Please check back in sometime."),
                  createVNode(_component_BRow, null, {
                    default: withCtx(() => [
                      createVNode(_component_BCol, { md: "4" }, {
                        default: withCtx(() => [
                          createVNode(_component_BCard, {
                            "no-body": "",
                            class: "mt-4 maintenance-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BCardBody, { class: "p-4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                    createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                      createVNode("i", { class: "uil uil-cloud-wifi" })
                                    ])
                                  ]),
                                  createVNode("h5", { class: "font-size-15 text-uppercase" }, " Why is the Site Down? "),
                                  createVNode("p", { class: "text-muted mb-0" }, " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BCol, { md: "4" }, {
                        default: withCtx(() => [
                          createVNode(_component_BCard, {
                            "no-body": "",
                            class: "mt-4 maintenance-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BCardBody, { class: "p-4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                    createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                      createVNode("i", { class: "uil uil-clock" })
                                    ])
                                  ]),
                                  createVNode("h5", { class: "font-size-15 text-uppercase" }, " What is the Downtime? "),
                                  createVNode("p", { class: "text-muted mb-0" }, " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BCol, { md: "4" }, {
                        default: withCtx(() => [
                          createVNode(_component_BCard, {
                            "no-body": "",
                            class: "mt-4 maintenance-box"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BCardBody, { class: "p-4" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                    createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                      createVNode("i", { class: "uil uil-envelope-alt" })
                                    ])
                                  ]),
                                  createVNode("h5", { class: "font-size-15 text-uppercase" }, " Do you need Support? "),
                                  createVNode("p", { class: "text-muted mb-0" }, [
                                    createTextVNode(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. "),
                                    createVNode("a", {
                                      href: "mailto:no-reply@domain.com",
                                      class: "text-decoration-underline"
                                    }, "no-reply@domain.com")
                                  ])
                                ]),
                                _: 1
                              })
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BCol, {
            cols: "12",
            class: "text-center"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "home-wrapper" }, [
                createVNode(_component_BRow, { class: "justify-content-center" }, {
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
                createVNode("h3", { class: "mt-5" }, "Site is Under Maintenance"),
                createVNode("p", null, "Please check back in sometime."),
                createVNode(_component_BRow, null, {
                  default: withCtx(() => [
                    createVNode(_component_BCol, { md: "4" }, {
                      default: withCtx(() => [
                        createVNode(_component_BCard, {
                          "no-body": "",
                          class: "mt-4 maintenance-box"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BCardBody, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                  createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                    createVNode("i", { class: "uil uil-cloud-wifi" })
                                  ])
                                ]),
                                createVNode("h5", { class: "font-size-15 text-uppercase" }, " Why is the Site Down? "),
                                createVNode("p", { class: "text-muted mb-0" }, " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BCol, { md: "4" }, {
                      default: withCtx(() => [
                        createVNode(_component_BCard, {
                          "no-body": "",
                          class: "mt-4 maintenance-box"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BCardBody, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                  createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                    createVNode("i", { class: "uil uil-clock" })
                                  ])
                                ]),
                                createVNode("h5", { class: "font-size-15 text-uppercase" }, " What is the Downtime? "),
                                createVNode("p", { class: "text-muted mb-0" }, " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BCol, { md: "4" }, {
                      default: withCtx(() => [
                        createVNode(_component_BCard, {
                          "no-body": "",
                          class: "mt-4 maintenance-box"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BCardBody, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "avatar-sm mx-auto mb-4" }, [
                                  createVNode("div", { class: "avatar-title rounded-circle bg-primary-subtle text-primary font-size-20" }, [
                                    createVNode("i", { class: "uil uil-envelope-alt" })
                                  ])
                                ]),
                                createVNode("h5", { class: "font-size-15 text-uppercase" }, " Do you need Support? "),
                                createVNode("p", { class: "text-muted mb-0" }, [
                                  createTextVNode(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. "),
                                  createVNode("a", {
                                    href: "mailto:no-reply@domain.com",
                                    class: "text-decoration-underline"
                                  }, "no-reply@domain.com")
                                ])
                              ]),
                              _: 1
                            })
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
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utility/maintenance/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      title: "Maintenance"
    };
  },
  components: {
    UtilityMaintenance: __nuxt_component_1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SiteHeader = __nuxt_component_0;
  const _component_UtilityMaintenance = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SiteHeader, { title: $data.title }, null, _parent));
  _push(ssrRenderComponent(_component_UtilityMaintenance, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/utility/maintenance/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CjlqhwAC.mjs.map
