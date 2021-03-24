<template>
    <div class="container">
      <div class="title">
        <h4>Profile Settings</h4>
        <button>Edit</button>
      </div>
      <hr>
      <div class="options">
        <div class="circle">
          <img src="../assets/account.svg" alt="profile-picture">
        </div>
        <a href="">Upload a new image</a>
        <p class="red-text">X  Remove</p>
      </div>
      <div class="form">
        <div class="row1">
          <div class="input-1">
            <label for="name">Name</label>
            <input type="text" placeholder="Cameron Williamson">
          </div>
          <div class="input-2">
            <label for="name">Email</label>
            <input type="text" placeholder="debra.holt@exsmole.com">
          </div>
          <div class="input-3">
            <label for="name">Phone number</label>
            <input type="text" placeholder="(303) 555-0105">
          </div>
        </div>
        <div class="row2">
          <div class="input-4">
            <label for="name">Country</label>
            <input type="text" placeholder="Afghanistan">
          </div>
          <div class="input-5">
            <label for="name">Address</label>
            <input class="address"
            type="text" placeholder="3891 Ranchview Dr. Richardson, California 62639">
          </div>
        </div>
        <div class="save-btn">
          <button type="submit" class="save-btn">Save</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProfileComponent',
};
</script>

<style scoped>
.container {
  font-family: Lato;
  font-style: normal;
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
  margin-top: 56px;
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
  margin-top: 44px;
}
.row2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
}
input {
  width: 215px;
  height: 54px;
  background: var(--enyata-purple);
  opacity: 0.04;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.117188px;
  color: #333758;
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
