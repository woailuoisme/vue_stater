<template>
    <v-navigation-drawer
            app
            clipped
            v-model="draw"
    >
        <v-list>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="title">John Seaside</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-menu-down</v-icon>
                </v-list-item-action>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>

        <v-list dense nav>
            <v-list-item-group color="primary" v-model="item">

                <v-list-item :key="i" :to="{path:item.url}" link v-for="(item, i) in items">
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn icon>
                            <v-icon color="grey lighten-1">mdi-information</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>

            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: {
            drawer: {
                type: Boolean,
                default: false
            }
        },
        beforeUpdate() {
            this.draw = this.drawer;
        },
        data: () => ({
            draw: false,
            item: 0,
            items: [
                {text: "dashboard", url: "/dashboard"},
                {text: "user", url: "/user"},
                {text: "admin", url: "admin"},
                {text: "product", url: "product"},
                {text: "product_new", url: "product_new"},
                {text: "product_detail", url: "product_detail"},
                {text: "meetups", url: "/meetups"},
                {text: "Meetup", url: "/meetups/:id"}
            ]
        })
    };
</script>
