<template>
    <v-container>
        <v-card>
            <v-card-title>
                SKU_CRUD
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog
                        @click:outside="close"
                        @input="() => true"
                        max-width="700px"
                        v-model="dialog"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn class="mb-2" color="primary" dark v-on="on">新建</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            {{ formTitle}}
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-form v-model="valid">
                                    <v-row>
                                        <v-col :key="index" cols="12" md="6" v-for="(item,index) in sku_items">
                                            <v-autocomplete
                                                    :items="item.values"
                                                    :label="item.name"
                                                    multiple
                                                    v-model="sku_items[item.key]"
                                            ></v-autocomplete>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field label="库存" v-model="editedItem.stock"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field label="库存" v-model="editedItem.price"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="close" color="error" text>取消</v-btn>
                            <v-btn @click="save" color="success" text>保存</v-btn>
                        </v-card-actions>
                    </v-card>

                </v-dialog>
            </v-card-title>
            <v-card-text>
                <v-divider class="my-3"></v-divider>
                <v-row>
                    <v-col cols="12">
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-center">SKU字符串</th>
                                    <th class="text-center">库存</th>
                                    <th class="text-center">价格</th>
                                    <th class="text-center">操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr :key="item.name + index" v-for="(item, index) in skus">
                                    <td class="text-center">
                                        {{ item.sku }}
                                    </td>
                                    <td class="text-center">
                                        {{ item.stock }}
                                    </td>
                                    <td class="text-center">
                                        {{ item.price }}
                                    </td>
                                    <td class="text-center">
                                        <v-icon @click.stop="editItem(item)" color="success"
                                        >mdi-pencil
                                        </v-icon>
                                        <v-icon @click.stop="deleteItem(item)" color="error"
                                        >mdi-delete
                                        </v-icon>
                                    </td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

    </v-container>
</template>

<script>
    export default {
        created() {
            this.init();
        },
        computed: {
            sku_names() {
                return this.sku_items.map(s => s.name);
            },
            sku_values() {
                // return this.sku_items[this.index].values
                return this.editedItem && this.editedItem.name
                    ? this.attr_all.find(s => s.name === this.editedItem.name).values
                    : [];
            },
            sku_attribute_key() {
                return this.sku_items.map(a => a.key);
            },
            sku_model_json() {
                return JSON.stringify(this.sku_model);
            },
            formTitle() {
                return this.editedIndex === -1 ? "新建" : "更新";
            }
        },
        methods: {
            init() {
                let obj = {};
                for (let key of this.sku_attribute_key) {
                    obj[key] = null;
                }
                Object.assign(this.sku_model, obj);

                this.sku_items = [
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
                ];
                this.sku = [
                    {
                        product_id: 2,
                        sku:
                            '[{"name":"屏幕尺寸","value":5},{"name":"内存大小","value":128},{"name":"颜色","value":"白色"}]',
                        stock: 22,
                        price: 998.0
                    },
                    {
                        product_id: 2,
                        sku:
                            '[{"name":"屏幕尺寸","value":5},{"name":"内存大小","value":256},{"name":"颜色","value":"黑色"}]',
                        stock: 22,
                        price: 2000
                    },
                    {
                        product_id: 3,
                        sku:
                            '[{"name":"屏幕尺寸","value":6},{"name":"内存大小","value":128},{"name":"颜色","value":"黑色"}]',
                        stock: 22,
                        price: 1088.0
                    },
                    {
                        product_id: 3,
                        sku:
                            '[{"name":"屏幕尺寸","value":6},{"name":"内存大小","value":256},{"name":"颜色","value":"黑色"}]',
                        stock: 22,
                        price: 2000.0
                    },
                    {
                        product_id: 2,
                        sku:
                            '[{"name":"屏幕尺寸","value":7},{"name":"内存大小","value":128},{"name":"颜色","value":"黑色"}]',
                        stock: 22,
                        price: 1299.0
                    },
                    {
                        product_id: 2,
                        sku:
                            '[{"key":"屏幕尺寸","value":5},{"key":"内存大小","value":128},{"key":"颜色","value":"黑色"}]',
                        stock: 22,
                        price: 998.0
                    }
                ];
            },
            editItem(item) {
                this.editedIndex = this.skus.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true;
            },

            deleteItem(item) {
                const index = this.skus.indexOf(item);
                confirm("Are you sure you want to delete this item?") &&
                this.skus.splice(index, 1);
            },

            close() {
                this.dialog = false;
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1;
                });
            },

            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.skus[this.editedIndex], this.editedItem);
                } else {
                    this.skus.push(this.editedItem);
                }
                this.close();
            }
        },
        watch: {
            sku_model: {
                handler(val) {
                    this.editedItem.sku = this.sku_model
                        ? JSON.stringify(this.sku_model)
                        : null;
                },
                deep: true
            },
            dialog(val) {
                val || this.close();
            }
        },
        data() {
            return {
                valid: false,
                sku_items: [],
                sku_model: {},
                skus: [],
                dialog: false,
                editedIndex: -1,
                editedItem: {
                    sku: "",
                    stock: "",
                    price: []
                },
                defaultItem: {
                    sku: "",
                    stock: "",
                    price: []
                }
            };
        }
    };
</script>

<style scoped></style>
