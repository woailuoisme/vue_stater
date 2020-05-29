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

                <v-dialog @click:outside="close" @input="()=>true" max-width="700px" v-model="dialog">
                    <template v-slot:activator="{ on }">
                        <v-btn class="mb-2" color="primary" dark v-on="on">新建</v-btn>
                    </template>
                    <FormDialogSkuAttribute
                            :close="close"
                            :edited-item="editedItem"
                            :save="save"
                            :title="formTitle"
                    ></FormDialogSkuAttribute>
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
                                        v-for="(item, index) in desserts"
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
    import FormDialogSkuAttribute from "./forms/FormDialogSkuAttribute";

    export default {
        components: {
            CartBreadcrumbs,
            FormDialogSkuAttribute
        },
        created() {
            this.initialize();
        },
        watch: {
            dialog(val) {
                val || this.close();
            }
        },
        computed: {
            formTitle() {
                return this.editedIndex === -1 ? "新建" : "更新";
            }
        },
        data() {
            return {
                valid: false,
                desserts: [],
                dialog: false,
                editedIndex: -1,
                editedItem: {
                    name: "",
                    key: "",
                    values: []
                },
                defaultItem: {
                    name: "",
                    key: "",
                    values: []
                }
            };
        },

        methods: {
            initialize() {
                this.desserts = [
                    {name: "屏幕尺寸", key: "size", values: [5, 6, 7]},
                    {name: "颜色", key: "color", values: ["白色", "黑色"]},
                    {name: "内存大小", key: "memory", values: [128, 256]}
                ];
            },
            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true;
            },

            deleteItem(item) {
                const index = this.desserts.indexOf(item);
                confirm("Are you sure you want to delete this item?") &&
                this.desserts.splice(index, 1);
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
                    Object.assign(this.desserts[this.editedIndex], this.editedItem);
                } else {
                    this.desserts.push(this.editedItem);
                }
                this.close();
            }
        }
    };
</script>

<style scoped></style>
