import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';
import backend from '../backend';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

dom.watch();

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);
backend.interceptors.response.use(undefined, (error) => {
  /* eslint no-underscore-dangle: ["error", { "allow": ["_retry"] }] */
  const originalRequest = error;
  if (originalRequest.response.status === 401 && !originalRequest.config._retry) {
    originalRequest.config._retry = true;
    store.dispatch('adminLogout');
    return router.push({ name: 'AdminLogin' });
  }
  return null;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
