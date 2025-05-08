<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    key: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Boolean],
      default: ""
    },
    options: {
      type: Array,
      default: []
    }
  },
  computed: {
    modelValue: {
      get() {
        return this.$props.value;
      },
      set(newVal) {
        this.$emit("change", newVal);
      }
    }
  }
};
</script>

<template>
  <div>
    <h6>{{ title }}</h6>
    <BFormGroup :key="key">
      <BFormRadioGroup v-model="modelValue" :options="options" />
    </BFormGroup>
  </div>
</template>
