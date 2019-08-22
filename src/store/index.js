import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    attItem(state, items){
      state.items = items;
    },

  },
  actions: {
    attItemAction (context, item){
      context.commit('attItem', item)
    }
  },
  getters: {
    items (state){
      return state.items
    }
  }
})
