<template>
<div>
  <div class="wrapper">
    <h2>Reset Password</h2>
    <div >
      <b-form @submit.prevent = "resetPassword" method= 'put'>
        <b-form-group
        id="input-group-2"
        class="text-left label"
        >
          <b-form-input
            id="input-2"
            v-model="password"
            placeholder="Enter new password"
            type="password"
            data-toggle="password"
            required
          ></b-form-input>
          <br>
        </b-form-group>
        <div >
        <b-button type="submit" class="button" block variant="dark" >Change Password</b-button>
        </div>
      </b-form>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PasswordReset',
  data() {
    return {
      password: '',
    };
  },
  methods: {
    ...mapActions(['newPassword']),
    resetPassword() {
      console.log(this.password);
      console.log(this.$route.params.token);
      const obj = {
        password: this.password,
        token: this.$route.params.token,
      };
      this.newPassword(obj);
      this.$router.push('/changesuccess');
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 70%;
  width: 60%;
  margin: auto;
  text-align: center;
  margin: auto;
  margin-top: 100px;
}
form {
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  align-items: center;
  margin-top: 50px;
}
input {
  width: 400px;
  /* margin-top: 10px; */
  height: 50px;
}
button {
  width: 200px;
  height: 35px;
  background-color: #7557d3;
  color: #fff;
  font-size: 14px;
  outline: none;
  border: 1px solid #7557d3;
  border-radius: 4px;
}
</style>
