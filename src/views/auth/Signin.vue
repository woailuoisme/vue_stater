<template>
  <v-container class="fill-height" fruid>
      <SigninForm :submitForm="userLogin"></SigninForm>
  </v-container>
</template>

<script>
import SigninForm from "../../components/forms/SigninForm";

export default {
  components: {
    SigninForm
  },
    methods: {
        async userLogin(loginInfo) {
            let user = await this.$store.dispatch('users/login', loginInfo);
            if (user.error) {
                this.$store.dispatch('snackbar/setSnackbar', {color: 'error', text: user.error});
            } else {
                this.$store.dispatch('snackbar/setSnackbar', {text: 'Thank you for signing in, ' + user.name});
                if (user.admin) {
                    this.$router.push('/admin/videos');
                } else {
                    this.$router.push('/');
                }
            }
        }
    }
};
</script>
