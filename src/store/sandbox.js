const sandboxStore = axios => ({
  namespaced: true,
  state: {
    sandbox: {
      email: '',
      token: ''
    }
  },
  mutations: {
    attAuth(state, sandbox){
      state.sandbox = sandbox;
    }
  },
  actions: {
    changeEmail({commit, state}, email){
      commit('attAuth', {...state.sandbox, email})
    },
    changeToken({commit, state}, token){
      commit('attAuth', {...state.sandbox, token})
    },
    async addAuthAction ({state, commit}){
      let uri = 'http://localhost:8080/auth/';
      const response = await axios.put(uri, state.sandbox)
      commit('attAuth', response.data)
    },
    async getAuthAction({commit}){
      let uri = 'http://localhost:8080/auth';
      const response = await axios.get(uri)
      commit('attAuth', response.data)
    },
  },
  getters: {
    sandbox(state){
      return state.sandbox
    }
  }
})

module.exports = sandboxStore
