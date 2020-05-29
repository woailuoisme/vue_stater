// import '@mdi/font/css/materialdesignicons.css'
import Vue from "vue";
import Vuetify, {VBtn, VIcon, VSnackbar} from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.min.css";
import colors from "vuetify/lib/util/colors";

import zhHans from "vuetify/lib/locale/zh-Hans";
import en from "vuetify/lib/locale/en";

Vue.use(Vuetify, {
    components: {
        VSnackbar,
        VBtn,
        VIcon
    }
});

export default new Vuetify({
    icons: {
        iconfont: "mdi"
    },
    lang: {
        locales: {zhHans, en},
        current: "zhHans"
    },
    theme: {
        light: true,
        themes: {
            light: {
                primary: "#1976D2",
                accent: "#e91e63",
                secondary: "#30b1dc",
                success: "#4CAF50",
                info: "#2196F3",
                warning: "#FB8C00",
                error: "#FF5252"
            },
            dark: {
                primary: colors.blue.darken2,
                accent: colors.grey.darken3,
                secondary: colors.amber.darken3,
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3
            }
        }
    }
});
