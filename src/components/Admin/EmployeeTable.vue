<template>
  <div class="employee-table">
    <p
      v-if="employees.length < 1"
      class="empty-table"
    >
      No employees
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Designated Office</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="employee.id"
          v-for="employee in employees"
        >
          <td v-if="editing === employee.id">
            <input
              type="text"
              v-model="employee.username"
            >
          </td>
          <td v-else>{{employee.username}}</td>
          <td v-if="editing === employee.id">
            <input
              type="text"
              v-model="employee.email"
            >
          </td>
          <td v-else>{{employee.email}}</td>
          <td>{{employee.office}}</td>
          <td>{{employee.createdAt}}</td>
          <td v-if="editing === employee.id">
            <button @click="editEmployee(employee)">Save</button>
            <button
              class="muted-button"
              @click="cancelEdit(employee)"
            >Cancel</button>
          </td>
          <td v-else>
            <!-- <button @click="editMode(employee)">Edit</button> -->
            <button @click="$emit('delete:employee', employee)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'employee-table',
  props: {
    employees: Array,
  },
  data() {
    return {
      editing: null,
    }
  },
  methods: {
    editMode(employee) {
      this.cachedEmployee = Object.assign({}, employee)
      this.editing = employee.id
    },

    cancelEdit(employee) {
      Object.assign(employee, this.cachedEmployee)
      this.editing = null;
    },

    editEmployee(employee) {
      if (employee.username === '' || employee.email === '') return
      this.$emit('edit:employee', employee.id, employee)
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
.employee-table thead tr th{
  background-color: rgba(9, 11, 17, 0.884);
  color: rgb(134, 21, 21);
}
</style>
