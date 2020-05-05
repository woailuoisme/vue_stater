<template>
  <div>
    <v-navigation-drawer
            app
            clipped
            v-model="drawer"
    >
      <v-system-bar></v-system-bar>
      <v-list>
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
          <v-list-item :key="i" v-for="(item, i) in menuItems">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="primary lighten-3" fixed>
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

        <v-menu bottom offset-y open-on-hover>
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
                    <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
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
      <span v-if="!userIsAuthenticated">
        <v-btn text to="/signin">signin</v-btn>
        <v-btn text to="/signup">signup</v-btn>
      </span>
      <span v-if="userIsAuthenticated">
        <v-avatar>
          <img alt="John" src="user.image"/>
        </v-avatar>
        <span>{{ user.name }}</span>
        <v-btn text>logout</v-btn>
      </span>
    </v-app-bar>
  </div>
</template>

<script>
  import LoginDialog from "../dialogs/LoginDialog";
  import AppDrawerTwo from "./AppDrawerTwo";

export default {
  components: {
    LoginDialog,
    AppDrawerTwo
  },
  data() {
    return {
      drawer: false,
      dialog: false,
      menuItem: 0,
      menuItems: [
        {text: "My Files", icon: "mdi-folder"},
        {text: "Shared with me", icon: "mdi-account-multiple"},
        {text: "Starred", icon: "mdi-star"},
        {text: "Recent", icon: "mdi-history"},
        {text: "Offline", icon: "mdi-check-circle"},
        {text: "Uploads", icon: "mdi-upload"},
        {text: "Backups", icon: "mdi-cloud-upload"}
      ],
      cartItems: [
        {title: "Click Me"},
        {title: "Click Me"},
        {title: "Click Me"},
        {title: "Click Me 2"}
      ]
    };
  },
  mounted() {
    // this.$store.dispatch("me");
  },
  computed: {
    userIsAuthenticated() {
      return this.$store.getters["userIsAuthenticated"];
    },
    user() {
      return this.$store.getters["user"];
    }
  }
};
</script>

<style scoped></style>
