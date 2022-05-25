<template>
<div>
  <NavBar />
  <div
    id="app"
    class="small-container"
  >
    <h1 class="table-title">Manage Employees</h1>

    <employee-form @add:employee="addEmployee" />
    <employee-table
      :employees="employees"
      @delete:employee="deleteEmployee"
      @edit:employee="editEmployee"
    />
  </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue';
import EmployeeTable from '../../components/Admin/EmployeeTable.vue'
import EmployeeForm from '../../components/Admin/EmployeeForm.vue'
import Parse from "parse";
export default {
  name: "app",
  components: {
    NavBar,
    EmployeeTable,
    EmployeeForm,
  },
  data() {
    return {
      employees: []
    }
  },

  mounted() {
    this.getEmployees()
  },

  methods: {
    async getEmployees() {
      try {
          const Data = Parse.Object.extend("_User");
          const query = new Parse.Query(Data);
            query.find({useMasterKey: true}).then(
            async (data) => {
              var res = await data.map((e) => e.attributes);
              console.log(res.filter((e) => e.ACL.permissionsById['role:admin']))
              var employee = res.map((e) => e.ACL.permissionsById['role:Employee'])
              console.log(data.map((e) => e.attributes));
              this.employees = res.filter((e) => e.ACL.permissionsById['role:Employee'])
        //await store.dispatch('allAppointment' , res )
      })
      } catch (error) {
        console.error(error)
      }
    },

    async addEmployee(employee) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify(employee),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        const data = await response.json()
        this.employees = [...this.employees, data]
      } catch (error) {
        console.error(error)
      }
    },

    async editEmployee(id, updatedEmployee) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'PUT',
          body: JSON.stringify(updatedEmployee),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        const data = await response.json()
        this.employees = this.employees.map(employee => employee.id === id ? data : employee)
      } catch (error) {
        console.error(error)
      }
    },

    async deleteEmployee(id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'DELETE'
        })
        this.employees = this.employees.filter(employee => employee.id !== id)
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style scoped src="../../assets/admin.css"></style>
