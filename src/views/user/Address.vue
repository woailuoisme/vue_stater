<template>
  <v-container>
    <v-card class="mb-4">
      <AddressBreadcrumbs></AddressBreadcrumbs>
    </v-card>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-start">编号</th>
                  <th class="text-start">详细地址</th>
                  <th class="text-start">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr :key="index" v-for="(item, index) in addresses">
                  <td>
                    {{ index + 1 }}
                  </td>
                  <td>{{ item.address }}</td>
                  <td>
                    <v-icon @click="edit(item.id)" class="mr-3" color="warning"
                    >mdi-pencil
                    </v-icon>
                    <v-icon @click="remove(item.id)" color="error"
                    >mdi-delete
                    </v-icon>

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
          {id: 1, address: "4961 Woodbridge Lane"},
          {id: 2, address: "4961 Woodbridge Lane"},
          {id: 3, address: "4961 Woodbridge Lane"},
          {id: 4, address: "4961 Woodbridge Lane"}
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
