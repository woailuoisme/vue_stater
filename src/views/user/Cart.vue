<template>
    <v-container>
        <v-card class="mb-4">
            <CartBreadcrumbs></CartBreadcrumbs>
        </v-card>
        <v-card>
            <v-card-title>
                <span class="headline">购物车</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-simple-table>
                    <template v-slot:default>
                        <thead class="v-data-table-header">
                        <tr>
                            <th class="text-start">
                                <v-checkbox label="#"></v-checkbox>
                            </th>
                            <th class="text-start">商品</th>
                            <th class="text-left">缩略图</th>
                            <th class="text-left">数量</th>
                            <th class="text-left">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr :key="item.id" v-for="item in desserts">
                            <td class="text-start">
                                <v-checkbox label="#" multiple value="item.id"></v-checkbox>
                            </td>
                            <td class="text-start">{{ item.name }}</td>
                            <td class="text-start">
                                <v-img
                                        :aspect-ratio="1"
                                        :max-height="40"
                                        :max-width="40"
                                        :src="item.imageUrl"
                                ></v-img>
                            </td>
                            <td class="text-start">{{ item.quantity }}</td>
                            <td class="text-start">
                                <v-icon @click="remove(item.id)" color="error" small
                                >mdi-delete
                                </v-icon
                                >
                            </td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                <v-divider></v-divider>
                <v-row align="center" class="py-3 pr-3" justify="end">
                    <div class="display-1 mr-4">Total</div>
                    <div class="headline mr-4">RMB 4366.00</div>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="mx-4" color="primary" large rounded>checkout</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    import CartBreadcrumbs from "../../components/breadcrumbs/CartBreadcrumbs";

    export default {
        components: {
            CartBreadcrumbs
        },
        data() {
            return {
                desserts: [
                    {
                        id: 3,
                        name: "Frozen Yogurt",
                        imageUrl:
                            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
                        quantity: 3
                    },
                    {
                        id: 5,
                        name: "Frozen Yogurt",
                        imageUrl:
                            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
                        quantity: 3
                    },
                    {
                        id: 4,
                        name: "Frozen Yogurt",
                        imageUrl:
                            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
                        quantity: 3
                    }
                ]
            };
        }
    };
</script>

<style scoped></style>
