const itemStore = axios => ({
  namespaced: true,
  state: {
    items: [],
    item: {
      color: '',
      price: '',
      name: '',
      _id: -1
    }
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
    async changeID({commit}, _id){
      commit('currItem', { name: '', price: '', color: '', _id: _id})
      let uri = "http://localhost:8080/items/"+_id
      if (_id > 0){
        const response = await axios.get(uri)
        commit('currItem', response.data[0])
      }
    },
    async fetchItems({commit}){
      let uri = 'http://localhost:8080/items';
      const response = await axios.get(uri)
      commit('attItem', response.data)
    },
    async addItemAction ({state, commit}){
      let uri = 'http://localhost:8080/items/';
      const response = await axios.post(uri, state.item)
      commit('attItem', response.data)
    },
    async editItemAction ({state, commit}){
      let uri = "http://localhost:8080/items/";
      const response = await axios.put(uri, state.item)
      commit('attItem', response.data)
    },
    delItemAction ({commit}, item){
      let uri = "http://localhost:8080/items/"+item._id;
      axios.delete(uri).then((response) => {
          commit('attItem', response.data)
      });
    },
    getItemAction ({state, commit}){
      let uri = "http://localhost:8080/items/"+state.item._id;
      axios.get(uri).then((response) =>{
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

module.exports = itemStore
