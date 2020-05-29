<template>
  <v-container class="fill-height" fruid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" sm="8">
        <RegisterForm @submitForm="submitForm"></RegisterForm>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import RegisterForm from "../../components/forms/RegisterForm";

  export default {
    components: {
      RegisterForm
    },
    methods: {
      submitForm(registerInfo) {
      }
    }
  };
</script>
