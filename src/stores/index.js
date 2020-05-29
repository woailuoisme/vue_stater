import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import meetup from "./meetup";
import share from "./share";
import category from "./category";
import cart from './cart'
import breadcrumb from "./breadcrumb";
import product from "./product";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        meetup,
        share,
        category,
        cart,
        breadcrumb,
        product
    }
})
