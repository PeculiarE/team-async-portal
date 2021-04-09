<template>
  <div>
    <div class="wrapper">
      <div>
        <p>Password has been successfully changed</p>
        <h3>Sign in with your new password</h3>
      </div>
      <div>
        <b-button type="submit" class="button" @click="login">Sign In</b-button>
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

<style scoped>
.wrapper {
  height: 200px;
  width: 40%;
  padding: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: auto;
  margin-top: 100px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(80, 49, 158, 0.05);
  border-radius: 8px;
  font-family: Lato;
  font-style: normal;
}
button {
  background: var(--enyata-purple);
  color: white;
  width: 100px;
  margin-top: 20px;
}
</style>
