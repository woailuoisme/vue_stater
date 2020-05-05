<template>
  <v-container fluid>
    <v-card>
      <v-row class="pa-3">
        <v-col cols="12" md="4">
          <v-card class="pa-1">
            <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    interval="2000"
                    show-arrows-on-hover
            >
              <v-carousel-item :key="i" v-for="(slide, i) in slides">
                <v-sheet :color="colors[i]" height="100%">
                  <v-row align="center" class="fill-height" justify="center">
                    <div class="display-3">{{ slide }} Slide</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <v-card>
            <v-card-text>
              <div class="headline">
                {{ product.name }}
              </div>
              <div class="body-1">
                {{ product.description }}
              </div>
              <div class="body-1">
                {{ product.quantity }}
              </div>
              <div class="body-1">
                {{ product.price }}
              </div>
              <div class="">
                <div class="title">
                  产品规格：
                </div>
                <ProductSku></ProductSku>
              </div>
            </v-card-text>
            <v-card-actions class="pl-4">
              <v-btn color="primary" large outlined> 加入购物车</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="pa-3">
        <v-col cols="12" md="12">
          <v-card>
            <v-tabs background-color="white" color="deep-purple accent-4">
              <v-tab class="title">产品介绍</v-tab>
              <v-tab class="title">
                <v-badge
                        class="mx-4"
                        color="error"
                        content="5"
                        offset-x="6"
                        offset-y="6"
                        overlap
                >
                  用户评论
                </v-badge>
              </v-tab>
              <v-tab-item>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" md="10" offset-md="1">
                      <VideoPlayer class="pa-4"></VideoPlayer>
                      <div class="ql-snow">
                        <section
                                class="ql-editor"
                                v-html="product.content"
                        ></section>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>

              <v-tab-item>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <ProductReview></ProductReview>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  import VideoPlayer from "../../components/video/VideoPlayer";
  import ProductReview from "./ProductReview";
  import ProductSku from "./ProductSku";

  export default {
    components: {
      VideoPlayer,
      ProductReview,
      ProductSku
    },
    data() {
      return {
        // modelKeys:this.sku_attribute_obj(),
        sizeSelect: 1,
        colorSelect: 1,
        colors: [
          "indigo",
          "warning",
          "pink darken-2",
          "red lighten-1",
          "deep-purple accent-4"
        ],
        slides: ["First", "Second", "Third", "Fourth", "Fifth"],
        product: {
          id: 4,
          name: "apple phone",
          description:
                  "Deserunt maiores accusantium omnis iste consequatur consequatur voluptatem inventore. Sed repellendus magni esse quia. Consequuntur suscipit nihil consequatur et distinctio rem.\n\nMolestias et modi eum qui. Occaecati illo aliquid inventore commodi temporibus veniam molestias. Eum quidem eius magnam voluptatibus. Iure vero nemo eum consequatur pariatur.",
          content:
                  "Sit veniam asperiores rerum voluptas ratione et esse. Autem culpa quia voluptatum adipisci eaque incidunt beatae impedit. Debitis placeat quo ea eaque soluta error. Maiores quia quae est sequi vel id rem.\n\nQuaerat iste consequatur repellat sed tempore qui. Excepturi velit ut quia quidem. Laudantium eos sit cumque cupiditate temporibus eos.\n\nQui autem laboriosam excepturi. Harum consequatur id consectetur et. Et alias sed ut dolores hic.\n\nEaque qui assumenda recusandae molestiae libero consequatur. Deserunt tempora ratione alias doloribus laudantium praesentium. Ut quae earum dolores omnis. Sed autem quia eum deserunt pariatur id libero. Et recusandae nostrum quasi.\n\nAutem impedit nobis accusamus qui et. Accusantium quae saepe ut incidunt qui ex amet. Ipsum quo repellat molestiae. Odio quam aliquam id sunt.",
          imageURL: "https://lorempixel.com/640/480/?29371",
          price: 320.29,
          stock: 300,
          created_at: "2020-02-26 07:01:51",
          updated_at: "2020-04-03 02:03:43",
          updated_at_human: "2周前",
          sku_string:
                  '[{"key":"size","name":"屏幕尺寸","values":[5,6,7]},{"key":"memory","name":"内存大小","values":[128,256]},{"key":"color","name":"颜色","values":["白色","黑色"]}]',
          sku: [
            {
              product_id: 2,
              sku:
                      '[{"key":"屏幕尺寸","value":5},{"key":"内存大小","value":128},{"key":"颜色","value":"黑色"}]',
              stock: 22,
              price: 998.0
            },
            {
              product_id: 2,
              sku:
                      '[{"key":"屏幕尺寸","value":5},{"key":"内存大小","value":256},{"key":"颜色","value":"黑色"}]',
              stock: 22,
              price: 2000
            },
            {
              product_id: 3,
              sku:
                      '[{"key":"屏幕尺寸","value":6},{"key":"内存大小","value":128},{"key":"颜色","value":"黑色"}]',
              stock: 22,
              price: 1088.0
            },
            {
              product_id: 3,
              sku:
                      '[{"key":"屏幕尺寸","value":6},{"key":"内存大小","value":256},{"key":"颜色","value":"黑色"}]',
              stock: 22,
              price: 2000.0
            },
            {
              product_id: 2,
              sku:
                      '[{"key":"屏幕尺寸","value":7},{"key":"内存大小","value":128},{"key":"颜色","value":"黑色"}]',
              stock: 22,
              price: 1299.0
            },
            {
              product_id: 2,
              sku:
                      '[{"key":"屏幕尺寸","value":5},{"key":"内存大小","value":128},{"key":"颜色","value":"黑色"}]',
              stock: 22,
              price: 998.0
            }
          ]
        }
      };
    }
  };
</script>

<style scoped></style>
