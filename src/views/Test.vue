<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Toast
          </v-card-title>
          <v-card-text>
            <v-btn @click="toastInfo" color="error">error</v-btn>
            <v-btn @click="toastSuccess" color="success">success</v-btn>
            <v-btn @click="toastError">error</v-btn>
            <v-btn @click="toastWarn">warning</v-btn>
            <v-btn @click="confirmDelete"></v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-btn @click="confirmDelete" color="error" outlined>
          <v-icon left>mdi-delete</v-icon>
          删除
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-chip-group active-class="info" mandatory v-model="groupItems.size">
          <v-chip :key="index + value" v-for="(value, index) in sizeItem"
          >{{ value }}
          </v-chip>
        </v-chip-group>

        <v-chip-group active-class="info" mandatory v-model="groupItems.color">
          <v-chip :key="index + value" v-for="(value, index) in colorItem"
          >{{ value }}
          </v-chip>
        </v-chip-group>
        <span class="display-2">{{ groupJson }}</span>
      </v-col>

      <v-dialog max-width="500px" v-model="dialog">
        <template v-slot:activator="{ on }">
          <v-btn class="mb-2" color="primary" dark v-on="on">New Item</v-btn>
        </template>
        <v-card>
          <v-card-text>
            <v-container>
              <v-form v-model="valid">
                <v-row>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                            label="Dessert name"
                            v-model="editedItem.key"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-text-field
                            label="Calories"
                            v-model="editedItem.name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="6">
                    <v-combobox v-model="editedItem.values"></v-combobox>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="" color="blue darken-1" text>Cancel</v-btn>
            <v-btn @click="" color="blue darken-1" text>Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <DatePiker v-model="date"></DatePiker>
      <TimePicker v-model="time"></TimePicker>
      {{ date}} {{time}}
      <v-row>
        <EditorTinymce></EditorTinymce>
      </v-row>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <ProductQuantity></ProductQuantity>
      <FileProgress></FileProgress>
    </v-row>
  </v-container>
</template>

<script>
  import ProductQuantity from "../components/shared/ProductQuantity";
  import FileProgress from "../components/shared/FileProgress";
  import EditorTinymce from "../components/shared/EditorTinyMCE";
  import DatePiker from "../components/shared/DatePiker";
  import TimePicker from "../components/shared/TimePicker";
  import Toast from "../utils/toast";

  export default {
    components: {
      ProductQuantity,
      FileProgress,
      EditorTinymce,
      DatePiker,
      TimePicker
    },
    updated() {
      console.log(this.groupJson);
    },
    data() {
      return {
        date: new Date().toISOString().substr(0,10),
        time:null,
        quantity: 1,
        dialog: false,
        valid: false,
        groupItems: {
          color: 0,
          size: 0
        },
        sizeItem: [5.0, 6.0],
        colorItem: ["白色", "黑色"],
        editedItem: {
          name: "",
          key: "",
          values: []
        }
      };
    },
    computed: {
      groupJson() {
        return JSON.stringify(this.groupItems);
      }
    },
    methods: {
      toastError() {
        console.log('this is error')
        Toast.error("this is error")
      },
      toastInfo() {
        console.log('this is error')
        Toast.info("this is error")
      },
      toastWarn() {
        console.log('this is error')
        Toast.warning('"this is error"')
      },
      toastSuccess() {
        console.log('this is error')
        Toast.success("this is error")
      },
      toastConfirm() {
        Toast.confirm("this is error")
      },
      confirmDelete() {
        Toast.confirm(() => {
          confirm("Do you really want to exit");
        })
      }
    }
  };
</script>

<style scoped></style>
