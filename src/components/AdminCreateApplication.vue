<template>
    <div create-application mt-5>
        <div class="title">Create Application</div>
        <b-form class="form" v-if="!status"
        v-show="!applicationStatus" enctype="multipart/form-data"
        @submit.prevent="sendAd()">
            <div class="d-flex justify-content-between">
              <div class="height--">
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
                <b-form-invalid-feedback :state="feedbackImage">
                  Please upload a flyer
                </b-form-invalid-feedback>
              </div>
              <!-- <div class="small-inputs"> -->
                <b-form-group id="input-group-1" label="Link" label-for="input-1">
              <b-form-inputss
              id="input-1"
              v-model="application.applicationLink" type="text"
              required @keyup="validateLink()"></b-form-inputss>
              <b-form-invalid-feedback :state="feedbackLink">
                This field requires a minimum of 9 characters
              </b-form-invalid-feedback>
              </b-form-group>
              <!-- </div> -->
            </div>
            <div class="d-flex justify-content-between">
                <div class="small-inputs">
                  <b-form-group
                id="input-group-2"
                label="Application closure date"
                label-for="input-2">
                <b-form-input v-model="application.closureDate"
                id="input-2" type="date"
                required @change="validateDate()"
                :min="todayDate"></b-form-input>
                <b-form-invalid-feedback :state="feedbackDate">
                  Closure date must be at least 1 week from today
                </b-form-invalid-feedback>
                </b-form-group>
                </div>
                <div class="small-inputs">
                  <b-form-group id="input-group-3" label="Batch ID" label-for="input-3">
                <b-form-input v-model="application.batchId" type="number" id="input-3"
                required @keyup="validateBatch()"
                ></b-form-input>
                <b-form-invalid-feedback style="font-size: 15px" :state="feedbackBatch">
                  <b>{{getResponseAdminAd.message}}</b>
                </b-form-invalid-feedback>
                <b-form-valid-feedback style="font-size: 15px" :state="feedbackBatch">
                </b-form-valid-feedback>
                </b-form-group>
                </div>
            </div>
            <div class="instructions">
              <b-form-group
            id="input-group-4"
            label="Instructions"
            label-for="input-4">
            <b-form-textarea
            v-model="application.instructions" id="input-4" required
            placeholder="Type in here..."
            rows="8"
            @keyup="validateInstructions()"
            ></b-form-textarea>
            <b-form-invalid-feedback :state="feedbackInstructions">
              This field requires a minimum of 15 characters and only one space between words
            </b-form-invalid-feedback>

            <b-form-valid-feedback style="font-size: 15px"
            :state="loadingStatus" class="text-center">
            <b>Checking...please wait</b>
            </b-form-valid-feedback>
            </b-form-group>
            </div>

            <div class="text-center">
                <b-button id="submit-btn" type="submit" :disabled="validApp">Submit</b-button>
            </div>
        </b-form>
        <h2 v-else class="mt-5">A new batch can't be created until the current batch ends.</h2>
        <h2 v-show="applicationStatus" class="mt-5"> {{getResponseAdminAd.message}}! </h2>
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
      applicationStatus: false,
      loadingStatus: null,
      feedbackLink: null,
      feedbackDate: null,
      feedbackInstructions: null,
      feedbackImage: null,
      feedbackBatch: true,
      valid: true,
      validApp: true,
      status: null,
      todayDate: new Date().toISOString().split('T')[0],
    };
  },
  computed: {
    ...mapGetters(['getResponseAdminAd']),
    changeState() {
      const {
        feedbackLink,
        feedbackInstructions,
        feedbackBatch,
        feedbackImage,
        feedbackDate,
      } = this;
      return {
        feedbackLink,
        feedbackInstructions,
        feedbackBatch,
        feedbackImage,
        feedbackDate,
      };
    },
  },
  watch: {
    changeState: {
      handler(val) {
        if (val.feedbackLink && val.feedbackInstructions && val.feedbackBatch
        && val.feedbackImage && val.feedbackDate) {
          this.validApp = false;
          return this.validApp;
        }
        this.validApp = true;
        return this.validApp;
      },
      deep: true,
    },
    getResponseAdminAd(val) {
      if (val.status === 'Success') {
        this.loadingStatus = false;
        this.applicationStatus = true;
        const applicationStartDate = new Date().toLocaleDateString();
        const dateAndBatch = {
          openDate: applicationStartDate,
          batchId: this.application.batchId,
        };
        this.openApplication(dateAndBatch);
        this.openBatch(1);
        setTimeout(() => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }, 5000);
      } else {
        this.loadingStatus = false;
        this.feedbackBatch = false;
        this.applicationStatus = false;
        this.application.design = this.application.design.file;
      }
    },
  },
  methods: {
    ...mapActions(['adminCreateAd', 'openApplication']),
    validateLink() {
      this.feedbackImage = this.application.design !== null;
      const link = /^[A-Za-z0-9:@./]{9,}$/;
      if (this.application.applicationLink.match(link)) {
        this.feedbackLink = true;
        return;
      }
      this.feedbackLink = false;
    },
    validateInstructions() {
      this.feedbackImage = this.application.design !== null;
      if (/^(?!.*?\s{2})[A-Za-z0-9.?/@!#$%^&*()_+=_><,:;"'{[}| ]{15,}$/.test(this.application.instructions)) {
        this.feedbackInstructions = true;
        return;
      }
      this.feedbackInstructions = false;
      console.log(this.feedbackImage);
      console.log(this.application.design);
    },
    validateDate() {
      this.feedbackImage = this.application.design !== null;
      const yearDiff = this.application.closureDate.split('-')[0] - this.todayDate.split('-')[0];
      const monthDiff = this.application.closureDate.split('-')[1] - this.todayDate.split('-')[1];
      const dayDiff = this.application.closureDate.split('-')[2] - this.todayDate.split('-')[2];
      console.log(yearDiff, monthDiff, dayDiff);
      if (yearDiff <= 0 && monthDiff <= 0) {
        if (dayDiff < 7) {
          this.feedbackDate = false;
          return;
        }
        this.feedbackDate = true;
        return;
      }
      this.feedbackDate = true;
    },
    validateBatch() {
      this.feedbackBatch = true;
      console.log(this.application.design);
      console.log(!this.application.design);
      if (!this.application.design) {
        this.feedbackImage = false;
      }
    },
    filesSelectedDesign(fileRecordsNewlySelected) {
      console.log(fileRecordsNewlySelected);
      this.application.design = fileRecordsNewlySelected.length > 0
        ? fileRecordsNewlySelected[0]
        : null;
      this.feedbackImage = this.application.design !== null;
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
      this.loadingStatus = true;
      this.application.design = this.application.design.file;
      this.adminCreateAd(this.application);
    //   this.reset();
    },
  },
  mounted() {
    this.status = this.$store.getters.openApplicationStatus;
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
#input-group-1 {
  height: 41px;
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
.height-- {
  height: 108px;
}
/* .small-inputs {
  height: 41px;
} */
.instructions {
  height: 144px;
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
