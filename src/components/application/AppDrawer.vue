<template>
  <v-navigation-drawer temporary v-model="draw">
      <v-list>
          <v-list-item :key="item.title" :to="item.link" v-for="item in menuItems">
              <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>{{ item.title }}</v-list-item-content>
          </v-list-item>
          <v-list-item @click="onLogout" v-if="userIsAuthenticated">
              <v-list-item-action>
                  <v-icon>exit_to_app</v-icon>
              </v-list-item-action>
              <v-list-item-content>Logout</v-list-item-content>
          </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        draw: {
            type: Boolean,
            default: false
        }
    },
    // data() {
    //   return {
    //     sideNav: false
    //   };
    // },
    computed: {
        menuItems() {
            let menuItems = [
                {icon: "face", title: "Sign up", link: "/signup"},
                {icon: "lock_open", title: "Sign in", link: "/signin"}
            ];
            if (this.userIsAuthenticated) {
                menuItems = [
                    {
                        icon: "supervisor_account",
            title: "View Meetups",
            link: "/meetups"
          },
          { icon: "room", title: "Organize Meetup", link: "/meetup/new" },
          { icon: "person", title: "Profile", link: "/profile" }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped></style>
