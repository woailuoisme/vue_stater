<template>
    <v-container>
        <v-card class="mb-4">
            <AddressBreadcrumbs></AddressBreadcrumbs>
        </v-card>
        <v-card>
            <v-card-text>
                <v-row >
                    <h4 >Address</h4>
                </v-row>
            </v-card-text>
        </v-card>

    </v-container>
</template>

<script>
    import AddressBreadcrumbs from "../../components/breadcrumbs/AddressBreadcrumbs";
    export default {
        components:{
            AddressBreadcrumbs
        },
        name: "Address"
    }
</script>

<style scoped>

</style>
