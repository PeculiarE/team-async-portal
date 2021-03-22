<template>
  <div class="question-container">
    <div>
      <p class="text-center italic mb-3">Question 1</p>
      <h5 class="text-center italic mb-5">What is the purpose of HDR technology?</h5>
    </div>

    <div>
        <b-form-group v-slot="{ ariaDescribedby }">
          <li class="mb-3 italic" v-for="(option, index) in options" :key="index">
            <b-form-radio v-model="selected"
            :aria-describedby="ariaDescribedby" value="index">
              {{ option }}
            </b-form-radio>
          </li>
        </b-form-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      options: [
        'A. To reduce the file size of images and videos.',
        'B. To speed up 3D rendering performance.',
        'C. To support higher video resolutions.',
        'D. To display more colors in images and videos.',
      ],
    };
  },
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
