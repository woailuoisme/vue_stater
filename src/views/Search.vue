<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-text>
                        <v-text-field
                                append-icon="mdi-magnify"
                                clearable
                                label="搜索"
                                solo
                                v-model="search"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-text>
                        <v-col cols="12">
                            <div class="title text--primary">热门搜索:</div>
                            <div class="title text--success">
                                <v-chip>apple</v-chip>
                                <v-chip>ailugoa</v-chip>
                                <v-chip>china</v-chip>
                                <v-chip>Huawei</v-chip>
                                <v-chip>watch</v-chip>
                            </div>

                            <div class="title text--primary">历史纪录:</div>
                            <div class="title text--success">
                                <v-chip>apple</v-chip>
                                <v-chip>seaside</v-chip>
                                <v-chip>china</v-chip>
                                <v-chip>Huawei</v-chip>
                                <v-chip>watch</v-chip>
                            </div>
                        </v-col>
                    </v-card-text>
                    <v-card-text>
                        <div class="headline">搜索结果:</div>
                        <v-row>
                            <v-col cols="12">
                                <v-card>
                                    <v-card-text class="text-center">
                                        <v-icon>mdi-gnome</v-icon>&nbsp;&nbsp;
                                        <span>未发现任何数据</span>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-card>
                                    <v-row>
                                        <v-col :key="x" cols="4" v-for="x in 4">
                                            <v-card
                                                    :to="{ name: 'product', params: { id: product.id } }"
                                                    class="ma-2"
                                                    hover
                                            >
                                                <v-img
                                                        :aspect-ratio="16 / 9"
                                                        :src="product.imageURL"
                                                        class="primary align-end"
                                                >
                                                    <v-card-title class="flex-nowrap"
                                                    >Top 10 Australian beaches
                                                    </v-card-title
                                                    >
                                                </v-img>
                                                <v-card-subtitle class="pb-2">{{
                                                    product.created_at
                                                    }}
                                                </v-card-subtitle>
                                                <v-card-text class="pt-4" style="position: relative;">
                                                    <v-btn
                                                            @mousedown.stop
                                                            absolute
                                                            class="white--text"
                                                            color="orange"
                                                            fab
                                                            right
                                                            top
                                                    >
                                                        <v-icon>mdi-cart</v-icon>
                                                    </v-btn>
                                                    <div class="font-weight-light subtitle-2 mx-2">
                                                        Our Vintage kitchen utensils delight any chef.<br/>
                                                        Made of bamboo by hand
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </v-col>
                                    </v-row>

                                    <div class="text-center">
                                        <v-pagination
                                                :length="15"
                                                :total-visible="7"
                                                v-model="page"
                                        ></v-pagination>
                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                page: 1,
                search: "",
                product: {
                    id: 4,
                    description:
                        "Deserunt maiores accusantium omnis iste consequatur consequatur voluptatem inventore. Sed repellendus magni esse quia. Consequuntur suscipit nihil consequatur et distinctio rem.\n\nMolestias et modi eum qui. Occaecati illo aliquid inventore commodi temporibus veniam molestias. Eum quidem eius magnam voluptatibus. Iure vero nemo eum consequatur pariatur.",
                    content:
                        "Sit veniam asperiores rerum voluptas ratione et esse. Autem culpa quia voluptatum adipisci eaque incidunt beatae impedit. Debitis placeat quo ea eaque soluta error. Maiores quia quae est sequi vel id rem.\n\nQuaerat iste consequatur repellat sed tempore qui. Excepturi velit ut quia quidem. Laudantium eos sit cumque cupiditate temporibus eos.\n\nQui autem laboriosam excepturi. Harum consequatur id consectetur et. Et alias sed ut dolores hic.\n\nEaque qui assumenda recusandae molestiae libero consequatur. Deserunt tempora ratione alias doloribus laudantium praesentium. Ut quae earum dolores omnis. Sed autem quia eum deserunt pariatur id libero. Et recusandae nostrum quasi.\n\nAutem impedit nobis accusamus qui et. Accusantium quae saepe ut incidunt qui ex amet. Ipsum quo repellat molestiae. Odio quam aliquam id sunt.",
                    imageURL:
                        "http://h.hiphotos.baidu.com/baike/c0%3Dbaike60%2C5%2C5%2C60%2C20/sign=ed5caf4e0df431ada8df4b6b2a5fc7ca/5366d0160924ab18c8c0abeb34fae6cd7a890b13.jpg",
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
