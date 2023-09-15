<template>
  <v-app>
    <Sidebar v-if="$router.name!='Login'"></Sidebar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
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
