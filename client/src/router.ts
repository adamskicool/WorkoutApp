import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Home from '@/views/Home.vue';
import Stats from '@/views/Stats.vue';
import Workout from '@/views/Workout.vue';
import PresetMaker from '@/views/PresetMaker.vue';

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats,
    },
    {
      path: '/workout',
      name: 'workout',
      component: Workout,
    },
    {
      path: '/presetMaker',
      name: 'presetMaker',
      component: PresetMaker,
    }
  ],
});
