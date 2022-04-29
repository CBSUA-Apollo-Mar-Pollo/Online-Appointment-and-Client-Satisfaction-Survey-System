<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-link /> -->
  <MasterView></MasterView>
</template>

<script>
import Parse from "parse";
import MasterView from "./views/MasterView.vue";

Parse.serverURL = "http://localhost:1337/api";
Parse.initialize(
  "d16c26c8237d4695bedfa6b875cadcf9",
  "7f307930-c610-11ec-9d64-0242ac120002"
);

export default {
  components: { MasterView },
};
</script>
<style></style>
