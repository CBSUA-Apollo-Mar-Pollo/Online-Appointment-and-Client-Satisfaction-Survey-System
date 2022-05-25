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
    const Data = Parse.Object.extend("CSS");
    const query = new Parse.Query(Data);
    query.find().then(
      async (data) => {
        var id = await data.map((e) => e.id);
        console.log(data.map((e) => e.attributes));
        var res = await data.map((e) => e.attributes)
        await store.dispatch('allSurvey' , res )
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(JSON.parse(JSON.stringify(store.state.appointment)));


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