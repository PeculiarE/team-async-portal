<template>
<div>
    <div class="wrapper">
        <h1>Reset Password</h1>
    </div>
      <div >
      <b-form @submit.prevent = "resetPassword" method= 'put'>
        <b-form-group
        id="input-group-2"
        label="Password"
        label-for="input-2"
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
