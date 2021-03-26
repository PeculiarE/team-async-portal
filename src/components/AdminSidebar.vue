<template>
    <b-sidebar
      id="admin-sidebar-no-header"
      v-model="visible"
      aria-labelledby="admin-sidebar-no-header-title"
      bg-variant="white"
      width="25%"
      no-header
      shadow
      class="border"
    >
      <div id="admin-sidebar-top-section">
        <b-img
          v-bind="mainProps"
          rounded="circle"
          alt="Admin image"
          :src="getAdminInfo.image"
          class="m-auto"
        ></b-img>
        <div>
          <p class="m-auto">
            <span class="font-weight-bold">{{ getAdminInfo.adminName }}</span><br />
            <i>{{ getAdminInfo.adminEmail }}</i>
          </p>
        </div>
      </div>
      <div class="p-3 pl-0">
        <nav class="m-3">
          <b-nav vertical>
            <b-nav-item active class="admin-sidebar-menu mb-2">
              <img
                src="../assets/dashboard-icon.svg"
                class="d-inline-block mr-3"
              />Dashboard</b-nav-item
            >
            <b-nav-item to="" class="admin-sidebar-menu mb-2">
              <img
                src="../assets/create-application-icon.svg"
                class="d-inline-block mr-3"
              />Create Application</b-nav-item
            >
            <b-nav-item to="" class="admin-sidebar-menu mb-2">
              <img
                src="../assets/application-entries-icon.svg"
                class="d-inline-block mr-3"
              />Application Entries</b-nav-item
            >
            <b-nav-item to="" class="admin-sidebar-menu mb-2">
              <img
                src="../assets/compose-assessment-icon.svg"
                class="d-inline-block mr-3"
              />Compose Assessment</b-nav-item
            >
            <b-nav-item
              to=""
              class="admin-sidebar-menu mb-2"
              id="admin-sidebar-menu-history"
            >
              <img
                src="../assets/assessment-history-icon.svg"
                class="d-inline-block mr-3"
              />Assessment History</b-nav-item
            >
            <b-nav-item to="" class="admin-sidebar-menu mb-2">
              <img
                src="../assets/results-icon.svg"
                class="d-inline-block mr-3"
              />Results</b-nav-item
            >
            <b-nav-item to="" class="admin-sidebar-menu mb-2">
              <img
                src="../assets/settings-icon.svg"
                class="d-inline-block mr-3"
              />Settings</b-nav-item
            >
            <b-nav-item to="" class="admin-sidebar-menu mb-2 log-out">
              <img
                src="../assets/log-out-icon.svg"
                class="d-inline-block mr-3"
              />Log Out</b-nav-item
            >
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AdminSidebar',
  data() {
    return {
      visible: true,
      mainProps: {
        width: 100,
        height: 100,
        class: 'mt-4',
      },
    };
  },
  computed: {
    ...mapGetters(['getAdminInfo']),
  },
};
</script>

<style scoped>
.admin-sidebar-menu {
  font-size: 16px;
  font-weight: 400;
}
#admin-sidebar-menu-history {
  margin-left: -2px;
}
#admin-sidebar-top-section {
  background: var(--enyata-purple);
}
a,
p {

  color: var(--text-primary);
}
a:hover {
  color: var(--text-primary);
  font-weight: 700;
}
.log-out {
  margin-top: 100px;
}
</style>
