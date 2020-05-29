<template>
  <Breadcrumb :items="items"></Breadcrumb>
</template>

<script>
  import Breadcrumb from "../shared/Breadcrumb";
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Breadcrumb
    },
    computed: {
      ...mapGetters({
        items: 'breadcrumb/address'
      })
    },
  };
</script>

<style scoped></style>
