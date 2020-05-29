<template>
  <v-container class="fill-height" fruid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" sm="8">
        <ResetPwdForm @submitForm="submitForm"></ResetPwdForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ResetPwdForm from "../../components/forms/ResetPwdForm";

  export default {
    components: {
      ResetPwdForm
    },
    methods: {
      submitForm() {
      }
    }
  };
</script>

<style scoped></style>
