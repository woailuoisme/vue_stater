<template>
    <v-card>
        <v-card-title>
            <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-form v-model="valid">
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select
                                    :items="sku_names"
                                    label="sku属性"
                                    v-model="editedItem.name"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-autocomplete
                                    :items="sku_values"
                                    label="sku值"
                                    multiple
                                    v-model="editedItem.value"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" md="2">
                            <v-btn color="primary"></v-btn>
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
                valid: false
            };
        }
    };
</script>

<style scoped></style>
