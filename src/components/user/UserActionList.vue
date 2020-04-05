<template>
  <v-card>
    <v-list rounded>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="{path:item.url}"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
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
        { text: "Profile", icon: "mdi-clock", url: "/user/profile" },
        { text: "Cart", icon: "mdi-account", url: "/user/cart" },
        { text: "Address", icon: "mdi-flag", url: "/user/address" },
        { text: "Order", icon: "mdi-flag", url: "/user/order" },
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
