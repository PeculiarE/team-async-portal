<template>
  <div class="signup-form">
    <div class="grids">
        <b-form-group
          id="input-group-1"
          label="First Name"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Last Name"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Email Address"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            type="email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Phone Number"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            type="number"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Password"
          label-for="input-5"
        >
        <div class="signup-password">
            <b-form-input
            id="input-5"
            required
          ></b-form-input>
          <div class="eye-icon">
            <img src="../assets/eye-icon.svg" alt="Eye Icon">
          </div>
          </div>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Confirm Password"
          label-for="input-6"
        >
        <div class="signup-password">
            <b-form-input
            id="input-6"
            required
          ></b-form-input>
          <div class="eye-icon">
            <img src="../assets/eye-icon.svg" alt="Eye Icon">
          </div>
          </div>
        </b-form-group>
    </div>
    <div class="extras">
      <b-button block type="submit" variant="primary" class="button">Sign Up</b-button>
      <div class="already">
        Already have an account? <a href="">Sign In</a>
      </div>
   </div>
  </div>

</template>

<script>
export default {
  name: 'SignUpForm',
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
    border-radius: 4px;
    margin-bottom: 19px;
    width: 379px;
  }
  .signup-password{
    display: flex;
    align-items: center;
  }
  .eye-icon {
    width: 15px;
    height: 8.57px;
    /* opacity: 0.4; */
    margin-left: -30px;
    cursor: pointer;
    margin-top: -30px;
  }
  .eye-icon img {
    width: 100%;
    height: 100%;
  }
  .extras {
    width: 520px;
    height: 77px;
    margin: auto;
    margin-bottom: 155px;
  }
  .button {
    height: 50px;
    margin-top: 20px;
    background-color: var(--enyata-purple);
  }
  .already{
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    margin-top: 12px;
    width: 191px;
    height: 17px;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: var(--text-secondary-small);
  }
  .already a{
    text-decoration-line: underline;
    font-weight: 400;
    color: #030c22;
  }
</style>
