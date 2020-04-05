<template>
  <v-app-bar app fixed class="primary lighten-3">
    <v-toolbar-title class="headline text-uppercase ">
      <span>Vuetify</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <v-btn text to="/signin">signin</v-btn>
      <v-btn text to="/signup">signup</v-btn>
      <v-btn text to="/meetups">meetups</v-btn>
      <v-btn text to="/user">user</v-btn>
      <v-btn text to="/form">form</v-btn>
      <v-btn text to="/home">home</v-btn>
      <v-btn text to="/about">about</v-btn>
      <LoginDialog></LoginDialog>
    </div>
    <v-divider inset vertical class="mx-2"></v-divider>
    <v-btn
      text
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
    >
      <span class="mr-2">Latest Release</span>
    </v-btn>
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
      dialog: false
    };
  }
};
</script>

<style scoped></style>
