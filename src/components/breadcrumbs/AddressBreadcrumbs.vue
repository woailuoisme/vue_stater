<template>
  <v-breadcrumbs :items="items">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/home"
      },
      {
        text: "User",
        disabled: false,
        href: "/user"
      },
      {
        text: "Address",
        disabled: true,
        href: "/user/address"
      }
    ]
  })
};
</script>

<style scoped></style>
