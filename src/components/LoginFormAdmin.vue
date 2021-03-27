<template>
  <div class="login-form">
    <b-form @submit.prevent="loginNow">
      <b-form-group
        id="input-group-1"
        label="Email Address"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          v-model="adminDetails.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <div class="login-form-password">
          <b-form-input
          id="input-2"
          :type="showPassword ? 'text' : 'password'"
          v-model="adminDetails.password"
          @keyup="validatePassword()"
          required
        > </b-form-input>
        <span @click="togglePassword" v-show='showPassword'>
            <i class="fas fa-eye-slash"></i>
          </span>
          <span @click="togglePassword" v-show="!showPassword">
            <i class="fas fa-eye"></i>
          </span>
        </div>
        <b-form-invalid-feedback :state="feedbackPassword">
          Minimum of 8 characters.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="feedbackPassword">
        </b-form-valid-feedback>
      </b-form-group>

       <b-form-invalid-feedback style="font-size: 15px" :state="loginStatus">
       <b>{{ getResponseAdminLogin.message }}</b>
      </b-form-invalid-feedback>
      <b-form-valid-feedback style="font-size: 15px" :state="loginStatus">
       <b>{{ getResponseAdminLogin.message }}</b>
      </b-form-valid-feedback>

      <b-button block type="submit" class="button" :disabled="valid">Sign In</b-button>
      <div class="login-form-small-text">
        <span>Forgot Password?</span>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginFormAdmin',
  data() {
    return {
      adminDetails: {
        email: '',
        password: '',
      },
      showPassword: false,
      feedbackPassword: null,
      loginStatus: null,
      valid: true,
    };
  },
  computed: {
    ...mapGetters(['getResponseAdminLogin']),
  },
  watch: {
    getResponseAdminLogin(val) {
      if (val.status === 'Success') {
        this.loginStatus = true;
        setTimeout(() => {
          this.$router.push({ name: 'AdminDashboard' });
        }, 2000);
      } else {
        this.loginStatus = false;
      }
    },
  },
  methods: {
    ...mapActions(['adminLogin']),
    validatePassword() {
      if (this.adminDetails.password.length >= 8) {
        this.feedbackPassword = true;
        this.valid = false;
        return this.feedbackPassword;
      }
      this.feedbackPassword = false;
      this.valid = true;
      return this.feedbackPassword;
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    loginNow() {
      this.adminLogin(this.adminDetails);
    },
  },
};
</script>

<style scoped>
  .login-form {
    width: 379px;
  }
  #input-group-1, #input-group-2 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    text-align: left;
  }
  #input-1, #input-2 {
    width: 379px;
    height: 41px;
    border: 1.5px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 4px;
    margin-bottom: 19px;
    background-color: #111E2B;
    color: #FFFFFF;
  }
  .login-form-password{
    display: flex;
    align-items: center;
  }
  .login-form-password span {
    cursor: pointer;
    margin-top: -15px;
  }
  .fa-eye, .fa-eye-slash {
    font-size: 13px;
    margin-left: -30px;
    color: #b8b8b9;
  }
  .button {
    height: 50px;
    margin-top: 20px;
    background-color: #FFFFFF;
    color: #2b3c4e;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  .login-form-small-text{
    text-align: right;
    margin-top: 12px;
  }
  span {
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }
</style>
