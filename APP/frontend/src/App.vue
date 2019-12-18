<template>
  <v-app id="keep">
    <v-app-bar
      app
      clipped-left
      dark
      color="black"
    >
      <v-toolbar-title>FDL GYM</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon v-if="this.$route.path == '/login'" @click="$router.push('/register')">
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>

      <v-btn icon v-if="this.$route.path == '/register'" @click="$router.push('/login')">
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon v-if="this.$store.state.isAuth" @click="$store.dispatch('salir')">
        <v-icon>mdi-account-arrow-left</v-icon>
      </v-btn>

    </v-app-bar>

    <v-content>
       <v-parallax
          dark
          src="./assets/bg.jpg"
          height="700"
          jumbotron
        >
        <router-view />
        </v-parallax>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      hiddenNavbar: false
    }),
    mounted(){
      this.verifyNavbar()
    },
    methods: {
      verifyNavbar(){
        if(this.$route.path === '/login') {
          this.hiddenNavbar = true;
          return true;
        } else {
          this.hiddenNavbar = false;
          return false;
        }
      }
    }
  }
</script>

<style>
/* #keep img {
  height: 100%
} */
#keep{
  background: #0000;
}
#keep .v-navigation-drawer__border {
  display: none
}
</style>