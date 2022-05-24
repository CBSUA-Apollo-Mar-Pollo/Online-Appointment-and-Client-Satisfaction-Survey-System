import { createStore } from 'vuex'
import { setLocalStorage, getLocalStorage } from '@/core/utils'

export default createStore({
  state: {
    listAppointment: getLocalStorage('appointmentList') ? getLocalStorage('appointmentList') : [] // Check from localStorage else default empty array
  },
  mutations: {
    updateAppointment (state, appointment) {
      if (!appointment.isEdit) {
        state.listAppointment.push(appointment)
      } else {
        const editApp = state.listAppointment.find((item) => { return item.id === appointment.id })
        editApp.firstname = appointment.firstname
        editApp.lastname = appointment.lastname
        editApp.email = appointment.email
        editApp.contact = appointment.contact
        editApp.affliation = appointment.affliation
        editApp.reason = appointment.reason
        editApp.date = appointment.date
        editApp.time = appointment.time
        editApp.message = appointment.message
      }
      setLocalStorage('appointmentList', state.listAppointment) // Updated to localStorage
    },
    deleteAppointment (state, appointment) {
      state.listAppointment.splice(appointment.index, 1)
      setLocalStorage('appointmentList', state.listAppointment) // Updated to localStorage
    }
  },
  actions: {
    updatelistAppointment ({ commit }, data) {
      commit('updateAppointment', data.appointment)
    },
    deleteStoreAppointment ({ commit }, data) {
      commit('deleteAppointment', data.appointment)
    }
  },
  modules: {
  }
})
