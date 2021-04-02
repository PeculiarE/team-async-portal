<template>
    <div>
        <div class=" d-flex btn" @click.capture="show">
        <button>Get Link</button>
            </div>
                <modal name="forgot-password-modal">
                    <b-form class="form-body"
                    method="post"
                    @submit.prevent="getLink">
                        <p>Please enter your registered email address</p>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <b-form-input
                            class="input"
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
    },
    show() {
      this.$modal.show('forgot-password-modal');

      this.$modal.hide('forgot-password-modal');
    },
  },
};
</script>
