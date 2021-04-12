<template>
    <div class="container">
      <div class="title">
        <h4>Profile Settings</h4>
        <button @click="editNow=false">Edit</button>
      </div>
      <hr>
      <div class="options">
        <VueFileAgent
          ref="vueFileAgent"
          :theme="'list'"
          :multiple="false"
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
        <!-- <div class="circle">
          <img src="../assets/account.svg" alt="profile-picture">
        </div> -->
        <!-- <a href="">Upload a new image</a> -->
        <p @click="filesSelectedPhoto($event)" class="red-text">X  Remove</p>
      </div>
      <div class="form">
        <div class="row1">
          <div class="input-1">
            <label for="name">Name</label>
            <input :disabled="editNow" type="text" v-model="update.fullName">
          </div>
          <div class="input-2">
            <label for="name">Email</label>
            <input disabled type="text" v-model="update.email">
          </div>
          <div class="input-3">
            <label for="name">Phone number</label>
            <input :disabled="editNow" type="text" v-model="update.phone">
          </div>
        </div>
        <div class="row2">
          <div class="input-4">
            <label for="name">Country</label>
            <input :disabled="editNow" type="text" v-model="update.country">
          </div>
          <div class="input-5">
            <label for="name">Address</label>
            <input :disabled="editNow" class="address"
            type="text" v-model="update.address">
          </div>
        </div>
        <b-form-invalid-feedback style="font-size: 15px" :state="updateStatus">
          <b>{{ getResponseAdminUpdate.message }}</b>
          </b-form-invalid-feedback>
          <b-form-valid-feedback style="font-size: 15px" :state="updateStatus">
          <b>{{ getResponseAdminUpdate.message }}</b>
        </b-form-valid-feedback>
        <div class="save-btn">
          <button @click="updateAdminData" class="save-btn">Save</button>
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
      updateStatus: null,
      valid: true,
      errors: {},
      editNow: true,
    };
  },
  computed: {
    ...mapGetters(['getResponseAdminUpdate', 'getAdminInfo']),
  },
  watch: {
    getResponseAdminUpdate(val) {
      if (val.status === 'Success') {
        this.updateStatus = true;
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      } else {
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
    },
    updateAdminData() {
    //     if (this.validateFields() === false) {
    //     this.errors.fields = 'Refresh the page and fill all fields correctly';
    //   } else {
    // const newUserObj = {
    // ...this.user, fullName: `${this.user.firstName} ${this.user.lastName}` };
    // newUserObj.cv = this.user.cv.file;
    // newUserObj.photo = this.user.photo.file;
      this.update.photo = this.update.photo.file;
      this.adminUpdate(this.update);
      console.log(this.update);
    //   this.reset();
    },
  },
  mounted() {
    this.update.fullName = this.getAdminInfo.adminName;
    this.update.email = this.getAdminInfo.adminEmail;
    this.update.phone = this.getAdminInfo.adminPhone;
    this.update.address = this.getAdminInfo.adminAddress;
    this.update.country = this.getAdminInfo.adminCountry;
  },
};
</script>

<style scoped>
.container {
  font-family: Lato;
  font-style: normal;
  height: 500px;
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
.options {
  margin-top: 40px;
  width: 350px;
  height: 54px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
}
a, .red-text, label {
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
  margin: auto;
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
input {
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
input:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
}
.address {
  width: 469px;
}
.save-btn {
  width: 127px;
  height: 38px;
  background: var(--enyata-purple);
  color: #ffffff;
  border: none;
  margin: auto;
}
</style>
