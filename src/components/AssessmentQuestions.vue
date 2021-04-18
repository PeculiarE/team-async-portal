<template>
  <div class="assessment-form mt-5">
    <h1>Compose Assessment</h1>

    <div v-show="!alreadySet">
      <b-form v-if="newQuestion === true" >
      <p class="text-left">{{ getQuestionCount + 1 }}/{{ getTotalQuestionCount + 1 }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <VueFileAgent
            ref="vueFileAgent"
            :theme="'list'"
            :multiple="false"
            :meta="true"
            :accept="'image/*'"
            :maxSize="'2MB'"
            :maxFiles="1"
            :helpText="'+ Choose file'"
            :errorText="{
              type: 'Invalid file type. Only images allowed',
              size: 'Files should not exceed 2MB in size',
            }"
            @select="questionFileSelected($event)"
            v-model="singleQuestion.file"
            disabled
          ></VueFileAgent>
          <small>{{ errors.file }}</small>
        </div>
        <div class="ml-5">
          <b-form-group id="correctOption" label="Correct Option" label-for="correctOption">
            <b-form-select v-model="singleQuestion.correctOption"
          :options="options" class="w-100 h-50" required></b-form-select>
        <small>{{ errors.correctOption }}</small>
        </b-form-group>
        </div>
        </div>
      <b-form-group
        label="Question"
        label-for="textarea"
        id="textarea-label"
        rows="8"
      >
        <b-form-textarea id="textarea" v-model="singleQuestion.question"></b-form-textarea>
        <small>{{ errors.question }}</small>
      </b-form-group>
      <div class="d-flex justify-content-between">
        <b-form-group id="input-group-1" label="Option A" label-for="input-1">
            <b-form-input id="input-1" type="text" required
            v-model="singleQuestion.optionA" value="a"></b-form-input>
          <small>{{ errors.optionA }}</small>
        </b-form-group>
        <b-form-group id="input-group-2" label="Option B" label-for="input-2">
            <b-form-input id="input-2" required
            v-model="singleQuestion.optionB" value="b"></b-form-input>
          <small>{{ errors.optionB }}</small>
        </b-form-group>
      </div>
      <div class="d-flex justify-content-between">
        <b-form-group id="input-group-3" label="Option C" label-for="input-3">
            <b-form-input id="input-3" type="text" required
            v-model="singleQuestion.optionC" value="c"></b-form-input>
          <small>{{ errors.optionC }}</small>
        </b-form-group>
        <b-form-group id="input-group-4" label="Option D" label-for="input-4">
            <b-form-input id="input-4" required
            v-model="singleQuestion.optionD" value="d"></b-form-input>
          <small>{{ errors.optionD }}</small>
        </b-form-group>
      </div>
      <div class="btn-grp d-flex justify-content-between">
        <b-button id="prev-btn" variant="dark" :disabled="getQuestionCount === 0" @click="prev">
          Previous</b-button>
        <b-button id="next-btn" variant="dark" @click="next">Next</b-button>
      </div>
    </b-form>

    <b-form v-else>
      <p class="text-left">{{ getQuestionCount + 1 }}/{{ getTotalQuestionCount + 1 }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <VueFileAgent
            ref="vueFileAgent"
            :theme="'list'"
            :multiple="false"
            :meta="true"
            :accept="'image/*'"
            :maxSize="'2MB'"
            :maxFiles="1"
            :helpText="'+ Choose file'"
            :errorText="{
              type: 'Invalid file type. Only images allowed',
              size: 'Files should not exceed 2MB in size',
            }"
            @select="questionFileSelected($event)"
            v-model="this.getAdminQuestions[getQuestionCount].file"
            disabled
          ></VueFileAgent>
          <small>{{ errors.file }}</small>
        </div>
        <div class="ml-5">
          <b-form-group id="correctOption" label="correctOption" label-for="correctOption">
            <b-form-select v-model="singleQuestion.correctOption"
          :options="options" class="w-100 h-50" required></b-form-select>
        <small>{{ errors.correctOption }}</small>
        </b-form-group>
        </div>
        </div>
      <b-form-group
        label="Question"
        label-for="textarea"
        id="textarea-label"
        rows="8"
      >
        <b-form-textarea id="textarea"
        v-model="this.getAdminQuestions[getQuestionCount].question">
        </b-form-textarea>
        <small>{{ errors.question }}</small>
      </b-form-group>
      <div class="d-flex justify-content-between">
        <b-form-group id="input-group-1" label="Option A" label-for="input-1">
            <b-form-input id="input-1" type="text" required
            v-model="this.getAdminQuestions[getQuestionCount].optionA" value="a"></b-form-input>
          <small>{{ errors.optionA }}</small>
        </b-form-group>
        <b-form-group id="input-group-2" label="Option B" label-for="input-2">
            <b-form-input id="input-2" required
            v-model="this.getAdminQuestions[getQuestionCount].optionB" value="b"></b-form-input>
          <small>{{ errors.optionB }}</small>
        </b-form-group>
      </div>
      <div class="d-flex justify-content-between">
        <b-form-group id="input-group-3" label="Option C" label-for="input-3">
            <b-form-input id="input-3" type="text" required
            v-model="this.getAdminQuestions[getQuestionCount].optionC" value="c"></b-form-input>
          <small>{{ errors.optionC }}</small>
        </b-form-group>
        <b-form-group id="input-group-4" label="Option D" label-for="input-4">
            <b-form-input id="input-4" required
            v-model="this.getAdminQuestions[getQuestionCount].optionD" value="d"></b-form-input>
          <small>{{ errors.optionD }}</small>
        </b-form-group>
      </div>
      <div class="btn-grp d-flex justify-content-between">
        <b-button id="prev-btn" variant="dark" :disabled="getQuestionCount === 0"
        @click="prev">Previous</b-button>
        <b-button id="next-btn" variant="dark" @click="next2">Next</b-button>
      </div>
    </b-form>
     <div class="text-center">
        <b-button id="finish-btn" variant="dark"
        @click="finish">Finish</b-button>
      </div>
    </div>

    <div v-show="alreadySet" class="mt-5">
      <h2 style="color: var(--enyata-purple)">
        Assessments for this Batch has already been set.
      </h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

