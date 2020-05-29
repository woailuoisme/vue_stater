<template>
    <v-container fluid>
        <v-row>
            <v-col cols="2">
                <admin-action-list></admin-action-list>
            </v-col>
            <v-col cols="10">
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
    import AdminActionList from "../../components/admin/AdminActionList";

    export default {
        props: {
            source: String
        },
        components: {
            AdminActionList
        }
    };
</script>

<style scoped></style>
