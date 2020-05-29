<template>
  <v-container fruit>
    <v-row v-if="sku_string">
      <v-col
              :key="index + sku.name"
              cols="12"
              v-for="(sku, index) in sku_array"
      >
          <span>{{ sku.name }}</span>
          <v-chip-group
                  active-class="info"
                  mandatory
                  v-if="sku.values"
                  v-model="sku_model[sku.key]"
          >
              <v-chip
                      :key="index + value"
                      @click="clickChip"
                      v-for="(value, index) in sku.values"
              >{{ value }}
              </v-chip>
          </v-chip-group>
      </v-col>
      <v-col cols="12">
        <div class="subtitle-1">{{ JSON.stringify(sku_model) }}</div>
          <v-divider></v-divider>
          <div class="subtitle-1">{{ JSON.stringify(sku_array) }}</div>
          <v-divider></v-divider>
          <div class="subtitle-1">{{ current_sku_json }}</div>
          <v-divider></v-divider>
          <div class="subtitle-1">{{ current_sku }}</div>
          <v-divider></v-divider>
      </v-col>
    </v-row>

      <v-row align="center">
          <span class="subtitle-1">库存: </span>
          <span class="title"
          >{{
          current_sku && current_sku.stock ? current_sku.stock : "NONE"
        }}
        &nbsp;&nbsp; &nbsp;&nbsp;</span
          >
          <span class="subtitle-1">价格: </span>
          <span class="title">{{
        current_sku && current_sku.price ? current_sku.price : "NONE"
      }}</span>
      </v-row>
  </v-container>
</template>

<script>

    export default {
        created() {
            // _.debounce(()=>this.computed,1000)
            this.initialize();
        },
        computed: {
            sku_array() {
                return JSON.parse(this.sku_string);
            },
            sku_attribute_key() {
                return this.sku_array.map(a => a.key);
            }
        },
        watch: {
            sku_model: {
                handler(newValue) {
                    // console.log(newValue)
                    const list = [];
                    for (let [key, value] of Object.entries(newValue)) {
                        // console.log(key,value);
                        const sku = this.sku_array.find(s => s.key === key);
                        list.push({
                            name: sku.name,
                            value: sku.values[value]
                        });
                    }
                    this.current_sku_json = JSON.stringify(list);
                    this.current_sku =
                        this.skus.find(s => s.sku === this.current_sku_json) || null;
                },
                deep: true
            }
        },
        methods: {
            clickChip() {
                // console.log(this.sku_model);
                // console.log(this.current_sku_json);
                // debugger
            },
            initialize() {
                let obj = {};
                for (let key of this.sku_attribute_key) {
                    obj[key] = 0;
                }
                Object.assign(this.sku_model, obj)
            }
        },
        data() {
            return {
                sku_model: {},
                current_sku_json: null,
                current_sku: null,
                sku_string:
                    '[{"key":"size","name":"屏幕尺寸","values":[5,6,7]},{"key":"memory","name":"内存大小","values":[128,256]},{"key":"color","name":"颜色","values":["白色","黑色"]}]',
                skus: [
                    {
                        product_id: 2,
                        sku:
                            '[{"name":"屏幕尺寸","value":5},{"name":"内存大小","value":128},{"name":"颜色","value":"白色"}]',
                        stock: 22,
                        price: 998.0
                    },
                    {
                        product_id: 2,
                        sku:
                            '[{"name":"屏幕尺寸","value":5},{"name":"内存大小","value":256},{"name":"颜色","value":"黑色"}]',
                        stock: 22,
                        price: 2000
                    },
                    {
                        product_id: 3,
                        sku:
                            '[{"name":"屏幕尺寸","value":6},{"name":"内存大小","value":128},{"name":"颜色","value":"黑色"}]',
                        stock: 22,
                        price: 1088.0
                    },
                    {
                        product_id: 3,
                        sku:
                            '[{"name":"屏幕尺寸","value":6},{"name":"内存大小","value":256},{"name":"颜色","value":"黑色"}]',
                        stock: 22,
                        price: 2000.0
                    },
                    {
                        product_id: 2,
                        sku:
                            '[{"name":"屏幕尺寸","value":7},{"name":"内存大小","value":128},{"name":"颜色","value":"黑色"}]',
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
            };
        }
    };
</script>
<style scoped></style>
