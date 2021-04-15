<template>
  <div class='row g-0' style='overflow: hidden'>
    <div class='col-3 w-100 px-0'>
      <Sidebar />
    </div>
    <div class='col-9 px-0 mt-4'>
      <div class='row mt-5 mb-3'>
        <div class='col-8'>
          <p class='p1'>Take Assessment</p>
          <p class='p2'>
            <i
              >Click the finish button below to submit assessment, you can go
              back at any time to edit your answers.</i
            >
          </p>
        </div>
        <div class='col-4 d-flex flex-column align-items-center'>
          <div class='col-9 offset-1 px-0'>
            <span class='text-start'>Timer</span>
            <h3>{{ this.quizTime }} seconds left</h3>
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='col-8 offset-1 d-flex flex-column'>
          <div
            class='d-flex justify-content-center'
          >
          <template v-for="(item, index) in allQuestions">
            <UserQuestions
            v-show="index === currentQuestion"
            :key="index"
            :id="item.question_id"
            :question="item.question"
            :question_number="index + 1"
            :options="options[index]"
            @recordAnswers="storeAnswers"
            />
          </template>
          </div>
         <div class='d-flex justify-content-between'>
            <b-button type='submit' class='text-white button'
            :disabled="!hidePrevious" @click.prevent="prev">
              Previous
            </b-button>
            <b-button type='submit' class='text-white button' :disabled="!hideNext"
            @click.prevent="next"> Next </b-button>
          </div>
          <div class='d-flex justify-content-center'>
            <b-button @click='submitQuiz' class='text-white w-25'>
              Finish
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Sidebar from '@/components/Sidebar.vue';
import UserQuestions from '@/components/UserQuestions.vue';
import axios from 'axios';

export default {
  name: 'Questions',
  components: {
    Sidebar,
    UserQuestions,
  },
  data() {
    return {
      allQuestions: [],
      currentQuestion: 0,
      options: [],
      hidePrevious: false,
      hideNext: true,
      correctAnswers: [],
      answersObj: [],
      quizTime: null,
    };
  },

  computed: {
    ...mapGetters(['getAllQuestions', 'getLoginToken', 'getSetTime']),
  },
  methods: {
    ...mapMutations(['getTestScore']),
    // ...mapActions(['getAllQuestionsByBatchInDB']),
    storeAnswers(answer) {
      console.log(answer);
      const isAnswered = this.answersObj.findIndex((item) => item.id === answer.id);
      console.log(isAnswered);
      if (isAnswered < 0) {
        this.answersObj.push(answer);
        console.log(answer);
        console.log(this.answersObj);
      } else {
        const itemObj = this.answersObj[isAnswered];
        console.log(itemObj);
        itemObj.value = answer.value;
        console.log(this.answersObj);
      }
    },
    async submitQuiz() {
      [...this.allQuestions].forEach((item) => {
        const correctAnswersObj = {};
        correctAnswersObj.correct_option = item.correct_option;
        correctAnswersObj.question_id = item.question_id;
        this.correctAnswers.push(correctAnswersObj);
      });
      console.log(this.correctAnswers);
      console.log(this.answersObj);
      const payload = {
        chosenAnswers: this.answersObj,
        correctAnswers: this.correctAnswers,
      };
      console.log(payload);
      if (localStorage.getItem('loginToken')) {
        const token = localStorage.getItem('loginToken');
        console.log(token);
        await axios({
          method: 'post',
          url: 'http://localhost:3000/user/quiz_results',
          data: payload,
          headers: {
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        })
          .catch((error) => { console.log(error); })
          .finally(() => {
            this.$router.push({ name: 'SuccessPage' });
          });
      }
    },

    async getAllQuestionsByBatchInDB() {
      if (localStorage.getItem('loginToken')) {
        await axios({
          method: 'get',
          url: 'http://localhost:3000/user/assessment_questions',
          headers: {
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${this.getLoginToken}`,
          },
        })
          .then((response) => {
            console.log(response.data.data);
            this.allQuestions = response.data.data;
            this.options = [...this.allQuestions].map((item) => {
              const answers = [];
              answers.push(
                item.option_a,
                item.option_b,
                item.option_c,
                item.option_d,
              );
              return answers;
            });
            console.log(this.options);
            console.log(this.allQuestions);
          })
          .catch((error) => console.log(error))
          .finally(() => {});
      }
    },

    next() {
      if (this.currentQuestion < this.options.length - 1) {
        this.currentQuestion += 1;
        this.hideNext = true;
        this.hidePrevious = true;
      } else {
        this.hideNext = false;
        this.hidePrevious = true;
        alert('End of Test');
      }
    },

    prev() {
      if (this.currentQuestion !== 0) {
        this.currentQuestion -= 1;
        this.hidePrevious = true;
        this.hideNext = true;
      } else {
        this.hidePrevious = false;
        this.hideNext = true;
      }
    },

    async getQuizTime() {
      if (localStorage.getItem('loginToken')) {
        await axios({
          method: 'get',
          url: 'http://localhost:3000/user/quiz_time',
          headers: {
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${this.getLoginToken}`,
          },
        })
          .then((response) => {
            this.quizTime = response.data.data.total_time;
            console.log(this.quizTime);
            const timer = setInterval(() => {
              this.quizTime -= 1;
            }, 1000);
            return timer;
          }).catch((error) => console.log(error))
          .finally(() => {});
      }
    },
  },

  created() {
    this.getAllQuestionsByBatchInDB();
    this.getQuizTime();
  },
  // mounted() {
  //   if (this.getQuizTime() === timer) {
  //     if (this.quizTime === 0) {
  //       clearInterval(timer);
  //     }
  //   }
  // },
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
  width: 125px;
  height: 41px;
  background-color: #2b3c4e;
  border-color: #2b3c4e;
}
</style>
