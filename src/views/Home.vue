<template>
  <v-container class="fill-height" fruid>
    <v-row>
      <v-col cols="12">
        <pagenate />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pagenate from "../components/shared/pagenation";

export default {
  components: {
    pagenate
  }
};
</script>
