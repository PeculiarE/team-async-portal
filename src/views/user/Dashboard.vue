<template>
  <div class="row g-0" style="overflow: hidden">
    <div class="col-3 w-100 px-0">
      <Sidebar />
    </div>
    <div class="col-9 px-0 mt-4">
      <div class="row mt-5 mb-3">
        <div class="col-8">
          <p class="p1">Dashboard</p>
          <p class="p2">
            <i
              >Your Application is currently being review, you wil be notified if successful</i
            >
          </p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-3 d-flex flex-column">
            <p class="p5">Date of application</p>
            <p class="p4">09.09.19</p>
            <hr class="hr1 m-0 mb-1">
            <p class="p6">4 days since applied</p>
        </div>
        <div class="col-3 d-flex flex-column">
            <p class="p5">Application Status</p>
            <p class="p4">Pending</p>
            <hr class="hr2 m-0 mb-1">
            <p class="p6">We wil get back to you</p>
        </div>
      </div>
      <div class="row d-flex justify-content-between">
          <div class="col-5 px-0 dashb-info updates">
              Updates
              <div class="d-flex justify-content">
                  <hr class="w-75">
                  <hr class="w-75">
                  <hr class="w-75">
                  <hr class="w-75">
              </div>
          </div>
          <div class="col-5 px-0 dashb-info assessment">
              Take assessment
              <div>
                  <p class="text-center mb-3">
              We have 4 days left until the next assessment. <br />
              Watch this space
            </p>
            <b-button
              type="submit"
              class="text-white button"
            >
              Take Assessment
            </b-button>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'TakeAssessment',
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
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
    line-height: 58px;
    color: #2B3C4E;
}
.p5 {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
}
.p6 {
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #4F4F4F;
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
    background-color: #F09000;;
}
.dashb-info {
    width: 482px;
    height: 453px;
    border: 1px solid #ECECF9;
    box-sizing: border-box;
    border-radius: 4px
}
</style>
