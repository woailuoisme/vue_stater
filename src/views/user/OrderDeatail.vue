<template>
    <v-container>
        <v-card class="mb-4">
            <OrderBreadcrumbs></OrderBreadcrumbs>
        </v-card>
        <v-card>
            <v-card-title>
                订单
            </v-card-title>
            <v-card-text>
                <div class="headline">
                    订单编号 <span>{{ order.order_no }}</span>
                </div>
                <v-divider></v-divider>
                <div class="title">
                    产品列表
                </div>
                <v-divider></v-divider>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th>
                                <v-checkbox></v-checkbox>
                            </th>
                            <th class="text-center">商品</th>
                            <th class="text-center">缩略图</th>
                            <th class="text-center">数量</th>
                            <th class="text-center">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr :key="item.id" v-for="item in order.products">
                            <td>
                                <v-checkbox></v-checkbox>
                            </td>
                            <td>{{ item.name }}</td>
                            <td>
                                <v-img
                                        :aspect-ratio="1"
                                        :max-height="40"
                                        :max-width="40"
                                        :src="item.imageUrl"
                                ></v-img>
                            </td>
                            <td>{{ item.quantity }}</td>
                            <td>
                                <v-icon @click="remove(item.id)" color="error" small
                                >mdi-delete
                                </v-icon>
                            </td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>

                <v-divider></v-divider>
                <v-row align="center" justify="end">
                    <div class="display-1 mr-4">Total</div>
                    <div class="headline mr-4">RMB 4366.00</div>
                </v-row>
                <v-divider></v-divider>
                <div class="title">
                    邮寄地址：
                </div>
                <v-form>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field label="省"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field label="市"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field label="县/镇"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field label="详细地址"></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-select :items="payItems" class="mr-3" label="支付方式"></v-select>
                <v-btn color="primary" large rounded>确认支付</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    import OrderBreadcrumbs from "../../components/breadcrumbs/OrderBreadcrumbs";

    export default {
        components: {
            OrderBreadcrumbs
        },
        name: "Order",
        data() {
            return {
                order: {
                    id: 2,
                    order_no: "#03840380808",
                    products: [
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
                },
                payItems: ["支付宝1", "支付宝2", "微信"]
            };
        }
    };
</script>

<style scoped>
    .v-select__selections input {
        display: none;
    }
</style>
