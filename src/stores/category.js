import request from "../api/http.client";

export default {
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {
        setCategories(state, payload) {
            state.categories = payload;
        }
    },
    actions: {
        async loadCategories({commit}) {
            try {
                const response = await request.instance().get("/category");
                commit("setCategories", response.data.data);
            } catch (e) {
                commit("setError", e);
                console.log(e);
            }
        }
    },
    getters: {
        getCategories(state) {
            return [...state.categories];
        },
        getCategoriesMap(state) {
            return state.categories.map(cate => {
                const obj = [];
                obj[cate.name] = obj.id;
                return obj;
            });
        },
        getCategoryNames(state) {
            return state.categories.map(cate => cate.name);
        },
        getCategoryId(state, name) {
            const cate = state.categories.find(cate => (cate.name = name));
            return cate.id;
        }
    }
};
