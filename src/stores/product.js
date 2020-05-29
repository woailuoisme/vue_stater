import ProductService from "../api/product.service";

export default {
    namespaced: true,
    state: {
        products: [],
        productMeta: {
            "per_page": 10,
            "last_page": 1,
            "current_page": 1,
            "total": 7,
            "from": 1,
            "to": 7
        },
        product: {}
    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload;
        },
        SET_PRODUCTS_META(state, payload) {
            state.productMeta = payload;
        },
        SET_PRODUCT(state, payload) {
            state.error = payload;
        }
    },
    actions: {
        async loadAllProducts({commit}, payload = {}) {
            try {
                const res = await ProductService.getProducts(payload.type, payload.page, payload.perPage)
                if (res.data.data) {
                    commit('SET_PRODUCTS', res.data.data.items)
                    commit('SET_PRODUCTS_META', res.data.data.meta)
                }
            } catch (e) {
            }
        },

        async loadProduct({commit}, productId) {
            try {
                const res = await ProductService.getProduct(productId)
                const product = res.data.data;
                commit('SET_PRODUCT', product)
            } catch (e) {

            }
        }
    },
    getters: {
        hasData(state) {
            console.log(state.products)
            console.log(state.products.length)
            return !!state.products.length
        },
        getProducts(state) {
            return [...state.products]
        },
        getProduct(state) {
            return {...state.product}
        },
        getProductMeta(state) {
            return {...state.productMeta}
        },
        isDisplayPagination(state) {
            return !!(state.productMeta && state.productMeta.last_page && state.productMeta.last_page > 1)
        }
    }
};
