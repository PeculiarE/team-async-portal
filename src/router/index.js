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
    path: '/resetpassword/:token',
    name: 'PasswordReset',
    component: () => import('../components/PasswordReset.vue'),
  },
  {
    path: '/changesuccess',
    name: 'PasswordChangeSuccess',
    component: () => import('../components/PasswordChangeSuccess.vue'),
  },
  {
    path: '/application',
    name: 'ApplicationForm',
    component: () => import('../views/user/ApplicationForm.vue'),
    meta: { requiresApplyAuth: true },
  },
  {
    path: '/user/dashboard',
    name: 'Dashboard',
    component: () => import('../views/user/Dashboard.vue'),
    meta: { requiresApplyAuth: true },
  },
  {
    path: '/user/assessment',
    name: 'TakeAssessment',
    component: () => import('../views/user/TakeAssessment.vue'),
    meta: { requiresApplyAuth: true },
  },
  {
    path: '/user/questions',
    name: 'Questions',
    component: () => import('../views/user/Questions.vue'),
    meta: { requiresApplyAuth: true },
  },
  {
    path: '/user/success',
    name: 'SuccessPage',
    component: () => import('../views/user/SuccessPage.vue'),
    meta: { requiresApplyAuth: true },
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
    path: '/admin/entries',
    name: 'ApplicationEntries',
    component: () => import('../views/admin/ApplicationEntries.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/admin/results',
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
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    await store.dispatch('adminFetchPage');
    if (store.getters.loggedInStatusAdmin) {
      next();
    } else {
      next('/admin/login');
    }
  } else {
    next();
  }
});
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresApplyAuth)) {
    await store.dispatch('userApplyPage');
    if (store.getters.loggedInStatus) {
      next();
    } else {
      next('/user/login');
    }
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
