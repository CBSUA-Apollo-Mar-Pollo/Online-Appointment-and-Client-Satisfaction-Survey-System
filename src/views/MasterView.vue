<template>
  <!-- Start main -->
  <main id="main">
    <!-- ======= Appointment Section ======= -->
    <AppointmentPage></AppointmentPage>
    <!-- End Appointment Section -->

    <!-- ======= Survey Section ======= -->
    <SurveyPage></SurveyPage>
    <!-- End Survey Section -->
  </main>
  <!-- End main -->

  <!-- ======= Footer ======= -->
  <PageFooter></PageFooter>
  <!-- End Footer -->
</template>

<script>
// @ is an alias to /src
import AppointmentPage from "./pages/AppointmentPage.vue";
import SurveyPage from "./pages/SurveyPage.vue";
import PageFooter from "./pages/PageFooter.vue";

export default {
  name: "MasterView",
  components: {
    AppointmentPage,
    SurveyPage,
    PageFooter,
  },
};
</script>
