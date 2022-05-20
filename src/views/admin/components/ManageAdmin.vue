<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

      <PageSidebar />

      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

        <PageNavbar />
        <PageAdmin />

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

import PageAdmin from '../pages/PageAdmin.vue'
import PageSidebar from './PageSidebar'
import PageNavbar from './PageNavbar'
import PageFooter from './PageFooter'

export default {
  name: 'ManageAdmin',
  computed: {
    ...mapState(['sideBarOpen'])
  },
  components: {
    PageAdmin,
    PageSidebar,
    PageNavbar,
    PageFooter
  }
}
</script>
