import {
    createRouter,
    createWebHistory
} from 'vue-router'


import Home from '../view/Home.vue'

const routes = [{
    path: "/",
    name: "index",
    redirect:"/home", //这个得加上，否则路由不会转到home，home页面无法显示
    component: () => import('../app.vue'),
    children: [{
        path: '/home',
        name: 'Home',
        component: Home,
    }, ]
}]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
