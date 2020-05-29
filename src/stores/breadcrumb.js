export default {
    namespaced: true,
    state: {
        address: [
            {
                text: "主页",
                disabled: false,
                href: "/home"
            },
            {
                text: "个人中心",
                disabled: false,
                href: "/user"
            },
            {
                text: "地址",
                disabled: true,
                href: "/user/address"
            }
        ],
        cart: [
            {
                text: "主页",
                disabled: false,
                href: "/home"
            },
            {
                text: "用户中心",
                disabled: false,
                href: "/user"
            },
            {
                text: "购物车",
                disabled: true,
                href: "/user/cart"
            }
        ],
        order: [
            {
                text: "主页",
                disabled: false,
                href: "/home"
            },
            {
                text: "用户中心",
                disabled: false,
                href: "/user"
            },
            {
                text: "订单",
                disabled: true,
                href: "/user/order"
            }
        ],
        profile: [
            {
                text: "主页",
                disabled: false,
                href: "/home"
            },
            {
                text: "个人中心",
                disabled: false,
                href: "/user"
            },
            {
                text: "个人主页",
                disabled: true,
                href: "/user/profile"
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        address(state) {
            return state.address;
        },
        cart(state) {
            return state.cart;
        },
        order(state) {
            return state.order;
        },
        profile(state) {
            return state.profile;
        }
    }
};
