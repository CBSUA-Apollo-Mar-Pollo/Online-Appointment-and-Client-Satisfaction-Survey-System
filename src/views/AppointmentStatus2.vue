<template>
  <NavBar />
  <AppointmentStatus />
</template>

<script>
import NavBar from "./NavBar.vue";
import AppointmentStatus from "../components/AppointmentStatus.vue";

export default {
  components: {
    NavBar,
    AppointmentStatus,
  },
};
</script>
