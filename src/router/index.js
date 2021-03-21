import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
