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
        text: "user",
        disabled: false,
        href: "/user"
      },
      {
        text: "order",
        disabled: true,
        href: "/user/order"
      }
    ]
  })
};
</script>

<style scoped></style>
