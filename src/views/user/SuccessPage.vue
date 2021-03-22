<template>
  <div class="row g-0" style="overflow: hidden">
    <div class="col-3 w-100 px-0">
      <Sidebar />
    </div>
    <div class="col-9 px-0 mt-4">
      <div class="row my-5">
        <div class="col-8">
          <p class="p1">Take Assessment</p>
          <p class="p2">
            <i>Thank you!</i>
          </p>
        </div>
        <div class="col-4 d-flex flex-column align-items-center">
          <div class="col-9 offset-1 px-0">
            <span class="text-start">Timer</span>
            <p class="p3">23<span>min</span> 043<span>sec</span></p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-9 offset-1 d-flex justify-content-center mt-5">
          <div class="row d-flex flex-column align-items-center">
            <img
              src="../../assets/confetti.svg"
              alt=""
              class="mb-4"
            />
            <p class="text-center mb-3">
              We have received your assessment test, we will get back to you
              soon.
              <br />
              Best of luck.
            </p>
            <b-button type="submit" class="text-white button"> Home </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'SuccessPage',
  components: {
    Sidebar,
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
  width: 205px;
  height: 41px;
  background-color: #31d283;
  border-color: #31d283;
}
</style>
