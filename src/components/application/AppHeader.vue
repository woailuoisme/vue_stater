<template>
  <div>
    <v-app-bar app class="primary lighten-3" clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase ">
        <span>Vuetify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          :key="index"
          :to="{ path: menu.path }"
          text
          v-for="(menu, index) in headerMenu"
          >{{ menu.name }}
        </v-btn>

        <v-menu bottom offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-badge class="mx-4" color="error" content="5" overlap v-on="on">
              <v-icon color="info" large v-on="on">mdi-cart</v-icon>
            </v-badge>
          </template>

          <v-card color="scroll" height="300px" tile>
            <v-list two-line>
              <v-list-item-group>
                <v-list-item
                  :key="index"
                  :link="false"
                  @click=""
                  v-for="(item, index) in cartItems"
                >
                  <v-list-item-avatar>
                    <v-icon>mdi-clock</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle
                      >{{ item.title }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="grey lighten-1">mdi-delete</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>

          <v-row class="px-4 py-1 grey darken-1">
            <v-btn block color="info" large>前往购物车</v-btn>
          </v-row>
        </v-menu>
      </div>
      <v-divider class="mx-2" inset vertical></v-divider>
      <span v-if="!userIsAuthenticated">
        <v-btn text to="/login">登录</v-btn>
        <v-btn text to="/register">注册</v-btn>
      </span>

      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on }">
          <div v-if="userIsAuthenticated" class="d-flex align-center" v-on="on">
            <v-avatar size="40">
              <img
                alt="John"
                src="https://jetsport.com.au/assets/backend/images/default-avatar.png"
              />
            </v-avatar>
            <span class="title ml-3">Seaside</span>
          </div>
        </template>
        <v-list>
          <v-btn text class="red--text darken-3">logout</v-btn>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer app clipped v-model="drawer">
      <v-list shaped>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">John Leider</v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group color="primary" v-model="menuItem">
          <v-list-item :key="i" :to="item.url" v-for="(item, i) in menuItems">
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
    import LoginDialog from "../dialogs/LoginDialog";
    import {mapGetters} from "vuex";

    export default {
  components: {
    LoginDialog
  },
  data() {
    return {
      drawer: false,
      dialog: false,
      headerMenu: [
        { path: "/home", name: "主页" },
        { path: "/user", name: "个人中心" },
        { path: "/category", name: "产品分类" },
        { path: "/products", name: "产品中心" },
        { path: "/admin", name: "后台" },
        { path: "/about", name: "关于" }
      ],
      menuItem: 0,
      menuItems: [
        { text: "My Files", icon: "mdi-folder" },
        { text: "Shared with me", icon: "mdi-account-multiple" },
        { text: "Starred", icon: "mdi-star" },
        { text: "Recent", icon: "mdi-history" },
        { text: "Offline", icon: "mdi-check-circle" },
        { text: "Uploads", icon: "mdi-upload" },
        { text: "Backups", icon: "mdi-cloud-upload" }
      ],
      cartItems: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ]
    };
  },
  methods: {},
  mounted() {
    // this.$store.dispatch("me");
  },
  computed: {
    ...mapGetters({
      userIsAuthenticated: "auth/userIsAuthenticated",
      user: "auth/user"
    })
  }
};
</script>

<style scoped>
.scroll {
  overflow-y: auto;
}
</style>
