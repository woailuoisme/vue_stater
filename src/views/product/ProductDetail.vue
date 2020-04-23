<template>
    <v-container fluid>
        <v-card>
            <v-row class="pa-3">
                <v-col cols="12" md="4">
                    <v-card>
                        <v-carousel
                                cycle
                                height="400"
                                hide-delimiter-background
                                interval="2000"
                                progress="true"
                                show-arrows-on-hover
                        >
                            <v-carousel-item :key="i" v-for="(slide, i) in slides">
                                <v-sheet :color="colors[i]" height="100%">
                                    <v-row align="center" class="fill-height" justify="center">
                                        <div class="display-3">{{ slide }} Slide</div>
                                    </v-row>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card>
                        <v-card-text>
                            <div class="headline">
                                {{ product.name }}
                            </div>
                            <div class="body-1">
                                {{ product.description }}
                            </div>
                            <div class="body-1">
                                {{ product.quantity }}
                            </div>
                            <div class="body-1">
                                {{ product.price }}
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="pa-3">
                <v-col cols="12" md="12">
                    <v-card>
                        <v-tabs background-color="white" color="deep-purple accent-4">
                            <v-tab>产品介绍</v-tab>
                            <v-tab>用户评论</v-tab>
                            <v-tab>Abstract</v-tab>

                            <v-tab-item :key="n" v-for="n in 3">
                                <v-container fluid>
                                    <v-row>
                                        <v-col :key="i" cols="12" md="4" v-for="i in 6">
                                            <v-img
                                                    :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                                                    :src="`https://picsum.photos/500/300?image=${i * n * 5 +10}`"
                                                    aspect-ratio="1"
                                            ></v-img>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-tab-item>
                        </v-tabs>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "ProductDetail",
        data() {
            return {
                colors: [
                    "indigo",
                    "warning",
                    "pink darken-2",
                    "red lighten-1",
                    "deep-purple accent-4"
                ],
                slides: ["First", "Second", "Third", "Fourth", "Fifth"],
                product: {
                    id: 4,
                    name: "apple phone",
                    description:
                        "Deserunt maiores accusantium omnis iste consequatur consequatur voluptatem inventore. Sed repellendus magni esse quia. Consequuntur suscipit nihil consequatur et distinctio rem.\n\nMolestias et modi eum qui. Occaecati illo aliquid inventore commodi temporibus veniam molestias. Eum quidem eius magnam voluptatibus. Iure vero nemo eum consequatur pariatur.",
                    content:
                        "Sit veniam asperiores rerum voluptas ratione et esse. Autem culpa quia voluptatum adipisci eaque incidunt beatae impedit. Debitis placeat quo ea eaque soluta error. Maiores quia quae est sequi vel id rem.\n\nQuaerat iste consequatur repellat sed tempore qui. Excepturi velit ut quia quidem. Laudantium eos sit cumque cupiditate temporibus eos.\n\nQui autem laboriosam excepturi. Harum consequatur id consectetur et. Et alias sed ut dolores hic.\n\nEaque qui assumenda recusandae molestiae libero consequatur. Deserunt tempora ratione alias doloribus laudantium praesentium. Ut quae earum dolores omnis. Sed autem quia eum deserunt pariatur id libero. Et recusandae nostrum quasi.\n\nAutem impedit nobis accusamus qui et. Accusantium quae saepe ut incidunt qui ex amet. Ipsum quo repellat molestiae. Odio quam aliquam id sunt.",
                    imageURL: "https://lorempixel.com/640/480/?29371",
                    price: "320.29",
                    created_at: "2020-02-26 07:01:51",
                    updated_at: "2020-04-03 02:03:43",
                    updated_at_human: "2周前"
                }
            };
        }
    };
</script>

<style scoped></style>
