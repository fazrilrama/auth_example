<script>
import { useLayoutStore } from "~/stores/layout";
import RightSideBar from "~/components/layouts/common/RightSideBar.vue";
import Footer from "~/components/layouts/common/Footer.vue";
import TopBar from "~/components/layouts/horizontal/TopBar.vue";

export default {
  created() {
    document.body.setAttribute("data-layout", "horizontal");
    document.body.setAttribute("data-topbar", "colored");
  },
  components: {
    TopBar,
    Footer,
    RightSideBar
  },
  methods: {
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
  },
  computed: {
    ...useLayoutStore(),
    layout() {
      return useLayoutStore() ? useLayoutStore() : {};
    }
  }
};
</script>

<template>
  <div id="layout-wrapper">
    <TopBar :type="layout.topbar" :width="layout.layoutWidth" />
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <slot />
        </div>
      </div>
      <Footer />
    </div>
    <RightSideBar />
  </div>
</template>
