<template>
    <v-card
            :to="{ name: 'product', params: { id: product.id } }"
            class="ma-2"
            hover
    >
        <v-responsive :aspect-ratio="2 / 3">
            <v-img :src="product.thumbnail" class="white--text align-end">
                <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
        </v-responsive>
        <v-card-subtitle class="pb-0">{{ product.created_at }}</v-card-subtitle>
        <v-card-text class="text--primary">
            {{ product.description }}
        </v-card-text>
        <v-card-actions>
            <v-btn
                    @click="addToCart(product.id)"
                    @mousedown.stop
                    block
                    class="mr-2"
                    color="green lighten-2"
                    small
            >
                <v-icon left>mdi-shopping</v-icon>
                加入购物车
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "ProductCart",
        props: {
            product: {
                type: Object,
                default: {}
            },
            addToCart: {
                type: Function
            }
        }
    };
</script>

<style scoped></style>
