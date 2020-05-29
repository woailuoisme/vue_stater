<template>
  <v-container>
    <v-card class="mb-4">
      <AddressBreadcrumbs></AddressBreadcrumbs>
    </v-card>
    <v-card>
      <v-card-title>
        <v-row class="px-8">
          <div class="title">收货地址</div>
          <v-spacer></v-spacer>
          <!--          <v-dialog>-->
          <!--            -->
          <!--          </v-dialog>-->
          <v-btn color="primary" large>新建地址</v-btn>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-start">收货人</th>
                  <th class="text-center">所在地区</th>
                  <th class="text-center">详细地址</th>
                  <th class="text-center">手机号码</th>
                  <th class="text-center">操作</th>
                  <th class="text-center">设置默认</th>
                </tr>
                </thead>
                <tbody>
                <tr :key="index" v-for="(item, index) in addresses">
                  <td class="text-center">{{item.people}}</td>
                  <td class="text-center">{{item.area}}</td>
                  <td class="text-center">{{ item.address }}</td>
                  <td class="text-center">{{ item.phone }}</td>
                  <td class="text-center">
                    <v-icon @click="edit(item.id)" class="mr-3" color="warning"
                    >mdi-pencil
                    </v-icon>
                    <v-icon @click="remove(item.id)" color="error"
                    >mdi-delete
                    </v-icon>
                  </td>
                  <td class="text-center">
                    <v-switch :value="item.isDefault" label="设置默认"></v-switch>
                  </td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import AddressBreadcrumbs from "../../components/breadcrumbs/AddressBreadcrumbs";

  export default {
    components: {
      AddressBreadcrumbs
    },
    name: "Address",
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "新增" : "更新";
      }
    },
    data() {
      return {
        editAddress: null,
        editedIndex: -1,
        addresses: [
          {
            id: 1,
            people: 'ailuoga',
            area: "4961 Woodbridge Lane",
            address: '0803480 dlsjla ',
            phone: '132 8888 8888',
            isDefault: true
          },
          {
            id: 2,
            people: 'ailuoga',
            area: "4961 Woodbridge Lane",
            address: '0803480 dlsjla ',
            phone: '132 8888 8888',
            isDefault: false
          },
          {
            id: 3,
            people: 'ailuoga',
            area: "4961 Woodbridge Lane",
            address: '0803480 dlsjla ',
            phone: '132 8888 8888',
            isDefault: false
          },
          {
            id: 4,
            people: 'ailuoga',
            area: "4961 Woodbridge Lane",
            address: '0803480 dlsjla ',
            phone: '132 8888 8888',
            isDefault: false
          }
        ]
      };
    },
    methods: {
      remove(id) {
        this.addresses.splice(this.addresses.findIndex(a => a.id === id), 1);
      },
      edit(id) {
        this.editedIndex = this.desserts.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      }
    }
  };
</script>

<style scoped></style>
