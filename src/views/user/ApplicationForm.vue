<template>
  <div class="d-flex flex-column justify-content-center align-items-center m-5">
    <div class="d-flex flex-column justify-content-center align-items-center mb-2">
      <div>
        <img src="../../assets/logo.svg" alt="" />
      </div>
      <div>
        <h3>enyata</h3>
      </div>
      <div>
        <p><i>Application Form</i></p>
      </div>
    </div>

    <div class="form-container p-5">
      <form enctype="multipart/form-data"
       @submit.prevent="apply">
        <!-- <div class="form-row justify-content-around d-flex mb-4">
            <div>
                <label for="upload-cv"
                class="justify-content-center d-flex align-items-center">
                + Upload CV</label>
            <input type="file" ref="cvFile"
             @change="fileSelected"
            :disabled="isSaving"  id="upload-cv" />
            </div>
            <div>
                <label for="upload-photo" class="justify-content-center d-flex align-items-center">
                + Upload Image</label>
            <input type="file" @change="fileChange($event.target.name, $event.target.files)"
            accept="image/*" :name="uploadedFieldName" id="upload-photo" />
            <small v-if="isSaving">Uploading...</small>
            </div>
        </div> -->
        <div>
            <div class="form-row justify-content-between mb-4">
          <div class="col-12 col-md-6">
            <label for="firstName">First Name</label>
            <input v-model="user.firstName" type="text" class="form-control" />
            <small>{{ errors.firstName }}</small>
          </div>
          <div class="col-12 col-md-6">
            <label for="lastName">Last Name</label>
            <input v-model="user.lastName" type="text" class="form-control" />
            <small>{{ errors.lastName }}</small>
          </div>
            </div>
            <div class="form-row justify-content-between mb-4">
            <div class="col-12 col-md-6">
                <label for="email">Email</label>
                <input v-model="user.email" type="text" class="form-control" />
            <small>{{ errors.email }}</small>
            </div>
            <div class="col-12 col-md-6">
                <label for="dob">Date of Birth</label>
                <input v-model="user.dob" type="text"
                class="form-control" placeholder="yyyy-mm-dd" />
            <small>{{ errors.dob }}</small>
            </div>
            </div>
            <div class="form-row justify-content-between mb-4">
            <div class="col-12 col-md-6">
                <label for="address">Address</label>
                <input v-model="user.address" type="text" class="form-control" />
            <small>{{ errors.address }}</small>
            </div>
            <div class="col-12 col-md-6">
                <label for="university">University</label>
                <input v-model="user.university" type="text" class="form-control" />
            <small>{{ errors.university }}</small>
            </div>
            </div>
            <div class="form-row justify-content-between mb-3">
            <div class="col-12 col-md-6">
                <label for="course">Course of Study</label>
                <input v-model="user.course" type="text" class="form-control" />
            <small>{{ errors.course }}</small>
            </div>
            <div class="col-12 col-md-6">
                <label for="cgpa">CGPA</label>
                <input v-model="user.cgpa" type="text" placeholder="5.00" class="form-control" />
            <small>{{ errors.cgpa }}</small>
            </div>
            </div>
        </div>
        <div class="form-row justify-content-center">
          <button type="submit" class="btn d-flex text-center mt-5 align-items-center
          justify-content-center text-white">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import upload from './fileUploadService';

import {
  validateTextField,
  validateEmail,
  validateDob,
  validateCgpa,
} from './validation';

const STATUS_START = 0;
const STATUS_SAVING = 1;
const STATUS_FAILED = 2;
const STATUS_SUCCESS = 3;

export default {
  name: 'ApplicationForm',
  data() {
    return {
      uploadError: null,
      currentStatus: null,
      uploadedFile: [],
      uploadedFieldName: 'photos',
      user: {
        cv: '',
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        address: '',
        university: '',
        course: '',
        cgpa: '',
      },
      valid: true,
      errors: {},
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_START;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    },
  },
  methods: {
    reset() {
      this.uploadedFile = [];
      this.uploadError = null;
      this.currentStatus = STATUS_START;
    },

    save(formData) {
      this.currentStatus = STATUS_SAVING;
      upload(formData)
        .then((x) => {
          this.uploadedFile = [].concat(x);
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch((err) => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },

    fileChange(fieldName, fileList) {
      const formData = new FormData();
      if (!fileList.length) return;
      formData.append(fieldName, fileList[0], fileList[0].name);
      this.save(formData);
      console.log(fileList.name);
    },

    mounted() {
      this.reset();
    },
    apply() {
      this.errors = {};
      const {
        firstName, lastName, email, dob, address, university, course, cgpa,
      } = this.user;
      const validFirstName = validateTextField(firstName);
      this.errors.firstName = validFirstName.error;
      if (this.valid) {
        this.valid = validFirstName.valid;
      }

      const validLastName = validateTextField(lastName);
      this.errors.lastName = validLastName.error;
      if (this.valid) {
        this.valid = validLastName.valid;
      }

      const validEmail = validateEmail(email);
      this.errors.email = validEmail.error;
      if (this.valid) {
        this.valid = validEmail.valid;
      }

      const validDob = validateDob(dob);
      this.errors.dob = validDob.error;
      if (this.valid) {
        this.valid = validDob.valid;
      }

      const validAddress = validateTextField(address);
      this.errors.address = validAddress.error;
      if (this.valid) {
        this.valid = validAddress.valid;
      }

      const validUniversity = validateTextField(university);
      this.errors.university = validUniversity.error;
      if (this.valid) {
        this.valid = validUniversity.valid;
      }

      const validCourse = validateTextField(course);
      this.errors.course = validCourse.error;
      if (this.valid) {
        this.valid = validCourse.valid;
      }

      const validCgpa = validateCgpa(cgpa);
      this.errors.cgpa = validCgpa.error;
      if (this.valid) {
        this.valid = validCgpa.valid;
      }

      if (this.valid) {
        console.log(JSON.stringify(this.user));
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 965px;
  height: 645px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #2B3C4E;
  overflow: hidden;
}

p {
    font-size: 24px;
}

h3 {
    font-size: 32px;
}
label {
 margin-left: 25px;
}

label[for="upload-photo"], label[for="upload-cv"], input[type="file"] {
   cursor: pointer;
   border-radius: 3px;
   border: 1.5px dashed #2B3C4E;
   width: 211px;
   height: 49.97px;
}

#upload-photo, #upload-cv {
   opacity: 0;
   position: absolute;
   z-index: -1;
}

input {
    border: 1.5px solid #2B3C4E;
    outline: none;
    margin: auto;
    border-radius: 4px;
    width: 379px;
    height: 41px;
}

small {
  margin: 25px;
  color: red;
}

button {
    background-color: #2B3C4E;
    width: 379px;
    height: 50px
}

@media only screen and (max-width: 768px) {
}
</style>
