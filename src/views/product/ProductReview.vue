<template>
    <v-container>
        <v-card>
            <v-card-title></v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-form>
                            <v-row class="px-6">
                                <v-textarea
                                        counter
                                        label="评论"
                                        outlined
                                        v-model="commentInfo.content"
                                >
                                </v-textarea>
                            </v-row>
                            <v-row align="center" class="px-6">
                                <span class="title">评分：</span>
                                <v-rating
                                        :half-increments="true"
                                        :length="5"
                                        :size="36"
                                        hover
                                        v-model="commentInfo.rating"
                                ></v-rating>
                                <span class="title">{{ commentInfo.rating }}</span>
                                <v-spacer></v-spacer>
                                <v-btn color="primary"> 提交评论</v-btn>
                            </v-row>
                        </v-form>
                    </v-col>
                </v-row>
                <v-divider class="mt-3 mb-8"></v-divider>

                <v-row :key="comments.id" class="my-2 px-2" v-for="comment in comments">
                    <v-col cols="12" md="1" sm="2">
                        <v-avatar color="indigo">
                            <v-img
                                    :alt="comment.user.name"
                                    :src="comment.user.avatar"
                            ></v-img>
                        </v-avatar>
                        <div class="mt-3 subtitle-2">{{ comment.user.name }}</div>
                    </v-col>
                    <v-col cols="12" md="11" sm="10">
                        <v-card>
                            <v-card-text>
                                <span class="body-2">{{ comment.content }}</span>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-row>
                                <v-col class="pl-8" cols="12">
                                    <v-row align="center">
                                        <v-rating
                                                :half-increments="true"
                                                :readonly="true"
                                                :value="comment.rating"
                                                class="mx-4"
                                        ></v-rating>
                                        <v-icon color="error">mdi-thumb-up</v-icon>
                                        <div>&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                        <v-icon color="error">mdi-thumb-down</v-icon>
                                        <div>&nbsp;&nbsp;3</div>
                                        <v-spacer></v-spacer>
                                        <div class="subtitle-1 mr-10">{{comment.created_at}}</div>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "ProductReview",
        data() {
            return {
                commentInfo: {
                    content: null,
                    rating: 5
                },
                comments: [
                    {
                        id: 3,
                        content:
                            "Material Design Icons' growing icon collection allows designers and developers targeting various platforms to download icons in the format, color and size they need for any project.",
                        rating: 5,
                        created_at: "2019-12-2 12:33:33",
                        user: {
                            id: 3,
                            name: "jvame",
                            avatar:
                                "https://robohash.org/b8fa61e3cea6446f71c7b30a631dd41a?set=set4&bgset=&size=400x400"
                        }
                    },
                    {
                        id: 4,
                        content:
                            "Material Design Icons' growing icon collection allows designers and developers targeting various platforms to download icons in the format, color and size they need for any project.",
                        rating: 3,
                        created_at: "2019-12-2 12:33:33",
                        user: {
                            id: 3,
                            name: "jvame",
                            avatar:
                                "https://gravatar.com/avatar/b8fa61e3cea6446f71c7b30a631dd41a?s=400&d=robohash&r=x"
                        }
                    },
                    {
                        id: 5,
                        content:
                            "Material Design Icons' growing icon collection allows designers and developers targeting various platforms to download icons in the format, color and size they need for any project.",
                        rating: 4,
                        created_at: "2019-12-2 12:33:33",
                        user: {
                            id: 3,
                            name: "jvame",
                            avatar:
                                "https://robohash.org/b8fa61e3cea6446f71c7b30a631dd41a?set=set4&bgset=&size=400x400"
                        }
                    }
                ]
            };
        }
    };
</script>

<style scoped></style>
