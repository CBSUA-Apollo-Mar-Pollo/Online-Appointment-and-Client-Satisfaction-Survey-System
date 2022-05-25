<template>
<div>
  <NavBar />
  <div
    id="app"
    class="small-container"
  >
    <h1 class="table-title">Manage Admins</h1>

    <admin-form @add:admin="addadmin" />
    <admin-table
      :admins="admins"
      @delete:admin="deleteadmin"
      @edit:admin="editadmin"
    />
  </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue';
import adminTable from '../../components/Admin/AdminTable.vue'
import adminForm from '../../components/Admin/AdminForm.vue'
import Parse from "parse";

export default {
  name: "app",
  components: {
    NavBar,
    adminTable,
    adminForm,
  },
  data() {
    return {
      admins: []
    }
  },

  mounted() {
    this.getadmins()
  },

  methods: {
    async getadmins() {
      try {
          const Data = Parse.Object.extend("_User");
          const query = new Parse.Query(Data);
          query.find({useMasterKey: true}).then(
            async (data) => {
              var res = await data.map((e) => e.attributes);
              console.log(res.filter((e) => e.ACL.permissionsById['role:admin']))
              var employee = res.map((e) => e.ACL.permissionsById['role:Employee'])
              console.log(data.map((e) => e.attributes));
              this.admins = res.filter((e) => e.ACL.permissionsById['role:admin'])
        //await store.dispatch('allAppointment' , res )
      })
      } catch (error) {
        console.error(error)
      }
    },

    async addadmin(admin) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify(admin),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        const data = await response.json()
        this.admins = [...this.admins, data]
      } catch (error) {
        console.error(error)
      }
    },

    async editadmin(id, updatedadmin) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'PUT',
          body: JSON.stringify(updatedadmin),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        const data = await response.json()
        this.admins = this.admins.map(admin => admin.id === id ? data : admin)
      } catch (error) {
        console.error(error)
      }
    },

    async deleteadmin(id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'DELETE'
        })
        this.admins = this.admins.filter(admin => admin.id !== id)
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style scoped src="../../assets/admin.css"></style>
