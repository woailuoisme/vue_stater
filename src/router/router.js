import Vue from "vue";
import Router from "vue-router";
import User from "../views/user/User.vue";
import UserProfile from "../views/user/Profile";
import UserCart from "../views/user/Cart";
import UserOrder from "../views/user/Order";
import UserAddress from "../views/user/Address";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import ForgetPwd from "../views/auth/ForgetPwd";
import RestPwd from "../views/auth/RestPwd";
import About from "../views/About";
import Admin from "../views/Admin/Admin";
import AdminProduct from "../views/Admin/AdminProduct";
import AdminDashBoard from "../views/Admin/AdminDashBoard";
import AdminCategory from "../views/Admin/AdminCategory";
import AdminOrder from "../views/Admin/AdminOrder";
import AdminProductNew from "../views/Admin/AdminProductNew";
import AdminProductAllAttribute from "../views/Admin/ProductAllAttribute";
import Home from "../views/Home";
import ProductList from "../views/product/ProductList";
import ProductDetail from "../views/product/ProductDetail";
import Test from "../views/Test";
import NotFound from "../views/NotFound";
import OrderDetail from "../views/user/OrderDetail";
import Wishlist from "../views/user/Wishlist";
import Search from "../views/Search";
import Order from "../views/order/Order";
import Trade from "../views/trade/Trade"
import BarChartExample from "../components/shared/chart/BarChartExample";

Vue.use(Router);

const router = new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/chart",
      name: "chart",
      component: BarChartExample
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/forget_pwd",
      name: "forget_pwd",
      component: ForgetPwd
    },
    {
      path: "/reset_pwd",
      name: "reset_pwd",
      component: RestPwd
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home",
      name: "home_page",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/order",
      name: "order",
      component: Order
    },
    {
      path: "/trade",
      name: "trade",
      component: Trade
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    },
    {
      path: "/products",
      name: "product",
      component: ProductList
    },
    {
      path: "/products/:id",
      name: "product_detail",
      props: true,
      component: ProductDetail
    },

    {
      path: "/about",
      name: "about",
      component: About
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
          path: "wishlist",
          name: "user_wishlist",
          component: Wishlist
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
        },
        {
          path: "order_detail",
          name: "user_order_detail",
          component: OrderDetail
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
          component: AdminProductAllAttribute
        }
      ]
    },
  ]
});


export default router;
