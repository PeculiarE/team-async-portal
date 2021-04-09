<template>
  <div>
    <form>
      <div class="d-flex justify-content-between">
        <div class="profile-picture">
          <img :src="data.photo_url" alt="image">
        </div>
        <!-- <p @click="$emit('closeModal')">X</p> -->
      </div>
      <br>
      <div class="title">Personal Details</div>
      <hr />
      <div class="details">
        <div class="row1">
          <div class="name">
            <label>Name</label><br />
            <p class="data">{{data.full_name}}</p>
          </div>
          <div class="email">
            <label>Email</label><br />
            <p class="data">{{data.email}}</p>
          </div>
        </div>
        <div class="row2">
          <div class="address">
            <label>Address</label><br />
            <p class="data">{{data.address}}</p>
          </div>
          <div class="university">
            <label>University</label><br />
            <p class="data">{{data.university}}</p>
          </div>
        </div>
        <div class="row3">
          <div class="course">
            <label>Course of study</label><br />
            <p class="data">{{data.course}}</p>
          </div>
          <div class="dob">
            <label>Date of Birth</label><br />
            <p class="data">{{data.dob}}</p>
          </div>
        </div>
        <div class="row4">
          <div class="cgpa">
            <label>CGPA</label><br />
            <p class="data">{{data.cgpa}}</p>
          </div>
          <div class="cv">
            <label>CV</label><br />
            <p class="data-cv">
              <a :href="data.cv_url"
              target="_blank">{{data.full_name}}'s CV.pdf</a></p>
          </div>
        </div>
        <!-- <div class="buttons-div">
              <div class="approve">
                <b-button
                @click.capture="showModal" id="approve-btn" v-b-modal="'my-modal'">
                Approve</b-button>
              <b-modal v-model="showModal" id="my-modal">
                Are you sure you want to approve this application?</b-modal>
              </div>
              <div class="decline">
                 <b-button
                 @click.capture="showModal" id="decline-btn" v-b-modal="'my-modal'">
                 Decline</b-button>
              <b-modal id="my-modal" v-model="showModal">
                Are you sure you want to decline this application?</b-modal>
              </div>
            </div> -->
        <div class="btn-wrapper">
          <div>
            <ApproveModal @approve="updateApprovalStatusNow"
            @close="$emit('closeModal')" />
          </div>
          <div>
            <DeclineModal @decline="updateApprovalStatusDecline"
            @close="$emit('closeModal')" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ApproveModal from '@/components/ApproveModal.vue';
import DeclineModal from '@/components/DeclineModal.vue';

export default {
  name: 'EntriesModal',
  props: {
    data: {
      type: Object,
    },
  },
  components: {
    ApproveModal,
    DeclineModal,
  },
  methods: {
    ...mapActions(['changeStatus']),
    show() {
      this.$modal.show('modal-entries');
    },
    hide() {
      this.$modal.hide('modal-entries');
    },
    updateApprovalStatusNow() {
      this.data.approval_status = 'Approved';
      const userData = {
        userId: this.data.user_id,
        newStatus: 'Approved',
      };
      this.changeStatus(userData);
    },
    updateApprovalStatusDecline() {
      this.data.approval_status = 'Declined';
      const userData = {
        userId: this.data.user_id,
        newStatus: 'Declined',
      };
      this.changeStatus(userData);
    },
  },
};
</script>

<style scoped>
.modal-container {
  width: 450px;
  height: 700px;
  margin: 30px 0px 30px 0px;
  font-family: Lato;
  font-style: normal;
  padding: 15px 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.profile-picture {
  width: 130px;
  height: 130px;
}
.profile-picture img {
  width: 100%;
  height: 100%;
}
.title {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  color: #7d7d7d;
}
.row1,
.row2,
.row3,
.row4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.btn-wrapper{
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.data {
  width: 200px;
  height: 50px;
  padding: 10px;
  border: 1px solid #cdcfd6;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
}
.data-cv {
  width: 200px;
  height: 50px;
  padding: 10px 0px;
  border: 1px #cdcfd6;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
}
a {
  color: #000000;
}
.buttons-div {
  display: flex;
  margin: auto;
}
button {
  width: 125px;
  height: 48px;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: black;
}
button:hover {
  background-color: var(--enyatapurple);
  /* color: #ffffff; */
}
label {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #B1B1B1;
}
</style>
