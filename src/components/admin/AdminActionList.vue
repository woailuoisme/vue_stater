<template>
    <v-card>
        <v-list>
            <v-subheader>REPORTS</v-subheader>
            <v-list-item-group color="primary" v-model="item">
                <v-list-item
                        :key="i"
                        :to="{ path: item.url }"
                        v-for="(item, i) in items"
                >
                    <v-list-item-icon class="mr-4">
                        <v-icon small v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                item: 1,
                items: [
                    {text: "仪表盘", icon: "mdi-clock", url: "/admin/dashboard"},
                    {text: "类别", icon: "mdi-clock", url: "/admin/category"},
                    {text: "产品", icon: "mdi-account", url: "/admin/product"},
                    {text: "产品SKU", icon: "mdi-flag", url: "/admin/product_sku"},
                    {text: "订单", icon: "mdi-flag", url: "/admin/order"}
                ]
            };
        },
        methods: {
            actionRoute(url) {
                this.$router.push(url);
            }
        }
    };
</script>

<style scoped></style>
