<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" md="2">
                <v-card class="pa-1">
                    <v-form>
                        <v-select label="类别"></v-select>
                        <v-select label="价格区间"></v-select>
                        <v-select label="种类"></v-select>
                    </v-form>
                    <v-btn block>确定</v-btn>
                </v-card>
            </v-col>

            <v-col cols="12" md="10">
                <v-card>
                    <v-card-text>
                        <v-row align="center" class="px-4" justify="start">
                            <v-btn-toggle mandatory v-model="product_type">
                                <v-btn active-class="error">全部</v-btn>
                                <v-btn active-class="error">最新</v-btn>
                                <v-btn active-class="error">推荐</v-btn>
                                <v-btn active-class="error">热门</v-btn>
                            </v-btn-toggle>
                            <v-spacer></v-spacer>
                            <span>Model: {{ product_type }}</span>
                            <span>Model: {{ list_type }}</span>
                            <v-btn-toggle mandatory v-model="list_type">
                                <v-btn active-class="error">
                                    <v-icon>mdi-format-align-center</v-icon>
                                </v-btn>
                                <v-btn active-class="error">
                                    <v-icon>mdi-view-grid</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                        </v-row>
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" md="4">
                                <ProductCart2></ProductCart2>
                            </v-col>
                            <v-col cols="12" md="4">
                                <ProductCart2></ProductCart2>
                            </v-col>
                            <v-col cols="12" md="4">
                                <ProductCart2></ProductCart2>
                            </v-col>
                            <v-col cols="12" md="4">
                                <ProductCart2></ProductCart2>
                            </v-col>
                        </v-row>
                        <div class="text-center">
                            <v-pagination
                                    :length="15"
                                    :total-visible="7"
                                    v-model="page"
                            ></v-pagination>
                        </div>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ProductCart from "../../components/product/ProductCart";
    import ProductCart2 from "./ProductCart2";

    export default {
        name: "ProductList",
        components: {
            ProductCart2
        },
        data() {
            return {
                page: 1,
                product_type: null,
                list_type: null
            };
        }
    };
</script>

<style scoped></style>
