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
              <button @click="openProfileSettings" class="btn1">Admin Profile</button>
              <button class="btn2"><a href="#">Timer Settings</a></button>
            </div>
          </div>
          <div class="contents-bottom">
            <TimerComponent />
          </div>
        </div>
    </div>
</template>

<script>
import AdminSidebar from '@/components/AdminSidebar.vue';
import TimerComponent from '@/components/TimerComponent.vue';

export default {
  name: 'TimerSettings',
  data() {
    return {
      toggleSettingsBorder: false,
    };
  },
  components: {
    AdminSidebar,
    TimerComponent,
  },
  methods: {
    openProfileSettings() {
      this.$router.push({ name: 'ProfileSettings' });
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
  height: 750px;
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
}
.contents-top {
  width: 365px;
  margin-top: 50px;
  box-sizing: border-box;
}
.contents-bottom {
  width: 724px;
  margin-top: 58px;
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
.btn1 {
  background: #ffffff;
}
</style>
