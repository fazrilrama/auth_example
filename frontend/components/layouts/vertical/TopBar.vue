<script>
import HederLogo from "~/components/layouts/common/HeaderLogo.vue";
import Profile from "~/components/layouts/common/Profile.vue";

export default {
  data() {
    return {
      current_language: this.$i18n.locale,
      text: null,
      flag: null,
      value: null,
      config: useRuntimeConfig(),
      name: localStorage.getItem("name")
    };
  },
  components: {
    HederLogo,
    Profile
  },
  
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
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
    logoutUser() {
      const auth = this.config.public.auth;
      localStorage.removeItem("name");
      navigateTo({ path: "/login" });
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    }
  }
};
</script>

<template>
  <ClientOnly>
    <header id="page-topbar">
      <div class="navbar-header">
        <div class="d-flex">
          <HederLogo />
          <button type="button" class="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn" id="vertical-menu-btn" @click="toggleMenu">
            <i class="fa fa-fw fa-bars"></i>
          </button>
        </div>

        <div class="d-flex">

          <Profile @logoutUser="logoutUser" name="{{ name }}" />
        </div>
      </div>
    </header>
  </ClientOnly>
</template>
