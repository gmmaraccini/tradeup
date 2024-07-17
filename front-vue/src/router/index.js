import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import SearchPage from '../components/SearchPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/search', component: SearchPage }
];

const router = new VueRouter({
  routes
});

export default router;
