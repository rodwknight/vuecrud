import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import itemStore from './items'
import sandboxStore from './sandbox'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    sandbox: sandboxStore(axios),
    items: itemStore(axios),

  }
})
