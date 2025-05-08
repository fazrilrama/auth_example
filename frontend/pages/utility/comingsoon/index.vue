<script>
import UtilityComingSoonComponent from "~/components/utility/comingSoon/index.vue";
definePageMeta({
  layout: "auth"
});
export default {
  data() {
    return {
      title: "Coming-soon"
    };
  },
  components: {
    UtilityComingSoonComponent
  }
};
</script>

<template>
  <SiteHeader :title="title" />
  <UtilityComingSoonComponent />
</template>
