import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/skills',
        name: 'skills',
        component: () => import(/* webpackChunkName: "skills" */ '../views/Skills.vue')
    },
    {
        path: '/works',
        name: 'works',
        component: () => import(/* webpackChunkName: "works" */ '../views/Works.vue')
    },
    {
        path: '/artifacts',
        name: 'artifacts',
        component: () => import(/* webpackChunkName: "artifacts" */ '../views/Artifacts.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
