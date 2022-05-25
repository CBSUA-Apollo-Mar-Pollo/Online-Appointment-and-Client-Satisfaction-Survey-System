<template>
  <div id="admin-table">
    <p
      v-if="admins.length < 1"
      class="empty-table"
    >
      No admins
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="admin.id"
          v-for="admin in admins"
        >
          <td v-if="editing === admin.id">
            <input
              type="text"
              v-model="admin.username"
            >
          </td>
          <td v-else>{{admin.username}}</td>
          <td v-if="editing === admin.id">
            <input
              type="text"
              v-model="admin.email"
            >
          </td>
          <td v-else>{{admin.email}}</td>
          <td v-if="editing === admin.id">
            <button @click="editadmin(admin)">Save</button>
            <button
              class="muted-button"
              @click="cancelEdit(admin)"
            >Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(admin)">Edit</button>
            <button @click="$emit('delete:admin', admin.id)">Delete</button>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'admin-table',
  props: {
    admins: Array,
  },
  data() {
    return {
      editing: null,
    }
  },
  methods: {
    editMode(admin) {
      this.cachedadmin = Object.assign({}, admin)
      this.editing = admin.id
    },

    cancelEdit(admin) {
      Object.assign(admin, this.cachedadmin)
      this.editing = null;
    },

    editadmin(admin) {
      if (admin.name === '' || admin.email === '') return
      this.$emit('edit:admin', admin.id, admin)
      this.editing = null
    }
  }
}
</script>

<style scoped src="../../assets/admin.css">
button {
  margin: 0 0.5rem 0 0;
}

input {
  margin: 0;
}

.empty-table {
  text-align: center;
}
</style>
