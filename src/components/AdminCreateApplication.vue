<template>
    <div create-application mt-5>
        <div class="title">Create Application</div>
        <b-form class="form" enctype="multipart/form-data" @submit.prevent="sendAd()">
            <div class="d-flex justify-content-between align-items-center">
                <VueFileAgent
                    ref="vueFileAgent"
                    :theme="'list'"
                    :multiple="false"
                    :meta="true"
                    :accept="'.png'"
                    :maxSize="'2MB'"
                    :maxFiles="1"
                    :helpText="'+ Choose File (png)'"
                    :errorText="{
                    type: 'Invalid file type. Only files with png extension are allowed',
                    size: 'Files should not exceed 2MB in size',
                    }"
                    @select="filesSelectedDesign($event)"
                    v-model="application.design"
                    id="choose-file"
                ></VueFileAgent>
                <b-form-group id="input-group-1" label="Link" label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="application.applicationLink" type="text" required></b-form-input>
                </b-form-group>
            </div>
            <div class="d-flex justify-content-between">
                <b-form-group
                id="input-group-2"
                label="Application closure date"
                label-for="input-2">
                <b-form-input v-model="application.closureDate"
                id="input-2" type="date" required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-3" label="Batch ID" label-for="input-3">
                <b-form-input v-model="application.batchId" type="number" id="input-3" required
                ></b-form-input>
                <small>{{ errors.batchId }}</small>
                </b-form-group>
            </div>
            <b-form-group
            id="input-group-4"
            label="Instructions"
            label-for="input-4">
            <b-form-textarea
            v-model="application.instructions" id="input-4" required
            placeholder="Type in here..."
            rows="8"
            ></b-form-textarea>
            </b-form-group>

            <b-form-invalid-feedback style="font-size: 15px" :state="applicationStatus">
            <b>{{ getResponseAdminAd.message }}</b>
            </b-form-invalid-feedback>
            <b-form-valid-feedback style="font-size: 15px" :state="applicationStatus">
            <b>{{ getResponseAdminAd.message }}</b>
            </b-form-valid-feedback>

            <div class="text-center">
                <b-button id="submit-btn" type="submit">Submit</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import { validateTextFieldApplication,
// validateBatchIdApplication } from '../views/user/validation';

export default {
  name: 'AdminCreateApplication',
  data() {
    return {
      application: {
        batchId: null,
        design: null,
        applicationLink: '',
        closureDate: '',
        instructions: '',
      },
      applicationStatus: null,
      valid: true,
      errors: {},
    };
  },
  computed: {
    ...mapGetters(['getResponseAdminAd']),
  },
  watch: {
    getResponseAdminAd(val) {
      if (val.status === 'Success') {
        this.applicationStatus = true;
        const applicationStartDate = new Date().toLocaleDateString();
        const dateAndBatch = {
          openDate: applicationStartDate,
          batchId: this.application.batchId,
        };
        this.openApplication(dateAndBatch);
        this.openBatch(1);
        // disable form or hide it till the test expiration date reaches
      } else {
        this.applicationStatus = false;
        setTimeout(() => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }, 5000);
        // // eslint-disable-next-line no-restricted-globals
        // location.reload();
      }
    },
  },
  methods: {
    // validateFields() {
    //   this.errors = {};
    //   const {
    //     batchId, applicationLink, instructions,
    //   } = this.application;

    //   const validBatchId = validateBatchIdApplication(batchId);
    //   this.errors.batchId = validBatchId.error;
    //   if (this.valid) {
    //     this.valid = validBatchId.valid;
    //     const bid = { ...validBatchId, batchId };
    //     this.application.batchId = bid.batchId;
    //   }

    //   const validLastName = validateTextField(lastName);
    //   this.errors.lastName = validLastName.error;
    //   if (this.valid) {
    //     this.valid = validLastName.valid;
    //     const lname = { ...validLastName, lastName };
    //     this.user.lastName = lname.lastName;
    //   }

    //   const validEmail = validateEmail(email);
    //   this.errors.email = validEmail.error;
    //   if (this.valid) {
    //     this.valid = validEmail.valid;
    //     const emailCopy = { ...validEmail, email };
    //     this.user.email = emailCopy.email;
    //   }

    //   const validDob = validateDob(dob);
    //   this.errors.dob = validDob.error;
    //   if (this.valid) {
    //     this.valid = validDob.valid;
    //     const dobCopy = { ...validDob, dob };
    //     this.user.dob = dobCopy.dob;
    //   }

    //   const validCourse = validateTextField(course);
    //   this.errors.course = validCourse.error;
    //   if (this.valid) {
    //     this.valid = validCourse.valid;
    //     const courseCopy = { ...validCourse, course };
    //     this.user.course = courseCopy.course;
    //   }

    //   console.log(this.user);
    //   console.log(this.valid);
    //   return this.valid;
    // },
    ...mapActions(['adminCreateAd', 'openApplication']),
    filesSelectedDesign(fileRecordsNewlySelected) {
      this.application.design = fileRecordsNewlySelected.length > 0
        ? fileRecordsNewlySelected[0]
        : null;
    },
    reset() {
      this.application = {
        batchId: null,
        design: null,
        closureDate: '',
        instructions: '',
      };
    },
    sendAd() {
    //     if (this.validateFields() === false) {
    //     this.errors.fields = 'Refresh the page and fill all fields correctly';
    //   } else {
    // const newUserObj = {
    // ...this.user, fullName: `${this.user.firstName} ${this.user.lastName}` };
    // newUserObj.cv = this.user.cv.file;
    // newUserObj.photo = this.user.photo.file;
      this.application.design = this.application.design.file;
      this.adminCreateAd(this.application);
      console.log(this.application);
    //   this.reset();
    },
  },
};
</script>

<style scoped>
.title {
    font-weight: 300;
    margin-top: 50px;
    font-size: 43.5555px;
    font-style: normal;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}
.form {
    margin-top: 40px;
}
#choose-file {
    width: 456px;
    cursor: pointer;
}
#input-group-1,
#input-group-2,
#input-group-3,
#input-group-4 {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: var(--text-primary);
  text-align: left;
}
#input-group-4, #input-group-2,
#input-group-3 {
    margin-top: 36px;
}
#input-1,
#input-2,
#input-3 {
  width: 456px;
  height: 41px;
  border: 1.5px solid var(--text-primary);
  box-sizing: border-box;
  border-radius: 4px;
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}
#input-4 {
    width: 976px;
    height: 144px;
    border: 1.5px solid var(--text-primary);
    box-sizing: border-box;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
}
#submit-btn {
    width: 379px;
    height: 50px;
    background-color: var(--enyata-purple);
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    font-family: Lato;
    margin-top: 60px;
}
</style>
