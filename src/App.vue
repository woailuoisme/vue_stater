<template>
    <v-app>
        <app-header/>
        <v-content id="main-content">
            <router-view></router-view>
        </v-content>
        <app-footer/>
    </v-app>
</template>

<script>
    import AppHeader from "@/components/application/AppHeader";
    import AppFooter from "@/components/application/AppFooter";
    import Drawer from "@/components/application/Drawer";

    export default {
        name: "App",
        components: {
            AppFooter,
            AppHeader,
        },
        data: () => ({
            //
        })
    };
</script>
