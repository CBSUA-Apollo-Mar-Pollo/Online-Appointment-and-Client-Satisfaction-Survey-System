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
    const Data = Parse.Object.extend("Covid19Form");
    const query = new Parse.Query(Data);
    query.descending('createdAt');
    query.equalTo("office" , user.attributes.office);
    query.find().then(
      async (data) => {
        var id = await data.map((e) => e.id);
        console.log(data.map((e) => e.attributes));
        var res = await data.map((e) => e.attributes)
        await store.dispatch('allSelfAssessment' , res )
      },
      (error) => {
        console.log(error);
      }
    );
    const fields = [
      'emailAdd','PositiveContact','past15days','travelAbroad'
    ]

    return{assessmentData: computed(() => JSON.parse(JSON.stringify(store.state.selfAssessment)))
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