<template>
    <div class="container">
        <div class="large-12 medium-12 small-12 cell">
            <input @change="handleFileUpload()" id="file" ref="file" type="file"/>
            <!--          <v-file-input label="avatar" ref="file" @change="handleFileUpload()"></v-file-input>-->
            <br/>
            <v-fade-transition>
                <v-progress-linear
                        height="20"
                        v-if="!!file"
                        v-model="uploadPercentage"
                >
                    <strong>{{ Math.ceil(uploadPercentage) }}%</strong>
                </v-progress-linear>
            </v-fade-transition>
            <strong v-if="!!file">{{ uploadMsg }}</strong>

            <br/>
            <v-btn :disabled="isValid" @click="submitFile">上传文件</v-btn>
            <v-container>
                <v-row>
                    <v-col cols="3">
                        <v-card>
                            <v-card-text>
                                <v-fab-transition>
                                    <v-img :src="image" aspect-ratio="1">
                                    </v-img>
                                </v-fab-transition>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                file: "",
                uploadPercentage: 0,
                uploadMsg: "",
                image: ''
            };
        },
        computed: {
            isValid() {
                return !this.file
            }
        },
        created() {
            axios
                .post(
                    "http://localhost:8000/api/v1/auth/login",
                    {
                        email: "jhbwyl@126.com",
                        password: "123456"
                    }
                )
                .then(res => console.log(res.data));
        },
        methods: {
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
                // debugger;
            },
            reset() {
                this.file = null;
                this.uploadPercentage = 0;
                this.uploadMsg = ""
            },
            async submitFile() {
                let formData = new FormData();
                formData.append("cover_image", this.file);
                formData.append("category_id", 2);
                //Make the request to the POST /single-file URL
                try {
                    const res = await axios.post("/api/v1/category/cover", formData, {
                        baseURL: "http://localhost:8000",
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                        onUploadProgress: function (progressEvent) {
                            this.uploadPercentage =
                                Math.round((progressEvent.loaded / progressEvent.total) * 100);
                        }.bind(this)
                    });
                    this.image = res.data.data
                    this.uploadMsg = "上传成功!!!";
                    setTimeout(() => this.reset(), 1000)
                } catch (e) {
                    this.uploadMsg = "出错了!!!";
                    setTimeout(() => this.reset(), 1000)
                }
            }
        }
    };
</script>

<style scoped></style>
