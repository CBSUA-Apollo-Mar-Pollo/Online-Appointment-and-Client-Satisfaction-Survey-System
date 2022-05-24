<template>
<div>
    <NavBar />
    <!-- hello admin {{ user.attributes.username }} -->
</div>
</template>

<script>
import NavBar from "./Navbar.vue";
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import Parse from "parse";

export default {
  components: {
    NavBar,
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    var user = Parse.User.current()
    console.log(user.attributes.username)
    return { 
      user
      //authIsReady: computed(() => store.state.authIsReady)
    }
}
}
</script>