<template>
  <div class="d-flex flex-column justify-content-center align-items-center contains">
    <div class="enyata-logo">
      <img src="../../assets/enyata-logo.svg" alt="Enyata Logo" />
    </div>
    <div class="title">Application Form</div>
    <div v-if="!successPage" class="form-container p-5">
      <form
      class="formm" enctype="multipart/form-data" @submit.prevent="apply()">
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
              type:
                'Invalid file type. Only files with pdf extension are allowed',
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
        <small id="image-error">{{ errors.file }}</small>
        <div>
          <div class="form-row justify-content-between mb-4 mt-2">
            <div class="col-12 col-md-6">
              <label for="firstName">First Name</label>
              <input
                id="input-1"
                v-model="user.firstName"
                type="text"
                name="firstName"
                class="form-control"
              />
              <small>{{ errors.firstName }}</small>
            </div>
            <div class="col-12 col-md-6">
              <label for="lastName">Last Name</label>
              <input
                id="input-2"
                v-model="user.lastName"
                type="text"
                name="lastName"
                class="form-control"
              />
              <small>{{ errors.lastName }}</small>
            </div>
          </div>
          <div class="form-row justify-content-between mb-4">
            <div class="col-12 col-md-6">
              <label for="email">Email</label>
              <input
                id="input-3"
                v-model="user.email"
                type="text"
                name="email"
                class="form-control"
                disabled
              />
              <small>{{ errors.email }}</small>
            </div>
            <div class="col-12 col-md-6">
              <label for="dob">Date of Birth</label>
              <input
                id="input-4"
                v-model="user.dob"
                type="date"
                name="dob"
                class="form-control"
                placeholder="yyyy-mm-dd"
                :max="minimumBirthDate"
              />
              <small>{{ errors.dob }}</small>
            </div>
          </div>
          <div class="form-row justify-content-between mb-4">
            <div class="col-12 col-md-6">
              <label for="address">Address</label>
              <input
                id="input-5"
                v-model="user.address"
                type="text"
                name="address"
                class="form-control"
              />
              <small>{{ errors.address }}</small>
            </div>
            <div class="col-12 col-md-6 selecty">
              <label id="selecty-label" for="university">University</label>
              <!-- <input
                id="input-6"
                v-model="user.university"
                type="text"
                name="university"
                class="form-control"
              /> -->
              <b-form-select class="form-control"
              id="input-6" v-model="user.university">
              <b-form-select-option v-for="(option, index) in options" :key="index"
              :value="option === 'Please select an option' ? '' : option ">
                {{ option }}
              </b-form-select-option>
              </b-form-select>
              <small id="selecty-error">{{ errors.university }}</small>
            </div>
          </div>
          <div class="form-row justify-content-between mb-3">
            <div class="col-12 col-md-6">
              <label for="course">Course of Study</label>
              <input
                id="input-7"
                v-model="user.course"
                type="text"
                name="course"
                class="form-control"
              />
              <small>{{ errors.course }}</small>
            </div>
            <div class="col-12 col-md-6">
              <label for="cgpa">CGPA</label>
              <input
                id="input-8"
                v-model="user.cgpa"
                type="text"
                name="cgpa"
                placeholder="5.00"
                class="form-control"
              />
              <small>{{ errors.cgpa }}</small>
            </div>
          </div>
        </div>
        <b-form-valid-feedback class="mt-3" style="font-size: 15px" :state="loadingStatus">
       <b>Checking...please wait</b>
      </b-form-valid-feedback>

        <div class="form-row justify-content-center">
          <button
            type="submit"
            class="btn d-flex text-center align-items-center justify-content-center text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div class="text-center" v-else>
      <h1>Congratulations! {{ success }}</h1>
      <h3>Kindly proceed to your dashboard</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

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
        cgpa: '',
        cv: null,
        photo: null,
      },
      options: [
        'Please select an option',
        'Bestower International University, Benin Republic, Cotonou',
        'Adekunle Ajasin University, Akungba-Akoko',
        'Afe Babalola University, Ado Ekiti',
        'Caritas University, Enugu',
        'City University, Yaba, Lagos State',
        'Citygate University, Ibadan',
        'Cross River University of Technology, Calabar',
        'Crownhill University, Ilorin, Kwara State',
        'Enugu State University of Science and Technology, Enugu',
        'Federal University, Birnin Kebbi, Kebbi State',
        'Federal University Gashua, Yobe State',
        'Federal University Gusau, Zamfara State',
        'Federal University of Dutse (FUD)',
        'Federal University of Petroleum Resource Effurun',
        'Federal University of Technology Minna',
        'Federal University of Technology Owerri',
        'Gombe State University, Gombe',
        'Gombe State University of Science and Technology, Kumo',
        'Ibrahim Babangida University, Lapai',
        'Ibrahim Badamasi Babangida University, Niger State, Lapai',
        'Edusoko University, Bida, Niger State',
        'Ahman Pategi University, Pategi, Kwara State',
        'Ignatius Ajuru University of Education (Rivers State University of Education), Port Harcourt',
        'Imo State University, Owerri',
        'Institute of Management and Technology, Enugu',
        'Joseph Ayo Babalola University, Ipo Arakeji and Ikeji-Arakeji',
        'Kaduna State University, Kaduna Kaduna State',
        'Kano State University of Science and Technology, Wudil',
        'Kebbi State University of Technology Aliero',
        'Kogi State University, Ayigba, Kogi State',
        'Koladaisi University, Ibadan, Oyo State',
        'Kwara State University, Malete, Kwara State',
        'Koladaisi University Ibadan, Oyo State',
        'Ladoke Akintola University of Technology, Ogbomoso',
        'Lagos Business School, Lagos',
        'Lead City University, Ibadan',
        'Madonna University (Ihiala), Okija',
        'Mewar University, Masaka, Nasarawa State',
        'Michael Okpara Federal University of Agriculture, Umudike',
        'Modibbo Adama University of Technology, Yola',
        'Michael and Cecilia Ibru University, Agbara-Otor, Ughelli North, Delta State',
        'Mountain Top University, Ogun State',
        'Nasarawa State University, Keffi',
        'National Open University of Nigeria, Lagos',
        'Niger Delta University, Wilberforce Island, Bayelsa State',
        'Nigerian Defence Academy, Kaduna',
        'Nnamdi Azikiwe University, Awka',
        'Northwest University, Kano',
        'Novena University, Ogume, Delta State',
        'Obafemi Awolowo University, Ile Ife',
        'Obong University, Obong Ntak, Akwa Ibom',
        'Oduduwa University, Ipetumodu, Osun State',
        'Olabisi Onabanjo University, Ago-Iwoye, Ogun State',
        'Ondo State University of Science and Technology, Okitipupa',
        'Osun State University, Osogbo',
        'Pan-Atlantic University, Lagos',
        'Paul University, Awka Anambra',
        'Ritman University, Ikot Ekpene, Akwa Ibom State',
        'Rivers State University, Port Harcourt',
        'Redeemer\'s University, Off, Gbongan – Oshogbo Rd, Ede',
        'Renaissance University, Agbani',
        'Rhema University, Aba Abia State',
        'Salem University, Lokoja Kogi State',
        'Samuel Adegboyega University, Ogwa Edo State',
        'Skyline University Nigeria, Kano State',
        'Sokoto State University, Sokoto',
        'Sule Lamido University, Kaffin Hausa, Jigawa State',
        'Tai Solarin University of Education, Ijebu-Ode, Ogun State',
        'The University on Idemili, Alor, Anambra State',
        'University of Abuja, Gwagwalada',
        'University of Ado Ekiti, Ado Ekiti',
        'University of Agriculture, Abeokuta, Abeokuta',
        'University of Africa(Toru-Orua),Bayelsa State',
        'University of Agriculture, Makurdi, Makurdi, Benue State',
        'University of Ibadan, Ibadan',
        'University of Ilorin, Ilorin',
        'University of Jos, Jos',
        'University of Maiduguri, Maiduguri',
        'University of Mkar, Mkar-Gboko, Benue State',
        'University of Uyo, Uyo, Akwa Ibom State',
        'Usman Dan Fodio University, Sokoto, Sokoto State',
        'Wesley University, Ondo',
        'Western Delta University, Oghara, Delta State',
        'Yaba College of Technology, Yaba, Lagos State, Nigeria',
        'Bauchi State University, Gadau, Bauchi State',
        'Abubakar Tatari Ali Polytechnic, Bauchi',
        'Nigerian Army University Biu (NAUB)',
      ],
      minimumBirthDate: new Date().toISOString().split('T')[0],
      valid: true,
      errors: {},
      loginStatus: null,
      loadingStatus: null,
      successPage: false,
    };
  },

  computed: {
    ...mapGetters(['loggedInStatus', 'getLoginToken', 'getUserDeets', 'getUserDeetsApplicationStatus']),
  },
  watch: {
    loggedInStatus(res) {
      if (res) {
        this.loginStatus = true;
      }
      this.loginStatus = false;
    },
    getUserDeetsApplicationStatus(val) {
      console.log(val);
      if (val === 'Yes') {
        this.loadingStatus = false;
        setTimeout(() => {
          this.$router.push({ name: 'Dashboard' });
        }, 500);
      }
    },
  },
  methods: {
    filesSelectedCV(fileRecordsNewlySelected) {
      this.user.cv = fileRecordsNewlySelected.length > 0
        ? fileRecordsNewlySelected[0]
        : null;
    },
    filesSelectedImage(fileRecordsNewlySelected) {
      this.user.photo = fileRecordsNewlySelected.length > 0
        ? fileRecordsNewlySelected[0]
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
        cgpa: '',
        cv: null,
        photo: null,
      };
    },

    validateFields() {
      this.errors = {};
      const {
        firstName,
        lastName,
        email,
        dob,
        address,
        university,
        course,
        cgpa,
        cv,
        photo,
      } = this.user;

      if (cv && photo !== null) {
        console.log(this.valid);
        this.errors.file = '';
        this.valid = true;
        console.log(this.user.cv);
        console.log(this.user.photo);
      } else {
        this.valid = false;
        console.log(this.valid);
        this.errors.file = 'Either CV or Image not Uploaded';
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

      const validDob = validateDob(dob, this.minimumBirthDate);
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
    ...mapActions(['mountApplyPage', 'populateUserDeets']),

    async apply() {
      console.log(this.validateFields);
      if (this.validateFields() === false) {
        this.errors.fields = 'Refresh the page and fill all fields correctly';
      } else {
        this.loadingStatus = true;
        const newUserObj = {
          ...this.user,
          fullName: `${this.user.firstName} ${this.user.lastName}`,
        };
        newUserObj.cv = this.user.cv.file;
        newUserObj.photo = this.user.photo.file;
        delete newUserObj.firstName;
        delete newUserObj.lastName;
        console.log(newUserObj);
        const formData = new FormData();
        Object.entries(newUserObj).forEach(([key, value]) => {
          formData.append(key, value);
        });
        console.log({ formData });
        const res = await axios({
          method: 'post',
          url: 'https://async-backend.herokuapp.com/application',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${this.getLoginToken}`,
          },
        })
          .then((response) => {
            console.log(response);
            this.success = 'You have successfully applied!';
            this.loadingStatus = false;
            this.successPage = true;
            console.log(this.loadingStatus, this.successPage, this.success);
            setTimeout(() => {
              this.$router.push({ name: 'Dashboard' });
            }, 5000);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log({ res });
      }
    },
  },
  mounted() {
    this.populateUserDeets();
    const fullName = this.$store.getters.getUserDeets.full_name.split(' ');
    [this.user.firstName] = fullName;
    [, this.user.lastName] = fullName;
    this.user.email = this.$store.getters.getUserDeets.email;
  },
};
</script>

<style scoped>
.form-container {
  width: 965px;
  height: 700px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #2b3c4e;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: -20px;
}
.formm {
  height: 650px;
}
#image-error {
  margin-left: 350px;
  margin-top: -10px;
}
.enyata-logo {
  width: 110.1px;
  height: 20.84px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 24px;
}
.enyata-logo img {
  height: 100%;
  width: 100%;
}
.title {
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  margin: auto;
  margin-bottom: 68px;
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

label[for="upload-photo"],
label[for="upload-cv"],
input[type="file"] {
  cursor: pointer;
  border-radius: 3px;
  border: 1.5px dashed #2b3c4e;
  width: 211px;
  height: 49.97px;
}

#upload-photo,
#upload-cv {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

input, #input-6 {
  border: 1.5px solid #2b3c4e;
  outline: none;
  margin: auto;
  border-radius: 4px;
  width: 379px;
  height: 41px;
}
#input-1, #input-2, #input-3, #input-4,
#input-5, #input-6 , #input-7 , #input-8 {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
small {
  margin: 25px;
  color: red;
}
#input-3 {
  background-color: #f8f6fd;
}
button {
  background-color: var(--enyata-purple);
  background-color: #7557d3;
  width: 379px;
  height: 50px;
}
.selecty {
  padding-left: 29px;
}
#selecty-label {
  margin-left: 0px;
}
#selecty-error {
  margin: 4px;
}
@media only screen and (max-width: 768px) {
}
</style>
