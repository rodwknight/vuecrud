
const sandboxStore = axios => ({
  namespaced: true,
  state: {
    sandbox: {
      appID: 'app5452057292',
      AppKey: '7C030BBA9B9B013BB44BFF82E85673C2'
    },
    token: ''
  },
  mutations: {
    attAuth(state, sandbox){
      state.sandbox = sandbox;
    },
    attToken(state, token){
      state.token = token
    }
  },
  actions: {
    changeAppID({commit, state}, appID){
      commit('attAuth', {...state.sandbox, appID})
    },
    changeAppKey({commit, state}, AppKey){
      commit('attAuth', {...state.sandbox, AppKey})
    },
    async sessionStart ({state, commit}){
      let uri = 'https://ws.pagseguro.uol.com.br/v2/sessions';
      const response = await axios.post(uri, state.sandbox, {
        headers:{
          'Access-Control-Allow-Origin':'*',
          'Content-Type':'application/x-www-form-urlencoded;charset=ISO-8859-1'
        }
      })
      commit('attToken', response.data)
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
