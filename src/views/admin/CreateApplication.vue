<template>
<div class="admin-application">
    <div class="admin-application-sidebar">
      <AdminSidebar :toggleApplicationBorder="toggleApplicationBorder" />
    </div>
    <div class="admin-application-content">
      <AdminCreateApplication />
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue';
import AdminCreateApplication from '@/components/AdminCreateApplication.vue';

export default {
  name: 'SignUp',
  data() {
    return {
      toggleApplicationBorder: false,
    };
  },
  components: {
    AdminSidebar,
    AdminCreateApplication,
  },
  mounted() {
    this.toggleApplicationBorder = true;
  },
};
</script>

<style scoped>
.admin-application {
  display: flex;
  width: 100%;
  /* align-items: stretch; */
}
.admin-application-sidebar {
  width: 30%;
}
.admin-application-content {
  height: 750px;
  /* padding-right: 30px; */
  box-sizing: border-box;
}
</style>
