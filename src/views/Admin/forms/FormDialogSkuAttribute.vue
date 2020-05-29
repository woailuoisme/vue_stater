<template>
    <v-card>
        <v-card-title>
            <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-form v-model="valid">
                    <v-row>
                        <v-col cols="12" md="4" sm="6">
                            <v-text-field
                                    label="SKU_KEY"
                                    v-model="editedItem.key"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="6">
                            <v-text-field
                                    label="SKU_NAME"
                                    v-model="editedItem.name"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" sm="6">
                            <v-combobox
                                    hide-selected
                                    label="SKU_VALUES"
                                    multiple
                                    persistent-hint
                                    small-chips
                                    v-model="editedItem.values"
                            >
                                <template v-slot:no-data>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                按下 <kbd>enter</kbd> 创建新的value
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                            </v-combobox>
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
</template>

<script>
    export default {
        name: "FormSkuAttribute",
        props: {
            editedItem: {
                name: "",
                key: "",
                values: []
            },
            title: "",
            close: {
                type: Function
            },
            save: {
                type: Function
            }
        },
        data() {
            return {
                valid: false,
            };
        }
    };
</script>

<style scoped></style>
