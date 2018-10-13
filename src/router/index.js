import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/index.vue';
import Submits from '../pages/submits.vue';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/submits',
            name: 'Submits',
            component: Submits,
        },
    ],
});