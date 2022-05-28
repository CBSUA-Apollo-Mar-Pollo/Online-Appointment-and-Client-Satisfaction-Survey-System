<template>
<div>
  <NavBar />
  <div
    id="app"
    class="medium-container"
  >
    <h1 class="table-title">Employees Add New Account Page</h1>
    
    <div v-if="showModal">
      <Modal  theme="sale" @close="toggleModal">
         <employee-form @add:employee="addEmployee" />
      </Modal>
    </div>
      <button class="Modal" @click="toggleModal">{{ showModal === false ?  'Add New Employee' : 'Close' }}</button>
       <h3>Total of {{ employees.length }} Employee Account</h3>
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
import Modal from '../../components/Modal.vue';
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
      showModal : false,
      employees: []
    }
  },

  mounted() {
    this.getEmployees()
  },

  methods: {
     toggleModal() {
      this.showModal = !this.showModal
    },
    async getEmployees() {
      try {
          const Data = Parse.Object.extend("_User");
          const query = new Parse.Query(Data);
            query.find({useMasterKey: true}).then(
            async (data) => {
              var res = await data.map((e) => e.attributes);
              //console.log(res.filter((e) => e.ACL.permissionsById['role:admin']))
              var employee = res.map((e) => e.ACL.permissionsById['role:Employee'])
              //console.log(data.map((e) => e.attributes));
              this.employees = res.filter((e) => e.ACL.permissionsById['role:Employee'])
        //await store.dispatch('allAppointment' , res )
      })
      } catch (error) {
        console.error(error)
      }
    },

    async addEmployee(employee) {
      try {
        console.log(JSON.parse(JSON.stringify(employee)));
        var res = JSON.parse(JSON.stringify(employee));
        console.log(res.username)
        var groupACL  = new Parse.ACL();
        groupACL.setRoleWriteAccess("Employee" , true);
        groupACL.setRoleReadAccess("Employee" , true);
        groupACL.setPublicReadAccess(true);
        var user = new Parse.User();
        user.set("username", res.username);
        user.set("email", res.email);
        user.set("password", res.password);
        user.set("office", res.office);
        user.setACL(groupACL);
        user.signUp().then(function success(user) {
          console.log("Signed Up" , user);
        } , function error(err) {
          console.error(err)
        })
        location.reload();
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
