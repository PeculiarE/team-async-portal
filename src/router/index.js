import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/user/SignUp.vue'),
  },
  {
    path: '/user/login',
    name: 'UserLogin',
    component: () => import('../views/user/UserLogin.vue'),
  },
  {
    path: '/application',
    name: 'ApplicationForm',
    component: () => import('../views/user/ApplicationForm.vue'),
  },
  {
    path: '/user/dashboard',
    name: 'Dashboard',
    component: () => import('../views/user/Dashboard.vue'),
  },
  {
    path: '/user/assessment',
    name: 'TakeAssessment',
    component: () => import('../views/user/TakeAssessment.vue'),
  },
  {
    path: '/user/questions',
    name: 'Questions',
    component: () => import('../views/user/SuccessPage.vue'),
  },
  {
    path: '/user/success',
    name: 'SuccessPage',
    component: () => import('../views/user/Questions.vue'),
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../views/admin/AdminLogin.vue'),
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: () => import('../views/admin/AdminDashboard.vue'),
  },
  {
    path: '/admin/create-application',
    name: 'CreateApplication',
    component: () => import('../views/admin/CreateApplication.vue'),
  },
  {
    path: '/admin/entries',
    name: 'ApplicationEntries',
    component: () => import('../views/admin/ApplicationEntries.vue'),
  },
  {
    path: '/admin/assessment',
    name: 'ComposeAssessment',
    component: () => import('../views/admin/ComposeAssessment.vue'),
  },
  {
    path: '/admin/history',
    name: 'AssessmentHistory',
    component: () => import('../views/admin/AssessmentHistory.vue'),
  },
  {
    path: '/admin/results/:batchId',
    name: 'AssessmentResults',
    component: () => import('../views/admin/AssessmentResults.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
