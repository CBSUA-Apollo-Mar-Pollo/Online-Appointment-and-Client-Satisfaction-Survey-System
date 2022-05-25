<template>
<div>
    <NavBar />
    <div class="container text-center  mt-5 mb-5">
    <h1 class="table-title mt-5 fw-bolder">Manage Assessment</h1>
     <div class="table-responsive my-5">
      
      <!-- The table component -->
       <Table :fields='fields' :assessmentData ="assessmentData"></Table>
     </div>
    </div>
</div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Table from '../../components/Employee/AssessmentTable.vue'

export default {
  components: {
    NavBar,
    Table
  },
  setup(){

    //An array of values for the data
       const assessmentData = [
     {ID: "12345", Question1: "Lorem ipsum1", Question2: "Lorem ipsum2", Question3: "Lorem ipsum3", Question4: "Lorem ipsum4"},
     {ID: "12346", Question1: "Lorem ipsum5", Question2: "Lorem ipsum6", Question3: "Lorem ipsum7", Question4: "Lorem ipsum8"},
     {ID: "12347", Question1: "Lorem ipsum9", Question2: "Lorem ipsum10", Question3: "Lorem ipsum11", Question4: "Lorem ipsum12"},
    ]

    const fields = [
      'ID','Question1','Question2','Question3','Question4'
    ]

    return{assessmentData,fields}
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