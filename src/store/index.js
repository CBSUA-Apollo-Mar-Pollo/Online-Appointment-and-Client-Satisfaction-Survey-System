import { createStore } from "vuex";

export default createStore({
  state: {
    status : null,
    appointment : null,
    selfAssessment : null,
    survey : null,
    appointmentLength : null 
  },
  mutations: {
    setStatus(state , payload) {
      state.status = payload
      console.log('object changed' , state.status);
    },
    setAllAppointment(state , payload) {
      state.appointment = payload
      console.log('object changed' , state.appointment);
    },
    setAllSelfAssessment(state , payload) {
      state.selfAssessment = payload
      console.log('object changed' , state.selfAssessment);
    },
    setAllSurvey(state , payload) {
      state.survey = payload
      console.log('object changed' , state.survey);
    },
    setAppointmentLength(state , payload) {
      state.appointmentLength = payload
      console.log('object changed' , state.appointmentLength);
    },
  },
  actions: {
    async appointmentStatus(context , payload) {
      context.commit('setStatus' , payload);
    },
    async allAppointment(context , payload) {
      context.commit('setAllAppointment' , payload);
    },
    async allSelfAssessment(context , payload) {
      context.commit('setAllSelfAssessment' , payload);
    },
    async allSurvey(context , payload) {
      context.commit('setAllSurvey' , payload);
    },
    async appointmentLength(context , payload) {
      context.commit('setAppointmentLength' , payload);
    }
  },
  getters: {},
  modules: {},
});