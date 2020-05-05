export default {
    state: {
        cart: [
            {
                id: 1,
                title: "watch",
                quantity: 2,
                price: 224.2
            },
            {
                id: 2,
                title: "phone",
                quantity: 1,
                price: 4399.9
            },
            {
                id: 3,
                title: "phone10",
                quantity: 5,
                price: 9999.8
            }
        ]
    },
    mutations: {
        SET_CART(state, payload) {
            state.cart = payload;
        },
        REMOVE_PRODUCT(state, productId) {
            state.cart.findIndex(c => c.id === productId);
            cart.splice(index, 1);
        },
        UPDATE_QUANTITY(state, {productID, quantity}) {
            const product = state.cart.find(c => c.id === productID);
            product.quantity = quantity;
        },
        CLEAR_CART(state) {
            state.cart = null;
        }
    },
    actions: {
        // removeProduct({commit})
    },
    getters: {
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
            return state.cart.reduce((a, c) => a + c.quantity * c.price, 0);
        }
    }
};
