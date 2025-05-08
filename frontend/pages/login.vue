<script>
definePageMeta({
  layout: "auth"
});

import Login from "~/components/account/Login.vue";
export default {
  data() {
    return {
      title: "Log in"
    };
  },
  components: {
    Login
  }
};
</script>

<template>
  <SiteHeader :title="title" />
  <Login />
</template>
