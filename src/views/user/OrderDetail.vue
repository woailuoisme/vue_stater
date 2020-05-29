<template>
  <v-container>
    <v-card class="mb-4">
      <OrderBreadcrumbs></OrderBreadcrumbs>
    </v-card>
    <v-card>
      <v-card-title class="headline">
        订单<span>{{ order.order_no }}</span>&nbsp;&nbsp;
        <v-chip :color="colorClass(order.order_status)">{{
          colorString(order.order_status)
          }}
        </v-chip>
      </v-card-title>
      <v-card-text>
        <v-divider></v-divider>
        <div class="title py-3">
          产品列表
        </div>
        <v-divider></v-divider>
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-start">商品</th>
              <th class="text-center">缩略图</th>
              <th class="text-center">数量</th>
              <th class="text-center">单价</th>
              <th class="text-center">总价</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="item.id" v-for="item in order.products">
              <td class="text-start">{{ item.name }}</td>
              <td class="text-center">
                <v-row justify="center">
                  <v-img
                          :aspect-ratio="1"
                          :max-height="40"
                          :max-width="40"
                          :src="item.imageUrl"
                  ></v-img>
                </v-row>
              </td>
              <td class="text-center">{{ item.quantity }}</td>
              <td class="text-center">{{ item.price }}</td>
              <td class="text-center">
                {{ Math.round(item.quantity * item.price * 100) / 100 }}
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-divider></v-divider>
        <v-row align="center" class="my-3" justify="end">
          <div class="headline mr-4">总价格：</div>
          <div class="headline mr-4 text--primary">
            {{ Math.round(totalPrice * 100) / 100 }} RMB
          </div>
        </v-row>
        <v-divider></v-divider>
        <div class="headline my-3">
          邮寄地址：
        </div>
        <v-divider></v-divider>
        <v-row class="my-3" justify="center">
          <v-btn color="info">从地址列表中选择</v-btn>&nbsp;&nbsp;&nbsp;&nbsp;
          <v-btn color="info">新增</v-btn>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field label="省" readonly value="西藏自治区"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="市" readonly value="阿里地区"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
                    label="镇/县"
                    readonly
                    value="阿里地区"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
                    label="详细地址"
                    readonly
                    value="狮泉河东路9号正西方向10米"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-divider></v-divider>
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
          <v-row>
            <v-col cols="4" offset-md="4">
              <v-btn block color="primary">添加地址</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-row align="center" justify="center">
          <v-col md="3">
            <v-select :items="payItems" class="mr-3" label="支付方式"></v-select>
          </v-col>
          <v-btn color="primary" large rounded>确认支付</v-btn>
        </v-row>

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
      computed: {
        totalPrice() {
          return this.order.products.reduce(
                  (total, product) => (total += product.quantity * product.price),
                  0
          );
        }
      },
      methods: {
        colorClass(status) {
          if (status === "un-pay") {
            return "error";
          } else if (status === "paid") {
            return "success";
          } else if (status === "completed") {
            return "indigo";
          }
        },
        colorString(status) {
          if (status === "un-pay") {
            return "未支付";
          } else if (status === "paid") {
            return "已支付";
          } else if (status === "completed") {
            return "关闭";
          }
        }
      },
      name: "Order",
      data() {
        return {
          order: {
            id: 2,
            order_no: "#03840380808",
            order_status: "un-pay",
            products: [
              {
                id: 3,
                name: "Frozen Yogurt",
                imageUrl:
                        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
                quantity: 3,
                price: 22.3
              },
              {
                id: 5,
                name: "Frozen Yogurt",
                imageUrl:
                        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
                quantity: 3,
                price: 252.3
              },
              {
                id: 4,
                name: "Frozen Yogurt",
                imageUrl:
                        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
                quantity: 3,
                price: 299.3
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
