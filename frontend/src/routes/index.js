import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Index from '@/views/Main'
import Login from '@/views/Login'
import Sign from '@/views/Sign'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Router)
export const router = new Router({
 mode: 'history',
 routes: [
    {
        path: '/',
        name: 'index',
        component: Index
    },
     {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/sign',
        name: 'sign',
        component: Sign
      }
 ]
})
