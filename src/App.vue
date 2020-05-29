<template>
  <v-app>
    <AppHeader @draw="draw"></AppHeader>
    <v-content class="grey lighten-4" id="main-content">
      <v-fade-transition>
        <router-view></router-view>
      </v-fade-transition>
      <BackToTop></BackToTop>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
  import AppFooter from "./components/application/AppFooter";
  import AppHeader from "./components/application/AppHeader";
  import BackToTop from "./components/shared/BackToTop";

  export default {
    name: "App",
    components: {
      AppFooter,
      AppHeader,
      BackToTop
    },
    data: () => ({
      drawer: false,
      dialog: false,
      menuItem: 0,
      menuItems: [
        {text: "dashboard", url: "/dashboard"},
        {text: "user", url: "/user"},
        {text: "admin", url: "/admin"},
        {text: "product", url: "/product"},
        {text: "product_new", url: "/product_new"},
        {text: "product_detail", url: "/product_detail"},
        {text: "meetups", url: "/meetups"},
        {text: "Meetup", url: "/meetups/:id"}
      ],
      cartItems: [
        {title: "Click Me"},
        {title: "Click Me"},
        {title: "Click Me"},
        {title: "Click Me 2"}
      ]
    }),
    methods: {
      draw(draw) {
        this.drawer = draw;
      }
    },
    computed: {
      // isAuth: () => {
      //   return this.$store.getters.auth.userIsAuthenticated;
      // }
      // ...mapGetters({ isAuth: "auth/userIsAuthenticated" }),
      // isShowHeader() {
      //   const currentRouterPath = this.$router.currentRoute.path;
      //   return currentRouterPath === "/signin" || currentRouterPath === "/signup";
      // }
    }
  };
</script>
