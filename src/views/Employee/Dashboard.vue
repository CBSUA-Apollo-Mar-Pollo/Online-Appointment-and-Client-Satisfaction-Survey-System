<template>
<div>
    <NavBar />
    <p class="welcome">Logged In as  {{ user.attributes.username }} </p>
     <div className='totalcard'>
            <div className="cardBox">
                <div className="card">
                        <div className="numbers">{{ a }}</div>
                        <div className="cardName">Last Week and today's Appointment Total</div>
                </div>
                </div>
                </div>
     <div className='totalcard'>
            <div className="cardBox1">
                <div className="card">
                        <div className="numbers">{{ pending }}</div>
                        <div className="cardName">Pending Appointment Total</div>
                </div>
                <div className="card">
                        <div className="numbers">{{ approved }}</div>
                        <div className="cardName">Approved Appointment Total</div>
                </div>
                <div className="card">
                        <div className="numbers">{{ rejected }}</div>
                        <div className="cardName">Rejected Appointment Total</div>
                </div>
                <div className="card">
                        <div className="numbers">{{ canceled }}</div>
                        <div className="cardName">Canceled By User</div>
                </div>
                </div>
                </div>
                <div id="piechart_3d" style="width: 1000px; height: 700px; margin: auto;"></div>
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
  },
  setup() {
    var user = Parse.User.current({useMasterKey: true})
    console.log(user)
     const store = useStore();
    const Data = Parse.Object.extend("CSS");
    const query = new Parse.Query(Data);
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
              title: 'Satisfaction Survey Data',
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
    const d = Parse.Object.extend("test");
    const q = new Parse.Query(d);
    q.greaterThan('createdAt', { $relativeTime: '7 days ago' });
    q.find().then(async data => {
      console.log(data.map((e) => e.attributes));
      const res  = await data.map((e) => e.attributes).length ;
      await store.dispatch('appointmentLength' , res )
    },(error) => {
      console.log(error);
    });



    const a = JSON.parse(localStorage.getItem("appointmentLength"));
    var currentDate = new Date();
    console.log(currentDate);

    var user = Parse.User.current({useMasterKey: true})
    console.log(user.attributes.office)
    const DataApproved = Parse.Object.extend("test");
    const query1 = new Parse.Query(DataApproved);
    query1.equalTo("status" , 'Request Accepted');
    query1.equalTo("selectOffice" , user.attributes.office);
    query1.find().then(
      async (data) => {
        var id = await data.map((e) => e.id);
        console.log(data.map((e) => e.attributes));
        var res = await data.map((e) => e.attributes)
        console.log(res.length)
        await store.dispatch('approvedTotal' , res.length)
      },
      (error) => {
        console.log(error);
      }
    );
    const DataPending = Parse.Object.extend("test");
    const query2 = new Parse.Query(DataPending);
    query2.equalTo("status" , 'On Process');
    query2.equalTo("selectOffice" , user.attributes.office);
    query2.find().then(
      async (data) => {
        var id = await data.map((e) => e.id);
        console.log(data.map((e) => e.attributes));
        var res = await data.map((e) => e.attributes)
        console.log(res.length)
        await store.dispatch('pendingTotal' , res.length)
      },
      (error) => {
        console.log(error);
      }
    );
    const DataRejected = Parse.Object.extend("test");
    const query3 = new Parse.Query(DataRejected);
    query3.equalTo("status" , 'Rejected');
    query3.equalTo("selectOffice" , user.attributes.office);
    query3.find().then(
      async (data) => {
        var id = await data.map((e) => e.id);
        console.log(data.map((e) => e.attributes));
        var res = await data.map((e) => e.attributes)
        console.log(res.length)
        await store.dispatch('rejectedTotal' , res.length)
      },
      (error) => {
        console.log(error);
      }
    );
    const DataCancel = Parse.Object.extend("test");
    const query4 = new Parse.Query(DataCancel);
    query4.equalTo("status" , 'Canceled');
    query4.equalTo("selectOffice" , user.attributes.office);
    query4.find().then(
      async (data) => {
        var id = await data.map((e) => e.id);
        console.log(data.map((e) => e.attributes));
        var res = await data.map((e) => e.attributes)
        console.log(res.length)
        await store.dispatch('cancelTotal' , res.length)
      },
      (error) => {
        console.log(error);
      }
    );



    return { 
      user, 
      a: computed(() => store.state.appointmentLength),
      approved: computed(() => store.state.approvedTotal),
      pending: computed(() => store.state.pendingTotal),
      rejected: computed(() => store.state.rejectedTotal),
      canceled: computed(() => store.state.cancelTotal),
      //authIsReady: computed(() => store.state.authIsReady)
    }
}
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700&display=swap');
:root
{
    --blue: #4a81da;
    --white: #fff;
    --grey : #f5f5f5;
    --black1 : #222;
    --black2 : rgb(26, 26, 26);
}
.welcome {
  margin-left: 13em;
}
.totalcard {
    display: flex;
}
.cardBox
{
    position: relative;
    width: 80%;
    padding : 50px 200px;
    display : grid ;
    grid-template-columns: repeat(1,1fr);
    grid-gap: 20px;
}
.cardBox .card{
    position : relative ;
    background : var(--white);
    padding : 20px ;
    border-radius: 10px;
    box-shadow: 0 7px 25px rgba(0,0,0,0.2);
}
.cardBox .card .numbers {
    position: relative ; 
    font-weight: 600;
    margin-left: 50px;
    font-size: 5em;
    color : #4a81da;;
    padding : 3px ;
}
.cardBox .card .cardName {
    color : var(--black1);
    font-size: 2em;
    margin-top: 5px;
    padding : 2px ;
}
.cardBox .card:hover {
    background: var(--blue);
}
.cardBox .card:hover .numbers ,
.cardBox .card:hover .cardName ,
.cardBox .card:hover .iconBox
{
    color : var(--white);
}
.cardBox1
{
    position: relative;
    width: 100%;
    padding : 50px 200px;
    display : grid ;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 20px;
}
.cardBox1 .card{
    position : relative ;
    background : var(--white);
    padding : 20px ;
    border-radius: 10px;
    box-shadow: 0 7px 25px rgba(0,0,0,0.2);
}
.cardBox1 .card .numbers {
    position: relative ; 
    font-weight: 600;
    margin-left: 50px;
    font-size: 3em;
    color : #4a81da;;
    padding : 3px ;
}
.cardBox1 .card .cardName {
    color : var(--black1);
    font-size: 1em;
    margin-top: 5px;
    padding : 2px ;
}
.cardBox1 .card:hover {
    background: var(--blue);
}
.cardBox1 .card:hover .numbers ,
.cardBox1 .card:hover .cardName ,
.cardBox1 .card:hover .iconBox
{
    color : var(--white);
}
</style>