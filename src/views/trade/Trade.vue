<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card class="my-2">
            <OrderBreadcrumbs></OrderBreadcrumbs>
          </v-card>
          <v-card class="my-2">
            <v-card-title>
              订单信息
              <v-chip color="error">未支付</v-chip>
            </v-card-title>
            <v-card-text>
              <div>
                <span class="title">订单编号：</span><span class="subtitle-1">#0348038403280</span>
              </div>
              <div>
                <span class="title">收货地址:  </span><span class="subtitle-2"> 香港铜锣湾边宁顿街5号地下-3楼(旋转天桥侧)</span>
              </div>
              <div>
                <span class="title">买家留言: </span> <span class="subtitle-2">香港铜锣湾边宁顿街5号地下-3楼(旋转天桥侧)</span>
              </div>
            </v-card-text>
          </v-card>
          <v-card class="my-2">
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead class="v-data-table-header">
                  <tr>
                    <th class="text-start">缩略图</th>
                    <th class="text-center">商品</th>
                    <th class="text-center">数量</th>
                    <th class="text-center">单价</th>
                    <th class="text-center">购买价格</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item, index) in desserts">
                    <td class="text-start">
                      <v-img
                              :aspect-ratio="1"
                              :max-width="40"
                              :src="item.imageUrl"
                      ></v-img>
                    </td>
                    <td class="text-center">{{ item.name }}</td>

                    <td class="text-center">{{ item.quantity }}</td>
                    <td class="text-center">
                      <strong>{{ item.price }}</strong>
                    </td>
                    <td class="text-center">
                      <strong>{{
                        Math.round(item.price * item.quantity * 100) / 100
                        }}</strong>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-divider></v-divider>
              <v-card color="pr-8 mt-6">
                <v-row>
                  <v-spacer></v-spacer>
                  <div class="title mr-8">总价格：2234.3</div>
                </v-row>
              </v-card>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import OrderBreadcrumbs from "../../components/breadcrumbs/OrderBreadcrumbs";

  export default {
    components: {
      OrderBreadcrumbs
    },
    data() {
      return {
        desserts: [
          {
            id: 3,
            name: "Frozen Yogurt",
            imageUrl:
                    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
            quantity: 1,
            price: 100.3
          },
          {
            id: 5,
            name: "Frozen Yogurt",
            imageUrl:
                    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
            quantity: 2,
            price: 200.2
          },
          {
            id: 4,
            name: "Frozen Yogurt",
            imageUrl:
                    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
            quantity: 3,
            price: 300.3
          }
        ]
      };
    }
  };
</script>

<style scoped></style>
