export default {
    namespaced: true,
    state: {
        cart: []
    },
    mutations: {
        SET_CART(state, payload) {
            state.cart = payload;
        },
        ADD_TO_CART(state, payload) {
            const product = state.cart.find(c => c.id === payload.productId);
            if (product) {
                product.quantity = payload.quantity;
            } else {
                state.cart.push(payload)
            }
        },
        REMOVE_PRODUCT(state, productId) {
            const index = state.cart.findIndex(c => c.id === productId);
            state.cart.splice(index, 1);
        },
        UPDATE_QUANTITY(state, payload) {
            const product = state.cart.find(c => c.id === payload.productId);
            product.quantity = payload.quantity;
        },
        CLEAR_CART(state) {
            state.cart = null;
        }
    },
    actions: {
        loadCart({commit}) {
            commit("SET_CART", [
                {
                    id: 3,
                    name: "Frozen Yogurt",
                    imageUrl:
                        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
                    quantity: 1,
                    price: 100.3
                },
                {
                    id: 5,
                    name: "Frozen Yogurt",
                    imageUrl:
                        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
                    quantity: 2,
                    price: 200.2
                },
                {
                    id: 4,
                    name: "Frozen Yogurt",
                    imageUrl:
                        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
                    quantity: 3,
                    price: 300.3
                }
            ]);
        },
        updateQuantity({commit}, payload) {
            commit("UPDATE_QUANTITY", {
                productId: payload.productId,
                quantity: payload.quantity
            });
        },
        removeProduct({commit}, productId) {
            commit("REMOVE_PRODUCT", productId);
        },
        checkOut({commit}) {
            commit("CLEAR_CART");
        },
        addToCart({commit}, payload) {
            commit("ADD_TO_CART");
        },
    },
    getters: {
        hasData(state) {
            console.log(state.cart, !!state.cart)
            return !!state.cart.length;
        },
        getCart(state) {
            return [...state.cart];
        },
        getDisplayCart(state) {
            return state.cart.map(p => {
                p.total = p.quantity * p.price;
                return p;
            });
        },
        getCartTotal(state) {
            const total = state.cart.reduce((a, c) => (a += c.quantity * c.price), 0);
            return Math.round(total * 100) / 100;
        }
    }
};
