<template>
  <div>
    <b-sidebar id="sidebar-no-header" v-model='visible' aria-labelledby="sidebar-no-header-title"
    bg-variant='white' width='20%' no-header shadow class="border border-dark">
        <div id="sidebar-top-section">
            <b-img v-bind="mainProps" rounded="circle" alt="User image"
            :src="getUserDeets.photo_url"
            class="mb-2"></b-img>
            <div class="text-white">
                <p>
                   <span class="font-weight-bold">{{ getUserDeets.full_name }}</span><br>
                <i>{{ getUserDeets.email }}</i>
                </p>
            </div>
        </div>
        <div class="p-3 pl-0">
          <nav class="m-3">
            <b-nav vertical>
              <b-nav-item to="dashboard" active class="sidebar-menu"
              :class="dashboardMenuSelected ? 'selected_menu' : ''">
                  <img src="../assets/dashboard-icon.svg"
                    class="d-inline-block mr-3">Dashboard</b-nav-item>
              <b-nav-item to="assessment" class="sidebar-menu"
              :class="assessmentMenuSelected ? 'selected_menu' : ''">
                  <img src="../assets/assessment-icon.svg"
                    class="d-inline-block mr-3">Assessment</b-nav-item>
              <b-nav-item to="" class="sidebar-menu mt-5" @click="logoutNow">
                  <img src="../assets/logout-icon.svg"
                    class="d-inline-block mr-3">Log Out</b-nav-item>
            </b-nav>
          </nav>
        </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Sidebar',
  props: {
    dashboardMenuSelected: {
      type: Boolean,
    },
    assessmentMenuSelected: {
      type: Boolean,
    },
  },
  data() {
    return {
      visible: true,
      mainProps: {
        width: 100, height: 100, class: 'mt-4',
      },
    };
  },
  computed: {
    ...mapGetters(['getUserDeets']),
  },
  methods: {
    ...mapActions(['userLogout', 'populateUserDeets']),
    logoutNow() {
      this.userLogout();
      this.$router.push({ name: 'UserLogin' });
    },
  },
  mounted() {
    this.populateUserDeets();
  },
};
</script>

<style scoped>
.selected_menu {
  border-left: 4px solid #7557d3;
}
 .sidebar-menu {
    font-size: 16px;
    font-weight: 400;
 }
#sidebar-top-section {
  background-color: var(--enyata-purple);
}
 a {
    color: #2B3C4E;
 }
 a:hover {
    color: #2B3C4E;
    font-weight: 700;
 }
</style>
