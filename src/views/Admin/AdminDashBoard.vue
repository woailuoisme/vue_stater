<template>
  <v-container fluid>
    <v-row>
      <v-col
        sm="12"
        md="3"
        v-for="(item, index) in statistics"
        :key="index + item.label"
      >
        <v-card>
          <v-card-title class="light-green lighten-2 d-flex flex-row align-center " >
            <v-spacer></v-spacer>
            <v-btn icon small>
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-card-subtitle class="text-center">
              {{ item.label }}
            </v-card-subtitle>
            <v-card-title class="text-center">
              <v-row justify="center"> {{ item.value }}</v-row>
            </v-card-title>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="text-center">
            <v-row justify="space-around">
              <v-icon>mdi-clock</v-icon>
              <span class="">{{ item.updatedTime }}</span>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="12"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {
      statistics: [
        { label: "总交易量", value: 75.521, updatedTime: "Last 24 Hours" },
        { label: "当日交易量", value: 75.521, updatedTime: "Last 24 Hours" },
        { label: "总注册量", value: 75.521, updatedTime: "Last 24 Hours" },
        { label: "当日注册量", value: 75.521, updatedTime: "Last 24 Hours" }
      ]
    };
  }
};
</script>

<style scoped></style>
