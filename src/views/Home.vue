<template>
    <div>
        <v-parallax
                dark
                height="300"
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-row align="center" justify="center">
                <v-col cols="6" offset="3"></v-col>
                <v-col class="text-center" cols="6">
                    <v-text-field
                            append-icon="mdi-magnify"
                            clearable
                            label="搜索"
                            solo
                            v-model="search"
                    ></v-text-field>
                    <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
                    <h4 class="subheading">Build your application today!</h4>
                </v-col>
            </v-row>
        </v-parallax>

        <v-container>
            <v-row>
                <v-col :key="x" cols="4" v-for="x in 3">
                    <v-card :loading="loading" class="mx-auto my-12" hover max-width="374">
                        <v-img
                                height="250"
                                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>

                        <v-card-title>Cafe Badilico</v-card-title>

                        <v-card-text>
                            <v-row align="center" class="mx-0">
                                <v-rating
                                        :value="4.5"
                                        color="amber"
                                        dense
                                        half-increments
                                        readonly
                                        size="14"
                                ></v-rating>

                                <div class="grey--text ml-4">4.5 (413)</div>
                            </v-row>

                            <div class="my-4 subtitle-1">
                                $ • Italian, Cafe
                            </div>

                            <div>
                                Small plates, salads & sandwiches - an intimate setting with 12
                                indoor seats plus patio seating.
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            search: "",
            loading: false,
            selection: 1,
        };
    }, methods: {
        reserve() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
    }
};
</script>
