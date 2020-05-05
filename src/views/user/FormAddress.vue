<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col cols="12" md="4">
                    <v-select label="省"></v-select>
                </v-col>
                <v-col cols="12" md="4">
                    <v-select label="市"></v-select>
                </v-col>
                <v-col cols="12" md="4">
                    <v-select label="县/镇"></v-select>
                </v-col>
                <v-col cols="12" md="12">
                    <v-textarea label="详细地址">
                    </v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols=4 offset-md="4">
                    <v-btn block>新增</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "FormAddress"
    }
</script>

<style scoped>

</style>
