<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        :label="label"
        prepend-icon="event"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker locale="zh-cn" v-model="date" @input="update"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "日期选择"
    }
  },

  name: "DatePiker",
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false
  }),
  methods: {
    update() {
      this.menu = false;
      this.$emit("input", this.date);
    }
  }
};
</script>

<style scoped></style>
