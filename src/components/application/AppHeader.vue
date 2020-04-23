<template>
  <v-app-bar app fixed class="primary lighten-3">
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
        <v-badge class="mx-4" color="error" content="5" overlap>
            <v-icon color="info" large>mdi-cart</v-icon>
        </v-badge>

        <v-menu bottom offset-y open-on-hover>
            <template v-slot:activator="{ on }">
                <!--          <v-btn color="primary" dark v-on="on">-->
                <!--            Dropdown-->
                <!--          </v-btn>-->
                <v-badge class="mx-4" color="error" content="5" overlap v-on="on">
                    <v-icon color="info" large v-on="on">mdi-cart</v-icon>
                </v-badge>
            </template>

            <v-list>
                <v-list-item :key="index" @click="" v-for="(item, index) in items">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>

        </v-menu>
    </div>
    <v-divider inset vertical class="mx-2"></v-divider>
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
</template>

<script>
import LoginDialog from "../dialogs/LoginDialog";

export default {
  components: {
    LoginDialog
  },
  data() {
    return {
        dialog: false,
        items: [
            {title: "Click Me"},
            {title: "Click Me"},
            {title: "Click Me"},
            {title: "Click Me 2"}
        ]
    };
  },
    mounted() {
        this.$store.dispatch("me");
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
