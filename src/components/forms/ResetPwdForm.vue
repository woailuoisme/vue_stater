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
              <v-text-field
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[required('password'), minLength('password', 8)]"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      label="密码:"
                      prepend-icon="mdi-lock"
                      v-model="registerInfo.password"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="12">
              <v-text-field
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[required('password'), minLength('password', 8)]"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      counter="true"
                      label="确认:"
                      prepend-icon="mdi-lock"
                      v-model="registerInfo.confirmPassword"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="12">
              <v-text-field
                      :rules="[required('resetCode'), minLength('resetCode', 8)]"
                      label="重置Code"
                      prepend-icon="mdi-lock"
                      type="text"
                      v-model="registerInfo.resetCode"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                      :disabled="!valid"
                      @click="submitForm"
                      block
                      color="primary"
                      type="submit"
              >
                注册
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
          confirmPassword: "",
          resetCode: ""
        },
        ...validators
      };
    },
    methods: {
      submitForm() {
        this.$emit('submitForm', this.registerInfo)
      }
    }
  };
</script>

<style scoped></style>
