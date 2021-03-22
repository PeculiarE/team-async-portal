<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

:root {
--enyata-purple: #7557D3;
--text-primary: #2B3C4E;
--text-secondary-small: #4F4F4F;
}

#app {
  font-family: 'Lato', sans-serif;
  color: #2b3c4e;
  background-color: #FDFDFF;
}

#admin-sidebar-top-section {
  height: 33%;
  padding-top: 15%;
  background: #5ABEFD;
  text-align: center;
}

#sidebar-top-section {
  height: 25%;
  width: 100%;
  background: #2B3C4E;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border: 1px solid #000000;
  text-align: center;
}
</style>
