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
          @keyup="loginStatus = null"
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
        <b-form-invalid-feedback class="error" :state="feedbackPassword">
          Minimum of 8 characters.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="feedbackPassword">
        </b-form-valid-feedback>
      </b-form-group>

      <b-form-valid-feedback class="no-error" style="font-size: 15px" :state="loadingStatus">
       <b>Checking...please wait</b>
      </b-form-valid-feedback>

       <b-form-invalid-feedback class="error" style="font-size: 15px" :state="loginStatus">
       <b>{{ getResponseAdminLogin.message }}</b>
      </b-form-invalid-feedback>
      <b-form-valid-feedback class="no-error" style="font-size: 15px" :state="loginStatus">
       <b>{{ getResponseAdminLogin.message }}</b>
      </b-form-valid-feedback>

      <b-button block type="submit" class="button" :disabled="valid">Sign In</b-button>
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
      loadingStatus: null,
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
        this.loadingStatus = null;
        this.loginStatus = true;
        setTimeout(() => {
          this.$router.push({ name: 'AdminDashboard' });
        }, 2000);
      } else {
        this.loadingStatus = null;
        this.loginStatus = false;
      }
    },
  },
  methods: {
    ...mapActions(['adminLogin']),
    validatePassword() {
      this.loginStatus = null;
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
      this.loadingStatus = true;
      this.adminLogin(this.adminDetails);
    },
  },
};
</script>

<style scoped>
  .login-form {
    width: 379px;
    margin: auto;
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
    background-color: #7557D3;
    color: #FFFFFF;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
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
    color: #7557d3;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  span {
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }
  .error {
    color: yellow;
  }
  .no-error {
    color: white;
  }
</style>
