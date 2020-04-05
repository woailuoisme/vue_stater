<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <UserActionList></UserActionList>
      </v-col>
      <v-col cols="9">
        <v-card>
          <router-view></router-view>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserActionList from "@/components/user/UserActionList";
export default {
  props: {
    source: String
  },
  components: {
    UserActionList
  }
};
</script>

<style scoped></style>
