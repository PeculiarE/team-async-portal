<template>
  <div class="signup-form">
    <b-form v-if="confirmDetails" @submit.prevent="confirmPage">
      <div class="grids">
        <b-form-group
          id="input-group-1"
          label="First Name"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="text"
            v-model="userDetails.firstName"
            @keyup="validateFirstName()"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="feedbackFirstName">
            Your first name must have at least 2 characters and contain only letters.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="feedbackFirstName">
            Looks Good.
          </b-form-valid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Last Name"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            type="text"
            v-model="userDetails.lastName"
            @keyup="validateLastName()"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="feedbackLastName">
            Your last name must have at least 2 characters and contain only letters.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="feedbackLastName">
            Looks Good.
          </b-form-valid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Email Address"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            type="email"
            @keyup="feedbackEmail = true"
            v-model="userDetails.email"
            required
          ></b-form-input>
          <b-form-invalid-feedback style="font-size: 15px" :state="feedbackEmail">
            <b>{{getResponseRegister.message}}</b>
          </b-form-invalid-feedback>
          <b-form-valid-feedback style="font-size: 15px" :state="feedbackEmail">
          </b-form-valid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Phone Number"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            type="number"
            v-model="userDetails.phone"
            @keyup="validatePhoneNumber()"
            required
          ></b-form-input>
          <b-form-invalid-feedback :state="feedbackPhoneNumber">
            Your phone number must contain 7 - 15 digits
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="feedbackPhoneNumber">
            Looks Good.
          </b-form-valid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Password"
          label-for="input-5"
        >
          <div class="signup-password">
              <b-form-input
              id="input-5"
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
              Password is weak. A strong password has a minimum of 8 characters and
              contains at least one lowercase letter, one uppercase letter, one numeric
              digit, and one special character.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="feedbackPassword">
              Password is strong!
          </b-form-valid-feedback>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Confirm Password"
          label-for="input-6"
        >
          <div class="signup-password">
              <b-form-input
              id="input-6"
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="userDetails.confirmPassword"
              @keyup="checkPasswords()"
              required
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
            Passwords match
          </b-form-valid-feedback>
        </b-form-group>
      </div>
      <div class="extras">
        <b-button block type="submit" variant="primary" class="button" :disabled="valid">
          Sign Up
        </b-button>
        <div class="already">
          Already have an account? <a href="http://localhost:8080/user/login">Sign In</a>
        </div>
      </div>
    </b-form>
    <div v-else v-show="!successPage">
      <b-card class="mt-3" border-variant="dark" header="Confirm Your Details">
        <b-list-group class="m-0 mb-5 pl-5 text-left" flush>
          <b-list-group-item>First Name: <b>{{ userDetails.firstName }}</b></b-list-group-item>
          <b-list-group-item>Last Name: <b>{{ userDetails.lastName }}</b></b-list-group-item>
          <b-list-group-item>Email: <b>{{ userDetails.email }}</b></b-list-group-item>
          <b-list-group-item>Phone Number: <b>{{ userDetails.phone }}</b></b-list-group-item>
          <b-list-group-item>Password: <b>{{ userDetails.password }}</b></b-list-group-item>
        </b-list-group>
      </b-card>
      <div class="extras-two">
        <div class="d-flex justify-content-between">
          <b-button variant="primary" class="button" @click="confirmDetails = true">
            Go Back to Form
          </b-button>
          <b-button type="submit" variant="primary" class="button" @click="signUp">
            Confirm &amp; Sign Up
          </b-button>
        </div>
        <div class="already-two">
          Already have an account? <a href="http://localhost:8080/user/login">Sign In</a>
        </div>
      </div>
    </div>
    <div v-show="successPage">
      <h1>Congratulations! {{ getResponseRegister.message }}</h1>
      <h3>Kindly proceed to login</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SignUpForm',
  data() {
    return {
      userDetails: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      },
      showPassword: false,
      showConfirmPassword: false,
      feedbackFirstName: null,
      feedbackLastName: null,
      feedbackPassword: null,
      feedbackConfirmPassword: null,
      feedbackPhoneNumber: null,
      feedbackEmail: null,
      valid: true,
      confirmDetails: true,
      successPage: null,
    };
  },
  computed: {
    ...mapGetters(['getResponseRegister']),
    changeState() {
      const {
        feedbackFirstName,
        feedbackLastName,
        feedbackPassword,
        feedbackConfirmPassword,
        feedbackPhoneNumber,
        feedbackEmail,
      } = this;
      return {
        feedbackFirstName,
        feedbackLastName,
        feedbackPassword,
        feedbackConfirmPassword,
        feedbackPhoneNumber,
        feedbackEmail,
      };
    },
  },
  watch: {
    changeState: {
      handler(val) {
        if (val.feedbackFirstName && val.feedbackLastName && val.feedbackPassword
        && val.feedbackConfirmPassword && val.feedbackPhoneNumber && val.feedbackEmail) {
          this.valid = false;
          return this.valid;
        }
        this.valid = true;
        return this.valid;
      },
      deep: true,
    },
    getResponseRegister(val) {
      if (val.status === 'Success') {
        this.successPage = true;
        setTimeout(() => {
          this.$router.push({ name: 'UserLogin' });
        }, 2000);
      } else {
        this.confirmDetails = true;
        this.feedbackEmail = false;
      }
    },
  },
  methods: {
    ...mapActions(['register']),
    validateFirstName() {
      const letters = /^[A-Za-z]{2,}$/;
      if (this.userDetails.firstName.match(letters)) {
        this.feedbackFirstName = true;
        this.userDetails.firstName = this.userDetails.firstName.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
        return this.feedbackFirstName;
      }
      this.feedbackFirstName = false;
      return this.feedbackFirstName;
    },
    validateLastName() {
      const letters = /^[A-Za-z]{2,}$/;
      if (this.userDetails.lastName.match(letters)) {
        this.feedbackLastName = true;
        this.userDetails.lastName = this.userDetails.lastName.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
        return this.feedbackLastName;
      }
      this.feedbackLastName = false;
      return this.feedbackLastName;
    },
    validatePhoneNumber() {
      const phoneDigits = /^[0-9]{7,15}$/;
      if (this.userDetails.phone.match(phoneDigits)) {
        this.feedbackPhoneNumber = true;
        return this.feedbackPhoneNumber;
      }
      this.feedbackPhoneNumber = false;
      return this.feedbackPhoneNumber;
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
    confirmPage() {
      this.confirmDetails = false;
      this.successPage = false;
    },
    signUp() {
      const user = {
        fullName: `${this.userDetails.firstName} ${this.userDetails.lastName}`,
        email: this.userDetails.email,
        phone: this.userDetails.phone,
        password: this.userDetails.password,
      };
      this.register(user);
    },
  },
};
</script>

