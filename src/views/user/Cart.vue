<template>
    <v-container>
        <v-card class="mb-4">
            <CartBreadcrumbs></CartBreadcrumbs>
        </v-card>
        <v-card>
            <v-card-text>
                <v-row >
                    <h4>Cart</h4>
                </v-row>
            </v-card-text>
        </v-card>

    </v-container>
</template>

<script>
    import CartBreadcrumbs from "../../components/breadcrumbs/CartBreadcrumbs";
    export default {
        components:{
            CartBreadcrumbs
        },
        name: "Cart"
    }
</script>

<style scoped>

</style>
