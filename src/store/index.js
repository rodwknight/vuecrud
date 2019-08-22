import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    fetchItems({dispatch}){
      let uri = 'http://localhost:8080/items';
      axios.get(uri).then((response) => {
          dispatch('attItemAction', response.data)
        })
    },
    attItemAction (context, item){
      context.commit('attItem', item)
    },
    addItemAction (context, item){
      let uri = 'http://localhost:8080/items/add';
      axios.post(uri, item).then((response) => {
        context.commit('attItem', response.data)
      });
    },
    editItemAction (context, item){
      let uri = "http://localhost:8080/items/edit";
      axios.post(uri, item).then((response) => {
          context.commit('attItem', response.data)
      });
    },
    delItemAction (context, item){
      let uri = "http://localhost:8080/items/del";
      axios.post(uri, item).then((response) => {
          context.commit('attItem', response.data)
      });
    }
  },
  getters: {
    items (state){
      return state.items
    }
  }
})
