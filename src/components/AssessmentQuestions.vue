<template>
  <div class="assessment-form mt-5">
    <h1>Compose Assessment</h1>
    <b-form>
      <p class="text-left">currentQuestion/{{ getQuestionCount }}</p>
      <div class="d-flex justify-content-evenly align-items-center">
        <div>
          <input type="file" hidden id="upload-btn" />
          <label for="upload-btn"
            ><small class="mr-3">+</small>Choose file</label
          >
        </div>
        <div class="ml-5">
          <b-form-group id="correctOption" label="correctOption" label-for="correctOption">
            <b-form-input id="inputCorrectOption" type="text"
            required
            v-model="getSingleQuestion.correctOption"></b-form-input>
        </b-form-group>
        </div>
        </div>
      <b-form-group
        label="Question"
        label-for="textarea"
        id="textarea-label"
        rows="8"
      >
        <b-form-textarea id="textarea" v-model="getSingleQuestion.question"></b-form-textarea>
      </b-form-group>
      <div class="d-flex justify-content-between">
        <b-form-group id="input-group-1" label="Option A" label-for="input-1">
            <b-form-input id="input-1" type="text" required
            v-model="getSingleQuestion.optionA"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Option B" label-for="input-2">
            <b-form-input id="input-2" required
            v-model="getSingleQuestion.optionB"></b-form-input>
        </b-form-group>
      </div>
      <div class="d-flex justify-content-between">
        <b-form-group id="input-group-3" label="Option C" label-for="input-3">
            <b-form-input id="input-3" type="text" required
            v-model="getSingleQuestion.optionC"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" label="Option D" label-for="input-4">
            <b-form-input id="input-4" required
            v-model="getSingleQuestion.optionD"></b-form-input>
        </b-form-group>
      </div>
      <div class="btn-grp d-flex justify-content-between">
        <b-button id="prev-btn" variant="dark">Previous</b-button>
        <b-button id="next-btn" variant="dark" @click="next">Next</b-button>
      </div>
      <div class="text-center">
        <b-button id="finish-btn" type="submit" variant="dark"
        @click="finish">Finish</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AssessmentQuestions',
  data() {
    // on clicking next, pushes all deets into object.
    return {
      currentQuestion: 0,
      totalQuestions: 0,
    };
  },
  computed: {
    ...mapGetters(['getSingleQuestion', 'getQuestionCount']),
  },
  methods: {
    ...mapActions(['adminNextQuestionButton', 'adminFinishSettingQuestions']),

    next() {
      this.adminNextQuestionButton();
    },
    finish() {
      this.adminFinishSettingQuestions();
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
}
#textarea {
  border: 1.5px solid #2B3C4E;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 19px;
  background-color: #ffffff;
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
#finish-btn {
  height: 41px;
  width: 205px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}
</style>
