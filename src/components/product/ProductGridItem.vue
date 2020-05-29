<template>
    <v-card
            :to="{ name: 'product', params: { id: product.id } }"
            class="ma-2"
            hover
    >
        <v-img
                :aspect-ratio="2 / 3"
                :src="product.image"
                class="white--text align-end"
                max-height="150px"
        >
            <v-card-title><span class="text-truncate">{{ product.title }}</span></v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{ product.created_at }}</v-card-subtitle>
        <v-card-text class="text--primary d-block wrap ">
            <div class="text">{{ product.description }}</div>
        </v-card-text>
        <v-card-actions>
            <v-row>
                <v-col cols="6">
                    <v-btn
                            @click.stop="addToCart(product.id)"
                            @mousedown.stop
                            block
                            class="mr-2"
                            color="red darken-1"
                            large
                            small
                    >
                        <v-icon left>mdi-shopping</v-icon>
                        直接购买
                    </v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn
                            @click.stop="addToCart(product.id)"
                            @mousedown.stop
                            block
                            class="mr-2"
                            color="green lighten-2"
                            large
                            small
                    >
                        <v-icon left>mdi-shopping</v-icon>
                        加入购物车
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: {
            product: {
                type: Object,
                default: {}
            },
            addToCart: {
                type: Function
            }
        }
    };
</script>

<style scoped>
    /*https://github.com/happylindz/blog/issues/12*/
    .wrap {
        height: 100px;
        line-height: 20px;
        overflow: hidden;
    }

    .wrap .text {
        float: right;
        margin-left: -5px;
        width: 100%;
        word-break: break-all;
    }

    .wrap::before {
        float: left;
        width: 5px;
        content: "";
        height: 40px;
    }

    .wrap::after {
        float: right;
        content: "...";
        height: 20px;
        line-height: 20px;
        /* 为三个省略号的宽度 */
        width: 3em;
        /* 使盒子不占位置 */
        margin-left: -3em;
        /* 移动省略号位置 */
        position: relative;
        left: 100%;
        top: -20px;
        padding-right: 5px;
    }
</style>
