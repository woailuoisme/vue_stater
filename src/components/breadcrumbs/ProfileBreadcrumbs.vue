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
            text: "个人中心",
            disabled: false,
            href: "/user"
        },
        {
            text: "个人主页",
            disabled: true,
            href: "/user/profile"
        }
    ]
  })
};
</script>

<style scoped></style>
