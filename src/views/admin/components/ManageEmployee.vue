<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div id="app" class="flex flex-wrap">

      <PageSidebar />

      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

        <PageNavbar />
        <PageEmployee />

        <div class="p-6 bg-gray-100 mb-20">
          <router-view />
        </div>

        <PageFooter />

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import PageEmployee from '../pages/PageEmployee.vue'
import PageSidebar from './PageSidebar'
import PageNavbar from './PageNavbar'
import PageFooter from './PageFooter'

export default {
  name: 'ManageEmployee',
  computed: {
    ...mapState(['sideBarOpen'])
  },
  components: {
    PageEmployee,
    PageSidebar,
    PageNavbar,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
