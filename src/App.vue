<template>
  <v-app>
    <!-- <app-header v-if="!isShowHeader" /> -->
    <app-header/>
    <v-content class="px-3 grey lighten-4" id="main-content">
      <router-view></router-view>
    </v-content>

    <app-footer/>
  </v-app>
</template>

<script>
  import AppHeader from "./components/application/AppHeader";
  import AppFooter from "./components/application/AppFooter";
  import Drawer from "./components/application/Drawer";
  import {mapGetters} from "vuex";
  import {mapState} from "vuex";

  export default {
    name: "App",
    components: {
      AppFooter,
      AppHeader
    },
    data: () => ({
      //
    }),
    computed: {
      // isAuth: () => {
      //   return this.$store.getters.auth.userIsAuthenticated;
      // }
      ...mapGetters({isAuth: "userIsAuthenticated"}),
      isShowHeader() {
        const currentRouterPath = this.$router.currentRoute.path;
        return currentRouterPath === "/signin" || currentRouterPath === "/signup";
      },
    }
  };
</script>
