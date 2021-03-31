import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import backend from '../../backend';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDeets: {},
    allUsers: [],
    responseRegister: {
      status: '',
      message: '',
    },
    responseLogin: {
      status: '',
      message: '',
    },
    loginToken: localStorage.getItem('loginToken') || null,
    userPassword: [],
    responseAdminLogin: {
      status: '',
      message: '',
    },
    initialResponseAdminLogin: {
      image: '',
      adminName: '',
      adminEmail: '',
    },
    adminInfo: JSON.parse(localStorage.getItem('adminInfo')),
    loginAdminToken: localStorage.getItem('loginAdminToken') || null,
    questionsDetailsToSend: [],
    ongoingApplication: localStorage.getItem('ongoingApplication') || null,
    hasBatchEnded: 0,
    responseAdminAd: {
      status: '',
      message: '',
    },
    responseAdminUpdate: {
      status: '',
      message: '',
    },
    singleQuestion: {
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctOption: '',
    },
    allQuestions: [],
    // questionsDetailsToSend: [],
  },
  getters: {
    getSingleQuestion(state) {
      return state.singleQuestion;
    },
    getUserDeets(state) {
      return state.userDeets;
    },
    getAllUsers(state) {
      return state.allUsers;
    },
    getQuestionsDetailsToSend(state) {
      return state.questionsDetailsToSend;
    },
    getResponseRegister(state) {
      return state.responseRegister;
    },
    getLoginToken(state) {
      return state.loginToken;
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
        return state.initialResponseAdminLogin;
      }
      return state.adminInfo;
    },
    loggedInStatusAdmin(state) {
      return state.loginAdminToken !== null;
    },
    openApplicationStatus(state) {
      return state.ongoingApplication !== null;
    },
    batchEnded(state) {
      return state.hasBatchEnded !== 0;
    },
    getResponseAdminAd(state) {
      return state.responseAdminAd;
    },
    getResponseAdminUpdate(state) {
      return state.responseAdminUpdate;
    },
  },

  mutations: {
    resetSingleQuestionState(state) {
      state.singleQuestion = {
        question: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: '',
      };
    },
    updateAllQuestionsArray(state, payload) {
      console.log(state.allQuestions);
      state.allQuestions = payload;
      console.log(state.allQuestions);
    },
    updateQuestionsDetailsToSend(state, payload) {
      state.questionsDetailsToSend = state.questionsDetailsToSend.push(payload);
    },
    updateUserDeets(state, payload) {
      console.log(payload);
      state.userDeets = { ...payload };
      console.log(state.userDeets);
    },
    updateQuestionsDetails(state, payload) {
      state.questionsDetailsToSend.push(payload);
    },
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
      console.log({ payload });
      state.loginToken = payload;
    },
    reset(state, payload) {
      state.userPassword.push(payload);
    },
    setNewPassword(state, payload) {
      state.userPassword = payload;
    },
    updateResponseAdminLogin(state, payload) {
      state.responseAdminLogin = {
        status: payload.status,
        message: payload.message,
      };
    },
    updateAdminInfo(state, payload) {
      state.initialResponseAdminLogin.image = payload.image;
      state.initialResponseAdminLogin.adminName = payload.adminName;
      state.initialResponseAdminLogin.adminEmail = payload.adminEmail;
    },
    retrieveLoginAdminToken(state, payload) {
      state.loginAdminToken = payload;
    },
    destroyLoginAdminToken(state) {
      state.loginAdminToken = null;
    },
    updateResponseAdminAd(state, payload) {
      state.responseAdminAd = {
        status: payload.status,
        message: payload.message,
      };
    },
    updateResponseAdminUpdate(state, payload) {
      state.responseAdminUpdate = {
        status: payload.status,
        message: payload.message,
      };
    },
    updateApplicationStatus(state, payload) {
      state.ongoingApplication = payload;
    },
  },
  actions: {
    async register({ commit }, userData) {
      await axios
        .post('https://async-backend.herokuapp.com/register', userData)
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
        .post('https://async-backend.herokuapp.com/login', userData)
        .then((response) => {
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          const { token, userId } = response.data;
          localStorage.setItem('loginToken', token);
          localStorage.setItem('userId', userId);
          commit('retrieveLoginToken', token);
          commit('updateResponseLogin', successObject);
        })
        .catch((error) => {
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          commit('updateResponseLogin', failObject);
        })
        .finally(() => {});
    },

    async resetPassword({ commit }, payload) {
      const formdata = new FormData();
      await axios.post('http://localhost:8080/user/reset', payload, formdata)
        .then((response) => {
          commit('reset', response.data);
        }).catch((error) => {
          console.log(error);
          console.log(payload);
        });
    },

    async newPassword({ commit }, { password, token }) {
      await axios.put(`http://localhost:8080/resetPassword/${token}`, { password })
        .then((response) => {
          console.log(response);
          commit('setNewPassword', response.data);
        }).catch((error) => {
          console.log(error);
          console.log(password);
        });
    },

    async adminLogin({ commit }, userData) {
      console.log(userData);
      await axios
        .post('https://async-backend.herokuapp.com/adminlogin', userData)
        .then((response) => {
          console.log(response);
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
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
          commit('updateResponseAdminLogin', failObject);
        })
        .finally(() => {});
    },

    async adminFetchPage(context) {
      backend.defaults.headers.common.Authorization = `Bearer ${context.state.loginAdminToken}`;
      await backend
        .get('')
        .finally(() => {});
    },
    adminLogout({ commit }) {
      localStorage.removeItem('loginAdminToken');
      localStorage.removeItem('adminInfo');
      commit('destroyLoginAdminToken');
    },

    async userApplyPage(context) {
      backend.defaults.headers.common.Authorization = `Bearer ${context.state.loginToken}`;
      await backend
        .get('')
        .finally(() => {});
    },

    async bringUserDeetstoState({ commit }, payload) {
      const newpayload = payload.data.data;
      commit('updateUserDeets', newpayload);
      console.log(newpayload);
    },

    async populateUserDeets({ dispatch }) {
      if (localStorage.getItem('loginToken')) {
        const id = localStorage.getItem('userId');
        await axios.get(`https://async-backend.herokuapp.com/user/dashboard/${id}`)
          .then((response) => {
            console.log(response);
            dispatch('bringUserDeetstoState', response);
          })
          .catch((error) => console.log(error))
          .finally(() => console.log('finally loading'));
      }
    },

    async populateAllUsers({ dispatch }) {
      if (localStorage.getItem('loginAdminToken')) {
        await axios.get('https://async-backend.herokuapp.com/admin/allusers')
          .then((response) => {
            console.log(response);
            dispatch('bringUserDeetstoState', response);
          })
          .catch((error) => console.log(error))
          .finally(() => console.log('finally loading'));
      }
    },
    async adminCreateAd(context, userData) {
      console.log(userData);
      const formData = new FormData();
      Object.entries(userData).forEach(([key, value]) => {
        formData.append(key, value);
        console.log(formData.getAll);
      });
      console.log({ formData });
      await axios({
        method: 'post',
        url: 'https://async-backend.herokuapp.com/adminapplication',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${context.state.loginAdminToken}`,
        },
      })
        .then((response) => {
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          context.commit('updateResponseAdminAd', successObject);
        })
        .catch((error) => {
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          context.commit('updateResponseAdminAd', failObject);
        })
        .finally(() => {});
    },
    openApplication(context, batchId) {
      localStorage.setItem('ongoingApplication', batchId);
      context.commit('updateApplicationStatus', batchId);
    },
    async adminUpdate(context, userData) {
      console.log(userData);
      const formData = new FormData();
      Object.entries(userData).forEach(([key, value]) => {
        formData.append(key, value);
        console.log(formData.getAll);
      });
      console.log({ formData });
      await axios({
        method: 'post',
        url: 'https://async-backend.herokuapp.com/adminupdate',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${context.state.loginAdminToken}`,
        },
      })
        .then((response) => {
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          const { deets } = response.data;
          context.commit('updateAdminInfo', deets);
          localStorage.setItem('adminInfo', JSON.stringify(deets));
          context.commit('updateResponseAdminUpdate', successObject);
        })
        .catch((error) => {
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          context.commit('updateResponseAdminUpdate', failObject);
        })
        .finally(() => {});

    nextAfterFirstNext(context) {
      console.log(context.state.singleQuestion);
      console.log(context.state.allQuestions);
      context.state.allQuestions.push(context.state.singleQuestion);
      console.log(context.state.allQuestions);
      context.commit('updateAllQuestionsArray', context.state.allQuestions);
      console.log(context.state.allQuestions);
      console.log(context.state.singleQuestion);
      // context.commit('resetSingleQuestionState');
    },
    arrayDeclare(context) {
      const allQuestions = [];
      console.log(context.state.singleQuestion);
      allQuestions.push(context.state.singleQuestion);
      console.log(allQuestions);
      context.commit('updateAllQuestionsArray', allQuestions);
      console.log(context.state.allQuestions);
      // context.commit('resetSingleQuestionState');
      // return allQuestions;
    },
    adminNextQuestionButton({ dispatch, state }) {
      if (state.allQuestions.length === 0) {
        dispatch('arrayDeclare');
      } else {
        dispatch('nextAfterFirstNext');
      }
    },
    adminFinishSettingQuestions(state) {
      console.log('I was clicked');
      state.questionsDetailsToSend.push(state.allQuestions);
    },
  },
});
