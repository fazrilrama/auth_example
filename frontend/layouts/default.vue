<script>
import { useLayoutStore } from "~/stores/layout";
import { LAYOUT_TYPE } from "~/app/const";
import Vertical from "~/components/layouts/vertical/index.vue";
import Horizontal from "~/components/layouts/horizontal/index.vue";

export default {
  data() {
    return {
      LAYOUT_TYPE
    };
  },
  components: {
    Vertical,
    Horizontal
  },
  computed: {
    ...useLayoutStore(),
    layoutType() {
      return useLayoutStore() ? useLayoutStore().layoutType : {};
    },
    isVertical() {
      return this.layoutType === LAYOUT_TYPE.VERTICAL;
    },
    isHorizontal() {
      return this.layoutType === LAYOUT_TYPE.HORIZONTAL;
    }
  },
  mounted() {
    document.body.classList.remove("authentication-bg");
  }
};
</script>

<template>
  <div>
    <ClientOnly>
      <Vertical v-if="isVertical">
        <slot />
      </Vertical>
      <Horizontal v-if="isHorizontal">
        <slot />
      </Horizontal>
    </ClientOnly>
  </div>
</template>
