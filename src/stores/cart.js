import api from '../api/api'

export default {
    state: {
        cart: null
    },
    mutations: {
        SET_CART(state, payload) {
            state.loading = payload;
        },
        REMOVE_SINGLE_PRODUCT(state, productId) {
            const index = state.products.findIndex(p => p.productId === productId);
            state.products.splice(index, 1);
        },
        UPDATE_QUANTITY(state, {productId, quantity}) {
            const index = state.products.findIndex(p => p.productId === productId);
            state[index].quantity = quantity;
        },
        CLEAR_CART(state, payload) {
            state.products = null
        }
    },
    actions: {
        async loadCart({commit}) {
            try {
                const res = await api(true).get("/user/cart");
                const cart = res.data.data;
                commit("SET_CART", cart);
            } catch (e) {

            }
        },
        async removeProduct({commit}, productId) {
            try {
                const res = await api(true).delete("/user/cart", {data: {productId}});
                const cart = res.data.data;
                commit("REMOVE_SINGLE_PRODUCT", productId);
            } catch (e) {

            }
        },
        async updateProductQuantity({commit}, {productId, quantity}) {
            try {
                const res = await api(true).put("/user/cart", {productId, quantity});
                const cart = res.data.data;
                commit("UPDATE_QUANTITY", productId);
            } catch (e) {

            }
        },
        async checkout({commit}) {
            try {
                const res = await api(true).post("/user/cart");
                const success = res.data.success;
                if (success) commit("CLEAR_CART");
            } catch (e) {

            }
        }
    },
    getters: {}
};
