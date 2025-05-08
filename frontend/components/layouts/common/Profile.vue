<script>
export default {
  data() {
    return {
      name: localStorage.getItem("name")
    }
  }
};
</script>

<template>
  <BDropdown class="d-inline-block" toggle-class="header-item" right variant="white" menu-class="dropdown-menu-end">
    <template #button-content>
      <img class="rounded-circle header-profile-user" src="/images/users/avatar-4.jpg" alt="Header Avatar" />
      <span class="d-none d-xl-inline-block ms-1 fw-medium font-size-15">{{ name }}</span>
      <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
    </template>

    <a class="dropdown-item" @click="$emit('logoutUser')" href="javascript: void(0);">
      <i class="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>
      <span class="align-middle">{{
        $t("navbar.dropdown.marcus.list.logout")
      }}</span>
    </a>
  </BDropdown>
</template>
