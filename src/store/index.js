import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    responseRegister: {
      status: '',
      message: '',
    },
    responseLogin: {
      status: '',
      message: '',
    },
    loginToken: localStorage.getItem('loginToken') || null,
    responseAdminLogin: {
      status: '',
      message: '',
    },
    ori: {
      image: '',
      adminName: '',
      adminEmail: '',
    },
    adminInfo: JSON.parse(localStorage.getItem('adminInfo')),
    loginAdminToken: localStorage.getItem('loginAdminToken') || null,
  },
  getters: {
    getResponseRegister(state) {
      return state.responseRegister;
    },
    getResponseLogin(state) {
      return state.responseLogin;
    },
    loggedInStatus(state) {
      return state.loginToken !== null;
    },
    getResponseAdminLogin(state) {
      return state.responseAdminLogin;
    },
    getAdminInfo(state) {
      if (!state.adminInfo) {
        return state.ori;
      }
      return state.adminInfo;
    },
    loggedInStatusAdmin(state) {
      return state.loginAdminToken !== null;
    },
  },
  mutations: {
    updateResponseRegister(state, payload) {
      state.responseRegister = {
        status: payload.status,
        message: payload.message,
      };
    },
    updateResponseLogin(state, payload) {
      state.responseLogin = {
        status: payload.status,
        message: payload.message,
      };
    },
    retrieveLoginToken(state, payload) {
      state.loginToken = payload;
    },
    updateResponseAdminLogin(state, payload) {
      state.responseAdminLogin = {
        status: payload.status,
        message: payload.message,
      };
    },
    updateAdminInfo(state, payload) {
      console.log(state.ori, payload);
      state.ori.image = payload.image;
      state.ori.adminName = payload.adminName;
      state.ori.adminEmail = payload.adminEmail;
    },
    retrieveLoginAdminToken(state, payload) {
      state.loginAdminToken = payload;
    },
    destroyLoginAdminToken(state) {
      state.loginAdminToken = null;
    },
  },
  actions: {
    async register({ commit }, userData) {
      await axios
        .post('https://team-async.herokuapp.com/register', userData)
        .then((response) => {
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          commit('updateResponseRegister', successObject);
        })
        .catch((error) => {
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          commit('updateResponseRegister', failObject);
        })
        .finally(() => {});
    },
    async login({ commit }, userData) {
      await axios
        .post('https://team-async.herokuapp.com/login', userData)
        .then((response) => {
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          const { token } = response.data;
          localStorage.setItem('loginToken', token);
          commit('retrieveLoginToken', token);
          commit('updateResponseLogin', successObject);
        })
        .catch((error) => {
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          console.log(error, failObject);
          commit('updateResponseLogin', failObject);
        })
        .finally(() => {});
    },
    async adminLogin({ commit }, userData) {
      await axios
        .post('https://team-async.herokuapp.com/adminlogin', userData)
        .then((response) => {
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          console.log(response);
          const { token, deets } = response.data;
          localStorage.setItem('loginAdminToken', token);
          commit('retrieveLoginAdminToken', token);
          commit('updateResponseAdminLogin', successObject);
          commit('updateAdminInfo', deets);
          localStorage.setItem('adminInfo', JSON.stringify(deets));
        })
        .catch((error) => {
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          console.log(error, failObject);
          commit('updateResponseAdminLogin', failObject);
        })
        .finally(() => {});
    },
  },
  modules: {
  },
});
