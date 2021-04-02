<template>
  <div>
    <div class="wrapper">
      <div>
        <h1>Password reset successful</h1>
        <p>Click on login to log into your account</p>
      </div>
      <div>
        <b-button type="submit" class="button" @click="login">Login</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordChangeSuccess',
  data() {
    return {
      password: '',
    };
  },
  methods: {
    login() {
      this.$router.push('/user/login');
    },
  },
};
</script>
