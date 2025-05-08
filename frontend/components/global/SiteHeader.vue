<script>
export default {
  props: {
    title: {
      type: String,
      default: "Dashboard"
    }
  }
};
</script>
<template>
  <Head>
    <Title> {{ title }} | Project Auth </Title>
  </Head>
</template>
