<template>
  <div class="container d-flex flex-column justify-content-center align-items-center m-5">
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
        <small>{{ errors.fields }}</small>
        <p>{{ success }}</p>
    </div>

    <div class="form-container p-5">
      <form enctype="multipart/form-data"
       @submit.prevent="apply()">
        <div class="form-row justify-content-around d-flex mb-4">
            <VueFileAgent
    ref="vueFileAgent"
    :theme="'list'"
    :multiple="false"
    :meta="true"
    :accept="'.pdf'"
    :maxSize="'2MB'"
    :maxFiles="1"
    :helpText="'+ Upload CV (pdf)'"
    :errorText="{
      type: 'Invalid file type. Only files with pdf extension are allowed',
      size: 'Files should not exceed 2MB in size',
    }"
    @select="filesSelectedCV($event)"
    v-model="user.cv"
  ></VueFileAgent>
                <VueFileAgent
    ref="vueFileAgent"
    :theme="'list'"
    :multiple="false"
    :meta="true"
    :accept="'image/*'"
    :maxSize="'2MB'"
    :maxFiles="1"
    :helpText="'+ Upload Image (png)'"
    :errorText="{
      type: 'Invalid file type. Only images allowed',
      size: 'Files should not exceed 2MB in size',
    }"
    @select="filesSelectedImage($event)"
    v-model="user.photo"
  ></VueFileAgent>
        </div>
        <div>
            <div class="form-row justify-content-between mb-4">
          <div class="col-12 col-md-6">
            <label for="firstName">First Name</label>
            <input v-model="user.firstName" type="text" name="firstName"  class="form-control" />
            <small>{{ errors.firstName }}</small>
          </div>
          <div class="col-12 col-md-6">
            <label for="lastName">Last Name</label>
            <input v-model="user.lastName" type="text" name="lastName"  class="form-control" />
            <small>{{ errors.lastName }}</small>
          </div>
            </div>
            <div class="form-row justify-content-between mb-4">
            <div class="col-12 col-md-6">
                <label for="email">Email</label>
                <input v-model="user.email" type="email" name="email"  class="form-control" />
            <small>{{ errors.email }}</small>
            </div>
            <div class="col-12 col-md-6">
                <label for="dob">Date of Birth</label>
                <input v-model="user.dob" type="text" name="dob"
                class="form-control" placeholder="yyyy-mm-dd" />
            <small>{{ errors.dob }}</small>
            </div>
            </div>
            <div class="form-row justify-content-between mb-4">
            <div class="col-12 col-md-6">
                <label for="address">Address</label>
                <input v-model="user.address" type="text" name="address" class="form-control" />
            <small>{{ errors.address }}</small>
            </div>
            <div class="col-12 col-md-6">
                <label for="university">University</label>
                <input v-model="user.university" type="text"
                name="university" class="form-control" />
            <small>{{ errors.university }}</small>
            </div>
            </div>
            <div class="form-row justify-content-between mb-3">
            <div class="col-12 col-md-6">
                <label for="course">Course of Study</label>
                <input v-model="user.course" type="text" name="course" class="form-control" />
            <small>{{ errors.course }}</small>
            </div>
            <div class="col-12 col-md-6">
                <label for="cgpa">CGPA</label>
                <input v-model="user.cgpa" type="text"
                name="cgpa" placeholder="5.00" class="form-control" />
            <small>{{ errors.cgpa }}</small>
            </div>
            </div>
        </div>
        <div class="form-row justify-content-center">
          <button type="submit" class="btn d-flex text-center mt-5 align-items-center
          justify-content-center text-white"
          >Submit</button>
          <!-- :disabled="!fileRecordsForCV.length" -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

import {
  validateTextField,
  validateEmail,
  validateDob,
  validateCgpa,
} from './validation';

