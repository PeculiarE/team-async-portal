<template>
  <div class="wrapper">
    <div class="aside">
      <AdminSidebar />
    </div>
    <div class="contents">
        <AdminCreateApplication />
    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue';
import AdminCreateApplication from '@/components/AdminCreateApplication.vue';

export default {
  name: 'SignUp',
  components: {
    AdminSidebar,
    AdminCreateApplication,
  },
};
</script>

<style scoped>
.wrapper {
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    display: flex;
}
.aside {
    width: 20.28%
}
.contents {
    width: 79.72%;
    padding-right: 90px;
    padding-left: 75px;
    box-sizing: border-box;
}
</style>
