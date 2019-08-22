import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'

import App from './App.vue'
import Create from './components/Create.vue'
import Edit from './components/Edit.vue'
import Index from './components/Index.vue'
import vuetify from './plugins/vuetify';

import { Polly } from '@pollyjs/core';
import XHRAdapter from '@pollyjs/adapter-xhr';
import LocalStoragePersister from '@pollyjs/persister-local-storage';

Polly.register(XHRAdapter)
Polly.register(LocalStoragePersister)

const ItemRest = require('./backend/Item');

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
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
  },
]

const router = new VueRouter({ mode: 'history', routes:routes })

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
