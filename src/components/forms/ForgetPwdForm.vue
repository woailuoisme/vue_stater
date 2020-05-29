<template>
    <v-card>
        <v-card-title class="primary dark center text-center"
        >用户注册
        </v-card-title>
        <v-card-text>
            <v-container>
                <form v-model="valid">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                    :rules="[required('email'), emailFormat()]"
                                    label="邮箱"
                                    name="用户名/邮箱"
                                    prepend-icon="mdi-account"
                                    type="email"
                                    v-model="registerInfo.email"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-btn :disabled="!valid"
                                   @click="submitForm"
                                   block
                                   color="primary"
                                   type="submit">
                                发送重置密码至邮件
                                <span class="custom-loader" slot="loader">
                        <v-icon light>cached</v-icon>
                      </span>
                            </v-btn>
                        </v-col>
                    </v-row>
                </form>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    import validators from "../../utils/validators";

    export default {
        data() {
            return {
                valid: false,
                showPassword: false,
                registerInfo: {
                    email: "",
                    password: "",
                    confirmPassword: ""
                },
                ...validators
            };
        },
        methods: {
            submitForm() {
                this.$emit('submitForm', this.registerInfo)
            }

        }

    }
</script>

<style scoped>

</style>
