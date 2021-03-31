<template>
<div>
    <div class="wrapper">
      <div class="mainlogo">
        <img alt="Enyata logo" class="img-fluid" src="../assets/enyatalogo.svg">
      </div>
      <div>
        <h4><i>Reset Password</i></h4>
      </div>
    </div>
    <div class="row no-gutters justify-content-center mt-4">
      <div class="col-lg-4 mb-5">
      <b-form @submit.prevent="resetPassword" method= 'put'>
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
    },
  },
};
</script>

<style scoped>
/* .wrapper {
  max-width: 500px;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;
}
h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}
.mainlogo {
  width: 110px;
  height: 21px;
  margin-top: 173px;
  margin: 0 auto;
  margin-bottom: 16.13px;
}
.logo img {
  width: 100%;
  height: 100%;
}

h4 {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2B3C4E;
  margin-top: 24px;
}
.label {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
.button {
  background: #7557D3;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  height: 45px;
  border: none;
  margin-bottom: 12px;
}
a {
  text-decoration-line: underline;
}
input {
  border: 1.5px solid #BDBDBD;
  box-sizing: border-box;
  border-radius: 4px;

} */
</style>
