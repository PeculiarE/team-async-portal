<template>
  <div class="signup-container">
    <div class="enyata-logo">
      <img src="../../assets/enyata-logo.svg" alt="Enyata Logo">
    </div>
    <div v-if="openApplicationStatus">
      <div class="title">Applicant Sign Up</div>
      <SignUpForm />
    </div>
     <p id="closed-applications" v-else>Applications are currently closed!</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SignUpForm from '@/components/SignUpForm.vue';

export default {
  name: 'SignUp',
  components: {
    SignUpForm,
  },
  computed: {
    ...mapGetters(['openApplicationStatus']),
  },
};
</script>

<style scoped>
  .signup-container {
    height: 100vh;
    width: 820px;
    margin: auto;
    text-align: center;
  }
  .enyata-logo {
    width: 110.1px;
    height: 20.84px;
    margin: auto;
    margin-top: 120px;
    margin-bottom: 24px;
  }
   .enyata-logo img {
    height: 100%;
    width: 100%;
  }
  .title {
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #2B3C4E;
    margin: auto;
    margin-bottom: 68px;
  }
  #closed-applications {
  color: red;
  font-size: 18px;
  font-weight: bold;
  }
</style>
