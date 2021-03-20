<template>
  <div class="create-form">
    <div class="aside">
      <AdminSidebar />
    </div>
    <div class="contents">
        <div class="title">Create Application</div>
        <div class="first-row">
            <div class="choose-file">
                <span>+ choose file</span>
            </div>
            <div class="link">
                <label for="link">Link</label><br>
                <input id="link" required>
            </div>
        </div>

        <div class="second-row">
            <div class="closure-date">
                <label for="closure-date">Application closure date</label><br>
                <input placeholder="dd/mm/yyyy" id="closure-date" required>
            </div>
            <div class="batch-id">
                <label for="batch">Batch ID</label><br>
                <input id="batch" required>
            </div>
        </div>

        <div class="instructions">
            <p>Instructions</p>
            <textarea name="instructions" id="textarea"></textarea>
        </div>

        <b-button block type="submit" class="button">Submit</b-button>

    </div>
  </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue';

export default {
  name: 'SignUp',
  components: {
    AdminSidebar,
  },
};
</script>

<style scoped>
.create-form {
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    display: flex;
}
.aside {
    height: 100%;
    width: 20.28%
}
.contents {
    height: 100%;
    width: 79.72%;
}
.title {
    width: 331px;
    height: 53px;
    font-style: normal;
    font-weight: 300;
    font-size: 38.29px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
    margin-top: 15.22%;
    margin-left: 75px;
}
.first-row {
    margin-right: 97px;
    margin-left: 75px;
    display: flex;
    align-items: center ;
}
.choose-file {
    width: 456px;
    height: 94.92px;
    border: 1.55172px dashed #2B3C4E;
    border-radius: 6.2069px;
    margin: 62px 64px 52px 0;
    text-align: center;
    vertical-align: middle
}
.choose-file span {
    height: 22px;
    width: 81px;
    font-size: 16px;
    margin: auto;
}
input {
    height: 41px;
    width: 456px;
    border-radius: 4px;
    border: 1.5px solid #2B3C4E;
}
.second-row {
    margin-right: 97px;
    margin-left: 75px;
    display: flex;
    justify-content: space-between;
}
.instructions {
    margin: 36px 97px 0 75px;
}
textarea {
    width: 976px;
    height: 144px;
    border: 1.5px solid #2B3C4E;
    border-radius: 4px;
}
.button {
    width: 379px;
    height: 50px;
    background-color: #1a2c56;
    margin: auto;
    margin-top: 44px;

}
</style>
