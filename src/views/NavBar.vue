<template>
  <header id="header" class="d-flex flex-column justify-content-center">
    <nav id="navbar" class="bnav b-nav">
      <ul>
        <li>
          <a href="/" class="nav-link active"
            ><i class="bx bx-home"></i> <span>WELCOME</span></a
          >
        </li>
        <li>
          <a href="/AppointmentForm" class="nav-link"
            ><i class="bi bi-card-text"></i> <span>APPOINTMENT FORM</span></a
          >
        </li>
        <li>
          <a href="/CheckStatus" class="nav-link"
            ><i class="bi bi-card-checklist"></i>
            <span>APPOINTMENT STATUS</span></a
          >
        </li>
      </ul>
    </nav>
  </header>
  <div class="w-100">
    <div class="bg-sky-300 w-100 p-1">
      <div class="logo">
        <img id="timage" src="logoofched.svg" alt="CHED LOGO" align="left" />
        <div class="txt">
              <div class="text2">
                <h4>Republic of the phillippines</h4>
                <hr />
                <p>Office of the president</p>
              </div>
              <h2>Commision on higher Education</h2>
              <h2>Region V</h2>
        </div>
      </div>
    </div>
    <div>
      <nav
        class="topnav navbar navbar-expand-lg container flex pt-5 mx-auto bg-white"
      >
        <div class="topnav-items space-x-8">
          <a class="pl-3 pr-3" href="/">HOME</a>
          <a class="pl-3 pr-3" href="/AppointmentForm">APPOINTMENT</a>
          <a class="pl-3 pr-3" href="/Login">LOGIN</a>
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
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
.reminder a {
  text-decoration: none;
}

nav {
  margin: 0 !important;
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
  transform: translateY(0%) scale(1) translateX(6%);
  font-weight: 500;
  color: #7d8b9f;
}

.topnav-items {
  padding-left: 10px;
}

.logo {
    margin: 15px 0 15px 0;
    display: flex;
    transform: translateY(0%) scale(1) translateX(6%);
}
.txt {
  margin-top: 0px;
}
.logo img {
  height: 120px;
  vertical-align: bottom;
  margin-right: 10px;
}
.logo h2 {
  text-decoration: none;
  font-size: 1.6em;
  color: rgb(255, 255, 255);
  flex-basis: 0;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
}
.logo h4 {
   color: rgb(255, 255, 255);
   /* border-bottom: 1px solid #fff; */
   font-family: 'Poppins', sans-serif;
   font-size: 1.3em;
   text-transform: uppercase;
}
.logo p {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  text-transform: uppercase;
}
.text2 hr {
  border: 1px solid rgb(255, 255, 255);
  margin-right: 200px;
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
  .topnav {
  transform: translateY(0%) scale(1) translateX(1%);
}
.logo {
    transform: translateY(0%) scale(1) translateX(18%);
    font-size: 11px;
    width: 20%;
}
.logo h2 {
    font-size: 11px;
    width: auto;
}
.txt {
    transform: translateY(25%) scale(1) translateX(0%);
}
}
</style>
