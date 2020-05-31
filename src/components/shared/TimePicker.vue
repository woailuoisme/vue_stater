<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="time"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="time"
        :label="label"
        prepend-icon="access_time"
        readonly
        v-on="on"
      ></v-text-field>
    </template>

    <v-time-picker
      v-if="menu"
      v-model="time"
      use-seconds
      format="24hr"
      @click:second="$refs.menu.save(time)"
    ></v-time-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "时间"
    }
  },
  data() {
    return {
      time: null,
      menu: false
    };
  },
  watch: {
    time(newVal) {
      this.$emit("input", newVal);
    }
  }
};
</script>

<style scoped></style>
