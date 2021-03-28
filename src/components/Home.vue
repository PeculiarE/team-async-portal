<template>
  <div class="home">
    <div class="contents">
      <img class="img-fluid layer" src="../assets/home-layer.svg" alt="Layer" />
      <b-navbar toggleable="lg" type="light" variant="faded">
        <b-navbar-brand class="logo-img" href="#">
          <img src="../assets/enyata-logo.svg" alt="enyata logo" />
        </b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item pr-2 href="#">Home</b-nav-item>
            <b-nav-item pr-2 href="#">Sign In</b-nav-item>
            <b-nav-item pr="5" href="#">Register</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div class="row1 d-flex justify-content-between">
        <div class="main-texts">
          <h1 class="text-black main-text fw-bold">
            Ever had a Dream of<br />
            Becoming a Software<br /><span class="engr-text">Engineer</span>
          </h1>
          <p class="text-muted minor-text">
            Join Enyata Academy today and bring your long<br />awaiting dream to reality.
          </p>
          <b-button block type="submit" class="button"><a href="#">Register Now</a></b-button>
        </div>
        <div class="mentor">
          <img class="home-img w-100 d-none d-md-block" src="../assets/mentor-mentee.svg" />
        </div>
      </div>
      <div class="row2">
        <div d-flex justify-content-between>
          <span class="hr"></span>
          <span class="why-us">Why us?</span>
        </div>
        <b-row>
          <b-col class="grey-bg boxes">
            <h4 class="text-black text-left">Learn from the best</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation amet.
            </p>
          </b-col>
          <b-col class="boxes">
            <h4>100% online classes</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation amet.
            </p>
          </b-col>
          <b-col class="grey-bg boxes">
            <h4>Get paid while learning</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation amet.
            </p>
          </b-col>
          <b-col class="boxes">
            <h4>Work on real projects</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation amet.
            </p>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="footer p-0 m-auto text-center text-light">
      Copyright © Enyata 2021
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  font-family: Poppins;
  font-style: normal;
}
.layer {
  position: absolute;
  right: 0;
  max-width: 400px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.navbar {
  padding-top: 20px;
}
.nav-item {
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(33, 31, 38, 0.71);
}
.nav-item:hover {
  border: 1px solid rgba(117, 87, 211, 0.4);
  box-sizing: border-box;
  border-radius: 2px;
}
.contents {
  padding: 0 137px;
  height: 900px;
}
.row1 {
  box-sizing: border-box;
  margin-top: 100px;
}
.main-text {
  font-weight: bold;
  font-size: 40.9082px;
  line-height: 57px;
  letter-spacing: 0.035em;
  color: #211f26;
}
.engr-text {
  color: var(--enyata-purple);
}
.minor-text {
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: rgba(33, 31, 38, 0.71);
}
.mentor {
  right: 0;
  width: 370px;
}
button {
  width: 152px;
  height: 48px;
  background-color: var(--enyata-purple);
}
button a {
  color: #ffffff;
}
.hr {
  background-color: #f09000;
  width: 34px;
}
.why-us {
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #211f26;
  margin-bottom: 40px;
}
.row2 {
  margin-top: 179px;
}
.grey-bg {
    background-color: rgba(117, 87, 211, 0.1);
}
.boxes {
    width: 292px;
    height: 202px;
    justify-content: center;
}
h4 {
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #211f26;
}
.col p,
.footer {
  font-weight: normal;
  font-size: 14px;
  line-height: 156%;
  letter-spacing: 0.01em;
  color: rgba(33, 31, 38, 0.6);
}
.footer {
  background-color: var(--enyata-purple);
  width: 100%;
  margin-top: 0;
  height: 110px;
  align-items: center;
  justify-content: center;
}
</style>
