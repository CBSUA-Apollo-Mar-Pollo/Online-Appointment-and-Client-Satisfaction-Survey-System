<template>
<div>
    <NavBar />
  <div class="container">
   <p class="welcome">Logged In as  {{ user.attributes.username }} </p>
    <div className='totalcard'>
            <div className="cardBox1">
                <div className="card">
                        <div className="numbers">{{ admins.length }}</div>
                        <div className="cardName">Admin Total</div>
                </div>
                <div className="card">
                        <div className="numbers">{{ employees.length }}</div>
                        <div className="cardName">Employee Total</div>
                </div>
                </div>
                </div>
    </div>
</div>
</template>

<script>
import NavBar from './Navbar.vue';
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import Parse from "parse";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      employees: [],
       admins: []
    }
  },
   mounted() {
    this.getEmployees(),
     this.getadmins()
  },

  methods: {
    async getEmployees() {
      try {
          const Data = Parse.Object.extend("_User");
          const query = new Parse.Query(Data);
            query.find({useMasterKey: true}).then(
            async (data) => {
              var res = await data.map((e) => e.attributes);
              //console.log(res.filter((e) => e.ACL.permissionsById['role:admin']))
              var employee = res.map((e) => e.ACL.permissionsById['role:Employee'])
              //console.log(data.map((e) => e.attributes));
              this.employees = res.filter((e) => e.ACL.permissionsById['role:Employee'])
              console.log(this.employees)
        //await store.dispatch('allAppointment' , res )
      })
      } catch (error) {
        console.error(error)
      }
    },
    async getadmins() {
      try {
          const Data = Parse.Object.extend("_User");
          const query = new Parse.Query(Data);
          query.find({useMasterKey: true}).then(
            async (data) => {
              var res = await data.map((e) => e.attributes);
              console.log(res.filter((e) => e.ACL.permissionsById['role:admin']))
              console.log(data.map((e) => e.attributes));
              this.admins = res.filter((e) => e.ACL.permissionsById['role:admin'])
        //await store.dispatch('allAppointment' , res )
      })
      } catch (error) {
        console.error(error)
      }
    },
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    var user = Parse.User.current()
    console.log(user.attributes.username)

    return { 
      user
      //authIsReady: computed(() => store.state.authIsReady)
    }
}
};
</script>

<style scoped>
.container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 75%;
}

@media (min-width: 992px) {
.container {
    transform: translateX(15%);
}
}

.welcome {
  margin-left: 13em;
}
.totalcard {
    display: flex;
}
.cardBox1
{
    position: relative;
    width: 100%;
    padding : 50px 200px;
    display : grid ;
    grid-template-columns: repeat(2,1fr);
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
    font-size: 4em;
    color : #4a81da;;
    padding : 3px ;
}
.cardBox1 .card .cardName {
    color : var(--black1);
    font-size: 3em;
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