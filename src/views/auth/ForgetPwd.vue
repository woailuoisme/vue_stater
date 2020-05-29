<template>
  <v-container class="fill-height" fruid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" sm="8">
        <ForgetPwdForm @submitForm="submitForm"></ForgetPwdForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ForgetPwdForm from "../../components/forms/ForgetPwdForm";

  export default {
    components: {
      ForgetPwdForm
    },
    methods: {
      submitForm() {

      }
    }
  };
</script>

<style scoped></style>
