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
      <v-card-text v-if="!hasData">
        <v-row justify="center" style="min-height: 200px">
          <span class="display-2">购物车空</span>
        </v-row>
      </v-card-text>
      <v-card-text v-if="hasData">
        <v-simple-table>
          <template v-slot:default>
            <thead class="v-data-table-header">
            <tr>
              <th class="text-start">
                <v-checkbox
                        @change="changeAll"
                        v-model="checked"
                ></v-checkbox>
                {{ selectedProduct }}
              </th>
              <th class="text-start">商品</th>
              <th class="text-center">缩略图</th>
              <th class="text-center">单价</th>
              <th class="text-center">数量</th>
              <th class="text-center">购买价格</th>
              <th class="text-center">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in desserts">
              <td class="text-start">
                <v-checkbox
                        :value="item.id"
                        v-model="selectedProduct"
                ></v-checkbox>
              </td>
              <td class="text-start">{{ item.name }}</td>
              <td class="text-start">
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
              <td class="text-center">
                <v-btn @click="remove(item)" color="error" fab outlined tile x-small>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider></v-divider>
        <v-row align="center" class="py-3 pr-3" justify="end">
          <div class="headline mr-4">总价：</div>
          <div class="headline mr-4">
            {{ Math.round(totalPrice * 100) / 100 }} RMB
          </div>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-col cols="4" offset-md="4">
            <v-btn block class="mx-4" color="primary" large rounded
            >生成订单
            </v-btn>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import CartBreadcrumbs from "../../components/breadcrumbs/CartBreadcrumbs";
  import ProductQuantity from "../../components/shared/ProductQuantity";

  import {mapActions, mapGetters} from "vuex";

  export default {
    components: {
      CartBreadcrumbs,
      ProductQuantity
    },
    created() {
      this.loadCart();
    },
    computed: {
      ...mapGetters({
        desserts: "cart/getCart",
        hasData: "cart/hasData",
        totalPrice: "cart/getCartTotal"
      })
    },
    watch: {
      selectedProduct: {
        handler: function (val, oldVal) {
          if (this.selectedProduct.length === this.desserts.length) {
            this.checked = true;
          } else {
            this.checked = false;
          }
        },
        deep: true
      }
    },
    methods: {
      ...mapActions({
        loadCart: "cart/loadCart",
        update: "cart/updateQuantity",
        removeProduct: "cart/removeProduct"
      }),
      updateQuantity(quantity, item) {
        this.update({productId: item.id, quantity: quantity});
      },

      remove(item) {
        this.removeProduct(item.id);
      },
      changeAll() {
        if (this.checked) {
          this.selectedProduct = this.desserts.map(d => d.id);
        } else {
          this.selectedProduct = [];
        }
      }
    },
    data() {
      return {
        checked: false,
        selectedProduct: []
        // desserts: []
      };
    }
  };
</script>

<style scoped></style>
