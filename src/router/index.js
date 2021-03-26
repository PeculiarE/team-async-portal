import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue'),
  },
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
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/user/ForgotPassword.vue'),
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
    meta: { guest: true },
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: () => import('../views/admin/AdminDashboard.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/create-application',
    name: 'CreateApplication',
    component: () => import('../views/admin/CreateApplication.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/entries',
    name: 'ApplicationEntries',
    component: () => import('../views/admin/ApplicationEntries.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/assessment',
    name: 'ComposeAssessment',
    component: () => import('../views/admin/ComposeAssessment.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/history',
    name: 'AssessmentHistory',
    component: () => import('../views/admin/AssessmentHistory.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/results/:batchId',
    name: 'AssessmentResults',
    component: () => import('../views/admin/AssessmentResults.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/profile-settings',
    name: 'ProfileSettings',
    component: () => import('../views/admin/ProfileSettings.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/timer-settings',
    name: 'TimerSettings',
    component: () => import('../views/admin/TimerSettings.vue'),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.loggedInStatusAdmin) {
      next();
      return;
    }
    next('/admin/login');
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.loggedInStatusAdmin) {
      next('/admin/dashboard');
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
