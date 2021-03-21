<template>
    <b-sidebar
      id="admin-sidebar-no-header"
      v-model="visible"
      aria-labelledby="admin-sidebar-no-header-title"
      bg-variant="white"
      width="23%"
      no-header
      shadow
      class="border"
    >
      <div id="admin-sidebar-top-section">
        <b-img
          v-bind="mainProps"
          rounded="circle"
          alt="Circle image"
          src=""
          class="m-auto"
        ></b-img>
        <div>
          <p class="m-auto">
            <span class="font-weight-bold">Josh Doe</span><br />
            <i>j.doe@enyata.com</i>
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
          </b-nav>
        </nav>
      </div>
    </b-sidebar>
</template>

<script>
export default {
  name: 'AdminSidebar',
  data() {
    return {
      visible: true,
      mainProps: {
        blank: true,
        blankColor: '#777',
        width: 100,
        height: 100,
        class: 'mt-4',
      },
    };
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
a,
p {
  color: #2b3c4e;
}
a:hover {
  color: #2b3c4e;
  font-weight: 700;
}
</style>