<style scoped>
  .grids {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 62px;
    /* margin-top: 394px; */
  }
  #input-group-1, #input-group-2, #input-group-3, #input-group-4, #input-group-5, #input-group-6 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: var(--text-secondary-small);
    text-align: left;
  }
  #input-1, #input-2, #input-3, #input-4, #input-5, #input-6 {
    width: 379px;
    height: 41px;
    border: 1.5px solid #BDBDBD;
    outline: none;
    border-radius: 4px;
    margin-bottom: 19px;
    width: 379px;
  }
  .signup-password{
    display: flex;
    align-items: center;
  }
  .signup-password span {
    cursor: pointer;
    margin-top: -15px;
  }
  .fa-eye, .fa-eye-slash {
    font-size: 13px;
    margin-left: -30px;
    color: #b8b8b9;
  }
  .extras, .extras-two {
    width: 520px;
    height: 77px;
    margin: auto;
    margin-bottom: 155px;
  }
  .button {
    height: 50px;
    margin-top: 20px;
    background-color: var(--enyata-purple);
    border: none;
  }
  .already, .already-two {
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: var(--text-secondary);
    margin: auto;
    margin-bottom: 10px;
  }
  .already a, .already-two a{
    text-decoration-line: underline;
    font-weight: 400;
    color: #030c22;
  }
</style>
