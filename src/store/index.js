import { createStore } from "vuex";

//firebase imports 
import { auth } from '../firebase/config';

import { signInWithEmailAndPassword , signOut } from "firebase/auth";

export default createStore({
  state: {
    status : null,
    user: null,
  },
  mutations: {
    setStatus(state , payload) {
      state.status = payload
      console.log('object changed' , state.status);
    },
    setUser(state , payload){
      state.user = payload
      console.log('user state changed: ' , state.user)
    },
  },
  actions: {
    async appointmentStatus(context , payload) {
      context.commit('setStatus' , payload);
    },
    async login(context , { email , password }) {
      const res = await signInWithEmailAndPassword(auth , email , password)
      if(res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete login');
      } 
    },
    async logout(context) {
      console.log('logout action')

      await signOut(auth)
      context.commit('setUser' , null)
    }
  },
  getters: {},
  modules: {},
});
