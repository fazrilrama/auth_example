export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem("name");

    if (!token && to.path !== "/login") {
      return navigateTo("/login");
    }
  }
});
