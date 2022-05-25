<template>
  <NavBar />
  <div class="container d-flex justify-around mt-5 mb-6" >
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
        <div class="text-red-600" v-if="er">{{ er }}</div>
        <button>Sign in</button>
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
        console.log(Parse.User.current().attributes.ACL.permissionsById['role:Employee'])
        var res = Parse.User.current().attributes.ACL.permissionsById ;
        if(res['role:Employee']) {
          router.push('/Employee')
        } else if(res['role:admin']){
          router.push('/Admin')
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
  width: 430px;
  background: #ffffff;
  border-radius: 10px;
  padding: 40px 30px;
  box-shadow: -3px -3px 7px #ffffff73, 2px 2px 5px rgba(94, 104, 121, 0.288);
}

.content .text {
  font-size: 33px;
  font-weight: 600;
  margin-bottom: 35px;
  color: #008aff;
  font-weight: 700;
}

.content .field {
  height: 50px;
  width: 100%;
  display: flex;
  position: relative;
}

.field input {
  height: 100%;
  width: 100%;
  padding-left: 45px;
  font-size: 18px;
  outline: none;
  border: none;
  color: #595959;
  background: #e6effa;
  border-radius: 5px;
  box-shadow: inset 1px 1px 6px #babecc, inset -5px -5px 10px #ffffff73;
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
  margin: 10px 0 10px 5px;
}

.forgot-pass a {
  font-size: 16px;
  color: #3498db;
  text-decoration: none;
}

.forgot-pass:hover a {
  text-decoration: underline;
}

button {
  margin: 15px 0;
  width: 100%;
  height: 50px;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 600;
  background: #008aff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 25px;
}

button:focus {
  color: #0e7ac2;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
  color: white;
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

