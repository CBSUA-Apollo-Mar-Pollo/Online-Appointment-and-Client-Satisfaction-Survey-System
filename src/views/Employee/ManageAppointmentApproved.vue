<template>
<div>
    <NavBar />
    <div class="container text-center  mt-5 mb-5">
    <h1 class="table-title mt-5 fw-bolder">Approved Appointment</h1>
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
import { ref , reactive , computed} from "vue";
// eslint-disable-next-line no-unused-vars
import { test } from "@/parse/test";
import Parse from "parse";
import { useRouter } from "vue-router";
import { useStore } from 'vuex'

export default {
  components: {
    NavBar,
    Table
  },
  setup(){
    const store = useStore();
    const Data = Parse.Object.extend("test");
    const query = new Parse.Query(Data);
    query.equalTo("status" , 'Request Accepted');
    query.find().then(
      async (data) => {
        var id = await data.map((e) => e.id);
        console.log(data.map((e) => e.attributes));
        var res = await data.map((e) => e.attributes)
        await store.dispatch('allAppointment' , res )
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(JSON.parse(JSON.stringify(store.state.appointment)));


    const fields = [
      'status','fName','lName','emailAdd','contactNum','AffliationOfClient','reasonOfVisit','date','time','comments','referenceNum'
    ]

    

    return{appointmentData: computed(() => JSON.parse(JSON.stringify(store.state.appointment))),
    fields}
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