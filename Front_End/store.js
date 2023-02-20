import { createStore } from 'vuex'

const store = createStore({
  state: {
    isAuthenticated: false,
    isAdmin : false,
    players : []
  },
  mutations: {
    setAuth(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    setAdmin(state,isAdmin){
      state.isAdmin = isAdmin
    },
    SET_PLAYERS(state, payload) {
      state.players = payload;
    }
  },
  actions: {
    login({ commit }) {
      // code to log in the user
      commit('setAuth', true)
    },
    logout({ commit }) {
      // code to log out the user
      commit('setAuth', false)
    },
    admin({ commit }){
      commit('setAdmin',true);
    },
    user({commit}){
      commit('setAdmin',false);
    },
    setPlayers({ commit }, payload) {
      commit('SET_PLAYERS', payload);
    }
    
  },
  getters: {
    getPlayers(state) {
      return state.players;
    }
  }
})

export default store