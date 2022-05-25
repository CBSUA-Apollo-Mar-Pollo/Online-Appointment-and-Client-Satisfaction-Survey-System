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
import NavBar from "./NavBar.vue";
import adminTable from '../../components/Admin/AdminTable.vue'
import adminForm from '../../components/Admin/AdminForm.vue'

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
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.admins = data
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
