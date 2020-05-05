<template>
    <v-card>
        <v-container>
            <v-form v-model="valid">
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                                :rules="[required('title')]"
                                label="产品名称"
                                v-model="productInfo.title"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <v-select
                                :items="productInfo.category"
                                :rules="[required('category')]"
                                chips
                                label="产品分类"
                                v-model="categories"
                        ></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea
                                :rules="[required('description'), maxLength('description', 8)]"
                                label="产品描述"
                                v-model="productInfo.description"
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                        <div class="title">产品内容</div>
                        <quill-editor
                                :options="editorOption"
                                ref="myQuillEditor"
                                v-model="productInfo.content"
                        />
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row align="center" justify="end">
                    <v-btn class="mr-10" color="primary" depressed large> 发布产品</v-btn>
                </v-row>
                <v-divider></v-divider>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
    import {quillEditor} from "vue-quill-editor";
    import validators from "../../utils/validators";

    export default {
        name: "ProductNewForm",
        components: {
            quillEditor
        },
        data() {
            return {
                valid: false,
                loading: false,
                categories: [],
                productInfo: {
                    title: null,
                    category: null,
                    description: null,
                    content: null,
                    product_sku: [],
                    image: null,
                    thumbs: [],
                    created_at: null,
                    video: null,
                    video_thumb: null
                },
                content: "<h2>I am Example</h2>",
                editorOption: {
                    theme: "snow", //注意样式问题
                    placeholder: "开始创作……",
                    debug: false,
                    modules: {
                        toolbar: {
                            container: [
                                [{size: ["small", false, "large", "huge"]}],
                                ["bold", "italic", "underline", "strike"],
                                ["blockquote", "code-block"],
                                [{font: []}],
                                [{header: [1, 2, 3, 4, 5, 6, false]}],
                                [{align: []}],
                                [{list: "ordered"}, {list: "bullet"}],
                                [{indent: "-1"}, {indent: "+1"}],
                                [{color: []}, {background: []}],
                                ["clean"],
                                ["link", "image", "video"]
                            ]
                        }
                    }
                },
                ...validators
            };
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            }
        },
        mounted() {
            // this.editor.container.style.height = `${this.height}px`
            this.editor.container.style.height = `300px`;
            console.log("this is current quill instance object", this.editor);
        }
    };
</script>

<style scoped></style>
