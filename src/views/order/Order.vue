<template>
  <v-container>
    <v-row>
      <v-col cols="12">

        <v-card class="pa-2">
          <v-card class="mb-4">
            <StepperHeader :position="1"></StepperHeader>
          </v-card>
          <v-card>
            <v-card-title>
              选择收货地址
            </v-card-title>
            <v-card-text>
              <v-item-group v-model="selected">
                <v-container>
                  <v-row>
                    <v-col :key="n" cols="12" md="3" v-for="n in 4">
                      <v-item v-slot:default="{ active, toggle }">
                        <v-card
                                :color="active ? 'green lighten-2' : ''"
                                @click="toggle"
                                min-height="150"
                        >
                          <v-card-title>
                            王丽 收
                          </v-card-title>
                          <v-card-text>
                            杭州余杭区文一西路969号阿里巴巴的西溪园区
                            &nbsp;&nbsp;(+86) 571-2688-8888
                          </v-card-text>
                        </v-card>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-container>
              </v-item-group>
            </v-card-text>
            <v-card-actions class="px-10">
              <v-row>
                <v-btn outlined>使用新地址</v-btn>
                <v-spacer></v-spacer>
                <v-btn text>管理收货地址</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>

          <v-card class="mt-4">
            <v-card-title>
              确认订单信息
            </v-card-title>
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead class="v-data-table-header">
                  <tr>
                    <th class="text-start">商品</th>
                    <th class="text-center">缩略图</th>
                    <th class="text-center">单价</th>
                    <th class="text-center">数量</th>
                    <th class="text-center">购买价格</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item, index) in desserts">
                    <td class="text-start">{{ item.name }}</td>
                    <td class="text-center">
                      <v-img
                              :aspect-ratio="1"
                              :max-width="40"
                              :src="item.imageUrl"
                      ></v-img>
                    </td>
                    <!--                            <td class="text-start">{{ item.quantity }}</td>-->
                    <td class="text-center">
                      <strong>{{ item.price }}</strong>
                    </td>
                    <td class="text-center">
                      <product-quantity
                              :initQuantity="item.quantity"
                              :item="item"
                              @change-quantity="updateQuantity"
                              @decrement="updateQuantity"
                              @increment="updateQuantity"
                      ></product-quantity>
                    </td>
                    <td class="text-center">
                      <!--                  <strong>{{item.quantity}}*{{item.price}}</strong>&nbsp;&nbsp;-->
                      <strong>{{
                        Math.round(item.price * item.quantity * 100) / 100
                        }}</strong>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-divider></v-divider>
              <v-row align="center" class="py-3 pr-3" justify="end">
                <v-col cols="4">
                  <v-card elevation="1" outlined>
                    <v-card-title>
                      <div class="title mr-4">实付款：</div>
                      <div class="headline mr-4 red--text ">
                        <!--                        {{ Math.round(totalPrice * 100) / 100 }} RMB-->
                      </div>
                      <div class=" mr-4">
                        <span class="subtitle-2">寄送至：</span>
                        <span class="body-2"
                        >广东 深圳 龙华 观澜 观光路宝源科技园宿舍楼</span
                        >
                      </div>
                      <div class=" mr-4">
                        <span class="subtitle-2">收货人：</span
                        ><span class="body-2">焦海宾 16620702309</span>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn block color="error">提交订单</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ProductQuantity from "../../components/shared/ProductQuantity";
  import Cart from "../user/Cart";
  import StepperHeader from "../../components/shared/StepperHeader";

  export default {
    components: {
      Cart,
      ProductQuantity,
      StepperHeader
    },
    methods: {
      updateQuantity() {

      }
    },
    created() {
    },
    data() {
      return {
        selected: 0,
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
