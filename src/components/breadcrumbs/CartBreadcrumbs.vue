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
        text: "cart",
        disabled: true,
        href: "/user/cart"
      }
    ]
  })
};
</script>

<style scoped></style>
