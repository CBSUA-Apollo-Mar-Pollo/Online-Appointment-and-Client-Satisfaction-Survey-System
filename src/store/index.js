import { createStore } from "vuex";

export default createStore({
  state: {
    status : null
  },
  mutations: {
    setStatus(state , payload) {
      state.status = payload
      console.log('object changed' , state.status);
    }
  },
  actions: {
    async appointmentStatus(context , payload) {
      context.commit('setStatus' , payload);
    }
  },
  getters: {},
  modules: {},
});
