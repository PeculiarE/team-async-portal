<template>
  <div class="signup-container">
    <div class="enyata-logo">
      <img src="../../assets/enyata-logo.svg" alt="Enyata Logo">
    </div>
    <div class="title">Applicant Sign Up</div>
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';

export default {
  name: 'SignUp',
  components: {
    SignUpForm,
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
</style>
