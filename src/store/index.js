import { createStore } from "vuex";

export default createStore({
  state: {
    status : null,
    appointment : null,
    selfAssessment : null,
    survey : null,
    appointmentLength : null ,
    approvedTotal: null,
    pendingTotal: null,
    rejectedTotal: null,
    cancelTotal: null,
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
    setapprovedTotal(state , payload) {
      state.approvedTotal = payload
      console.log('object changed' , state.approvedTotal);
    },
    setpendingTotal(state , payload) {
      state.pendingTotal = payload
      console.log('object changed' , state.pendingTotal);
    },
    setrejectedTotal(state , payload) {
      state.rejectedTotal = payload
      console.log('object changed' , state.rejectedTotal);
    },
    setcancelTotal(state , payload) {
      state.cancelTotal = payload
      console.log('object changed' , state.cancelTotal);
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
    },
    async approvedTotal(context , payload) {
      context.commit('setapprovedTotal' , payload);
    },
    async pendingTotal(context , payload) {
      context.commit('setpendingTotal' , payload);
    },
    async rejectedTotal(context , payload) {
      context.commit('setrejectedTotal' , payload);
    },
    async cancelTotal(context , payload) {
      context.commit('setcancelTotal' , payload);
    },
  },
  getters: {},
  modules: {},
});