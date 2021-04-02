<template>
<div>
    <!-- <button @click.prevent="show" >Decline</button>
    <modal name='modal-decline'>
        <p>Are you sure you want to decline
        <br/><span>this application?</span></p>
        <div class="space">
            <button>Yes</button>
            <button>No</button>
        </div>

    </modal> -->
    <b-button id="show-btn" @click="showModal">Decline</b-button>
      <div>
        <b-modal id="modal-sm" ref='modal-decline'
        size="sm">
          <p>Are you sure you want to decline this application?</p>
          <template #modal-footer>
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button size="sm" variant="success" @click="declineApplication">
              Yes
            </b-button>
            <b-button size="sm" variant="danger" @click="hideModal">
              No
            </b-button>
            <!-- Button with custom close trigger value -->
            <!-- <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
              Forget it
            </b-button> -->
          </template>
        </b-modal>
      </div>
</div>
</template>

<script>
export default {
  methods: {
    showModal() {
      // this.$modal.show('modal-approve');
      this.$refs['modal-decline'].show();
    },
    hideModal() {
      this.$refs['modal-decline'].hide();
      this.$emit('close');
    },
    declineApplication() {
      this.$emit('decline');
      this.hideModal();
    },
  },
};
</script>

<style scoped>
/* button{
width: 125px;
height: 48px;
background: #fff;
border-radius: 4px;
color: #000;
font-size: 14px;
border: 1px solid #474747;
outline: none;
cursor: pointer;
}
button:hover{
    background: #7557D3;
    color: #fff;
}
p{
    margin-top: 75px;
}
.space{
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 62px;
}
.space button{
    border: none;
    outline: none;
    font-size: 14px;
}
.space button:hover{
    border: 1px solid #7557d3;
    background: #7557d3;
    outline: none;
    color: #fff;
} */
</style>
