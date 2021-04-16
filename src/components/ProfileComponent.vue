<template>
    <div class="container">
      <div class="title">
        <h4>Profile Settings</h4>
        <button @click="beginEdit">Edit</button>
      </div>
      <hr>
      <div class="options">
        <div id="cover-image">
          <img :src="getAdminInfo.image" alt="profile-pic">
        </div>
        <div id="vfa-demo">
          <VueFileAgent
          class="upload-block"
          ref="vfaDemoRef"
          :theme="'list'"
          :multiple="false"
          :disabled="editNow"
          :meta="true"
          :accept="'.jpeg'"
          :maxSize="'2MB'"
          :maxFiles="1"
          :helpText="'Upload a new image'"
          :errorText="{
          type: 'Invalid file type. Only files with jpeg extension are allowed',
          size: 'Files should not exceed 2MB in size',
          }"
          @select="filesSelectedPhoto($event)"
          v-model="update.photo"
          id="choose-file"
          ></VueFileAgent>
        </div>
        <div :class="removeCoverImage ? 'remove-cover-image-disabled' : 'remove-cover-image'"
        :disabled="removeCoverImage">
          <p @click="filesSelectedPhoto($event)"
          :class="removeCoverImage ? 'grey-text' : 'red-text'">X  Remove</p>
        </div>
      </div>
      <div class="form">
        <div class="row1">
          <div class="input-1">
            <label for="name">Name</label>
            <input :class="editNow ? 'input-style' : 'input-no-style'"
            :disabled="editNow" type="text" v-model="update.fullName"
            required @keyup="validateName()">
            <b-form-invalid-feedback :state="feedbackName">
              This field must have at least 5 characters!
            </b-form-invalid-feedback>
          </div>
          <div class="input-2">
            <label for="name">Email</label>
            <input class="input-style" disabled type="text" v-model="update.email">
          </div>
          <div class="input-3">
            <label for="name">Phone number</label>
            <input :class="editNow ? 'input-style' : 'input-no-style'"
            :disabled="editNow" type="number" v-model="update.phone"
            required @keyup="validatePhone()">
            <b-form-invalid-feedback :state="feedbackPhone">
              Phone number must be 11 digits!
            </b-form-invalid-feedback>
          </div>
        </div>
        <div class="row2">
          <div class="input-4">
            <label for="name">Country</label>
            <input class="input-style" disabled type="text" v-model="update.country">
          </div>
          <div class="input-5">
            <label for="name">Address</label>
            <input :disabled="editNow" class="address"
            :class="editNow ? 'input-style' : 'input-no-style'"
            type="text" v-model="update.address"
            required @keyup="validateAddress()">
            <b-form-invalid-feedback :state="feedbackAddress">
              Address must have a minimum of 10 characters
            </b-form-invalid-feedback>
          </div>
        </div>
        <b-form-valid-feedback style="color:purple; font-size: 15px;"
          :state="loadingStatus" class="text-center mb-4">
          <b>Checking...please wait</b>
        </b-form-valid-feedback>
        <b-form-invalid-feedback class="text-center mb-4"
        style="font-size: 15px" :state="updateStatus">
          <b>{{ getResponseAdminUpdate.message }}</b>
          </b-form-invalid-feedback>
          <b-form-valid-feedback class="text-center mb-5"
          style="font-size: 15px" :state="updateStatus">
          <b>{{ getResponseAdminUpdate.message }}. Please wait while the page reloads...</b>
        </b-form-valid-feedback>
        <div class="text-center">
          <b-button @click="updateAdminData" :disabled="valid" id="save-btn">Save</b-button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProfileComponent',
  data() {
    return {
      update: {
        fullName: '',
        photo: null,
        email: '',
        phone: '',
        address: '',
        country: '',
      },
      feedbackName: true,
      feedbackPhone: true,
      feedbackAddress: true,
      loadingStatus: null,
      updateStatus: null,
      valid: true,
      errors: {},
      editNow: true,
      removeCoverImage: true,
    };
  },
  computed: {
    ...mapGetters(['getResponseAdminUpdate', 'getAdminInfo']),
    changeState() {
      const {
        feedbackName,
        feedbackPhone,
        feedbackAddress,
      } = this;
      return {
        feedbackName,
        feedbackPhone,
        feedbackAddress,
      };
    },
  },
  watch: {
    changeState: {
      handler(val) {
        if (val.feedbackName && val.feedbackPhone && val.feedbackAddress) {
          this.valid = false;
          return this.valid;
        }
        this.valid = true;
        return this.valid;
      },
      deep: true,
    },
    getResponseAdminUpdate(val) {
      if (val.status === 'Success') {
        this.loadingStatus = false;
        this.updateStatus = true;
        setTimeout(() => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }, 5000);
      } else {
        this.loadingStatus = false;
        this.updateStatus = false;
      }
    },
  },
  methods: {
    ...mapActions(['adminUpdate']),
    filesSelectedPhoto(fileRecordsNewlySelected) {
      this.update.photo = fileRecordsNewlySelected.length > 0
        ? fileRecordsNewlySelected[0]
        : null;
      console.log(this.update.photo, this.getAdminInfo.image);
    },
    beginEdit() {
      this.editNow = false;
      this.removeCoverImage = false;
      this.valid = false;
    },
    validateName() {
      const letters = /^[A-Za-z ]{5,}$/;
      if (this.update.fullName.match(letters)) {
        this.feedbackName = true;
        this.update.fullName = this.update.fullName.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
        return this.feedbackFirstName;
      }
      this.feedbackName = false;
      return this.feedbackName;
    },
    validatePhone() {
      if (this.update.phone.length === 11 || this.update.phone.length === 0) {
        this.feedbackPhone = true;
        return this.feedbackPhone;
      }
      this.feedbackPhone = false;
      return this.feedbackPhone;
    },
    validateAddress() {
      // const address = /^[A-Za-z ]{10,}$/;
      if (this.update.address.length === 0 || /^(?!.*?\s{2})[A-Za-z0-9.&()-,' ]{10,}$/.test(this.update.address)) {
        this.feedbackAddress = true;
        this.update.address = this.update.address.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase());
        return this.feedbackAddress;
      }
      this.feedbackAddress = false;
      return this.feedbackAddress;
    },
    updateAdminData() {
      this.loadingStatus = true;
      this.update.photo = this.update.photo === null ? this.update.photo : this.update.photo.file;
      this.adminUpdate(this.update);
      console.log(this.update);
    //   this.reset();
    },
  },
  mounted() {
    this.update.fullName = this.getAdminInfo.adminName;
    this.update.email = this.getAdminInfo.adminEmail;
    this.update.phone = this.getAdminInfo.adminPhone === null
      ? this.update.phone
      : this.getAdminInfo.adminPhone;
    this.update.address = this.getAdminInfo.adminAddress;
    this.update.country = this.getAdminInfo.adminCountry;
  },
};
</script>

