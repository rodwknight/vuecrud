import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Vuex from 'vuex'
import { store } from './store'

import App from './App.vue'
import Items from './components/Items.vue'
import vuetify from './plugins/vuetify'
import './serve'

const ItemRest = require('./backend/controllers/Item');

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use('/items', ItemRest)

Vue.config.productionTip = false

const routes = [
  {
    name: 'Items',
    path: '/items',
    component: Items
  },
]

const router = new VueRouter({ mode: 'history', routes:routes })

new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount('#app')
