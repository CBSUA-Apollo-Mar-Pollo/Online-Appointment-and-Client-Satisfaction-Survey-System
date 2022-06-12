<template>
  <NavBar />
  <div class="d-flex justify-around mt-20 mb-6" >
    <div class="content">
      <div class="text">Login Form</div>
      <form @submit.prevent="handleSubmit">
        <div class="field">
          <input type="email" placeholder="Email" name="email" v-model="email" required>
        </div>
        <div class="field">
          <span class="fas fa-lock"></span>
          <input type="password" placeholder="Password" id="password" name="password" v-model="password" required>
        </div>
        <div class="forgot-pass"><a href="#">Forgot Password?</a></div>
        <button>Sign in</button>
        <div class="text-red-600 mt-2" v-if="er">{{ er }}</div>
      </form>
      <!-- Temporary Buttons
        <button
          class="col-2 btn bg-info text-white mt-3 button"
          type="submit"
          onclick="location.href='/Admin';"
        >
          Admin
        </button>
        <button
          class="col-2 btn bg-success text-white mt-3 button"
          type="submit"
          onclick="location.href='/Employee';"
        >
          Employee
        </button> -->
      <!--Temporary Buttons-->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import Parse from "parse";
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
  setup(){
    const store = useStore()
    const router = useRouter()

    const email = ref('')
    const password = ref('')
    const er = ref(null)
    var user = new Parse.User();
    user.set("email" , email.value);
    user.set("password" , email.value);

    const handleSubmit = async () => {
      // try {
      //   await store.dispatch('login' , { email: email.value , password: password.value})
      //   //router.push('/Admin')
      // } catch (err) {
      //   error.value = "Authentication failed"
      // }
      console.log(email.value , password.value)
      Parse.User.logIn(email.value , password.value).then(function(user){
        console.log(Parse.User.current().attributes.status)
        var status = Parse.User.current().attributes.status ;
        var res = Parse.User.current().attributes.ACL.permissionsById ;
        if(res['role:Employee']) {
          if(status === 'InActive'){
            //router.push('/Login')
            er.value = 'Your Account has been Deactivated'
          } else {
            router.push('/Employee')
          }
          //
        } else if(res['role:admin']){
          if(status === 'InActive'){
            //router.push('/Login')
            er.value = 'Your Account has been Deactivated'
          } else {
            router.push('/Admin')
          }
        }  
      } , function error(err) {
        er.value = "Authentication Failed"
      }) 
    }
    return { handleSubmit, email, password , er}
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  display: grid;
  place-items: center;
  text-align: center;
  background: #dde1e7;
}

.content {
  width: 410px;
  background: #ffffff;
  border-radius: 0px;
  padding: 40px 30px;
  box-shadow: 2px 2px 4px 4px rgb(94 104 121 / 29%);
}

.content .text {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 35px;
  color: #008aff;
  font-weight: 700;
  text-transform: uppercase 
}

.content .field {
  height: 50px;
  width: 100%;
  display: flex;
  position: relative;
}

.field input {
  width: 100%;
  padding: 20px;
  font-size: 15px;
  margin: 8px 0;
  outline: none;
  border-bottom: 0.1px solid rgb(204, 204, 204);
  box-shadow: none;
  color: #333;
  background: #f5f5f5f5;
  letter-spacing: 1px;
  font-weight: 300;
}

.field input:focus ~ label {
  box-shadow: inset 2px 2px 5px #babecc, inset -1px -1px 2px #ffffff73;
}

.field:nth-child(2) {
  margin-top: 20px;
}

.field span {
  position: absolute;
  width: 50px;
  line-height: 50px;
  color: #595959;
}

.field label {
  position: absolute;
  top: 50%;
  left: 45px;
  pointer-events: none;
  color: #666666;
  transform: translateY(-50%);
}

.field input:focus ~ label {
  opacity: 0;
}

.forgot-pass {
  text-align: left;
  margin: 40px 0 20px 5px;
}

.forgot-pass a {
  font-size: 16px;
  color: #3498db;
  text-decoration: none;
}

.forgot-pass:hover a {
  text-decoration: underline;
}

.content button {
  max-width: 100px;
  background: #008aff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
  padding: 10px 20px;
  margin: 20px 120px;
  letter-spacing: 2px;
}

.signup {
  font-size: 16px;
  color: #595959;
  margin: 10px 0;
}

.signup a {
  color: #000;
  text-decoration: none;
}

.signup a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 600px) {
  .col-2 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .content {
    width: 430px;
  }
}
</style>

