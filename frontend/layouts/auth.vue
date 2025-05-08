<script>
export default {
  mounted() {
    document.body.classList.add("authentication-bg");
  }
};
</script>

<template>
  <div>
    <div class="account-pages my-5">
      <BContainer>
        <BRow class="d-flex justify-content-center">
          <BCol cols="12">
            <nuxt-link to="/" class="mb-5 d-block auth-logo">
            </nuxt-link>
          </BCol>
        </BRow>
        <slot />
      </BContainer>
    </div>
  </div>
</template>
