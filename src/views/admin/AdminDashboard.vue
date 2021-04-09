<template>
  <div class="admin-dashboard">
      <div class="admin-dashboard-sidebar">
        <AdminSidebar :toggleDashboardBorder="toggleDashboardBorder" />
      </div>
      <div class="admin-dashboard-content">
        <div class="row mt-5 mb-3">
          <div class="col-8">
            <p class="p1">Dashboard</p>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-3 d-flex flex-column">
            <p class="p5">Current Applications</p>
            <p class="p4">{{getCurrentApplications}}</p>
            <hr class="hr1 m-0 mb-1">
            <p class="p6">Academy {{getUpdatedCurrentBatch}}.0</p>
          </div>
          <div class="col-3 d-flex flex-column">
            <p class="p5">Total Application</p>
            <p class="p4">{{getTotalApplications}}</p>
            <hr class="hr2 m-0 mb-1">
            <p class="p6">All entries so far</p>
          </div>
          <div class="col-3 d-flex flex-column">
            <p class="p5">Academy</p>
            <p class="p4">{{getUpdatedCurrentBatch}}</p>
            <hr class="hr3 m-0 mb-1">
            <p class="p6">So far</p>
          </div>
        </div>
        <div class="row d-flex justify-content-between">
          <div class="col-5 px-0 dashb-info history ml-2">
            <p sub-head pl-5><b>History</b><br><small class="p6">
            Last Update {{getLatestApplication}}</small></p>
            <div class="d-flex justify-content">
            <b-table
            :items="getSummaryTable"
            :fields="fields"
            head-variant="dark"
            table-variant="light"
            thead-class="d-none"
            ></b-table>
            </div>
          </div>
          <div class="col-5 px-0 pr-3 dashb-info assessment">
            <p sub-head class="pl-4 text-left mt-3 mb-5"><b>Create Assessment</b></p>
            <p class="text-center mb-3">
              Create test questions for incoming academy<br>students
            </p>
            <div class="button mt-3 mb-5">
              <b-button
              class="text-white"
              to="/admin/assessment"
              >
                Create Assessment
              </b-button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AdminSidebar from '@/components/AdminSidebar.vue';

export default {
  name: 'AdminDashboard',
  components: {
    AdminSidebar,
  },
  data() {
    return {
      fields: ['batch', 'applicants', 'date'],
      toggleDashboardBorder: false,
      applicationEnded: true,
    };
  },
  computed: {
    ...mapGetters(['getUpdatedCurrentBatch', 'getCurrentApplications',
      'getTotalApplications', 'getLatestApplication', 'getSummaryTable']),
  },
  methods: {
    ...mapActions(['getSummary']),
  },
  mounted() {
    this.toggleDashboardBorder = true;
    this.getSummary();
  },
};
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  width: 100%;
  /* align-items: stretch; */
}
.admin-dashboard-sidebar {
  width: 30%;
}
.admin-dashboard-content {
  height: 750px;
  padding-right: 20px;
  box-sizing: border-box;
}
p {
    font-style: normal;
}
.p1 {
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
}
.p2 {
    font-weight: 500;
    font-size: 16px;
}
.p4 {
    font-weight: 300;
    font-size: 48px;
    line-height: 65px;
    color: var(--text-primary);
    font-weight: 300;
}
.p5 {
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: var(--text-secondary-small);
}
.p6 {
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: var(--text-secondary-small);
}
hr {
    width: 148px;
    height: 4px;
    border-radius: 4px;
}
.hr1 {
    background-color: #006DF0;
}
.hr2 {
    background-color:  #00F026;
}
.hr3 {
    background-color: #F09000;
}
.subhead {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}
.dashb-info {
    width: 482px;
    height: 307px;
    border: 1px solid #ECECF9;
    box-sizing: border-box;
    border-radius: 4px;
    margin-right: 71px;
}
.history {
    border: none;
}
.button {
    margin: auto;
    margin-top: 20px;
    text-align: center;
    color: #7557D3;
}
.button :hover {
  background-color: #7557D3;
}
button {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    background-color: #7557D3 !important;
}
.btn-secondary {
  background-color: #7557D3 !important;
}
button :hover {
  background-color: #7557D3;
}
</style>
