<script>
import "simplebar";

export default {
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "Project Auth"
        },
        {
          text: "Dashboard",
          active: true
        }
      ]
    };
  },
};
</script>

<template>
  <SiteHeader :title="title" />
  <PageHeader :title="title" :items="items" />
  Hello World
</template>
