<template>
<div>
  <div class="wrapper">
    <h2>Reset Password</h2>
    <div >
      <b-form @submit.prevent = "resetPassword" method= 'put'>
        <b-form-group
        id="input-group-1"
        class="text-left label"
        >
        <div class="password-div">
          <b-form-input
            id="input-1"
            placeholder="Enter new password"
            data-toggle="password"
            required
              @keyup="validatePassword()"
              :type="showPassword ? 'text' : 'password'"
              v-model="userDetails.password"
          ></b-form-input>
          <span @click="togglePassword" v-show='showPassword'>
              <i class="fas fa-eye-slash"></i>
            </span>
            <span @click="togglePassword" v-show="!showPassword">
              <i class="fas fa-eye"></i>
            </span>
        </div>
        <b-form-invalid-feedback :state="feedbackPassword">
              Password is weak.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="feedbackPassword">
              Password is strong!
          </b-form-valid-feedback>
        </b-form-group>

        <b-form-group
        id="input-group-2"
        class="text-left label">
          <div class="password-div">
          <b-form-input
            id="input-2"
            placeholder="Confirm new password"
            data-toggle="password"
            required
            :type="showConfirmPassword ? 'text' : 'password'"
              v-model="userDetails.confirmPassword"
              @keyup="checkPasswords()"
          ></b-form-input>
          <span @click="toggleConfirmPassword" v-show='showConfirmPassword'>
              <i class="fas fa-eye-slash"></i>
            </span>
            <span @click="toggleConfirmPassword" v-show="!showConfirmPassword">
              <i class="fas fa-eye"></i>
            </span>
        </div>
            <b-form-invalid-feedback :state="feedbackConfirmPassword">
            Passwords do not match
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="feedbackConfirmPassword">
            Passwords match!
          </b-form-valid-feedback>
          <br>
        </b-form-group>
        <div >
        <b-button type="submit"
        class="button" block variant="dark" :disabled="valid">Change Password</b-button>
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
      userDetails: {
        password: '',
        confirmPassword: '',
      },
      showPassword: false,
      showConfirmPassword: false,
      feedbackPassword: null,
      feedbackConfirmPassword: null,
      valid: true,
    };
  },
  computed: {
    changeState() {
      const {
        feedbackPassword,
        feedbackConfirmPassword,
      } = this;
      return {
        feedbackPassword,
        feedbackConfirmPassword,
      };
    },
  },
  watch: {
    changeState: {
      handler(val) {
        if (val.feedbackPassword && val.feedbackConfirmPassword) {
          this.valid = false;
          return this.valid;
        }
        this.valid = true;
        return this.valid;
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(['newPassword']),
    resetPassword() {
      console.log('dkjndk');
      console.log(this.userDetails.password);
      console.log(this.$route.params.token);
      const obj = {
        password: this.userDetails.password,
        token: this.$route.params.token,
      };
      this.newPassword(obj);
      this.$router.push('/changesuccess');
    },
    validatePassword() {
      const strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$^!%#*?&.,/+-_])[A-Za-z\d@$^!%#*?&.,/+-_]{8,}$/;
      if (this.userDetails.password.match(strongPassword)) {
        this.feedbackPassword = true;
        this.checkPasswords();
        return this.feedbackPassword;
      }
      this.feedbackPassword = false;
      this.checkPasswords();
      return this.feedbackPassword;
    },
    checkPasswords() {
      if (this.userDetails.password === this.userDetails.confirmPassword) {
        this.feedbackConfirmPassword = true;
        return this.feedbackConfirmPassword;
      }
      this.feedbackConfirmPassword = false;
      return this.feedbackConfirmPassword;
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
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
  height: 50px;
}
input-1, input-2{
    width: 379px;
    height: 41px;
    border: 1.5px solid #BDBDBD;
    outline: none;
    border-radius: 4px;
    margin-bottom: 19px;
    width: 379px;
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
button:disabled {
  background-color: #b5a3eb;
  border: none;
}
button:hover {
  background-color: #7557d3;
  border: none;
}
.fa-eye, .fa-eye-slash {
    font-size: 13px;
    margin-left: -30px;
    color: #b8b8b9;
}
.password-div{
    display: flex;
    /* flex-flow: column nowrap; */
    align-items: center;
  }
  .password-div span {
    cursor: pointer;
    /* margin-top: -10px; */
  }
  #input-1, #input-2 {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
