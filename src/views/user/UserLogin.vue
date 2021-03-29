<template>
  <div class="user-login">
    <div class="user-login-icon">
      <img alt="Enyata logo" src="../../assets/enyata-logo.svg">
    </div>
    <p>Applicant Log In</p>
    <LoginFormUser />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginFormUser from '@/components/LoginFormUser.vue';

export default {
  name: 'UserLogin',
  components: {
    LoginFormUser,
  },
};
</script>

<style scoped>
  .user-login {
    height: 100vh;
    width: 400px;
    margin: auto;
    text-align: center;
    margin-top: 100px;
  }
  .user-login-icon {
    width: 110.1px;
    height: 20.84px;
    margin: auto;
    margin-bottom: 24px;
  }
  .user-login-icon img {
    height: 100%;
    width: 100%;
  }
  .user-login p {
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #2B3C4E;
    margin: auto;
    margin-bottom: 68px;
  }
</style>
