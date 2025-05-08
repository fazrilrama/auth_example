<script>
import { useLayoutStore } from "~/stores/layout";
import TopBar from "~/components/layouts/vertical/TopBar.vue";
import SideBarComponent from "~/components/layouts/common/SideBar.vue";
import Footer from "~/components/layouts/common/Footer.vue";
import RightSideBar from "~/components/layouts/common/RightSideBar.vue";

export default {
  name: "Vertical",
  created() {
    document.body.removeAttribute("data-layout");
    document.body.removeAttribute("data-topbar");
  },
  components: {
    TopBar,
    SideBarComponent,
    Footer,
    RightSideBar
  },
  computed: {
    ...useLayoutStore(),
    layout() {
      return useLayoutStore() ? useLayoutStore() : {};
    }
  },
  methods: {
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu() {
      document.body.classList.toggle("sidebar-enable");

      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        this.$router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
          document.body.classList.remove("vertical-collpsed");
        });
        document.body.classList.toggle("vertical-collpsed");
      } else {
        // eslint-disable-next-line no-unused-vars
        this.$router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    }
  }
};
</script>

<template>
  <div id="layout-wrapper">
    <TopBar />
    <SideBarComponent class="side-br" :type="layout.leftSidebarType" :width="layout.layoutWidth" />
    <div class="main-content">
      <div class="page-content">
        <BContainer fluid>
          <slot />
        </BContainer>
      </div>
      <Footer />
    </div>
    <RightSideBar />
  </div>
</template>
