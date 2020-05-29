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
                        {{ content }}
                        <EditorTinyMCE v-model="content"></EditorTinyMCE>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center">
                    <v-btn class="mr-10 my-3" color="primary" depressed large> 发布产品</v-btn>
                </v-row>
                <v-divider></v-divider>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
    import EditorTinyMCE from "../../components/shared/EditorTinyMCE";
    import validators from "../../utils/validators";

    export default {
        components: {
            EditorTinyMCE
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
                ...validators
            };
        }
    };
</script>

<style scoped></style>
