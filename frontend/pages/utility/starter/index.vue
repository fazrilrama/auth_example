<script>
export default {
  data() {
    return {
      title: "Starter Page",
      items: [
        {
          text: "Utility",
          href: "/"
        },
        {
          text: "Starter Page",
          active: true
        }
      ]
    };
  },
  components: {}
};
</script>

<template>
  <SiteHeader :title="title" />
  <PageHeader :title="title" :items="items" />
</template>
