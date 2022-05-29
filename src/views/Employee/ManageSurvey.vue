<template>
<div>
    <NavBar />
    <div class="container text-center  mt-5 mb-5">
    <h1 class="table-title mt-5 fw-bolder">Client Satisfaction Survey Data</h1>
    <div id="piechart_3d" style="width: 1000px; height: 700px; margin: auto;"></div>
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
    var user = Parse.User.current({useMasterKey: true})
    console.log(user.attributes.office)
    const Data = Parse.Object.extend("CSS");
    const query = new Parse.Query(Data);
    query.equalTo("office" , user.attributes.office);
    query.find().then(
      async (data) => {
        var id = await data.map((e) => e.id);
        //console.log(data.map((e) => e.attributes));
        var res = await data.map((e) => e.attributes)
        let VerySatisfied = 0;
        for (const obj of res) {
          if (obj.pickedNo1 === 'Very Satisfied')VerySatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo2 === 'Very Satisfied')VerySatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo3 === 'Very Satisfied')VerySatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo4 === 'Very Satisfied')VerySatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo5 === 'Very Satisfied')VerySatisfied++
        }
        let Satisfied = 0;
        for (const obj of res) {
          if (obj.pickedNo1 === 'Satisfied')Satisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo2 === 'Satisfied')Satisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo3 === 'Satisfied')Satisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo4 === 'Satisfied')Satisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo5 === 'Satisfied')Satisfied++
        }
        let NotSure = 0;
        for (const obj of res) {
          if (obj.pickedNo1 === 'Not Sure')NotSure++
        }
        for (const obj of res) {
          if (obj.pickedNo2 === 'Not Sure')NotSure++
        }
        for (const obj of res) {
          if (obj.pickedNo3 === 'Not Sure')NotSure++
        }
        for (const obj of res) {
          if (obj.pickedNo4 === 'Not Sure')NotSure++
        }
        for (const obj of res) {
          if (obj.pickedNo5 === 'Not Sure')NotSure++
        }
        let Dissatisfied = 0;
        for (const obj of res) {
          if (obj.pickedNo1 === 'Dissatisfied')Dissatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo2 === 'Dissatisfied')Dissatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo3 === 'Dissatisfied')Dissatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo4 === 'Dissatisfied')Dissatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo5 === 'Dissatisfied')Dissatisfied++
        }
        let VeryDissatisfied = 0;
        for (const obj of res) {
          if (obj.pickedNo1 === 'Very Dissatisfied')VeryDissatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo2 === 'Very Dissatisfied')VeryDissatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo3 === 'Very Dissatisfied')VeryDissatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo4 === 'Very Dissatisfied')VeryDissatisfied++
        }
        for (const obj of res) {
          if (obj.pickedNo5 === 'Very Dissatisfied')VeryDissatisfied++
        }
          google.charts.load("current", {packages:["corechart"]});
          google.charts.setOnLoadCallback(drawChart);
          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Rate', 'Ratings per Day'],
              ['Very Satisfied', VerySatisfied],
              ['Satisfied', Satisfied],
              ['Not Sure',  NotSure],
              ['Dissatisfied', Dissatisfied],
              ['Very Dissatisfied', VeryDissatisfied]
            ]);
            var options = {
              title: 'Satisfaction Survey',
              is3D: true,
            };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }

        await store.dispatch('allSurvey' , res )
      },
      (error) => {
        console.log(error);
      }
    );

    //console.log(JSON.parse(JSON.stringify(store.state.appointment)));

    const fields = [
      'emailAdd','pickedNo1','pickedNo2','pickedNo3','pickedNo4','pickedNo5','comment'
    ]

    return{surveyData: computed(() => JSON.parse(JSON.stringify(store.state.survey)))
    ,fields}
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