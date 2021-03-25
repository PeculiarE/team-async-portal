<template>
  <div class="row g-0" style="overflow: hidden">
    <div class="aside col-3 w-100 px-0">
      <AdminSidebar />
    </div>
    <div class="contents col-9 px-0 mt-4 pl-5">
      <div class="row mt-5 mb-3">
        <div class="col-8">
          <p class="p1">Dashboard</p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-3 d-flex flex-column">
            <p class="p5">Current Applications</p>
            <p class="p4">233</p>
            <hr class="hr1 m-0 mb-1">
            <p class="p6">Academy 2.0</p>
        </div>
        <div class="col-3 d-flex flex-column">
            <p class="p5">Total Application</p>
            <p class="p4">4253</p>
            <hr class="hr2 m-0 mb-1">
            <p class="p6">All entries so far</p>
        </div>
        <div class="col-3 d-flex flex-column">
            <p class="p5">Academy</p>
            <p class="p4">4</p>
            <hr class="hr3 m-0 mb-1">
            <p class="p6">So far</p>
        </div>
      </div>
      <div class="row d-flex justify-content-between">
          <div class="col-5 px-0 dashb-info history">
              <p sub-head pl-5>History<br><small class="p6">Last Update 18:24, 22/02/19</small> </p>
              <div class="d-flex justify-content">
                  <b-table
                    :items="items"
                    :fields="fields"
                    head-variant="dark"
                    table-variant="light"
                    thead-class="d-none"
                    ></b-table>
              </div>
          </div>
          <div class="col-5 px-0 pr-3 dashb-info assessment">
              <p sub-head class="pl-4 text-left mt-3 mb-5">Create Assessment</p>
              <p class="text-center mb-3">
                    Create test questions for incoming academy<br>students
              </p>
             <div class="button mt-3 mb-5">
                  <b-button
                    type="submit"
                    class="text-white button"
                    disabled
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
import AdminSidebar from '@/components/AdminSidebar.vue';

export default {
  name: 'AdminDashboard',
  components: {
    AdminSidebar,
  },
  data() {
    return {
      fields: ['batch', 'figures', 'start_date'],
      items: [
        {
          batch: 'Academy Batch 1',
          figures: '15 applicants',
          start_date: 'Started 11/09/15',
        },
        {
          batch: 'Academy Batch 1',
          figures: '15 applicants',
          start_date: 'Started 11/09/15',
        },
        {
          batch: 'Academy Batch 1',
          figures: '15 applicants',
          start_date: 'Started 11/09/15',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .aside {
  height: 100vh;
} */
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
}
button {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px
}
</style>
