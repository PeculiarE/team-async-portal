<template>
  <div class="signup-container">
    <div class="enyata-logo">
      <img src="../assets/enyata-logo.svg" alt="Enyata Logo">
    </div>
    <div class="name">enyata</div>
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
    max-height: 100vh;
    width: 820px;
    margin: auto;
    text-align: center;
  }
  .enyata-logo {
    width: 48.84px;
    height: 51.87px;
    margin: auto;
    margin-top: 173px;
    margin-bottom: 16.13px;
  }
  .enyata-logo img {
    height: 100%;
    width: 100%;
  }
  .name {
    width: 90px;
    margin: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 31.3954px;
    line-height: 38px;
  }
.title {
  margin: auto;
  margin-bottom: 56px;
  width: 179px;
  height: 29px;
  font-style: italic;
  /* font-weight: 500; */
  font-size: 24px;
  line-height: 29px;
}
</style>
