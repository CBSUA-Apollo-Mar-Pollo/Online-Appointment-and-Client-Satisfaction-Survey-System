<template>
  <router-view/>
</template>

<script>
import Parse from "parse";
import NavBar from "./views/NavBar.vue";

Parse.serverURL = "http://localhost:1337/api";
Parse.initialize(
  "d16c26c8237d4695bedfa6b875cadcf9",
  "7f307930-c610-11ec-9d64-0242ac120002"
);

export default {
  components: {
    NavBar,
  },
};
</script>
