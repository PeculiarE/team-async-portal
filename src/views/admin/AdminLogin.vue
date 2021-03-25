<template>
<div class="admin-login-background">
  <div class="admin-login-background-image">
    <div class="admin-login-content">
      <div class="admin-login-content-icon">
          <img alt="Enyata logo" src="../../assets/enyata-white-icon.svg">
      </div>
      <h1>enyata</h1>
      <h2>Admin Log In</h2>
      <LoginFormAdmin />
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import LoginFormAdmin from '@/components/LoginFormAdmin.vue';

export default {
  name: 'AdminLogin',
  components: {
    LoginFormAdmin,
  },
};
</script>

<style scoped>
  .admin-login-background {
    max-width: 1440px;
    min-height: 100vh;
    background: #111E2B;
    padding-top: 100px;
    box-sizing: border-box;
    overflow: visible;
    padding-bottom: 50px;
  }
  .admin-login-background-image {
    background-image: url("../../assets/laptop-background.svg");
    background-repeat: no-repeat;
    /* width: 1086px; */
    height: 724px;
    background-position: 820px 0;
    margin-bottom: 50px;
  }
  .admin-login-background-image img {
    height: 100%;
    width: 100%;
  }
  .admin-login-content {
    height: 100vh;
    width: 379px;
    margin: auto;
    text-align: center;
  }
  .admin-login-content-icon {
    height: 52px;
    width: 49px;
    margin: auto;
    margin-bottom: 16px;
  }
  .admin-login-content-icon img {
    height: 100%;
    width: 100%;
  }
  .admin-login-content h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 31px;
    line-height: 38px;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
  .admin-login-content h2 {
    font-style: italic;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin-bottom: 56px;
  }
</style>
