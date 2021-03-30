<template>
    <div class="forgot-password">
        <div class="form">
            <div class="header">
                <h1>Forgot Password</h1>
                <p>Please select option to send link to reset password</p>
            </div>
            <div class="box-1">
                <div class="email-icon">
                    <img src="../../assets/email-icon.svg" alt="email-icon">
                </div>
                <div class="email-texts">
                    <h4 class="purple-text">Reset via Email</h4>
                    <p>Password reset link will be sent to your<br>registered email address</p>
                </div>
                <div class="check-icon">
                    <img src="../../assets/mark.svg" alt="check-icon">
                </div>
            </div>
            <div class="box-2" @click="noSMS">
            <div class="box-2"  @click.prevent="noSMS">
                <div class="sms-icon">
                    <img src="../../assets/calling-icon.svg" alt="calling-icon">
                </div>
                <div class="sms-texts">
                    <h4>Reset via SMS</h4>
                    <p>Password reset link will be sent to your registered phone number</p>
                </div>
            </div>
            <!-- <button type="submit">Send Link</button> -->
            <PasswordModal />
            <div class="resend">
                <p>Didn't receive link? <a href="#" class="purple-text">Resend</a></p>
            </div>
        </div>
    </div>
</template>

<script>
import PasswordModal from '@/components/PasswordModal.vue';

export default {
  name: 'ForgotPassword',
  components: {
    PasswordModal,
  },
  data() {
    return {
      showModal: true,
    };
  },
  methods: {
    noSMS() {
      alert('This option is not available at the moment');
    },
  },
};
</script>

<style scoped>
.forgot-password {
    position: relative;
    width: 100%;
    height: 900px;
    margin: 0 auto;
}
.form {
    position: fixed;
    width: 614px;
    height: 500px;
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-radius: 8px;
    margin: auto;
    top: 0; left: 0; bottom: 0; right: 0;
    text-align: center;
    font-family: Lato;
    font-style: normal;
}
p {
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #B1B1B1;
}
.purple-text {
    color: var(--enyata-purple);
}
.header {
    padding-top: 34.4px;
}
.header h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    color: var(--text-primary);
}
.header p {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #7D7D7D;
}
.box-1, .box-2 {
    height: 130px;
    width: 498px;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    justify-content: center;
    align-items: center;
    margin: auto;
}
<<<<<<< HEAD
.box-1:hover, .box-2:hover {
    border: 1px solid var(--enyata-purple);
}
.box-1 {
    margin-top: 48px;
    margin-bottom: 24px;
}
.box-2 {
    margin-bottom: 25px;
}
.email-icon, .sms-icon, .check-icon {
    width: 48px;
    height: 48px;
    background: rgba(33, 31, 38, 0.05);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.check-icon {
    width: 24px;
    height: 24px;
    background: var(--enyata-purple);
    margin-right: 53px;
}
.email-icon, .sms-icon {
    margin-left: 28px;
}
.email-texts, .sms-texts {
    width: 245px;
    height: 42px;
    margin-left: 28px;
    text-align: left;
    margin-bottom: 23px;
}
h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #211F26;
}
button {
    width: 379px;
    height: 50px;
    color: #ffffff;
    background: var(--enyata-purple);
    margin-bottom: 28px;
    border: none;
}
.resend {
    margin-bottom: 50px;
}
</style>
