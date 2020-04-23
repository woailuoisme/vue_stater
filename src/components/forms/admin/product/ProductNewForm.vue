<template>
    <v-form ref="form" v-model="valid">
        <v-text-field
                :counter="10"
                label="Name"
                required
                v-model="name"
        ></v-text-field>
        <v-text-field label="E-mail" required v-model="email"></v-text-field>
        <v-select :items="items" label="Item" required v-model="select"></v-select>

        <v-btn @click="reset" class="mr-4" color="error">
            Reset Form
        </v-btn>
    </v-form>
</template>

<script>
    export default {
        data() {
            return {
                valid: false,
                name: "",
                select: null,
                email: null,
                items: [],
                selectEmail: []
            };
        },
        methods: {
            reset() {

            }
        }
    };
</script>

<style scoped></style>
