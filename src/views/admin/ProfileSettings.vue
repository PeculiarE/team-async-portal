<template>
    <div class="wrapper">
        <div class="aside">
            <AdminSidebar :toggleSettingsBorder="toggleSettingsBorder" />
        </div>
        <div class="contents">
          <div class="contents-top">
            <div class="heading">
              <h1>Profiles and Settings</h1>
              <p>Helps you set admin profile and give other users permissions</p>
            </div>
            <div class="buttons-div">
              <button class="btn1"><a href="#">Admin Profile</a></button>
              <button @click="openTimerSettings" class="btn2">Timer Settings</button>
            </div>
          </div>
          <div class="contents-bottom">
            <ProfileComponent />
          </div>
        </div>
    </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue';
import ProfileComponent from '@/components/ProfileComponent.vue';

export default {
  name: 'ProfileSettings',
  data() {
    return {
      toggleSettingsBorder: false,
    };
  },
  components: {
    AdminSidebar,
    ProfileComponent,
  },
  methods: {
    openTimerSettings() {
      this.$router.push({ name: 'TimerSettings' });
    },
  },
  mounted() {
    this.toggleSettingsBorder = true;
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 900px;
  display: flex;
  font-family: Lato;
  font-style: normal;
}
.aside {
  width: 25%;
}
.contents {
  width: 75%;
  padding-left: 37px;
  height: 750px;
}
.contents-top {
  width: 365px;
  margin-top: 50px;
  box-sizing: border-box;
}
.contents-bottom {
  width: 724px;
  margin-top: 58px;
  margin-bottom: 58px;
}
.heading h1 {
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
}
p {
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #202F44;
  mix-blend-mode: normal;
  opacity: 0.5;
}
.heading p {
  width: 393px;
  height: 21px;
}
.buttons-div {
  display: flex;
  justify-content: space-between;
  margin-top: 86px;
}
.btn1, .btn2 {
  width: 188px;
  height: 64px;
  background: rgba(117, 87, 211, 0.1);
  border: none;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #333758;
  mix-blend-mode: normal;
}
.btn2 {
  background: #ffffff;
}
</style>
