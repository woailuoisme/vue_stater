import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import meetup from "./meetup";
import share from "./share";
import category from "./category";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        auth,
        meetup,
        share,
        category
    }
})
