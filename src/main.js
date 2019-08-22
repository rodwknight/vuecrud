import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Vuex from 'vuex'
import { store } from './store'

import App from './App.vue'
import Create from './components/Create.vue'
import vuetify from './plugins/vuetify'

import { Polly } from '@pollyjs/core';
import XHRAdapter from '@pollyjs/adapter-xhr';
import LocalStoragePersister from '@pollyjs/persister-local-storage';

Polly.register(XHRAdapter)
Polly.register(LocalStoragePersister)

const ItemRest = require('./backend/Item');

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use('/items', ItemRest)

Vue.config.productionTip = false

const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
]

const router = new VueRouter({ mode: 'history', routes:routes })

new Vue({
  render: h => h(App),
  vuetify,
  store,
  router,
  computed: {
    items () {
      return store.state.item
    }
  },
  methods: {
    addItem () {
      store.commit('addItem')
    }
  }
}).$mount('#app')
