<template>
  <div>
    <div class="wrapper">
      <div class="user-login-icon mb-4">
        <img alt="Enyata logo" src="../../assets/enyata-logo.svg">
      </div>
      <div>
        <p v-if="checking">Checking...</p>
        <div v-if="checked">
        <h3 class="mb-2">Email has been successfully verified!</h3>
        <h5>You would be automatically redirected to the login page.</h5>
        <h6>Not redirecting? <a href="/user/login">Click here to login.</a></h6>
        </div>
        <h6 v-else class="mb-2" style="color: red"> {{getResponseRegister.message}}! </h6>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PasswordChangeSuccess',
  data() {
    return {
      password: '',
      checking: true,
      checked: null,
    };
  },
  computed: {
    ...mapGetters(['getResponseRegister']),
  },
  watch: {
    getResponseRegister(val) {
      if (val.status === 'Success') {
        this.checking = false;
        this.checked = true;
        setTimeout(() => {
          this.$router.push({ name: 'UserLogin' });
        }, 3000);
      } else {
        this.checking = false;
        this.checked = false;
      }
    },
  },
  methods: {
    ...mapActions(['verify']),
  },
  mounted() {
    // console.log(this.$route.params.token);
    this.verify(this.$route.params.token);
  },
};
</script>

<style scoped>
.wrapper {
  /* height: 350px; */
  width: 67%;
  padding: 20px;
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
.user-login-icon {
    width: 110.1px;
    height: 20.84px;
    text-align: center;
    margin: auto;
}
.user-login-icon img {
    height: 100%;
    width: 100%;
}
button {
  background: var(--enyata-purple);
  color: white;
  width: 100px;
  margin-top: 20px;
}
button:hover {
  background: var(--enyata-purple);
  border: none;
}
a, p {
    color: var(--enyata-purple);
    font-weight: bold;
}
</style>
