<template>
  <div class="user-login">
    <div class="user-login-icon">
      <img alt="Enyata logo" src="../assets/enyata-icon.svg">
    </div>
    <h1>enyata</h1>
    <h2>Applicant Log In</h2>
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'UserLogin',
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
  .user-login {
    max-height: 100vh;
    width: 400px;
    margin: auto;
    text-align: center;
    margin-top: 100px;
  }
  .user-login-icon {
    height: 52px;
    width: 49px;
    margin: auto;
    margin-bottom: 16px;
  }
  .user-login-icon img {
    height: 100%;
    width: 100%;
  }
  .user-login h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 31px;
    line-height: 38px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
  }
.user-login h2 {
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #2B3C4E;
  margin-bottom: 56px;
}
</style>