export default {
  name: 'ApplicationForm',
  data() {
    return {
      fileRecordsCV: [],
      fileRecordsImage: [],
      uploadUrl: 'https://www.mocky.io/v2/5d4fb20b3000005c111099e3',
      uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
      fileRecordsForCV: [],
      fileRecordsForPhoto: [],
      success: '',
      user: {
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        age: 0,
        address: '',
        university: '',
        course: '',
        cgpa: null,
        cv: null,
        photo: null,
      },
      valid: true,
      errors: {},
    };
  },
  methods: {
    filesSelectedCV(fileRecordsNewlySelected) {
      this.user.cv = fileRecordsNewlySelected.length > 0
        ? fileRecordsNewlySelected[0].file
        : null;
    },
    filesSelectedImage(fileRecordsNewlySelected) {
      this.user.photo = fileRecordsNewlySelected.length > 0
        ? fileRecordsNewlySelected[0].file
        : null;
    },

    reset() {
      this.user = {
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        age: 0,
        address: '',
        university: '',
        course: '',
        cgpa: null,
        cv: null,
        photo: null,
      };
    },

    validateFields() {
      this.errors = {};
      const {
        firstName, lastName, email, dob, address, university, course, cgpa, cv, photo,
      } = this.user;

      if (cv && photo !== null) {
        console.log(this.valid);
        this.valid = true;
        console.log(this.user.cv);
        console.log(this.user.photo);
      } else {
        this.valid = false;
        console.log(this.valid);
        return this.valid;
      }

      const validFirstName = validateTextField(firstName);
      this.errors.firstName = validFirstName.error;
      if (this.valid) {
        this.valid = validFirstName.valid;
        const fname = { ...validFirstName, firstName };
        this.user.firstName = fname.firstName;
      }

      const validLastName = validateTextField(lastName);
      this.errors.lastName = validLastName.error;
      if (this.valid) {
        this.valid = validLastName.valid;
        const lname = { ...validLastName, lastName };
        this.user.lastName = lname.lastName;
      }

      const validEmail = validateEmail(email);
      this.errors.email = validEmail.error;
      if (this.valid) {
        this.valid = validEmail.valid;
        const emailCopy = { ...validEmail, email };
        this.user.email = emailCopy.email;
      }

      const validDob = validateDob(dob);
      this.errors.dob = validDob.error;
      if (this.valid) {
        this.valid = validDob.valid;
        const dobCopy = { ...validDob, dob };
        this.user.dob = dobCopy.dob;
        // age calculation
        const currentYear = new Date().getFullYear();
        const dobYear = this.user.dob.slice(0, 4);
        const age = Number(currentYear - dobYear);
        this.user.age = age;
      }

      const validAddress = validateTextField(address);
      this.errors.address = validAddress.error;
      if (this.valid) {
        this.valid = validAddress.valid;
        const addressCopy = { ...validAddress, address };
        this.user.address = addressCopy.address;
      }

      const validUniversity = validateTextField(university);
      this.errors.university = validUniversity.error;
      if (this.valid) {
        this.valid = validUniversity.valid;
        const universityCopy = { ...validUniversity, university };
        this.user.university = universityCopy.university;
      }

      const validCourse = validateTextField(course);
      this.errors.course = validCourse.error;
      if (this.valid) {
        this.valid = validCourse.valid;
        const courseCopy = { ...validCourse, course };
        this.user.course = courseCopy.course;
      }

      const validCgpa = validateCgpa(cgpa);
      this.errors.cgpa = validCgpa.error;
      if (this.valid) {
        this.valid = validCgpa.valid;
        const cgpaCopy = { ...validCgpa, cgpa };
        this.user.cgpa = cgpaCopy.cgpa;
      }

      console.log(this.user);
      console.log(this.valid);
      return this.valid;
    },
    async apply() {
      this.$router.push({ name: 'Dashboard' });
      // if (this.validateFields() === false) {
      //   this.errors.fields = 'Refresh the page and fill all fields correctly';
      // } else {
      //   console.log(this.user);
      //   const newUserObj =
      // { ...this.user, fullName: `${this.user.firstName} ${this.user.lastName}` };
      //   const formData = new FormData();
      //   Object.entries(newUserObj).forEach(([key, value]) => {
      //     formData.append(key, value);
      //   });
      //   console.log({ formData });
      //   const res = await axios({
      //     method: 'post',
      //     url: 'https://team-async.herokuapp.com/application',
      //     data: formData,
      //     headers: { 'Content-Type': 'multipart/form-data' },
      //   })
      //     .then((response) => {
      //       console.log(response);
      //       this.success = 'You have successfully applied for Enyata Academy 5.0';
      //       this.reset();
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      //   console.log({ res });
      // }
    },
  },
};
</script>

<style scoped>
/* .container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
} */
.form-container {
  width: 965px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #2B3C4E;
  box-sizing: border-box;
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
  color: #7557D3;
}

button {
    background-color: #7557D3;
    width: 379px;
    height: 50px
}

@media only screen and (max-width: 768px) {
}
</style>
