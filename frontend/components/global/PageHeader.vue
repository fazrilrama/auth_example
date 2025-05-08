<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<template>
  <ClientOnly>
    <BRow>
      <BCol cols="xl-12">
        <div class="page-title-box d-flex align-items-center justify-content-between">
          <h4 class="mb-0">{{ title }}</h4>

          <div class="page-title-right">
            <BBreadcrumb :items="items" class="m-0" />
          </div>
        </div>
      </BCol>
    </BRow>
  </ClientOnly>
</template>
