/* eslint-disable no-alert */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import backend from '../../backend';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDeets: JSON.parse(localStorage.getItem('userDeets')) || {},
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
    adminDetails: [],
    applicants: [],
    ongoingApplication: localStorage.getItem('ongoingApplication') || null,
    applicationStartDate: localStorage.getItem('applicationStartDate') || null,
    hasBatchEnded: localStorage.getItem('hasBatchEnded') || null,
    assessmentComposed: localStorage.getItem('assessmentComposed') || null,
    responseAdminAd: {
      status: '',
      message: '',
    },
    responseAdminUpdate: {
      status: '',
      message: '',
    },
    summary: {},
    presentBatch: 0,
    currentApplications: 0,
    totalApplications: 0,
    summaryTable: [],
    latestApplication: localStorage.getItem('latestApplication') || null,
    adminQuestions: [],
    questionCount: 0,
    totalQuestionCount: 0,
    setTime: 0,
    allQuestionsInDb: [],
    testScore: 0,
    usersInBatch: [],
    assessmentHistory: [],
    dateOfExpiration: null,
  },
  getters: {
    getDateOfExpiration(state) {
      return state.dateOfExpiration;
    },
    getAssessmentHistory(state) {
      return state.assessmentHistory;
    },
    getTotalQuestionCount(state) {
      return state.totalQuestionCount;
    },
    getUsersInBatch(state) {
      return state.usersInBatch;
    },
    getTestScore(state) {
      return state.testScore;
    },
    getAllQuestions(state) {
      return state.allQuestionsInDb;
    },
    getSetTime(state) {
      return state.setTime;
    },
    getQuestionCount(state) {
      return state.questionCount;
    },
    getAdminQuestions(state) {
      return state.adminQuestions;
    },
    getUserDeets(state) {
      return state.userDeets;
    },
    getUserDeetsTime(state) {
      const a = state.userDeets.updated_at;
      const date = new Date(a);
      const b = date.getDate();
      const c = date.getMonth() + 1;
      const d = date.getFullYear();
      const e = `${b}.${c}.${d}`;
      return e;
    },
    getUserDeetsStatus(state) {
      return state.userDeets.approval_status;
    },
    getUserDeetsApplicationStatus(state) {
      return state.userDeets.application_status;
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
    getCurrentAdminDetails(state) {
      return state.adminDetails;
    },
    openApplicationStatus(state) {
      return state.ongoingApplication !== null;
    },
    batchEnded(state) {
      return state.hasBatchEnded !== null;
    },
    getAssessmentComposed(state) {
      return state.assessmentComposed !== null;
    },
    getResponseAdminAd(state) {
      return state.responseAdminAd;
    },
    getResponseAdminUpdate(state) {
      return state.responseAdminUpdate;
    },
    getUpdatedCurrentBatch(state) {
      return state.presentBatch;
    },
    getCurrentApplications(state) {
      return state.currentApplications;
    },
    getTotalApplications(state) {
      return state.totalApplications;
    },
    getSummaryTable(state) {
      return state.summaryTable;
    },
    getLatestApplication(state) {
      return state.latestApplication;
    },
  },

  mutations: {
    updateExpirationDate(state, payload) {
      state.dateOfExpiration = payload;
      console.log(state.dateOfExpiration);
    },
    updateAssessmentHistory(state, payload) {
      state.assessmentHistory = payload;
      console.log(state.assessmentHistory);
    },
    updateQuizSetTime(state, payload) {
      state.setTime = payload;
      console.log(state.setTime);
    },
    updateTestscore(state, payload) {
      state.testScore = payload;
    },
    adminDetails(state, payload) {
      state.adminDetails = payload;
    },
    renderAllBatchQuestionsInDb(state, payload) {
      state.allQuestionsInDb = [...payload];
      console.log(state.allQuestionsInDb);
    },
    updateTotalQuestionCount(state, payload) {
      state.totalQuestionCount += payload;
    },
    updateQuestionCount(state, payload) {
      state.questionCount += payload;
    },
    reduceQuestionCount(state, payload) {
      state.questionCount -= payload;
    },
    updateAdminQuestions(state, payload) {
      state.adminQuestions.push(payload);
    },
    updateUserDeets(state, payload) {
      console.log(payload);
      state.userDeets = { ...payload };
      console.log(state.userDeets);
      localStorage.setItem('userDeets', JSON.stringify(payload));
    },

    updateAllUsersDeets(state, payload) {
      payload.forEach((el) => {
        const date = new Date(el.dob);
        const b = date.getDate();
        const c = date.getMonth() + 1;
        const d = date.getFullYear();
        const e = `${b}/${c}/${d}`;
        // eslint-disable-next-line no-param-reassign
        el.dob = `${e} - ${el.age}`;
      });
      state.allUsers = payload;
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
      console.log(payload.image);
      if (payload.image === null || payload.image === 'null' || payload.image === 'removed') {
        /* eslint-disable global-require */
        state.initialResponseAdminLogin.image = require('@/assets/account.svg');
        state.initialResponseAdminLogin.adminName = payload.adminName;
        state.initialResponseAdminLogin.adminEmail = payload.adminEmail;
        state.initialResponseAdminLogin.adminPhone = payload.adminPhone === null ? payload.adminPhone : `${payload.adminPhone}`;
        state.initialResponseAdminLogin.adminAddress = payload.adminAddress;
        state.initialResponseAdminLogin.adminCountry = payload.adminCountry;
        console.log(state.initialResponseAdminLogin);
      } else {
        state.initialResponseAdminLogin.image = payload.image;
        state.initialResponseAdminLogin.adminName = payload.adminName;
        state.initialResponseAdminLogin.adminEmail = payload.adminEmail;
        state.initialResponseAdminLogin.adminPhone = payload.adminPhone === null ? payload.adminPhone : `${payload.adminPhone}`;
        state.initialResponseAdminLogin.adminAddress = payload.adminAddress;
        state.initialResponseAdminLogin.adminCountry = payload.adminCountry;
        console.log(state.initialResponseAdminLogin);
      }
    },
    retrieveLoginAdminToken(state, payload) {
      state.loginAdminToken = payload;
    },
    destroyLoginAdminToken(state) {
      state.loginAdminToken = null;
    },
    allApplicants(state, payload) {
      state.applicants = payload;
    },
    destroyLoginToken(state) {
      state.loginToken = null;
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
    updateApplicationStartDate(state, payload) {
      state.applicationStartDate = payload;
    },
    updateBatchStatus(state, payload) {
      state.hasBatchEnded = payload;
    },
    updateAssessmentComposed(state, payload) {
      state.assessmentComposed = payload;
    },
    updatePresentBatch(state, payload) {
      state.presentBatch = payload;
    },
    updateCurrentApplications(state, payload) {
      state.currentApplications = payload;
    },
    updateTotalApplications(state, payload) {
      state.totalApplications = payload;
    },
    showSummaryTable(state, payload) {
      state.summaryTable = payload;
    },
  },

  actions: {
    async register({ commit }, userData) {
      await axios
        .post('http://localhost:3000/register', userData)
        .then((response) => {
          console.log(response);
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          commit('updateResponseRegister', successObject);
        })
        .catch((error) => {
          console.log(error);
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          commit('updateResponseRegister', failObject);
        })
        .finally(() => {});
    },

    async verify({ commit }, token) {
      console.log(token);
      await axios
        .post(`http://localhost:3000/verify/${token}`)
        .then((response) => {
          console.log(response);
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          commit('updateResponseRegister', successObject);
        })
        .catch((error) => {
          console.log(error);
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
      await axios.post('http://localhost:3000/user/reset', payload)
        .then((response) => {
          commit('reset', response.data);
          console.log(response);
        }).catch((error) => {
          console.log(error);
          console.log(payload);
        });
    },

    async newPassword({ commit }, { password, token }) {
      await axios.put(`http://localhost:3000/resetpassword/${token}`, { password })
        .then((response) => {
          console.log(response);
          commit('setNewPassword', response.data);
        }).catch((error) => {
          console.log(error);
          console.log(password);
        });
    },

    async adminLogin(context, userData) {
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
    userLogout({ commit }) {
      localStorage.removeItem('loginToken');
      localStorage.removeItem('userId');
      commit('destroyLoginToken');
    },
    // async userApplyPage(context) {
    //   backend.defaults.headers.common.Authorization = `Bearer ${context.state.loginToken}`;
    //   await backend
    //     .get('')
    //     .finally(() => {});
    // }, TO BE REWRITTEN

    async bringUserDeetstoState({ commit }, payload) {
      // add state beside the commit in above later.
      const newpayload = payload.data.data;
      const date = new Date(newpayload.updated_at).toLocaleString() || null;
      localStorage.setItem('latestApplication', date);
      commit('updateUserDeets', newpayload);
      // commit('updateAllUsersDeets', newpayload);
      commit('updateAllUsersDeets', newpayload);
      console.log(newpayload.updated_at);
    },

    async populateUserDeets({ dispatch }) {
      if (localStorage.getItem('loginToken')) {
        const id = localStorage.getItem('userId');
        console.log(id);
        await axios.get(`https://async-backend.herokuapp.com/user/dashboard/${id}`)
          .then((response) => {
            dispatch('bringUserDeetstoState', response);
          })
          .catch((error) => console.log(error));
        // .finally(() => console.log('finally loading'));
      }
    },

    async bringAllQuestionsToState({ commit }, payload) {
      const newpayload = payload.data;
      commit('renderAllBatchQuestionsInDb', newpayload);
      console.log(newpayload);
    },

    async populateAllUsers({ dispatch, state }) {
      if (localStorage.getItem('loginAdminToken')) {
        axios.defaults.headers.common.Authorization = `Bearer ${state.loginAdminToken}`;
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
    openApplication(context, payload) {
      localStorage.setItem('ongoingApplication', payload.batchId);
      context.commit('updateApplicationStatus', payload.batchId);
      localStorage.setItem('applicationStartDate', payload.openDate);
      context.commit('updateApplicationStartDate', payload.openDate);
    },
    openBatch(context, batchOn) {
      // console.log(batchOn);
      localStorage.setItem('hasBatchEnded', batchOn);
      context.commit('updateBatchStatus', batchOn);
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
          console.log(response);
          const successObject = {
            status: response.data.status,
            message: response.data.message,
          };
          const { deets } = response.data;
          context.commit('updateAdminInfo', deets);
          localStorage.setItem('adminInfo', JSON.stringify(context.state.initialResponseAdminLogin));
          context.commit('updateResponseAdminUpdate', successObject);
        })
        .catch((error) => {
          console.log(error);
          const failObject = {
            status: error.response.data.status,
            message: error.response.data.message,
          };
          context.commit('updateResponseAdminUpdate', failObject);
        })
        .finally(() => {});
    },

    adminNextQuestionButton({ commit, state }, newSingleQuestion) {
      let newSingleQuestionObject = state.adminQuestions.find((el) => el.questionNumber
      === newSingleQuestion.questionNumber);
      if (newSingleQuestionObject) {
        newSingleQuestionObject = { ...newSingleQuestion };
        commit('updateAdminQuestions', newSingleQuestionObject);
      }
      commit('updateQuestionCount', 1);
      commit('updateTotalQuestionCount', 1);
      const addIDtoQuestion = { ...newSingleQuestion, questionNumber: state.questionCount };
      commit('updateAdminQuestions', addIDtoQuestion);
    },

    async changeStatus({ dispatch, state }, userData) {
      axios.defaults.headers.common.Authorization = `Bearer ${state.loginAdminToken}`;
      await axios.post('https://async-backend.herokuapp.com/update', userData)
        .then((response) => {
          console.log(response);
          dispatch('populateAllUsers', response);
        })
        .catch((error) => console.log(error))
        .finally(() => console.log('finally loading'));
    },
    async getSummary({ commit, state }) {
      axios.defaults.headers.common.Authorization = `Bearer ${state.loginAdminToken}`;
      await axios.get('https://async-backend.herokuapp.com/summary')
        .then((response) => {
          const arr = response.data.data;
          console.log(arr);
          arr.sort((a, b) => ((a.batch_id > b.batch_id) ? -1 : 1));
          state.summary = { ...arr };
          const { count } = state.summary['0'];
          const batchId = state.summary['0'].batch_id;
          let totalApp = 0;
          const entireTableSummary = [];
          Object.entries(state.summary).forEach((value) => {
            totalApp += Number(value[1].count);
            const tableSummary = {
              batch: `Academy Batch ${value[1].batch_id}`,
              applicants: `${value[1].count} applicants`,
              date: `Started ${state.applicationStartDate}`,
            };
            entireTableSummary.push(tableSummary);
          });
          commit('updatePresentBatch', batchId);
          commit('updateCurrentApplications', count);
          commit('updateTotalApplications', totalApp);
          commit('showSummaryTable', entireTableSummary);
        })
        .catch((error) => console.log(error))
        .finally(() => console.log('finally loading'));
    },

    async getUserTestResultDetails() {
      const token = localStorage.getItem('loginAdminToken');
      console.log(token);
      axios({
        method: 'GET',
        url: 'https://async-backend.herokuapp.com/allUsers',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          this.state.usersInBatch = response.data.data;
          console.log(this.state.usersInBatch);
          console.log(this.getters.getUsersInBatch);
        })
        .catch((error) => console.log(error))
        .finally(() => {});
    },

    async retrieveAssessmentHistory({ commit }) {
      const token = localStorage.getItem('loginAdminToken');
      await axios({
        method: 'GET',
        url: 'http://localhost:3000/assessment_details',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          commit('updateAssessmentHistory', response.data.data);
        })
        .catch((err) => console.log(err));
    },
  },
});
