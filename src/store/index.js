import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import backend from '../../backend';
// import userAuth from '../../requireAuth';

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
    questionCount: 0,
    setTime: 0,
    allQuestionsInDb: [],
  },
  getters: {
    getAllQuestions(state) {
      return state.allQuestionsInDb;
    },
    getSetTime(state) {
      return state.setTime;
    },
    getQuestionCount(state) {
      return state.questionCount;
    },
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
    renderAllBatchQuestionsInDb(state, payload) {
      state.allQuestionsInDb = [...payload];
      console.log(state.allQuestionsInDb);
    },
    updateQuestionCount(state, payload) {
      console.log(state.questionCount);
      state.questionCount += payload;
      console.log(state.questionCount);
    },
    resetSingleQuestion(state) {
      state.singleQuestion = {
        question: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: '',
      };
    },
    updateUserDeets(state, payload) {
      console.log(payload);
      state.userDeets = { ...payload };
      console.log(state.userDeets);
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
      console.log(payload.image);
      if (payload.image === null) {
        /* eslint-disable global-require */
        state.initialResponseAdminLogin.image = require('@/assets/account.svg');
        state.initialResponseAdminLogin.adminName = payload.adminName;
        state.initialResponseAdminLogin.adminEmail = payload.adminEmail;
      } else {
        state.initialResponseAdminLogin.image = payload.image;
        state.initialResponseAdminLogin.adminName = payload.adminName;
        state.initialResponseAdminLogin.adminEmail = payload.adminEmail;
      }
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
      await axios.post('https://team-async.herokuapp.com/user/reset', payload)
        .then((response) => {
          commit('reset', response.data);
          console.log(response);
        }).catch((error) => {
          console.log(error);
          console.log(payload);
        });
    },

    async newPassword({ commit }, { password, token }) {
      await axios.post(`https://team-async.herokuapp.com/resetpassword/${token}`, { password })
        .then((response) => {
          console.log(response);
          commit('setNewPassword', response.data);
        }).catch((error) => {
          console.log(error);
          console.log(password);
        });
    },
    async adminLogin(context, userData) {
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
          context.commit('retrieveLoginAdminToken', token);
          context.commit('updateResponseAdminLogin', successObject);
          context.commit('updateAdminInfo', deets);
          localStorage.setItem('adminInfo', JSON.stringify(context.state.initialResponseAdminLogin));
        })
        .catch((error) => {
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          context.commit('updateResponseAdminLogin', failObject);
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

    async bringAllQuestionsToState({ commit }, payload) {
      const newpayload = payload.data;
      commit('renderAllBatchQuestionsInDb', newpayload);
      console.log(newpayload);
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
    },

    // validateQuestionFields()
    // dispatch('validateQuestionFields');

    getQuestionsByBatchInDb() {
      console.log('here!');
      if (localStorage.getItem('loginToken')) {
        console.log(localStorage.getItem('loginToken'));
      }
    },

    resetSingleQuestionState({ commit }) {
      commit('resetSingleQuestion');
    },

    incrementQuestionCount({ commit }) {
      commit('updateQuestionCount', 1);
    },
    async adminNextQuestionButton(context) {
      if (localStorage.getItem('loginAdminToken')) {
        console.log(context.state.loginAdminToken);
        await axios({
          method: 'POST',
          url: 'http://localhost:3000/question',
          data: context.state.singleQuestion,
          headers: {
            Authorization: `Bearer ${context.state.loginAdminToken}`,
          },
        }).then(() => {
          context.dispatch('incrementQuestionCount');
          context.dispatch('resetSingleQuestionState');
          console.log(context.state.singleQuestion);
          console.log(context.state.questionCount);
        }).catch((error) => console.log('error', error)).finally(() => {
          console.log('done');
        });
      }
    },

    adminFinishSettingQuestions() {
      console.log('I was clicked');
    },

  },
});
