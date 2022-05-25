<template>
<div>
  <header id="header" class="d-flex flex-column justify-content-center">
    <nav id="navbar" class="bnav b-nav">
      <ul>
        <li>
          <a href="/Admin" class="nav-link active"
            ><i class="bx bx-home"></i> <span>Dashboard</span></a
          >
        </li>
        <li>
          <a href="/ManageAdmin" class="nav-link"
            ><i class="bi bi-card-checklist"></i> <span>Manage Admin</span></a
          >
        </li>
        <li>
          <a href="/ManageEmployee" class="nav-link"
            ><i class="bi bi-card-text"></i> <span>Manage Employee</span></a
          >
        </li>
        <li>
          <button @click="handleClick">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
  <div class="w-100">
    <div class="bg-sky-300 w-100 p-1">
      <div class="topnav container d-flex py-3 mx-auto">
        <img id="timage" src="img/CHED-LOGO.png" alt="CHED LOGO" align="left" />
      </div>
    </div>
    <div>
      <nav
        class="topnav navbar navbar-expand-lg container flex pt-5 mx-auto bg-white"
      >
        <div class="topnav-items space-x-8 h5">
          <a class="pl-5 pr-3 text-4xl font-bold">ADMIN DASHBOARD</a>
        </div>
      </nav>
    </div>
  </div>

  <label class="reminder">
    <input type="checkbox" />
    <div class="menu-box">
      <div class="menu-circle"></div>
      <ul class="menu-items">
        <li>
          COVID-19 Reminders: Masks are a key measure to reduce transmission and
          save lives. Wearing well-fitted masks should be used as part of a
          comprehensive ‘Do it all!’ approach including maintaining physical
          distancing, avoiding crowded, closed and close-contact settings,
          ensuring good ventilation of indoor spaces, cleaning hands regularly,
          and covering sneezes and coughs with a tissue of bent elbow. Depending
          on the type, masks can be used for either protection of healthy
          persons or to prevent onward transmission, or both.
        </li>
      </ul>
    </div>
  </label>
</div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Parse from "parse";
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    var user = Parse.User.current()
    console.log(user.attributes.username)
    const handleClick = () => {
      Parse.User.logOut().then(function(user){
          router.push('/')
      })
    }
    return { 
      handleClick ,
      user
      //authIsReady: computed(() => store.state.authIsReady)
    }
}
}
</script>

<style scoped>
.reminder a {
  text-decoration: none;
}
.reminder {
  position: fixed;
  right: 15px;
  bottom: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
}
.menu-box {
  position: relative;
  border: 2px solid #7dd3fc;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: 0.4s;
}
.menu-circle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 30px;
  height: 30px;
  background-color: #7dd3fc;
  border-radius: 50%;
  transition: 0.4s;
}
.menu-box:hover .menu-circle {
  transform: scale(1.1);
  transition: 0.2s;
}
.menu-items {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  color: #008aff;
  box-shadow: 1px 1px 3px #a9a9a9;
  text-align: justify;
  transform: translateY(-40%) scale(0) translateX(-30%);
  transition: 0.4s;
  border-radius: 5px;
}
.menu-items li {
  width: 700px;
  padding: 10px;
  list-style: none;
}
.menu-items a {
  color: #fff;
  line-height: 1.5;
}
input {
  position: absolute;
  left: -1000rem;
}
input:checked + .menu-box {
  border: 2px solid rgb(0 138 255);
  transition: 0.4s;
}
input:checked + .menu-box .menu-circle {
  background-color: rgb(0 138 255);
  transition: 0.4s;
}
input:checked + .menu-box .menu-items {
  transform: translateY(7%) scale(1) translateX(-7%);
  transition: 0.4s;
  z-index: -1;
}
.topnav {
  /* padding-left: 200px; */
  transform: translateY(0%) scale(1) translateX(1%);
  font-weight: 500;
  color: #7d8b9f;
}
.topnav-items {
  padding-left: 10px;
}
@media only screen and (max-width: 600px) {
  .reminder {
    right: 7px;
    bottom: 7px;
  }
  .menu-items li {
    font-size: 12px;
    width: 285px;
    padding: 5px;
    list-style: none;
  }
  input:checked + .menu-box .menu-items {
    transform: translateY(1%) scale(1) translateX(-17%);
    transition: 0.4s;
    z-index: -1;
  }
  .topnav {
    padding-left: 0;
  }
  .topnav-items {
    padding-left: 0;
  }
  .topnav {
    justify-content: center;
  }
}
</style>