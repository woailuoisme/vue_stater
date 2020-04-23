<template>
    <v-container>
        <v-card>
            <v-card-text>
                <v-data-table
                        :expanded.sync="expanded"
                        :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'mdi-arrow-collapse-left',
            lastIcon: 'mdi-arrow-collapse-right',
            prevIcon: 'mdi-minus',
            nextIcon: 'mdi-plus'
          }"
                        :headers="headers"
                        :items="desserts"
                        :single-expand="singleExpand"
                        :single-select="singleSelect"
                        class="elevation-1"
                        item-key="name"
                        show-expand
                        show-select
                        sort-by="calories"
                        v-model="selected"
                >
                    <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length">More info about {{ item.name }}</td>
                    </template>
                    <template v-slot:top>
                        <v-toolbar color="white" flat>
                            <v-toolbar-title class="headline">Category CRUD</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog max-width="500px" v-model="dialog">
                                <template v-slot:activator="{ on }">
                                    <v-btn class="mb-2" color="primary" dark v-on="on">New Proudct</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" md="4" sm="6">
                                                    <v-text-field
                                                            label="Dessert name"
                                                            v-model="editedItem.name"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4" sm="6">
                                                    <v-text-field
                                                            label="Calories"
                                                            v-model="editedItem.calories"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4" sm="6">
                                                    <v-text-field
                                                            label="Fat (g)"
                                                            v-model="editedItem.fat"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4" sm="6">
                                                    <v-text-field
                                                            label="Carbs (g)"
                                                            v-model="editedItem.carbs"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4" sm="6">
                                                    <v-text-field
                                                            label="Protein (g)"
                                                            v-model="editedItem.protein"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn @click="close" color="blue darken-1" text
                                        >Cancel
                                        </v-btn>
                                        <v-btn @click="save" color="blue darken-1" text>Save</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon @click="editItem(item)" class="mr-2" small>
                            mdi-pencil
                        </v-icon>
                        <v-icon @click="deleteItem(item)" small>
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:no-data>
                        <v-btn @click="initialize" color="primary">Reset</v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            selected: [],
            expanded: [],
            singleSelect: false,
            singleExpand: false,
            dialog: false,
            headers: [
                {
                    text: "Dessert (100g serving)",
                    align: "center",
                    sortable: false,
                    value: "name"
                },
                {text: "Calories", value: "calories", align: "center"},
                {text: "Fat (g)", value: "fat", align: "center"},
                {text: "Carbs (g)", value: "carbs", align: "center"},
                {text: "Protein (g)", value: "protein", align: "center"},
                {text: "Actions", value: "actions", align: "center", sortable: false}
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: "",
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            },
            defaultItem: {
                name: "",
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            }
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? "New Item" : "Edit Item";
            }
        },

        watch: {
            dialog(val) {
                val || this.close();
            }
        },

        created() {
            this.initialize();
        },

        methods: {
            initialize() {
                this.desserts = [
                    {
                        name: "Frozen Yogurt",
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0
                    },
                    {
                        name: "Ice cream sandwich",
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3
                    },
                    {
                        name: "Eclair",
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0
                    },
                    {
                        name: "Cupcake",
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3
                    },
                    {
                        name: "Gingerbread",
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9
                    },
                    {
                        name: "Jelly bean",
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0
                    },
                    {
                        name: "Lollipop",
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0
                    },
                    {
                        name: "Honeycomb",
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5
                    },
                    {
                        name: "Donut",
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9
                    },
                    {
                        name: "KitKat",
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7
                    }
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
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1;
                }, 300);
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
