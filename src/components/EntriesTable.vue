<template>
  <div class="entries-container">
    <div class="title d-flex">
      <span pt-5 pl-5>Entries - Batch 1</span>
      <div class="image"><img src="../assets/arrow-down-icon.svg" alt="arrow"></div>
    </div>
    <div id="description-div">
      <span class="description">Comprises of all that applied for Batch 1</span>
    </div>
    <b-table
      id="entries-table"
      :items="getAllUsers"
      :fields="fields"
      head-variant="dark"
      table-variant="light"
      :borderless="true"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      v-b-modal.modal-1
      @row-clicked="(item, index, event) => onRowSelected(item, index, event)"
    >
    </b-table>
    <div>
      <b-modal id="modal-1">
        <form>
        <div class="d-flex justify-content-between">
          <div class="profile-picture">
            <img :src="data.photo_url" alt="image">
          </div>
        </div>
        <br>
        <div class="title-two">Personal Details</div>
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
          </div>
      </form>
      <template #modal-footer>
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
      </template>
    </b-modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ApproveModal from '@/components/ApproveModal.vue';
import DeclineModal from '@/components/DeclineModal.vue';

export default {
  name: 'EntriesTable',
  components: {
    ApproveModal,
    DeclineModal,
  },
  data() {
    return {
      fields: [
        {
          key: 'full_name',
          label: 'Name',
          sortable: false,
        },
        {
          key: 'email',
          sortable: false,
        },
        {
          key: 'dob',
          label: 'DOB - Age',
          sortable: true,
        },
        {
          key: 'address',
          sortable: false,
        },
        {
          key: 'university',
          sortable: false,
        },
        {
          key: 'cgpa',
          label: 'CGPA',
          sortable: true,
        },
        {
          key: 'approval_status',
          label: 'Status',
          sortable: false,
        },
      ],
      data: [],
      modes: ['single'],
      selectMode: 'single',
      modalShow: false,
      approveApplication: false,
      declineApplication: false,
      dontShowModal: true,
    };
  },
  computed: {
    ...mapGetters(['getAllUsers']),
  },
  methods: {
    ...mapActions(['populateAllUsers', 'changeStatus']),
    onRowSelected(item) {
      // this.dontShowModal = false;
      this.data = item;
      console.log(item);
    },
    closeModal() {
      this.dontShowModal = true;
    },
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
  mounted() {
    this.populateAllUsers();
  },
};
</script>

<style scoped>
/* .container {
    margin-right: 42px;
} */
.title {
  width: 350px;
  height: 53px;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-top: 50px;
}
#description-div {
  margin-bottom: 37px;
}
.description {
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  text-align: left;
  color: var(--text-secondary-small);
}
.entries-table {
  height: 100%;
}
.entries-table tbody {
  font-size: 5px;
}
.entries-container table {
  margin-top: 100px;
  text-align: center;
}
/* .entry-details {
  width: 600px;
  height: 100vh;
  margin: 0 50px;
} */
:focus {outline:0 !important;}
*:focus {
    outline: none !important;
}
.profile-picture {
  width: 130px;
  height: 130px;
}
.profile-picture img {
  width: 100%;
  height: 100%;
}
.title-two {
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
  width: 200px;
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
