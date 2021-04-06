<template>
  <div class="question-container">
    <div>
      <p class="text-center italic mb-3">Question {{ question_number }}</p>
      <h5 class="text-center italic mb-5">{{ question }}</h5>
    </div>

    <div>
        <b-form-group v-slot="{ ariaDescribedby }">
          <li class="mb-3 italic" v-for="(item, index) in options" :key="index">
            <b-form-radio v-model="selected" name="options"
            :aria-describedby="ariaDescribedby" value="index">
              {{ item }}
            </b-form-radio>
          </li>
        </b-form-group>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  props: ['question_number', 'question', 'options'],
  data() {
    return {
      selected: '',
    };
  },
  // methods: {
  //   ...mapActions(['getAllQuestionsByBatchInDB']),
  // },
  // mounted() {
  //   this.getAllQuestionsByBatchInDB();
  // },
};
</script>

<style scoped>
.question-container {
  height: 45vh;
}
input[type="radio"] {
  border: 1px solid #2b3c4e;
  padding: 0.5em;
  -webkit-appearance: none;
  margin: 2px;
  width: 3px;
  height: 3px;
  position: relative;
}
.selected_option {
  background-color: #31d283;
}
li {
  list-style-type: none;
}
.italic {
  font-style: italic;
}
</style>
