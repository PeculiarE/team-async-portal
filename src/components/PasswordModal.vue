<template>
<div>
            <div class=" d-flex btn" @click.capture="show">
            <button>Send Link</button>
            </div>
            <modal name="forgot-password-modal" @append="opened">
                <b-form class="form-body" id ="modalForm" method="post" @submit.prevent="sendLink">
                    <p>Please enter your registered email address</p>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <b-form-input
                        class="input"
                        name="email"
                        type="email"
                        ref="email"
                        @keydown.shift.tab.prevent="">
                        </b-form-input>
                    </div>
                    <div class="d-flex btn-body">
                        <button class="getLinkBtn" type="submit"
                        >Get Link</button>
                    </div>
                </b-form>
            </modal>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
      },
    };
  },
  methods: {
    ...mapActions(['resetPassword']),
    sendLink() {
      this.resetPassword(this.form);
      this.form = {
        email: '',
      };
      this.$modal.hide('forgot-password-modal');
    },
    show() {
      this.$modal.show('forgot-password-modal');
    },
    opened() {
      this.$refs.email.focus();
    },
    hide() {
      this.$modal.hide('forgot-password-modal');
    },
  },
};
</script>

<style scoped>
.form-body{
    padding: 50px;
    justify-content: center;
}
p, label{
    font-size: 14px;
    font-weight: 700;
    font-style: bold;
    color: #2b3c4e;
}
.btn{
    margin-top: 20px;
    justify-content: center;
}
button, .getLinkBtn{
    /* width: 379px;
    height: 50px; */
    background-color: #7557d3;
    color: #fff;
    font-size: 20px;
    border-radius: 4px;
}
.btn-body{
    justify-content: center;
}
</style>
