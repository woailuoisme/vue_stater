<template>
    <v-card>
        <v-container>
            <v-form>
                <v-row>
                    <v-col cols="12">
                        <v-switch
                                :value="isActiveSKU"
                                label="是否启用SKU"
                                v-model="isActiveSKU"
                        >
                        </v-switch>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">新建</v-btn>
                    </v-col>
                </v-row>
            </v-form>

            <v-row align="end">
                <v-col cols="12" md="4">
                    <v-select
                            :items="sku_names"
                            label="sku属性"
                            v-model="attributeModel"
                    ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <v-autocomplete
                            :items="sku_values"
                            label="sku值"
                            multiple
                            v-model="valuesModel"
                    ></v-autocomplete>
                </v-col>
                <v-col cols="12" md="2">
                    <v-btn color="primary">更新</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-container>
                    <v-row>
                        <v-col md="3">
                            <v-text-field label="默认库存" value="10"></v-text-field>
                        </v-col>
                        <v-col md="3">
                            <v-text-field label="默认价格" value="2000"></v-text-field>
                        </v-col>
                        <v-col md="3">
                            <v-btn color="info">生成</v-btn>
                        </v-col>
                        <v-col md="3">
                            <v-btn color="error">重新生成</v-btn>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="3">
                            <v-text-field label="sku_key" readonly></v-text-field>
                        </v-col>
                        <v-col md="3">
                            <v-text-field label="库存"></v-text-field>
                        </v-col>
                        <v-col md="3">
                            <v-text-field label="价格"></v-text-field>
                        </v-col>
                        <v-col md="3">
                            <v-btn color="info">更新</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "ProductSKUForm",
        updated() {
            console.log(this.attributeModel, this.valuesModel)
        },
        mounted() {
            console.log(this.attributeModel, this.valuesModel)
        },
        computed: {
            sku_names() {
                return this.sku_items.map(s => s.name)
            },
            sku_values() {
                // return this.sku_items[this.index].values
                return this.attributeModel ? this.sku_items.find((s => s.name === this.attributeModel)).values : [];
            }
        },
        methods: {
            findByName(name) {
                return this.sku_items.find((s => s.name === name)).values;
            }
        },
        data() {
            return {
                isActiveSKU: false,
                index: 0,
                attributeModel: '',
                valuesModel: [],

                sku_items: [
                    {
                        key: "size",
                        name: "屏幕尺寸",
                        values: [5.0, 6.1, 5.5]
                    },
                    {
                        key: "memory",
                        name: "内存大小",
                        values: [128, 256]
                    },
                    {
                        key: "color",
                        name: "颜色",
                        values: ["黑色", "白色"]
                    }
                ],
                sku_collection: [
                    {
                        sku_string: '',

                    }
                ],

                keyItem: null,
                keyItems: ["屏幕尺寸", "内存大小", "颜色"],
                valueItem: null,
                valuesItems: [5.6, 7.8, 6.0]
            };
        }
    };
</script>

<style scoped></style>
