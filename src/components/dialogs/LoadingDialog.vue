<template>
    <v-dialog full-width fullscreen v-model="loading">
        <v-container fill-height fluid style="background-color: rgba(255, 255, 255, 0.5);">
            <v-layout align-center justify-center>
                <v-progress-circular
                        color="primary"
                        indeterminate>
                </v-progress-circular>
            </v-layout>
        </v-container>
    </v-dialog>
</template>

<script>
    export default {
        name: "LoadingDialog",
        data() {
            return {
                loading: false
            }
        }
    }
</script>

<style scoped>

</style>
