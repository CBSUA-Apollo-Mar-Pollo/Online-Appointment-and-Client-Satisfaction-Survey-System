<template>
  <div id="employee-form">
    <form @submit.prevent="handleSubmit">

      <label>Employee name</label>
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidName }"
        v-model="employee.username"
        @focus="clearStatus"
        @keypress="clearStatus"
      >
      <label>Employee Email</label>
      <input
        type="email"
        :class="{ 'has-error': submitting && invalidEmail }"
        v-model="employee.email"
        @focus="clearStatus"
      >
      <label>Designation of Employee</label>
      <select class="form-select" 
                    v-model="employee.office"  
                    type="text"
                    :class="{ 'has-error': submitting  }"
                    @focus="clearStatus"
                    placeholder="09XXXXXXXXX">
                    <option selected>Local Graduate Scholarship Office</option>
                    <option selected>Office of Institutional Quality Assurance and Governance (OICAG)</option>
                    <option selected>Office of Student Development and Services (OSDS)</option>
                    <option selected>Regional Office V</option>
                  </select>
      <label>Employee Password</label>
      <input
        type="password"
        :class="{ 'has-error': submitting }"
        v-model="employee.password"
        @focus="clearStatus"
      >
      <p
        v-if="error && submitting"
        class="error-message"
      >❗Please fill out all required fields</p>
      <p
        v-if="success"
        class="success-message"
      >✅ Employee successfully added</p>
      <button>Add Employee</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'employee-form',
  data() {
    return {
      error: false,
      submitting: false,
      success: false,
      employee: {
        username: '',
        email: '',
        password: '',
        office: ''
      }
    }
  },
  computed: {
    invalidName() {
      return this.employee.name === ''
    },

    invalidEmail() {
      return this.employee.email === ''
    },
  },
  methods: {
    handleSubmit() {
      this.clearStatus()
      this.submitting = true

      if (this.invalidName || this.invalidEmail) {
        this.error = true
        return
      }

      this.$emit('add:employee', this.employee)
      this.$refs.first.focus()
      this.employee = {
        username: '',
        email: '',
        password: '',
        office: ''
      }
      this.success = true
      this.error = false
      this.submitting = false
    },

    clearStatus() {
      this.success = false
      this.error = false
    }
  }}
</script>

<style scoped src="../../assets/admin.css">
form {
  margin-bottom: 2rem;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>
