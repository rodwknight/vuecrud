import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items: [],
    item: {
      color: '',
      price: '',
      name: '',
      _id: -1
    },
  },
  mutations: {
    attItem(state, items){
      state.items = items;
    },
    currItem(state, item){
      state.item = item;
    }
  },
  actions: {
    changeName({commit, state}, name){
      commit('currItem', {...state.item, name})
    },
    changePrice({commit, state}, price){
      commit('currItem', {...state.item, price})
    },
    changeColor({commit, state}, color){
      commit('currItem', {...state.item, color})
    },
    changeID({commit}, _id){
      commit('currItem', { name: '', price: '', color: '', _id: _id})
      let uri = "http://localhost:8080/items/get"
      if (_id > 0){
        axios.post(uri, _id).then((response) =>{
          commit('currItem', response.data[0])
        });
      }
    },
    fetchItems({dispatch}){
      let uri = 'http://localhost:8080/items';
      axios.get(uri).then((response) => {
          dispatch('attItemAction', response.data)
        })
    },
    attItemAction (context, item){
      context.commit('attItem', item)
    },
    addItemAction ({state, commit}){
      let uri = 'http://localhost:8080/items/add';
      axios.post(uri, state.item).then((response) => {
        commit('attItem', response.data)
      });
    },
    editItemAction ({state , commit}){
      let uri = "http://localhost:8080/items/edit";
      axios.post(uri, state.item).then((response) => {
        commit('attItem', response.data)
      });
    },
    delItemAction (context, item){
      let uri = "http://localhost:8080/items/del";
      axios.post(uri, item).then((response) => {
          context.commit('attItem', response.data)
      });
    },
    getItemAction ({state, commit}){
      let uri = "http://localhost:8080/items/get";
      axios.post(uri, state.item._id).then((response) =>{
        commit('currItem', response.data[0])
      });
    }
  },
  getters: {
    items (state){
      return state.items
    },
    item (state){
      return state.item
    }
  }
})
