<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-tabs centered color="primary" v-model="productTab">
                                        <v-tab>基本信息</v-tab>
                                        <v-tab>产品规格</v-tab>
                                    </v-tabs>
                                    <v-tabs-items v-model="productTab">
                                        <v-tab-item>
                                            <FormProductNew></FormProductNew>
                                        </v-tab-item>
                                        <v-tab-item>
                                            <FormProductSKU></FormProductSKU>
                                        </v-tab-item>
                                    </v-tabs-items>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import FormProductNew from "./FormProductNew";
    import FormProductSKU from "./FormProductSKU";

    export default {
        name: "ProductNew",
        components: {
            FormProductNew,
            FormProductSKU
        },
        data() {
            return {
                productTab: null,
            };
        },

    };
</script>

<style scoped></style>
