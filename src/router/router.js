import Vue from "vue";
import Router from "vue-router";
import AuthGuard from "./auth.guard";
import User from "@/views/user/User.vue";
import UserProfile from "@/views/user/Profile";
import UserCart from "@/views/user/Cart";
import UserOrder from "@/views/user/Order";
import UserAddress from "@/views/user/Address";
import Meetups from "@/views/meetup/Meetups";
import Meetup from "@/views/meetup/Meetup";
import MeetupCreate from "@/views/meetup/CreateMeetup";
import Signin from "@/views/auth/Signin";
import Signup from "@/views/auth/Signup";
import About from "@/views/About";
import Admin from "../views/Admin/Admin";
import AdminProduct from "../views/Admin/AdminProduct";
import AdminDashBoard from "../views/Admin/AdminDashBoard";
import AdminCategory from "../views/Admin/AdminCategory";
import AdminOrder from "../views/Admin/AdminOrder";
import AdminProdutSku from "../views/Admin/AdminProdutSku";
import AdminProductNew from "../views/Admin/AdminProductNew";
import Home from "../views/Home";
import ProductList2 from "../views/product/ProductList2";
import ProductDetail from "../views/product/ProductDetail";
import Test from "../views/Test"

Vue.use(Router);

export default new Router({
    mode: "history",
    // base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/test",
            name: "Test",
            component: Test
        },
        {
            path: "/product",
            name: "product",
            component: ProductList2
        },
        {
            path: "/product_detail",
            name: "product_detail",
            component: ProductDetail
        },

        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About
        },

        {
            path: "/signin",
            name: "signin",
            component: Signin
        },
        {
            path: "/signup",
            name: "signup",
            component: Signup
        },

        {
            path: "/user",
            component: User,
            // beforeEnter: AuthGuard,
            children: [
                {
                    path: "",
                    name: "user_home",
                    component: UserProfile
                },
                {
                    // 当 /user//profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: "profile",
                    name: "user_profile",
                    component: UserProfile
                },
                {
                    path: "cart",
                    name: "user_cart",
                    component: UserCart
                },
                {
                    path: "address",
                    name: "user_address",
                    component: UserAddress
                },
                {
                    path: "order",
                    name: "user_order",
                    component: UserOrder
                }
            ]
        },
        {
            path: "/admin",
            component: Admin,
            // beforeEnter: AuthGuard,
            children: [
                {
                    path: "",
                    name: "admin",
                    component: AdminDashBoard
                },
                {
                    path: "dashboard",
                    name: "admin_dashboard",
                    component: AdminDashBoard
                },
                {
                    path: "product",
                    name: "admin_product",
                    component: AdminProduct
                },
                {
                    path: "product_new",
                    name: "admin_product_new",
                    component: AdminProductNew
                },
                {
                    path: "category",
                    name: "admin_category",
                    component: AdminCategory
                },

                {
                    path: "order",
                    name: "admin_order",
                    component: AdminOrder
                },
                {
                    path: "product_sku",
                    name: "admin_product_sku",
                    component: AdminProdutSku
                }
            ]
        },

        {
            path: "/meetups",
            name: "meetups",
            component: Meetups
        },
        {
            path: "/meetups/:id",
            name: "Meetup",
            props: true,
            component: Meetup
        },
        {
            path: "/meetup/new",
            name: "CreateMeetup",
            component: MeetupCreate
            // beforeEnter: AuthGuard
        }
    ]
});
