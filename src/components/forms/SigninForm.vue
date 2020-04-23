<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
            <v-card-title class="primary dark center text-center">用户登录</v-card-title>
          <v-card-text>
            <v-container>
                <v-form>
                <v-row>
                  <v-col sm="12">
                    <v-text-field
                            :rules="[required('email'), emailFormat()]"
                            label="邮箱"
                            name="用户名/邮箱"
                            type="email"
                            v-model="userInfo.email"
                    ></v-text-field>
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
                            label="密码:"
                            v-model="userInfo.password"
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                      <v-btn :disabled="valid" @click="submitForm(userInfo)" block>登 录</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import validators from "../../utils/validators";
export default {
  props: {
      source: String,
      submitForm: Function,
  },
  data: () => ({
      valid: false,
      showPassword: false,
      loading: false,
      userInfo: {
          email: null,
          password: null
      },
      ...validators
  }),
    methods: {
        // ...mapActions(['signIn']),
        userSignIn() {
            console.log(this.formData);
            console.log({
                email: this.formData.email,
                password: this.formData.password
            });
            this.$store.dispatch("signIn", {
                email: this.formData.email,
                password: this.formData.password
            });
    }
  }
};
</script>