import axios from 'axios';

import {
  validateTextField,
} from '../views/user/validation';

export default {
  name: 'AssessmentQuestions',
  data() {
    return {
      currentQuestion: 0,
      totalQuestions: 0,
      options: [
        { value: 'a', text: 'a' },
        { value: 'b', text: 'b' },
        { value: 'c', text: 'c' },
        { value: 'd', text: 'd' },
      ],
      singleQuestion: {
        file: null,
        question: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: '',
      },
      errors: {},
      newQuestion: true,
      questions: [],
      alreadySet: false,
    };
  },
  computed: {
    ...mapGetters(['getAdminQuestions', 'getQuestionCount', 'getTotalQuestionCount']),
  },
  mounted() {
    this.checkQuestionsByBatchInDB();
  },
  methods: {
    ...mapMutations(['reduceQuestionCount', 'updateQuestionCount']),
    ...mapActions(['adminNextQuestionButton', 'adminFinishSettingQuestions']),
    async checkQuestionsByBatchInDB() {
      if (localStorage.getItem('loginAdminToken')) {
        const token = localStorage.getItem('loginAdminToken');
        await axios({
          method: 'get',
          url: 'http://localhost:3000/admin/assessment_questions',
          headers: {
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            console.log(response.data.data);
            this.questions = response.data.data;
            if (this.questions.length) {
              this.alreadySet = true;
            }
          })
          .catch((error) => console.log(error))
          .finally(() => {});
      }
    },

    questionFileSelected(newFile) {
      this.singleQuestion.file = newFile.length > 0 ? newFile[0] : null;
    },

    resetQuestionFields() {
      this.singleQuestion = {
        file: null,
        question: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: '',
      };
    },
    validateQuestionFields() {
      const {
        correctOption, question, optionA, optionB, optionC, optionD,
      } = this.singleQuestion;
      this.errors = {};
      const validCorrectOption = validateTextField(correctOption);
      this.errors.correctOption = validCorrectOption.error;
      console.log(correctOption);
      const validQuestion = validateTextField(question);
      this.errors.question = validQuestion.error;
      const validOptionA = validateTextField(optionA);
      this.errors.optionA = validOptionA.error;
      const validOptionB = validateTextField(optionB);
      this.errors.optionB = validOptionB.error;
      const validOptionC = validateTextField(optionC);
      this.errors.optionC = validOptionC.error;
      const validOptionD = validateTextField(optionD);
      this.errors.optionD = validOptionD.error;
      console.log(this.errors);
      return this.errors;
    },
    next() {
      this.validateQuestionFields();
      const {
        correctOption, question, optionA, optionB, optionC, optionD,
      } = this.errors;
      if (correctOption === null && question === null && optionA === null
      && optionB === null && optionC === null && optionD === null) {
        if (this.singleQuestion.file !== null) {
          const newSingleQuestion = { ...this.singleQuestion, file: this.singleQuestion.file.file };
          this.adminNextQuestionButton(newSingleQuestion);
          this.resetQuestionFields();
          this.errors = {};
          return;
        }
        const newSingleQuestion = { ...this.singleQuestion };
        this.adminNextQuestionButton(newSingleQuestion);
        this.resetQuestionFields();
        this.errors = {};
        console.log('it\'s working');
      }
    },
    prev() {
      this.errors = {};
      this.newQuestion = false;
      this.reduceQuestionCount(1);
      console.log(this.getQuestionCount);
      console.log(this.getAdminQuestions);
      console.log(this.getQuestionCount);
    },
    next2() {
      this.errors = {};
      this.updateQuestionCount(1);
      if (this.getQuestionCount === this.getAdminQuestions.length) {
        this.newQuestion = true;
      }
    },
    finish() {
      this.next();
      console.log(this.getAdminQuestions);
      console.log(this.errors);
      this.$router.push({ name: 'TimerSettings' });
    },
  },
};
</script>

<style scoped>
.for_questions {
  width: 50px;
}
.assessment-form h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.assessment-form p {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #2b3c4e;
}
label {
  font-size: 14px;
  line-height: 20px;
  color: #2b3c4e;
  background-color: #ffffff;
  padding: 2rem 10rem;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  border: 1.5px dashed #2b3c4e;
}
.custom-select {
  width: 70px;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
}

#input-group-1,
#input-group-2,
#input-group-3,
#input-group-4,
#correctAnswer,
#textarea-label {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
  text-align: left;
}
#input-1,
#input-2,
#input-3,
#input-4 {
  width: 379px;
  height: 41px;
  border: 1.5px solid #2B3C4E;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #ffffff;
  outline: none;
}
#textarea {
  border: 1.5px solid #2B3C4E;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 19px;
  background-color: #ffffff;
  outline: none;
}
.btn-grp {
  padding: 0 70px;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;
}
#prev-btn, #next-btn {
  height: 41px;
  width: 125px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}
small {
  color: red;
}
#finish-btn {
  height: 41px;
  width: 205px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}
#next-btn, #prev-btn, #finish-btn {
  background: var(--enyata-purple);
  border: none;
}

</style>
