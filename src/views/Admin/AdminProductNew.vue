<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-tabs centered color="primary" v-model="productTab">
                                <v-tab>基本信息</v-tab>
                                <v-tab>产品规格</v-tab>
                                <v-tab>产品SKU</v-tab>
                            </v-tabs>
                            <v-tabs-items v-model="productTab">
                                <v-tab-item>
                                    <ProductNew></ProductNew>
                                </v-tab-item>
                                <v-tab-item>
                                    <ProductAttribute></ProductAttribute>
                                </v-tab-item>
                                <v-tab-item>
                                    <ProductAttribute></ProductAttribute>
                                </v-tab-item>
                            </v-tabs-items>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ProductNew from "./ProductNew";
    import ProductAttribute from "./ProductAttribute";
    import ProductSKU from "./ProductSKU";

    export default {
        components: {
            ProductNew,
            ProductAttribute,
            ProductSKU
        },
        data() {
            return {
                productTab: 0
            };
        }
    };
</script>

<style scoped></style>
