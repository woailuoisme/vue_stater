<template>
    <v-container>
        <v-card class="mb-4">
            <OrderBreadcrumbs></OrderBreadcrumbs>
        </v-card>
        <v-card>
            <v-card-text>
                <v-row>
                    <h4>Order</h4>
                </v-row>
            </v-card-text>
        </v-card>

    </v-container>
</template>

<script>
    import OrderBreadcrumbs from "../../components/breadcrumbs/OrderBreadcrumbs";
    export default {
        components:{
            OrderBreadcrumbs
        },
        name: "Order"
    }
</script>

<style scoped>

</style>
