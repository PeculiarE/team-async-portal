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
  },
  getters: {
    getResponseRegister(state) {
      return state.responseRegister;
    },
  },
  mutations: {
    updateResponseRegister(state, payload) {
      state.responseRegister = {
        status: payload.status,
        message: payload.message,
      };
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
          console.log(response, successObject);
          commit('updateResponseRegister', successObject);
        })
        .catch((error) => {
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          console.log(error, failObject);
          commit('updateResponseRegister', failObject);
        })
        .finally(() => {});
    },
    // async signup({ commit }, userInfo) {
    //   try {
    //     const response = await axios.post('https://sellforme-api.herokuapp.com/api/register', userInfo);
    //     let responseObject = {
    //       type: 'success',
    //       message: response.data.message
    //     }
    //     commit('setResponseReg', responseObject)
    //   } catch (error) {
    //     let responseObject = {
    //       type: 'failed',
    //       message: error.response.data.message
    //     }
    //     commit('setResponseReg', responseObject)
    //   }
    // },
  },
  modules: {
  },
});
