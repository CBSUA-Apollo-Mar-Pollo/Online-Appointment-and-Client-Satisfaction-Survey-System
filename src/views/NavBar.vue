<template>
  <!-- Mobile nav toggle button -->
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

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
          <a href="/SurveyForm" class="nav-link"
            ><i class="bi bi-card-checklist"></i>
            <span>SATISFACTION SURVEY</span></a
          >
        </li>
      </ul>
    </nav>
  </header>
  <div class="w-100">
    <div class="bg-sky-300 w-100 p-3">
      <div id="tnav1" class="container d-flex py-3 mx-auto">
        <img id="timage" src="img/CHED-LOGO.png" alt="CHED LOGO" align="left" />
      </div>
    </div>
    <div>
      <nav class="container flex justify-around py-5 mx-auto bg-white">
        <div id="tnavcontent" class="space-x-8 text-black">
          <a class="pl-3 pr-3" href="/">HOME</a>
          <a class="pl-3 pr-3" href="/AppointmentForm">APPOINTMENT</a>
          <a class="pl-3 pr-3" href="#">LOGIN</a>
        </div>
      </nav>
    </div>
  </div>
  <router-view />
</template>
