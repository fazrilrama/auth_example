<script>
definePageMeta({
  layout: "auth"
});

import AuthLoginComponent from "~/components/auth/login/index.vue";
export default {
  data() {
    return {
      title: "Log in"
    };
  },
  components: {
    AuthLoginComponent
  }
};
</script>

<template>
  <SiteHeader :title="title" />
  <AuthLoginComponent />
</template>
