import Vue from 'vue';
import Vuex from 'vuex';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VModal from 'vue-js-modal';

import App from './App.vue';
import router from './router';
import store from './store';
import backend from '../backend';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Vuex);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VModal);
Vue.use(VueFileAgent);
Vue.use(VueFileAgentStyles);

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
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
