<template>
  <div class="row g-0" style="overflow: hidden">
    <div class="col-3 w-100 px-0">
      <Sidebar />
    </div>
    <div class="col-9 px-0 mt-4">
      <div class="row mt-5 mb-3">
        <div class="col-8">
          <p class="p1">Take Assessment</p>
          <p class="p2">
            <i
              >Click the finish button below to submit assessment, you can go
              back at any time to edit your answers.</i
            >
          </p>
        </div>
        <div class="col-4 d-flex flex-column align-items-center">
          <div class="col-9 offset-1 px-0">
            <span class="text-start">Timer</span>
            <p class="p3">00<span>min</span> 010<span>sec</span></p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-8 offset-1 d-flex flex-column">
              <div class="d-flex justify-content-center">
                <UserQuestions />
              </div>
              <div class="d-flex justify-content-between">
              <b-button type="submit" class="text-white button">
                Previous
              </b-button>
              <b-button type="submit" class="text-white button">
                Next
              </b-button>
            </div>
            <div class="d-flex justify-content-center">
              <b-button type="submit" class="text-white w-25" disabled> Finish </b-button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import UserQuestions from '@/components/UserQuestions.vue';

export default {
  name: 'Questions',
  components: {
    Sidebar,
    UserQuestions,
  },
};
</script>

<style scoped>
.p1 {
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
}
.p2 {
  font-weight: 500;
  font-size: 16px;
}
.p3 {
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
}
span {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
}
.button {
  width: 125px;
  height: 41px;
  background-color: #2B3C4E;
  border-color: #2B3C4E;
}
</style>
