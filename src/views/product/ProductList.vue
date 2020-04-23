<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3"></v-col>

            <v-col cols="12" md="8">
                <v-container fluid>
                    <v-row>
                        <v-col :key="product.id" cols="3" v-for="(product,index) in getProducts">
                            <ProductCart :add-to-cart="addToCart" :product="product"></ProductCart>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ProductCart from "../../components/product/ProductCart";
    import {mapGetters, mapState, mapActions} from 'vuex'

    export default {
        name: "ProductList",
        components: {
            ProductCart
        },
        created() {
            this.loadProducts();
        },
        methods: {
            ...mapActions({
                loadProducts: 'product/loadProducts',
                addToCart: 'product/addToCart'
            }),
        },
        computed: {
            ...mapGetters({
                getProducts: 'product/getProducts'
            })
        }
    };
</script>

<style scoped></style>
