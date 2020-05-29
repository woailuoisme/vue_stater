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
          text: "主页",
          disabled: false,
          href: "/home"
      },
        {
            text: "用户中心",
            disabled: false,
            href: "/user"
        },
        {
            text: "购物车",
            disabled: true,
            href: "/user/cart"
        }
    ]
  })
};
</script>

<style scoped></style>
