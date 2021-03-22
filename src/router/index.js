import Vue from 'vue';
import VueRouter from 'vue-router';
import ApplicationForm from '../views/user/ApplicationForm.vue';
import TakeAssessment from '../views/user/TakeAssessment.vue';
import Questions from '../views/user/Questions.vue';
import SuccessPage from '../views/user/SuccessPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/admin/create-application',
    name: 'CreateApplication',
    component: () => import('../views/CreateApplication.vue'),
  },
  {
    path: '/admin/entries',
    name: 'ApplicationEntries',
    component: () => import('../views/ApplicationEntries.vue'),
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: () => import('../views/AdminDashboard.vue'),
  },
  {
    path: '/application',
    name: 'ApplicationForm',
    component: ApplicationForm,
  },
  {
    path: '/user/assessment',
    name: 'TakeAssessment',
    component: TakeAssessment,
  },
  {
    path: '/user/success',
    name: 'SuccessPage',
    component: SuccessPage,
  },
  {
    path: '/user/questions',
    name: 'Questions',
    component: Questions,
  },
  {
    path: '/user/login',
    name: 'UserLogin',
    component: () => import('../views/UserLogin.vue'),
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue'),
  },
  {
    path: '/admin/assessment',
    name: 'ComposeAssessment',
    component: () => import('../views/ComposeAssessment.vue'),
  },
  {
    path: '/admin/history',
    name: 'AssessmentHistory',
    component: () => import('../views/AssessmentHistory.vue'),
  },
  {
    path: '/admin/results/:batchId',
    name: 'AssessmentResults',
    component: () => import('../views/AssessmentResults.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
