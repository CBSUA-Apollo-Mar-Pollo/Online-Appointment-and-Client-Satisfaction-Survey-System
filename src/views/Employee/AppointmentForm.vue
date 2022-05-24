<template>
  <div>
    <b-modal id="addNewAppointment" title="Add Appointment">
      <b-form>
        
        <b-form-group
          id="input-group-1"
          label="Request Number:"
          label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user.id"
            type="text"
            required
            :disabled="user.isEdit"
            placeholder="Enter Request Number">
          </b-form-input>
          <span v-if="submitted && $v.user.id.$error" class="errorMsg">Please Enter Request Number</span>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="First Name:"
          label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="user.firstname"
            type="text"
            required
            placeholder="Enter First Name">
          </b-form-input>
          <span v-if="submitted && $v.user.firstname.$error" class="errorMsg">Please Enter First Name</span>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Last Name:"
          label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="user.lastname"
            type="text"
            required
            placeholder="Enter Last Name">
          </b-form-input>
          <span v-if="submitted && $v.user.lastname.$error" class="errorMsg">Please Enter Last Name</span>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Email Address:"
          label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="user.email"
            type="email"
            required
            placeholder="Enter Email Address">
          </b-form-input>
          <div v-if="submitted && $v.user.email.$error" class="errorMsg">
            <span v-if="!$v.user.email.required">Please Enter Email address</span>
            <span v-if="$v.user.email && !$v.user.email.email">Please Enter Valid Email address</span>
          </div>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Contact Number:"
          label-for="input-5">
          <b-form-input
            id="input-5"
            v-model="user.contact"
            type="text"
            required
            placeholder="Enter Contact">
          </b-form-input>
          <span v-if="submitted && $v.user.contact.$error" class="errorMsg">
            <span v-if="!$v.user.contact.required">Please Enter Contact Number</span>
            <span v-if="!$v.user.contact.minLength">Please Enter Minimum 10 character</span>
            <span v-if="!$v.user.contact.maxLength">Please Enter Maximum 12 character</span>
          </span>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Affliation of Client:"
          label-for="input-6">
          <b-form-input
            id="input-6"
            v-model="user.affliation"
            type="text"
            required
            placeholder="Affliation of Client">
          </b-form-input>
          <span v-if="submitted && $v.user.affliation.$error" class="errorMsg">Please Enter Affliation of Client</span>
        </b-form-group>

        <b-form-group
          id="input-group-7"
          label="Reason for the Visit:"
          label-for="input-7">
          <b-form-input
            id="input-7"
            v-model="user.reason"
            type="text"
            required
            placeholder="Reason for the Visit">
          </b-form-input>
          <span v-if="submitted && $v.user.reason.$error" class="errorMsg">Please Enter Reason for the Visit</span>
        </b-form-group>

        <b-form-group
          id="input-group-8"
          label="Choose Date:"
          label-for="input-8">
          <b-form-input
            id="input-8"
            v-model="user.date"
            type="text"
            required
            placeholder="Choose Date">
          </b-form-input>
          <span v-if="submitted && $v.user.date.$error" class="errorMsg">Please Choose Date</span>
        </b-form-group>

        <b-form-group
          id="input-group-9"
          label="Choose Time:"
          label-for="input-9">
          <b-form-input
            id="input-9"
            v-model="user.time"
            type="text"
            required
            placeholder="Choose Time">
          </b-form-input>
          <span v-if="submitted && $v.user.time.$error" class="errorMsg">Please Choose Time</span>
        </b-form-group>

        <b-form-group
          id="input-group-10"
          label="Reason for Appointment:"
          label-for="input-10">
          <b-form-input
            id="input-10"
            v-model="user.message"
            type="text"
            required
            placeholder="Reason for Appointment">
          </b-form-input>
          <span v-if="submitted && $v.user.message.$error" class="errorMsg">Please Enter Reason for Appointment</span>
        </b-form-group>

      </b-form>

      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button
            variant="danger"
            size="sm"
            class="float-right m-l-10"
            @click="submitForm">
            Save
          </b-button>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="resetForm">
            Cancel
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { BModal, BForm } from 'bootstrap-vue-3'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'add_new_appointment',
  data () {
    return {
      user: {
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        contact: '',
        affliation: '',
        reason: '',
        date: '',
        time: '',
        message: '',
        action: ''
      },
      submitted: false
    }
  },
  validations: {
    user: {
      id: { required },
      firstname: { required },
      lastname: { required },
      email: { required, email },
      contact: { required, minLength: minLength(10), maxLength: maxLength(12) },
      affliation: { required },
      reason: { required },
      date: { required },
      time: { required },
      message: { required }
    }
  },
  mounted () {
    this.$root.$on('edit-appointment', (data) => {
      this.user = data
      this.user.isEdit = true
      this.submitted = false
    })
    this.$root.$on('add-appointment', (data) => {
      this.user = {}
      this.user.isEdit = false
      this.submitted = false
    })
  },
  components: {
    'b-modal': BModal,
    'b-form': BForm
  },
  methods: {
    submitForm () {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.$bvModal.hide('addNewAppointment')
      this.$store.dispatch('updatelistAppointment', { appointment: this.user }) // dispatch store action
    },
    resetForm () {
      this.user = {}
      this.user.isEdit = false
      this.submitted = false
    }
  }
}
</script>

<style>

</style>
