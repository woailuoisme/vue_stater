<template>
    <v-container>
        <v-form ref="form" v-model="valid">
            <v-text-field
                    :counter="10"
                    label="Name"
                    required
                    v-model="title"
            ></v-text-field>
            <v-textarea label="Description" v-model="description"></v-textarea>
            <v-textarea label="Content" v-model="content"></v-textarea>
            <v-select
                    :items="getCategoryNames"
                    chips
                    label="Category"
                    required
                    v-model="category"
            ></v-select>
            <v-switch label="IsSale" required v-model="is_sale"></v-switch>
            <v-file-input
                    counter
                    label="Image"
                    show-size
                    v-model="image"
            ></v-file-input>
            <v-text-field label="price" required v-model="price"></v-text-field>
            <v-btn @click="reset" class="mr-4" color="info"></v-btn>
        </v-form>
    </v-container>
</template>

<script>
    import axios from "axios";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "AdminProductNew",
        data() {
            return {
                valid: false,
                title: "",
                content: "",
                category: "",
                categoryItems: {Foo: 1, Bar: 2, Fizz: 3, Buzz: 4},
                description: "",
                image: null,
                is_sale: "",
                price: ""
            };
        },
        mounted() {
            this.loadCategories();
        },
        computed: {
            ...mapGetters(['getCategoryNames', 'getCategoryId'])
        },
        methods: {
            ...mapActions(['loadCategories']),
            getCategoryKey(key) {
                return this.categoryItems[key];
            },
            reset() {
            }
        }
    };
</script>

<style scoped></style>
