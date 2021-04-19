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
          v-model="userDetails.email"
          required
        ></b-form-input>
      </b-form-group>

      <!-- <div class="small-inputs"> -->
        <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <div class="small-inputs">
          <div class="login-form-password">
          <b-form-input
          id="input-2"
          :type="showPassword ? 'text' : 'password'"
          v-model="userDetails.password"
          @keyup="validatePassword()"
          required
          ></b-form-input>
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
        </div>
      </b-form-group>
      <!-- </div> -->

      <b-form-valid-feedback style="font-size: 15px, margin-bottom: 20px" :state="loadingStatus">
       <b>Checking...please wait</b>
      </b-form-valid-feedback>

      <b-form-invalid-feedback style="font-size: 15px" :state="loginStatus">
       <b>{{ getResponseLogin.message }}</b>
      </b-form-invalid-feedback>
      <b-form-valid-feedback style="font-size: 15px" :state="loginStatus">
       <b>{{ getResponseLogin.message }}</b>
      </b-form-valid-feedback>

      <b-button block type="submit" variant="dark" class="button"
      :disabled="valid">Sign In</b-button>
      <div class="login-form-small-text">
        <span>Don't have an account yet? <a href="http://localhost:8080/signup">Sign Up</a></span>
        <span class="forgot-password"><a href="/forgot-password">Forgot Password?</a></span>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginFormUser',
  data() {
    return {
      userDetails: {
        email: '',
        password: '',
      },
      showPassword: false,
      feedbackPassword: null,
      loginStatus: null,
      loadingStatus: null,
      valid: true,
    };
  },
  computed: {
    ...mapGetters(['getResponseLogin', 'getUserDeetsApplicationStatus']),
  },
  watch: {
    getResponseLogin(val) {
      if (val.status === 'Success') {
        this.loadingStatus = null;
        this.loginStatus = true;
        this.populateUserDeets();
        setTimeout(() => {
          this.$router.push({ name: 'Dashboard' });
        }, 2000);
      } else {
        this.loadingStatus = null;
        this.loginStatus = false;
      }
    },
  },
  methods: {
    ...mapActions(['login', 'populateUserDeets']),
    validatePassword() {
      this.loginStatus = null;
      if (this.userDetails.password.length >= 8) {
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
      this.login(this.userDetails);
    },
  },
};
</script>

<style scoped>
.small-inputs {
  height: 41px;
}
  .login-form {
    width: 379px;
  }
  #input-group-1, #input-group-2 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
    text-align: left;
  }
  #input-1, #input-2 {
    width: 379px;
    height: 41px;
    border: 1.5px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 4px;
    margin-bottom: 19px;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .login-form-password {
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
    margin-top: 40px;
    background-color: var(--enyata-purple);
    border: none;
  }
  .login-form-small-text{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    font-family: Lato;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
  }
  .login-form-small-text a{
    text-decoration-line: underline;
    color: #1A2C56;
  }
  .forgot-password a{
    text-decoration: none;
  }
</style>
