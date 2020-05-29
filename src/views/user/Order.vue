<template>
  <v-container>
    <v-card class="mb-4">
      <OrderBreadcrumbs></OrderBreadcrumbs>
    </v-card>
    <v-card>
      <v-card-title>
        <v-row align="center" justify="space-between">
          <v-col md="2">
            <div class="">订单列表</div>
          </v-col>
          <v-col md="2">
            <v-select :items="orderStatus" label="订单状态"></v-select>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-divider></v-divider>
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th>
                <v-checkbox></v-checkbox>
              </th>
              <th class="text-center">订单编号</th>
              <th class="text-center">价格</th>
              <th class="text-center">状态</th>
              <th class="text-center">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="item.order_no + index" v-for="(item, index) in orders">
              <td class="text-center">
                <v-checkbox></v-checkbox>
              </td>
              <td class="text-center">{{ item.order_no }}</td>
              <td class="text-center">{{ item.price }}</td>
              <td class="text-center">
                <v-row justify="center">
                  <v-chip :color="colorClass(item.order_status)">
                    {{ colorString(item.order_status) }}
                  </v-chip>
                </v-row>
              </td>
              <td class="text-center">
                <v-icon @click.stop="remove(item)" color="error"
                >mdi-eye
                </v-icon>
                <v-icon @click.stop="update(item)" color="error"
                >mdi-delete
                </v-icon>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider></v-divider>
        <div class="text-center my-4">
          <v-pagination
                  :length="15"
                  :total-visible="7"
                  v-model="page"
          ></v-pagination>
        </div>
      </v-card-text>
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
          page: 0,
          orderStatus: ["已支付", "未支付", "已完成"],
          orders: [
            {
              id: 3,
              order_no: "#03840380808",
              price: 2993,
              order_status: "un-pay"
            },
            {
              id: 4,
              order_no: "#03840380806",
              price: 2993,
              order_status: "paid"
            },
            {
              id: 4,
              order_no: "#03840380803",
              price: 2993,
              order_status: "completed"
            }
          ]
        };
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
        },
        remove(item) {
          const index = this.products;
        }
      }
    };
</script>

<style scoped>
  .v-select__selections input {
    display: none;
  }
</style>