<style scoped>
.container {
  font-family: Lato;
  font-style: normal;
  height: 600px;
}
.title {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.title h4 {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4A4A4A;
  margin-top: 10px;
}
.title button {
  width: 127px;
  height: 38px;
  font-family: Karla;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: var(--enyata-purple);
  border: 1px solid var(--enyata-purple);
}
.title button:focus {
  border: 3px solid var(--enyata-purple);
  font-size: 17px;
  width: 129px;
  height: 40px;
  box-shadow: hotpink;
}
.options {
  margin-top: 40px;
  margin-bottom: 80px;
  width: 500px;
  height: 54px;
  /* display: grid; */
  /* grid-template-columns: 1fr 2fr 1fr; */
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;
  align-items: center;
}
.input-1, .input-2, .input-3, .input-4, .input-5 {
  height: 54px;
  margin-bottom: 40px;
}
#cover-image {
  width: 90px;
  height: 90px;
}
#cover-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.remove-cover-image {
  width: 170px;
  height: 65px;
  padding-top: 20px;
  box-sizing: border-box;
  border: 2px dashed #FF5722;
  text-align: center;
}
.remove-cover-image-disabled {
  width: 170px;
  height: 65px;
  padding-top: 20px;
  box-sizing: border-box;
  border: 2px dashed grey;
  text-align: center;
  opacity: 0.5;
}
/* #vfa-demo, .upload-block {
  border-radius: 50% !important;
}
#vfa-demo .file-preview-wrapper::before {
background: transparent;
}
#vfa-demo .upload-block {
  border: 0 !important;
  border: 2px dashed transparent;
  box-shadow: none !important;
  padding-top: 0;
  background: transparent;
}
.vfa-demo .vue-file-agent {
  border: 0 !important;
  box-shadow: none !important;
}
#vfa-demo .drop-help-text {
  display: none;
}
#vfa-demo .is-drag-over .drop-help-text {
 display: block;
}
#vfa-demo .upload-block {
border-color: #AAA;
} */
#margin-top {
  width: 100px;
  height: 40px;
  border: 0;
  float: left;
  position: relative;
}
/* #containerdiv .vue-file-agent {
  width: 10px;
  height: 10px;
  float: left;
  margin: 0 0 0 0;
  border: 0;
  box-shadow: none;
} */
a, label {
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  color: #333758;
  opacity: 0.5;
}
a {
  text-decoration-line: underline;
}
.red-text {
  color: #FF5722;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  margin: auto;
  text-align: center;
}
.grey-text {
  color: grey;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  margin: auto;
  text-align: center;
  /* opacity: 0.5; */
}
.row1, .row2 {
  width: 724px;
}
.row1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 34px;
}
.row2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
}
.input-style {
  width: 215px;
  height: 54px;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.117188px;
  padding: 10px;
  background-color: #f8f6fd;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
  border: none;
}
.input-no-style {
  width: 215px;
  height: 54px;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.117188px;
  padding: 10px;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
  border: 0.2px solid grey;
}
input:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
}
.address {
  width: 469px;
}
#save-btn {
  /* margin-top: 40px; */
  width: 127px;
  height: 38px;
  background-color: var(--enyata-purple);
  color: #ffffff;
  /* border: none; */
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  font-family: Lato;
  margin: auto;
  margin-bottom: 40px;
}
</style>
