<template>
  <v-card>
    <v-list nav shaped>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group color="primary" v-model="item">
            <v-list-item
                    :key="i + item.icon"
                    :to="{ path: item.url }"
                    v-for="(item, i) in items"
            >
                <v-list-item-content>
                    <v-list-item-title v-html="item.text"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn icon>
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "UserActionList",
  data() {
    return {
      item: 1,
      items: [
          {text: "个人信息", icon: "mdi-clock", url: "/user/profile"},
          {
              text: "地&nbsp;&nbsp&nbsp&nbsp址",
              icon: "mdi-flag",
              url: "/user/address"
          },
          {
              text: "心&nbsp&nbsp愿&nbsp&nbsp单",
              icon: "mdi-account",
              url: "/user/wishlist"
          },
          {
              text: "购&nbsp&nbsp物&nbsp&nbsp车",
              icon: "mdi-account",
              url: "/user/cart"
          },
          {
              text: "订&nbsp&nbsp&nbsp&nbsp单",
              icon: "mdi-flag",
              url: "/user/order"
          }
      ]
    };
  },
  methods: {
    actionRoute(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style scoped></style>
