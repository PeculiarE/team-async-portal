<template>
  <div class="home">
    <div class="contents">
      <!-- <img class="img-fluid layer" src="../assets/home-layer.svg" alt="Layer" /> -->
      <b-navbar toggleable="lg" type="light" variant="faded">
        <b-navbar-brand class="logo-img" href="#">
          <img src="../assets/enyata-logo.svg" alt="enyata logo" />
        </b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/user/login">Sign In</b-nav-item>
            <!-- <b-nav-item v-if="batchEnded" href="/user/login">Sign In</b-nav-item> -->
            <b-nav-item v-if="openApplicationStatus" href="/signup">Register</b-nav-item>
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
            Join Enyata Academy today and bring your long<br />awaited dream to reality.
          </p>
          <b-button v-if="openApplicationStatus"
          block type="submit" class="button"><a href="/signup">Register Now</a></b-button>
          <p id="closed-applications" v-else>Applications are currently closed!</p>
        </div>
        <div class="mentor">
          <img class="home-img w-100 d-none d-md-block" src="../assets/mentor-mentee.svg" />
        </div>
      </div>
      <div class="why" d-flex justify-content-between>
        <span class="hr"></span>
        <span class="why-us">Why us?</span>
      </div>
      <div class="row2">
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
      <p>Copyright © Enyata 2021</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['openApplicationStatus', 'batchEnded']),
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

.home {
  position: relative;
  width: 100%;
  /* width: 1440px;
  margin: 0 auto; */
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  background-image: url('../assets/home-layer.svg');
  background-position: top right;
  background-repeat: no-repeat;
}
/* .layer {
  position: absolute;
  right: 0;
  max-width: 570px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
} */
.navbar {
  padding: 20px 0;
}
.nav-item {
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(33, 31, 38, 0.71);
  margin-left: 30px;
}
.nav-item:hover {
  color: var(--enyata-purple);
  border: 1px solid rgba(117, 87, 211, 0.4);
  box-sizing: border-box;
  border-radius: 2px;
}
.contents {
  padding: 0 130px;
  width: 1440px;
  margin: 0 auto;
}
.row1 {
  box-sizing: border-box;
}
.main-text {
  margin-top: 190px;
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
  position: relative;
  width: 500px;
  height: 350px;
  margin-top: 122px;
}
button {
  width: 152px;
  height: 48px;
  background-color: var(--enyata-purple);
  border: none;
}
button:hover {
  background-color: var(--enyata-purple);
}
button a {
  color: #ffffff;
}
button:hover {
  background-color: var(--enyata-purple);
}
.why {
  width: 156px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: #b3aaca;
}
.hr {
  background-color: #f09000;
  width: 34px;
  height: 2px;
}
.row2 {
  margin-top: 25px;
}
.grey-bg {
    background-color: rgba(117, 87, 211, 0.1);
}
.boxes {
    width: 292px;
    height: 144px;
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
  height: 100px;
  display: flex;
  align-items: center
}
.footer p {
  margin: auto;
}
#closed-applications {
  color: red;
  font-size: 18px;
  font-weight: bold;
}
</style>
