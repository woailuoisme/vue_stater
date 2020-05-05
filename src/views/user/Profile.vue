<template>
  <v-container>
    <v-card class="mb-4">
      <ProfileBreadcrumbs></ProfileBreadcrumbs>
    </v-card>
    <v-card>
      <v-card-text>
          <v-row>
              <v-col md="3">
                  <v-img :src="user.avatar_url" aspect-ratio="2/3"></v-img>
                  <v-file-input label="avatar" v-model="avatar"></v-file-input>
              </v-col>
              <v-col cols="12" md="9">
                  <div>
                      <span class="title">昵称：</span>
                      <span class="subtitle-1">{{ user.name }}</span>
                  </div>
                  <div>
                      <span class="title">真实姓名：</span>
                      <span class="subtitle-1">{{ user.real_name }}</span>
                  </div>
                  <div>
                      <span class="title">E-mail：</span>
                      <span class="subtitle-1">{{ user.email }}</span>
                  </div>
              </v-col>
          </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
    import ProfileBreadcrumbs from "../../components/breadcrumbs/ProfileBreadcrumbs";

    export default {
        components: {
            ProfileBreadcrumbs
        },
        name: "Profile",
        data() {
            return {
                avatar: null,
                user: {
                    name: "james Lorbon",
                    real_name: " ailugoa",
                    email: "jhbwyl@126.com",
                    avatar_url: "https://robohash.org/b8fa61e3cea6446f71c7b30a631dd41a?set=set4&bgset=&size=400x400"
                }
            };
        },
        methods: {
            remove(id) {
                this.addresses.splice(this.addresses.findIndex(a => a.id === id), 1);
            }
        }
    };
</script>

<style scoped></style>
