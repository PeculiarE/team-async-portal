<template>
  <div class="row g-0" style="overflow: hidden">
    <div class="col-3 w-100 px-0">
      <Sidebar :assessmentMenuSelected="assessmentMenuSelected" />
    </div>
    <div class="col-9 px-0 mt-4">
      <div class="row my-5">
        <div class="col-8">
          <p class="p1">Take Assessment</p>
          <p class="p2">
            <i
              >Click the button below to start assessment, you have limited time
              for this test</i
            >
          </p>
        </div>
        <div class="col-4 d-flex flex-column align-items-center">
                <div class="col-9 offset-1 px-0">
                    <span class="text-start">Timer</span>
                    <p class="p3">00<span>min</span> 000<span>sec</span></p>
                </div>
        </div>
      </div>
      <div class="row">
        <div class="col-9 offset-1 d-flex justify-content-center mt-5">
          <div class="row d-flex flex-column align-items-center">
            <img src="../../assets/hourglass-take-assessment.svg" alt=""
            class="mb-4"/>
            <p v-if="getUserDeetsStatus === 'Declined' || 'Pending'" class="text-center mb-3">
            Either you've taken the test before or your application has been declined or is pending.
            </p>
            <p v-else-if="getUserDeetsStatus === 'Approved'
              && alreadySet === false && testTaken === false" class="text-center mb-3">
              We have some days left until you can take assessment. <br />
              Watch this space.
            </p>
              <p v-else-if="getUserDeetsStatus === 'Approved'
              && alreadySet === true && testTaken === false" class="mb-2">
              Your assessment questions are ready. Click the button below to take assessment.
            </p>
            <p v-else class="mb-2">
              Best of luck in your concluded assessment.
            </p>
            <b-button
              id="enabled-btn"
              type="submit"
              class="text-white button"
              @click="quizPage"
              v-if="getAdminQuestions.length && getUserDeetsStatus === 'Approved'"
            >
              Take Assessment
            </b-button>
            <b-button
              type="submit"
              class="text-white button"
              @click="quizPage"
              disabled
              v-else
            >
              Take Assessment
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Sidebar from '@/components/Sidebar.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TakeAssessment',
  components: {
    Sidebar,
  },
  // :disabled="(getUserDeetsStatus === 'Declined' || 'Pending')
  //             || alreadySet === false || testTaken === true"
  data() {
    return {
      assessmentMenuSelected: false,
      questions: [],
      alreadySet: false,
      testTaken: false,
    };
  },
  computed: {
    ...mapGetters(['openApplicationStatus', 'getAdminQuestions', 'getUserDeetsStatus']),
  },
  methods: {
    ...mapActions(['populateUserDeets']),
    quizPage() {
      this.$router.push({ name: 'Questions' });
    },

    async checkQuestionsByBatchInDB() {
      if (localStorage.getItem('loginToken')) {
        const token = localStorage.getItem('loginToken');
        await axios({
          method: 'get',
          url: 'http://localhost:3000/user/assessment_questions',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          // eslint-disable-next-line consistent-return
          .then((response) => {
            console.log(response.data.data);
            this.questions = response.data.data;
            if (this.questions.length) {
              this.alreadySet = true;
            }
            console.log(this.questions);
          })
          .catch((error) => console.log(error))
          .finally(() => {});
      }
    },

    async getUserTestScore() {
      if (localStorage.getItem('loginToken')) {
        const token = localStorage.getItem('loginToken');
        console.log(token);
        await axios({
          method: 'get',
          url: 'https://async-backend.herokuapp.com/user/test_score',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            this.testScore = response.data.data.test_score;
            if (this.testScore !== null) {
              this.testTaken = true;
            }
          })
          .catch((error) => { console.log(error); })
          .finally(() => {});
      }
    },
  },
  mounted() {
    this.assessmentMenuSelected = true;
    this.populateUserDeets();
    this.checkQuestionsByBatchInDB();
    this.getUserTestScore();
    console.log(this.getUserDeetsStatus);
  },
  mounted() {
    this.populateUserDeets();
    this.assessmentMenuSelected = true;
  },
};
</script>

<style scoped>
.p1 {
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
}
.p2 {
    font-weight: 500;
    font-size: 16px;
}
.p3 {
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
}
span {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
}
.button {
    width: 205px;
    height: 41px;
}
#enabled-btn {
  background-color: var(--enyata-purple);
}
</style>
