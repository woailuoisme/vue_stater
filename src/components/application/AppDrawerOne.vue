<template>
    <v-navigation-drawer
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
            v-model="drawer"
    >
        <v-list dense>

            <template v-for="item in items">
                <v-row :key="item.heading" align="center" v-if="item.heading">
                    <v-col cols="6">
                        <v-subheader v-if="item.heading">
                            {{ item.heading }}
                        </v-subheader>
                    </v-col>
                    <v-col class="text-center" cols="6">
                        <a class="body-2 black--text" href="#!">EDIT</a>
                    </v-col>
                </v-row>

                <v-list-group
                        :key="item.text"
                        :prepend-icon="item.model ? item.icon : item['icon-alt']"
                        append-icon=""
                        v-else-if="item.children"
                        v-model="item.model"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item :key="i" link v-for="(child, i) in item.children">
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ child.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>

                <v-list-item :key="item.text" link v-else>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
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
        data() {
            return {
                dialog: false,
                items: [
                    {icon: 'mdi-contacts', text: 'Contacts'},
                    {icon: 'mdi-history', text: 'Frequently contacted'},
                    {icon: 'mdi-content-copy', text: 'Duplicates'},
                    {
                        icon: 'mdi-chevron-up',
                        'icon-alt': 'mdi-chevron-down',
                        text: 'Labels',
                        model: true,
                        children: [
                            {icon: 'mdi-plus', text: 'Create label'},
                        ],
                    },
                    {
                        icon: 'mdi-chevron-up',
                        'icon-alt': 'mdi-chevron-down',
                        text: 'More',
                        model: false,
                        children: [
                            {text: 'Import'},
                            {text: 'Export'},
                            {text: 'Print'},
                            {text: 'Undo changes'},
                            {text: 'Other contacts'},
                        ],
                    },
                    {icon: 'mdi-settings', text: 'Settings'},
                    {icon: 'mdi-message', text: 'Send feedback'},
                    {icon: 'mdi-help-circle', text: 'Help'},
                    {icon: 'mdi-cellphone-link', text: 'App downloads'},
                    {icon: 'mdi-keyboard', text: 'Go to the old version'},
                ],
            }
        }
    };
</script>

<style scoped></style>
