<template>
  <v-container>
    <v-card class="mb-4">
      <ProfileBreadcrumbs></ProfileBreadcrumbs>
    </v-card>
    <v-card>
      <v-card-text>
        <v-row >
          <h4 >Profile</h4>
        </v-row>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
  import ProfileBreadcrumbs from "../../components/breadcrumbs/ProfileBreadcrumbs";
  export default {
    components:{
      ProfileBreadcrumbs
    },
    name: "Profile"
  }
</script>

<style scoped>

</style>
