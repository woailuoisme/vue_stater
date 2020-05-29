<template>
    <v-container>
        <v-card class="mb-4">
            <CartBreadcrumbs></CartBreadcrumbs>
        </v-card>
        <v-card>
            <v-card-title>
                SKU属性CRUD
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
                                        <v-col cols="12" md="4">
                                            <v-select
                                                    :items="sku_names"
                                                    v-model="editedItem.name"
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-autocomplete
                                                    :items="sku_values"
                                                    multiple
                                                    v-model="editedItem.value"
                                            ></v-autocomplete>
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
                                    <th class="text-center">sku_name</th>
                                    <th class="text-center">sku_key</th>
                                    <th class="text-center">sku_values</th>
                                    <th class="text-center">操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                        :key="item.name + index"
                                        v-for="(item, index) in attr_self"
                                >
                                    <td class="text-center">
                                        {{ item.key }}
                                    </td>
                                    <td class="text-center">
                                        {{ item.name }}
                                    </td>
                                    <td class="text-center">
                                        <v-chip
                                                :key="index"
                                                v-for="(value, index) in item.values"
                                        >{{ value }}
                                        </v-chip
                                        >
                                        <!--                      <v-autocomplete :items="item.values"></v-autocomplete>-->
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
    import CartBreadcrumbs from "../../components/breadcrumbs/CartBreadcrumbs";

    export default {
        created() {
            this.init();
        },
        components: {
            CartBreadcrumbs
        },
        computed: {
            sku_names() {
                return this.attr_all.map(s => s.name);
            },
            sku_values() {
                // return this.sku_items[this.index].values
                return this.editedItem && this.editedItem.name
                    ? this.attr_all.find(s => s.name === this.editedItem.name).values
                    : [];
            },
            formTitle() {
                return this.editedIndex === -1 ? "新建" : "更新";
            },
        },
        data() {
            return {
                valid: false,
                attr_all: [],
                attr_self: [],
                dialog: false,
                editedIndex: -1,
                editedItem: {
                    name: "",
                    key: "",
                    value: null
                },
                defaultItem: {
                    name: "",
                    key: "",
                    values: null
                }
            };
        },
        watch: {
            dialog(val) {
                val || this.close();
            }
        },


        methods: {
            init() {
                this.attr_all = [
                    {
                        key: "size",
                        name: "屏幕尺寸",
                        values: [5.0, 6.1, 5.5]
                    },
                    {
                        key: "memory",
                        name: "内存大小",
                        values: [128, 256, 512]
                    },
                    {
                        key: "color",
                        name: "颜色",
                        values: ["黑色", "白色"]
                    }
                ];
                this.attr_self = [
                    {
                        key: "size",
                        name: "屏幕尺寸",
                        values: [5.0, 5.5]
                    },
                    {
                        key: "memory",
                        name: "内存大小",
                        values: [128, 512]
                    }
                ];
            },
            editItem(item) {
                this.editedIndex = this.attr_self.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true;
            },

            deleteItem(item) {
                const index = this.attr_self.indexOf(item);
                confirm("Are you sure you want to delete this item?") &&
                this.attr_self.splice(index, 1);
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
                    Object.assign(this.attr_self[this.editedIndex], this.editedItem);
                } else {
                    this.attr_self.push(this.editedItem);
                }
                this.close();
            }
        },


    };
</script>

<style scoped></style>
