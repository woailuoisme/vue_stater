<template>
    <v-btn
            @click="toTop"
            bottom
            color="primary"
            dark
            fab
            fixed
            right
            v-scroll="onScroll"
            v-show="fab"
    >
        <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: "BackToTop",
        data: () => ({
            fab: false
        }),
        methods: {
            onScroll(e) {
                if (typeof window === "undefined") return;
                const top = window.pageYOffset || e.target.scrollTop || 0;
                this.fab = top > 20;
            },
            toTop() {
                this.$vuetify.goTo(0);
            }
        }
    };
</script>

<style scoped></style>
