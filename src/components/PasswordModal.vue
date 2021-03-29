<template>
    <div>
      <modal name="forgot-pass-modal" @append="opened">
        <b-form
        class="form-body"
        id ="modalForm"
        method="post"
        @submit.prevent="sendLink">
            <p>Kindly input your email address below.</p>
            <div class="form-group">
                <label for="email">Email Address</label>
                <b-form-input
                id="inline-form-input-email"
                class="input"
                name="email"
                type="text"
                ref="email"
                v-model="form.email">
                </b-form-input>
            </div>
            <div class="d-flex btn-body">
                <button class="ok-btn" type="submit">OK</button>
            </div>
        </b-form>
      </modal>
    </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show('forgot-pass-modal');
    },
    opened() {
      this.$refs.email.focus();
    },
    hide() {
      this.$modal.hide('forgot-pass-modal');
    },
  },
};
</script>

<style scoped>
/* .form-body{
    padding: 30px;
    justify-content: center;
}
p, label{
    font-size: 14px;
    font-weight: 700;
    font-style: bold;
    color: #2b3c4e;
}
label{
    font-weight: 400;
    font-style: normal;
}
.btn{
    margin-top: 48px;
    justify-content: center;
}
button, .ok-btn{
    width: 379px;
    height: 50px;
    background-color: #7557d3;
    color: #fff;
    font-size: 14px;
    outline: none;
    border: 1px solid #7557d3;
    border-radius: 4px;
}
.btn-body{
    justify-content: center;
} */
</style>
