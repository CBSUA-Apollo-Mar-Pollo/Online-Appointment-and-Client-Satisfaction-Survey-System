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
import { ref , reactive } from "vue";
// eslint-disable-next-line no-unused-vars
import { test } from "@/parse/test";
import Parse from "parse";
import { useRouter } from "vue-router";

export default {
  components: {
    NavBar,
    Table
  },
  setup(){
    var appointmentData = ref([])
    const Data = Parse.Object.extend("test");
    const query = new Parse.Query(Data);
    query.find().then(
      async (data) => {
        console.log(data.map((e) => e.id));
        console.log(data.map((e) => e.attributes));
        appointmentData.value = await data.map((e) => e.attributes)
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(appointmentData);


    const fields = [
      'FirstName','Lastname','Email','Contact','Affliation','Reason','Date','Message'
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