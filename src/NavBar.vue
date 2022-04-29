<template>
  <div class="TopNavbar container">
    <nav
      id="tnav1"
      class="container flex justify-around py-3 mx-auto bg-sky-300"
    >
      <div>
        <img id="timage" src="img/CHED-LOGO.png" alt="CHED LOGO" align="left" />
      </div>
    </nav>
    <nav id="tnav2" class="container flex justify-around py-5 mx-auto bg-white">
      <div id="tnavcontent" class="space-x-8 text-black">
        <router-link to="#WelcomePage">HOME</router-link>
        <router-link to="#AppointmentPage">APPOINTMENT</router-link>
        <router-link to="#SurveyPage">LOGIN</router-link>
      </div>
    </nav>
  </div>
</template>

<script></script>
