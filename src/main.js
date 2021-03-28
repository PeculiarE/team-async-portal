import Vue from 'vue';
import Vuex from 'vuex';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Vuex);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueFileAgent);
Vue.use(VueFileAgentStyles);

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
