<template>
<div>
    <NavBar />
    <div class="container text-center  mt-5 mb-5">
    <h1 class="table-title mt-5 fw-bolder">Manage Survey</h1>
     <div class="table-responsive my-5">
      
      <!-- The table component -->
       <Table :fields='fields' :surveyData ="surveyData"></Table>
     </div>
    </div>
</div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Table from '../../components/Employee/SurveyTable.vue'

export default {
  components: {
    NavBar,
    Table
  },
  setup(){

    //An array of values for the data
       const surveyData = [
     {ID: "12345", Question1: "4", Question2: "3", Question3: "5", Question4: "4"},
     {ID: "12346", Question1: "5", Question2: "5", Question3: "5", Question4: "3"},
     {ID: "12347", Question1: "5", Question2: "4", Question3: "5", Question4: "5"},
    ]

    const fields = [
      'ID','Question1','Question2','Question3','Question4'
    ]

    return{surveyData,fields}
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