import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Index from '@/components/Main'
import login from '@/components/Login'
import sign from '@/components/Sign'
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
        component: login
      },
      {
        path: '/sign',
        name: 'sign',
        component: sign
      }
 ]
})
