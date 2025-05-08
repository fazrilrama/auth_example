<script>
import UtilityMaintenance from "~/components/utility/maintenance/index.vue";
definePageMeta({
  layout: "auth"
});
export default {
  data() {
    return {
      title: "Maintenance"
    };
  },
  components: {
    UtilityMaintenance
  }
};
</script>

<template>
  <SiteHeader :title="title" />
  <UtilityMaintenance />
</template>
