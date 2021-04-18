<template>
    <b-sidebar
      id="admin-sidebar-no-header"
      v-model="visible"
      aria-labelledby="admin-sidebar-no-header-title"
      bg-variant="white"
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
      <div class="mt-4">
        <nav>
          <b-nav vertical>
            <b-nav-item active class="admin-sidebar-menu mb-2"
            :class="toggleDashboardBorder ? 'purple-border' : null"
            @click="selectDashboard">
              <img
                src="../assets/dashboard-icon.svg"
                class="d-inline-block ml-4 mr-3"
              />Dashboard</b-nav-item
            >
            <b-nav-item class="admin-sidebar-menu mb-2"
            :class="toggleApplicationBorder ? 'purple-border' : null"
            @click="selectApplication">
              <img
                src="../assets/create-application-icon.svg"
                class="d-inline-block ml-4 mr-3"
              />Create Application</b-nav-item
            >
            <b-nav-item to="/admin/entries" class="admin-sidebar-menu mb-2"
            :class="toggleEntriesBorder ? 'purple-border' : null">
              <img
                src="../assets/application-entries-icon.svg"
                class="d-inline-block ml-4 mr-3"
              />Application Entries</b-nav-item
            >
            <b-nav-item to="/admin/assessment" class="admin-sidebar-menu mb-2"
            :class="toggleComposeBorder ? 'purple-border' : null">
              <img
                src="../assets/compose-assessment-icon.svg"
                class="d-inline-block ml-4 mr-3"
              />Compose Assessment</b-nav-item
            >
            <b-nav-item
              to="/admin/history"
              class="admin-sidebar-menu mb-2"
              :class="toggleHistoryBorder ? 'purple-border-history' : null"
              id="admin-sidebar-menu-history"
            >
              <img
                src="../assets/assessment-history-icon.svg"
                class="d-inline-block ml-4 mr-3"
              />Assessment History</b-nav-item
            >
            <b-nav-item class="admin-sidebar-menu mb-2"
            :class="toggleResultsBorder ? 'purple-border' : null"
            @click="selectResults">
              <img
                src="../assets/results-icon.svg"
                class="d-inline-block ml-4 mr-3"
              />Results</b-nav-item
            >
            <b-nav-item to="/admin/profile-settings" class="admin-sidebar-menu mb-2"
            :class="toggleSettingsBorder ? 'purple-border' : null">
              <img
                src="../assets/settings-icon.svg"
                class="d-inline-block ml-4 mr-3"
              />Settings</b-nav-item
            >
            <b-nav-item @click="logoutNow" class="admin-sidebar-menu mb-2 log-out">
              <img
                src="../assets/log-out-icon.svg"
                class="d-inline-block ml-4 mr-3"
              />Log Out</b-nav-item
            >
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AdminSidebar',
  props: {
    toggleDashboardBorder: {
      type: Boolean,
    },
    toggleApplicationBorder: {
      type: Boolean,
    },
    toggleEntriesBorder: {
      type: Boolean,
    },
    toggleComposeBorder: {
      type: Boolean,
    },
    toggleHistoryBorder: {
      type: Boolean,
    },
    toggleResultsBorder: {
      type: Boolean,
    },
    toggleSettingsBorder: {
      type: Boolean,
    },
  },
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
  methods: {
    ...mapActions(['adminLogout']),
    selectDashboard() {
      this.$router.push({ name: 'AdminDashboard' });
    },
    selectApplication() {
      this.$router.push({ name: 'CreateApplication' });
    },
    selectResults() {
      this.$router.push({ name: 'AssessmentResults' });
    },
    logoutNow() {
      this.adminLogout();
      this.$router.push({ name: 'AdminLogin' });
    },
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
p {
  color: #ffffff;
}
a {
  color: var(--text-primary);
}
a:hover {
  color: var(--text-primary);
  font-weight: 700;
}
.purple-border {
  border-left: 4px #7557D3 solid;
}
.purple-border-history {
  border-left: 6px #7557D3 solid;
}
.log-out {
  margin-top: 100px;
}
</style>
