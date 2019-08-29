import Vue from 'vue'
import VueRouter from 'vue-router'

import Items from './components/Items'
import Sandbox from './components/Sandbox'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[{
    name: 'Items',
    path: '/items',
    component: Items
  },
  {
    name: 'Sandbox',
    path: '/sandbox',
    component: Sandbox
  }],
})
