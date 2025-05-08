<script>
import HederLogo from "~/components/layouts/common/HeaderLogo.vue";
import Profile from "~/components/layouts/common/Profile.vue";
import MenuComponent from "~/components/layouts/horizontal/MenuComponent.vue";

// import { layoutComputed, authFackMethods } from "~/store/helpers";

export default {
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
      const els = document.getElementsByClassName(className);
      while (els[0]) {
        els[0].classList.remove(className);
      }
    },

    activateParentDropdown() {
      const resetParent = (el) => {
        const parent = el.parentElement;
        this._removeAllClass("mm-active");
        this._removeAllClass("mm-show");
        if (parent) {
          parent.classList.remove("active");
          const parent2 = parent.parentElement;
          if (parent2) {
            parent2.classList.remove("active");
            const parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.remove("active");
              const parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove("active");
                const parent5 = parent4.parentElement;
                if (parent5) {
                  parent5.classList.remove("active");
                  const menuelement = document.getElementById(
                    "topnav-menu-content"
                  );
                  if (menuelement !== null)
                    if (menuelement.classList.contains("show"))
                      document
                        .getElementById("topnav-menu-content")
                        .classList.remove("show");
                }
              }
            }
          }
        }
      };
      var links = document.getElementsByClassName("side-nav-link-ref");
      var matchingMenuItem = null;
      for (let i = 0; i < links.length; i++) {
        // reset menu
        resetParent(links[i]);
      }
      for (var i = 0; i < links.length; i++) {
        if (window.location.pathname === links[i].pathname) {
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
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
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
      let element = document.getElementById("topnav-menu-content");
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
              document.body.setAttribute("data-topbar", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar", "light");
              document.body.removeAttribute("data-layout-size", "boxed");
              break;
            case "colored":
              document.body.setAttribute("data-topbar", "colored");
              document.body.removeAttribute("data-layout-size", "boxed");
              break;
            default:
              document.body.setAttribute("data-topbar", "dark");
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
              document.body.setAttribute("data-layout-size", "boxed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-mode", "fluid");
              document.body.removeAttribute("data-layout-size");
              break;
            default:
              document.body.setAttribute("data-layout-mode", "fluid");
              break;
          }
        }
      }
    }
  }
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <HederLogo />

        <button type="button" class="btn btn-sm px-3 font-size-16 d-lg-none header-item" data-toggle="collapse" data-target="#topnav-menu-content" @click="toggleMenu">
          <i class="fa fa-fw fa-bars"></i>
        </button>
        <AppSearch />
      </div>

      <div class="d-flex">
        <MobileAppSearch />
        <LanguageDropdown :flag="flag" :languages="languages" :current_language="current_language" @onChange="setLanguage" />

        <AppList />

        <div class="dropdown d-none d-lg-inline-block ms-1">
          <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen" @click="initFullScreen">
            <i class="uil-minus-path"></i>
          </button>
        </div>
        <Notifications />

        <Profile @logoutUser="logoutUser" />

        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item noti-icon right-bar-toggle toggle-right" @click="toggleRightSidebar">
            <i class="uil-cog toggle-right"></i>
          </button>
        </div>
      </div>
    </div>
    <MenuComponent />
  </header>
</template>
