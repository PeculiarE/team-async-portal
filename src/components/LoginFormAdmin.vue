<template>
  <div class="login-form">
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email Address"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <div class="login-form-password">
          <b-form-input
          id="input-2"
          required
        ></b-form-input>
        <div class="eye-icon">
          <img src="../../src/assets/view-password-blue.svg" alt="show-password-icon">
        </div>
        </div>
      </b-form-group>
      <b-button block type="submit" class="button">Sign In</b-button>
      <div class="login-form-small-text">
        <span>Forgot Password?</span>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'LoginFormAdmin',
};
</script>

<style scoped>
  .login-form {
    width: 379px;
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
    background-color: #111E2B;
    color: #FFFFFF;
  }
  .login-form-password{
    display: flex;
    align-items: center;
  }
  .eye-icon {
    width: 15px;
    height: 9px;
    margin-left: -30px;
    cursor: pointer;
    margin-top: -30px;
  }
  .eye-icon img {
    width: 100%;
    height: 100%;
  }
  .button {
    height: 50px;
    margin-top: 20px;
    background-color: #FFFFFF;
    color: #2b3c4e;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  .login-form-small-text{
    text-align: right;
    margin-top: 12px;
  }
  span {
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }
</style>
