<template>
<div>
    <NavBar />
    <div class="container text-center  mt-5 mb-5">
    <h1 class="table-title mt-5 fw-bolder">Manage Appointment</h1>
     <div class="table-responsive my-5">
      
      <!-- The table component -->
       <Table :fields='fields' :appointmentData ="appointmentData"></Table>
     </div>
    </div>
</div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Table from '../../components/Employee/AppointmentTable.vue'

export default {
  components: {
    NavBar,
    Table
  },
  setup(){

    //An array of values for the data
       const appointmentData = [
      {ID:"12345", Firstname: "Lucy", Lastname:"Sy", Email:"a@abc.com", Contact:"09876543218", Affliation:"Lorem ipsum", Reason:"Lorem ipsum", Date:"Lorem ipsum", Message: "Lorem ipsum"},
     {ID:"12346", Firstname: "Haze", Lastname:"Swift", Email:"b@abc.com", Contact:"09876543213", Affliation:"Lorem ipsum", Reason:"Lorem ipsum", Date:"Lorem ipsum", Message: "Lorem ipsum"},
      {ID:"12347", Firstname: "Carl", Lastname:"Cruz", Email:"c@abc.com", Contact:"09876543212", Affliation:"Lorem ipsum", Reason:"Lorem ipsum", Date:"Lorem ipsum", Message: "Lorem ipsum"},
    ]

    const fields = [
      'ID','Firstname','Lastname','Email','Contact','Affliation','Reason','Date','Message'
    ]

    return{appointmentData,fields}
  },
}
</script>

<style scoped>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  width: 80%;
}

.table-title {
  color: #008aff;
  font-size: 32px;
}
</style>