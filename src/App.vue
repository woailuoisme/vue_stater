<template>
  <v-app>
    <!-- <app-header v-if="!isShowHeader" /> -->
    <!--    <app-header />-->
    <v-navigation-drawer app clipped overflow temporary v-model="drawer">
      <v-list shaped>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">John Leider</v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group color="primary" v-model="menuItem">
          <v-list-item :key="i" :to="item.url" v-for="(item, i) in menuItems">
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="primary lighten-3" clipped-left fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase ">
        <span>Vuetify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn text to="/admin">Admin</v-btn>
        <v-btn text to="/meetups">meetups</v-btn>
        <v-btn text to="/user">user</v-btn>
        <v-btn text to="/home">home</v-btn>
        <v-btn text to="/about">about</v-btn>

        <v-menu bottom offset-y open-on-hover transition="slide-y-transition">
          <template v-slot:activator="{ on }">
            <v-badge class="mx-4" color="error" content="5" overlap v-on="on">
              <v-icon color="info" large v-on="on">mdi-cart</v-icon>
            </v-badge>
          </template>

          <v-card tile>
            <v-list two-line>
              <v-list-item-group>
                <v-list-item
                        :key="index"
                        :link="false"
                        @click=""
                        v-for="(item, index) in cartItems"
                >
                  <v-list-item-avatar>
                    <v-icon>mdi-clock</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle
                    >{{ item.title }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-delete</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
              <v-divider class="my-1"></v-divider>
              <v-btn block color="info" large>check out</v-btn>
            </v-list>
          </v-card>
        </v-menu>
      </div>
      <v-divider class="mx-2" inset vertical></v-divider>
      <span v-if="!isAuth">
        <v-btn text to="/signin">signin</v-btn>
        <v-btn text to="/signup">signup</v-btn>
      </span>
      <span v-if="isAuth">
        <v-avatar>
          <img alt="John" src="user.image"/>
        </v-avatar>
        <span>{{ user.name }}</span>
        <v-btn text>logout</v-btn>
      </span>
    </v-app-bar>
    <v-content class="px-3 grey lighten-4" id="main-content">
      <v-slide-x-transition>
        <router-view></router-view>
      </v-slide-x-transition>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
  // import AppHeader from "./components/application/AppHeader";
  import AppFooter from "./components/application/AppFooter";
  import {mapGetters} from "vuex";

  export default {
    name: "App",
    components: {
      AppFooter
      // AppHeader,
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
    computed: {
      // isAuth: () => {
      //   return this.$store.getters.auth.userIsAuthenticated;
      // }
      ...mapGetters({isAuth: "auth/userIsAuthenticated"}),
      isShowHeader() {
        const currentRouterPath = this.$router.currentRoute.path;
        return currentRouterPath === "/signin" || currentRouterPath === "/signup";
      }
    }
  };
</script>
