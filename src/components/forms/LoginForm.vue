<template>
  <v-card class="elevation-12">
    <v-card-title class="primary  center text-center"
    >用户登录
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form v-model="valid">
          <v-row>
            <v-col sm="12">
              <v-text-field
                      :rules="[required('email'), emailFormat()]"
                      label="邮箱"
                      name="用户名/邮箱"
                      prepend-icon="mdi-account"
                      type="email"
                      v-model="userInfo.email"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col sm="12">
              <v-text-field
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :counter="true"
                      :rules="[required('password'), minLength('password', 8)]"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append="showPassword = !showPassword"
                      label="密码:"
                      prepend-icon="mdi-lock"
                      v-model="userInfo.password"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-btn :disabled="!valid" @click="submitForm(userInfo)" block color="primary">登 录
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  import validators from "../../utils/validators";

  export default {
    data: () => ({
      valid: false,
      showPassword: false,
      userInfo: {
        email: null,
        password: null
      },
      ...validators
    }),
    methods: {
      submitForm(userInfo) {
        this.$emit("submit", userInfo);
      }
    }
  };
</script>
