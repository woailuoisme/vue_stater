<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field label="昵称"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field label="真实姓名"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field label="E-mail"></v-text-field>
                </v-col>
            </v-row>
        </v-form>
    </v-container>

</template>

<script>
    export default {
        name: "FormProfile"
    }
</script>

<style scoped>

</style>
