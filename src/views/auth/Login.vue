<template>
  <v-container class="fill-height" fruid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" sm="8">
        <LoginForm @submitForm="userLogin"></LoginForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import LoginForm from "../../components/forms/LoginForm";

  export default {
    components: {
      LoginForm
    },
    methods: {
      async userLogin(loginInfo) {
        let user = await this.$store.dispatch("users/login", loginInfo);
        if (user.error) {
          this.$store.dispatch("snackbar/setSnackbar", {
            color: "error",
            text: user.error
          });
        } else {
          this.$store.dispatch("snackbar/setSnackbar", {
            text: "Thank you for signing in, " + user.name
          });
          if (user.admin) {
            this.$router.push("/admin/videos");
          } else {
            this.$router.push("/");
          }
        }
      }
    }
  };
</script>
