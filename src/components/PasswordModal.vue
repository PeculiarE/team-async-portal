<template>
    <div class="password-modal">
            <modal name="forgot-password-modal">
                    <b-form class="form-body"
                    method="post"
                    @submit.prevent="getLink">
                        <p>Please enter your registered email address</p>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <b-form-input
                            id="input-1"
                            name="email"
                            type="text"
                            v-model="form.email"
                            @keydown.shift.tab.prevent="">
                            </b-form-input>
                        </div>
                        <div class="d-flex btn-body">
                            <button class="getLinkBtn" type="submit">Get Link</button>
                        </div>
                    </b-form>
                </modal>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PasswordModal',
  data() {
    return {
      form: {},
    };
  },
  methods: {
    ...mapActions(['resetPassword']),
    getLink() {
      this.resetPassword(this.form);
      this.form = {
        email: '',
      };
      this.$modal.hide('forgot-password-modal');
      setTimeout(() => { alert('Password reset link sent. Check your mailbox'); }, 3000);
    },
    show() {
      this.$modal.show('forgot-password-modal');

      this.$modal.hide('forgot-password-modal');
    },
  },
};
</script>

<style scoped>
.forgot-password_modal {
  height: 80px;
  width: 40%;
  margin: auto;
  text-align: left;
}
p {
  margin-top: 20px;
}
input {
  width: 70%;
  margin: auto;
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#input-1 {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
button{
width: 320px;
height: 40px;
background-color: #7557d3;
color: #fff;
font-size: 14px;
outline: none;
border: 1px solid #7557d3;
border-radius: 4px;
}
.btn-body{
justify-content: center;
}
</style>
