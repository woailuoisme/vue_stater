<template>
  <v-container>
    <VuelidateForm></VuelidateForm>
  </v-container>
</template>

<script>
import VuelidateForm from "@/components/forms/VuelidateForm";

export default {
  name: "Form",
  components: { VuelidateForm },
};
</script>

<style scoped></style>
