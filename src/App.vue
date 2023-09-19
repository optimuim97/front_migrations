<template>
  <div>
    <Sidebar v-if="$route.name!='Login'"></Sidebar>
      <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// import Navbar from "../layouts/Navbar.vue";
import Sidebar from "./components/layouts/Sidebar.vue";
import Footer from "./components/layouts/Footer.vue";

export default {
  name: 'App',



















  
  components: {
      // Navbar,
      Sidebar,
      Footer,
  },

  data: () => ({
    //
  }),
}
</script>
