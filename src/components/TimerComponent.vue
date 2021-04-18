<template>
    <div class="container">
      <div class="title">
        <h4>Timer Settings</h4>
        <p v-show="this.noQuestionsError">No assessment questions has been set.
          Kindly go set Assessment Questions</p>
      </div>
      <hr>
      <div class="set-divs">
        <div class="set-time">
          <h4>Set Time</h4>
          <div class="mr-2 d-inline">
            <select class="select-box" name="minutes" id="minutes" v-model="time">
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="59">55</option>
              <option value="60">60</option>
            </select>
            <span> Minutes</span>
          </div>
          <div class="d-inline">
            <select class="select-box" name="seconds" id="seconds" v-model="seconds">
              <option value="00">00</option>
              <option value="30">30</option>
            </select>
            <span> Seconds</span>
          </div>
          <p v-show="this.timeError">Please set the timer</p>
        </div>
        <div class="set-application-closure-date">
          <h4>Set Test Expiration Date</h4>
          <input type="date" class="date" v-model="dateOfExpiration">
          <p v-show="this.dateError">Please set test expiration date</p>
        </div>
      </div>
      <div class="save-btn" @click="send">
         Save
      </div>
    </div>
</template>

<script>
import axios from 'axios';

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TimerComponent',
  data() {
    return {
      time: null,
      seconds: null,
      timeError: false,
      dateOfExpiration: null,
      dateError: false,
      noQuestionsError: false,
    };
  },
  watch: {
    dateOfExpiration: {
      handler() {
        this.dateError = false;
      },
    },
  },
  computed: {
    ...mapGetters(['getSetTime', 'getAdminQuestions', 'getExpirationDate']),
  },

  methods: {
    ...mapMutations(['updateQuizSetTime', 'updateExpirationDate']),
    validateTime() {
      if (this.time === null || this.seconds === null) {
        this.timeError = true;
        return false;
      }
      const payload = (Number(this.time) * 60) + Number(this.seconds);
      this.updateQuizSetTime(payload);
      return true;
    },

    validateDate() {
      if (this.dateOfExpiration !== null) {
        const payload = this.dateOfExpiration;
        this.updateExpirationDate(payload);
        return true;
      }
      this.dateError = true;
      return false;
    },

    validateAdminQuestions() {
      if (this.getAdminQuestions.length) {
        return true;
      }
      this.noQuestionsError = true;
      return false;
    },

    reset() {
      this.time = null;
      this.seconds = null;
      this.dateOfExpiration = null;
      this.timeError = false;
      this.dateError = false;
      this.noQuestionsError = false;
    },

    async sendQuestionsAndAssessmentDeets(payload, payloadOne) {
      if (localStorage.getItem('loginAdminToken')) {
        const token = localStorage.getItem('loginAdminToken');
        const payloaddata = {
          adminQuestions: payload,
          assessmentDetails: payloadOne,
        };
        await axios.post('http://localhost:3000/adminquestions', payloaddata,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .catch((error) => console.log(error))
          .finally(() => {
            this.reset();
          });
      }
    },

    send() {
      if ((this.validateTime() === true)
      && (this.validateDate() === true)
      && (this.validateAdminQuestions() === true)) {
        const assessmentDetails = {};
        assessmentDetails.dateOfExpiration = this.dateOfExpiration;
        assessmentDetails.totalTime = this.getSetTime;
        assessmentDetails.totalQuestions = this.getAdminQuestions.length;
        localStorage.setItem('quizTime', this.getSetTime);
        this.sendQuestionsAndAssessmentDeets(this.getAdminQuestions, assessmentDetails);
      }
    },
  },
};
</script>

<style scoped>
.container {
  font-family: Lato;
  font-style: normal;
}
.title h4 {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4A4A4A;
}
.set-divs {
  display: flex;
  justify-content: space-between;
  margin-top: 99px;
}
.set-divs h4 {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  color: var(--text-main);
}
p {
  color: red;
}
.set-time h4 {
  margin-bottom: 20px;
}
input {
  margin-top: 20px;
  width: 215px;
  height: 44px;
  border: 3px solid var(--enyata-purple);
}
.custom-select {
  width: 70px;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
}
.save-btn {
  width: 127px;
  height: 38px;
  background: var(--enyata-purple);
  color: #ffffff;
  border: none;
  margin: auto;
  margin-top: 40px;
  text-align: center;
  padding-top: 5px;
}

.select-box {
  height: 44px;
  width: 50px;
  border: 3px solid var(--enyata-purple);
  outline: none;
  appearance: none;
  border-bottom: 2px solid rgba(117, 87, 211, 0.1);
  transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;
}

.select-box:hover, .select-box:focus, input:focus, input:hover  {
  color: white;
  background: var(--enyata-purple);
  border-bottom-color: #DCDCDC;
}
</style>
