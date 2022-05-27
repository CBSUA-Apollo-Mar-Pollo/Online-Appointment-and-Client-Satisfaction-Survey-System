<template>
  <div id="admin-form">
    <form @submit.prevent="handleSubmit">

      <label>admin name</label>
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidName }"
        v-model="admin.username"
        @focus="clearStatus"
        @keypress="clearStatus"
      >
      <label>admin Email</label>
      <input
        type="email"
        :class="{ 'has-error': submitting && invalidEmail }"
        v-model="admin.email"
        @focus="clearStatus"
      >
       <label>Employee Password</label>
      <input
        type="password"
        :class="{ 'has-error': submitting }"
        v-model="admin.password"
        @focus="clearStatus"
      >
      <p
        v-if="error && submitting"
        class="error-message"
      >❗Please fill out all required fields</p>
      <p
        v-if="success"
        class="success-message"
      >✅ admin successfully added</p>
      <button>Add admin</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'admin-form',
  data() {
    return {
      error: false,
      submitting: false,
      success: false,
      admin: {
        username: '',
        email: '',
         password: ''
      }
    }
  },
  computed: {
    invalidName() {
      return this.admin.name === ''
    },

    invalidEmail() {
      return this.admin.email === ''
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

      this.$emit('add:admin', this.admin)
      this.$refs.first.focus()
      this.admin = {
        username: '',
        email: '',
         password: '',
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
  margin-bottom: 10rem;
  margin-top: 200rem;
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
