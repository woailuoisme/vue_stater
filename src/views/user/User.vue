<template>
  <v-container fluid>
    <v-row>
        <v-col cols="2" md="2">
            <UserActionList></UserActionList>
        </v-col>
        <v-col cols="9" md="9">
            <v-card>
                <v-fade-transition>
                    <router-view></router-view>
                </v-fade-transition>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import UserActionList from "../../components/user/UserActionList";

    export default {
        props: {
            source: String
        },
        components: {
            UserActionList
        }
    };
</script>

<style scoped></style>
