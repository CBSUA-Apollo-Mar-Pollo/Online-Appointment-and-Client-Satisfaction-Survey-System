<template>
  <div id="admin-form">
    <form @submit.prevent="handleSubmit">

      <label>admin name</label>
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidName }"
        v-model="admin.name"
        @focus="clearStatus"
        @keypress="clearStatus"
      >
      <label>admin Email</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidEmail }"
        v-model="admin.email"
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
        name: '',
        email: '',
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
        name: '',
        email: '',
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
