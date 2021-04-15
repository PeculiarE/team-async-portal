<template>
    <div>
      <!-- <button type="button"
      class="btn btn-info btn-lg"
      data-toggle="modal" data-target="#myModal" @click.prevent="show">Approve</button>
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Approve Application</h4>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to approve this application?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Yes</button>
              <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <button  @click.prevent="show">Approve</button> -->
      <b-button type="button" id="show-a-btn" v-b-modal.modal-2>Approve</b-button>
      <div>
        <b-modal hide-header hide-footer centered id="modal-2"
        :modal-class="modalsmall">
          <p>Are you sure you want to approve this application?</p>
          <div class="mod-foot">
            <b-button size="sm" variant="success" @click="approveApplication">
              Yes
            </b-button>
            <b-button size="sm" variant="danger" @click="hideModal">
              No
            </b-button>
          </div>
          <!-- <template #modal-footer> -->
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <!-- <b-button size="sm" variant="success" @click="approveApplication">
              Yes
            </b-button>
            <b-button size="sm" variant="danger" @click="hideModal">
              No
            </b-button> -->
            <!-- Button with custom close trigger value -->
            <!-- <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
              Forget it
            </b-button> -->
          <!-- </template> -->
        </b-modal>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      modalsmall: ['modalsmall'],
    };
  },
  methods: {
    showModal() {
      // this.$modal.show('modal-approve');
      this.$refs['modal-approve'].show();
    },
    hideModal() {
      this.$refs['modal-approve'].hide();
      this.$emit('close');
    },
    approveApplication() {
      this.$emit('approve');
      this.hideModal();
    },
  },
};
</script>

<style>
#show-a-btn {
    /* width: 379px;
    height: 50px; */
    background-color: var(--enyata-purple);
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    font-family: Lato;
    /* margin-top: 60px; */
}
.modalsmall .modal-content {
    /* margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    height: 250px;
    width: 400px;
    /* z-index: 100000; */
}
/* .mod-one {
  width: 200px;
} */
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
