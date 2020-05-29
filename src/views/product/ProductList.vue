<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="2">
        <v-card class="">
          <v-card-title class="text-center">
            类别选择
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-select label="类别" solo></v-select>
              <v-select label="价格区间" solo></v-select>
              <v-select label="种类" solo></v-select>
            </v-form>
            <v-btn block>确定</v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="10">
        <v-card>
          <v-card-text>
            <v-row align="center" class="px-4" justify="start">
              <v-btn-toggle mandatory v-model="product_type">
                <v-btn active-class="error">全部</v-btn>
                <v-btn active-class="error">最新</v-btn>
                <v-btn active-class="error">推荐</v-btn>
                <v-btn active-class="error">热门</v-btn>
              </v-btn-toggle>
              <v-spacer></v-spacer>
              <span>Model: {{ product_type }}</span>
              <span>Model: {{ list_type }}</span>
              <v-btn-toggle mandatory v-model="list_type">
                <v-btn active-class="error">
                  <v-icon>mdi-format-align-justify</v-icon>
                </v-btn>
                <v-btn active-class="error">
                  <v-icon>mdi-view-grid</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card :loading="isLoading">
          <v-container fluid>
            <!--            <v-col cols="12" v-if="isLoading"  style="max-height: 300px" class="text-center">-->
            <!--              <ScaleLoader></ScaleLoader>-->
            <!--            </v-col>-->
            <v-row v-if="!isLoading">
              <v-col class="text-center" cols="12" v-if="!hasData">
                暂无数据
              </v-col>
              <v-col :key="product.id" cols="12" md="4" v-for="product in products" v-if="hasData">
                <ProductGridItem :product="product"></ProductGridItem>
              </v-col>
            </v-row>
            <v-row align="center" justify="space-around" v-if="isDisplayPagination">
              <div>
                <span>当前页：第{{productsMeta.current_page}}页 </span>
                <span> 从:{{productsMeta.from}} 到:{{productsMeta.to}}</span>
                <span> 总页数：{{productsMeta.last_page}}页 </span>
                <span> 每页: {{productsMeta.per_page}} 项</span>
              </div>

              <div>
                <v-pagination
                        :length="productsMeta.last_page"
                        :total-visible="7"
                        :value="productsMeta.current_page"
                        @input="loadNewProducts"
                        v-model="page"
                ></v-pagination>
              </div>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ProductGridItem from "../../components/product/ProductGridItem";
  import PulseLoader from 'vue-spinner/src/PulseLoader'
  import ScaleLoader from 'vue-spinner/src/ScaleLoader'
  import {mapActions, mapGetters} from "vuex";
  import ProductService from "../../api/product.service";

  export default {
    components: {
      ProductGridItem,
      PulseLoader,
      ScaleLoader
    },
    created() {
      this.loadProducts();
    },
    methods: {
      ...mapActions({
        loadProducts: "product/loadAllProducts",
        addToCart: "cart/addToCart"
      }),
      loadNewProducts(page) {
        this.loadProducts({type: ProductService.QUERY_ALL, page})
      }
    },
    computed: {
      ...mapGetters({
        hasData: "product/hasData",
        products: "product/getProducts",
        productsMeta: "product/getProductMeta",
        isDisplayPagination: "product/isDisplayPagination",
        isLoading: "share/isLoading"
      })
    },
    data() {
      return {
        page: 1,
        product_type: null,
        list_type: null
      };
    }
  };
</script>

<style scoped></style>
