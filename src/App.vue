<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1440px;
  max-height: 1024px;
  color: #2b3c4e;
  box-sizing: border-box;
 }
#admin-sidebar-top-section {
  height: 33%;
  padding-top: 15%;
  background: #5ABEFD;
  text-align: center;
}
</style>
