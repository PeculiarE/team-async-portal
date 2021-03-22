<template>
  <div>
    <b-sidebar id="sidebar-no-header" v-model='visible' aria-labelledby="sidebar-no-header-title"
    bg-variant='white' width='20%' no-header shadow class="border border-dark">
        <div id="sidebar-top-section">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image" src=""
            class="mb-2"></b-img>
            <div class="text-white">
                <p>
                   <span class="font-weight-bold">Jane Doe</span><br>
                <i>doe@enyata.com</i>
                </p>
            </div>
        </div>
        <div class="p-3 pl-0">
          <nav class="m-3">
            <b-nav vertical>
              <b-nav-item active class="sidebar-menu">
                  <img src="../assets/dashboard-icon.svg"
                    class="d-inline-block mr-3">Dashboard</b-nav-item>
              <b-nav-item to="" class="sidebar-menu">
                  <img src="../assets/assessment-icon.svg"
                    class="d-inline-block mr-3">Assesment</b-nav-item>
              <b-nav-item to="" class="sidebar-menu mt-5">
                  <img src="../assets/logout-icon.svg"
                    class="d-inline-block mr-3">Log Out</b-nav-item>
            </b-nav>
          </nav>
        </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      visible: true,
      mainProps: {
        blank: true, blankColor: '#777', width: 100, height: 100, class: 'mt-4',
      },
    };
  },
};
</script>

<style scoped>
 .sidebar-menu {
    font-size: 16px;
    font-weight: 400;
 }

 a {
    color: #2B3C4E;
 }
 a:hover {
    color: #2B3C4E;
    font-weight: 700;
 }
</style>
