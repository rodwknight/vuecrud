import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Vuex from 'vuex'
import { store } from './store'

import router from './routes.js'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './serve'

const ItemRest = require('./backend/controllers/Item');
const SandboxRest = require('./backend/controllers/Sandbox');

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use('/items', ItemRest)
Vue.use('/sandbox', SandboxRest)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount('#app')
