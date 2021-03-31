<template>
         <div class="modal-container">
        <form>
          <div class="profile-picture"></div>
          <div class="title">Personal Details</div>
          <hr>
          <div class="details">
            <div class="row1">
              <div class="name">
                <label for="name">Name</label><br>
                <input type="text" id="name" value="Ify Chinke">
              </div>
              <div class="email">
                <label for="email">Email</label><br>
                <input type="text" id="email" value="ify@enyata.com">
              </div>
            </div>
            <div class="row2">
              <div class="address">
                <label for="address">Address</label><br>
                <input type="text" id="address" value="3, Sabo Ave, Yaba, Lagos">
              </div>
              <div class="university">
                <label for="university">University</label><br>
                <input type="text" id="university" value="University of Nigeria, Nsukka">
              </div>
            </div>
            <div class="row3">
              <div class="course">
                <label for="course">Course of study</label><br>
                <input type="text" id="course" value="Computer Science">
              </div>
              <div class="dob">
                <label for="dob">Date of Birth</label><br>
                <input type="text" id="dob" value="12/09/19 - 22">
              </div>
            </div>
            <div class="row4">
              <div class="cgpa">
                <label for="cgpa">CGPA</label><br>
                <input type="text" id="cgpa" value="5.0">
              </div>
              <div class="cv">
                <p>CV</p><br>
                <span></span>
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
                    <ApproveModal/>
                </div>
                <div>
                    <DeclineModal/>
                </div>
            </div>
          </div>
        </form>
      </div>
</template>

<script>
import ApproveModal from '@/components/ApproveModal.vue';
import DeclineModal from '@/components/DeclineModal.vue';

export default {
  name: 'EntriesModal',
  components: {
    ApproveModal,
    DeclineModal,
  },
  methods: {
    show() {
      this.$modal.show('modal-entries');
    },
    hide() {
      this.$modal.hide('modal-entries');
    },
  },
};
</script>

<style scoped>
.modal-container {
    width: 600px;
    height: 100%;
    margin: 95px 58px 145px 48px;
    font-family: Lato;
    font-style: normal;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
}
.profile-picture {
    width: 179px;
    height: 179px;
    background: brown;
}
.title {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    color: #7D7D7D;
}
.row1, .row2, .row3, .row4 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
input {
    width: 231px;
    height: 48px;
    border: 1px solid #CDCFD6;
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #4F4F4F;
}
.buttons-div {
    display: flex;
    margin: auto ;
}
button {
    width: 125px;
    height: 48px;
    border: 1px solid #CECECE;
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #4F4F4F;
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
    /* color: #B1B1B1; */
}
</style>
