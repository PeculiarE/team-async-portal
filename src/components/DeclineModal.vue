<template>
<div>
    <button @click.prevent="show" >Decline</button>
    <modal name='modal-decline'>
        <p>Are you sure you want to decline
        <br/><span>this application?</span></p>
        <div class="space">
            <button>Yes</button>
            <button>No</button>
        </div>

    </modal>
</div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show('modal-decline');
    },
    hide() {
      this.$modal.hide('modal-decline');
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
