import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Home from './views/Home'
import Create from '../components/customer/Create'
import Edit from '../components/customer/Edit'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/create',
            name: 'Create',
            component: Create
        }
    ]
})