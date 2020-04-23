<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        Toast
                    </v-card-title>
                    <v-card-text>
                        <v-btn @click="toastError" color="error" text>error</v-btn>
                        <v-btn @click-="toastInfo" color="info" text>info</v-btn>
                        <v-btn @click-="toastWarn" color="warning" text>warning</v-btn>
                        <v-btn @click="toastSuccess" color="success" text>success</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-btn @click="confirmDelete" color="error" outlined
                >
                    <v-icon left>mdi-delete</v-icon>
                    删除
                </v-btn
                >
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Test",
        methods: {
            toastError() {
                this.$toast.error("this is error");
            },
            toastInfo() {
                this.$toast.info("this is info");
            },
            toastSuccess() {
                this.$toast.success("this is success");
            },
            toastWarn() {
                // this.$toast.warning('this is warn')
                this.$toast("this is warning", {
                    color: "warning",
                    icon: "warn"
                });
            },
            confirmDelete() {
                this.$confirm("'Please do not do this.<br>Do you really want to exit?'", {
                    title: '警告'
                }).then(res => {
                    if (res) confirm('Do you really want to exit')
                });
            }
        }
    };
</script>

<style scoped></style>
