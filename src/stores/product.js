import api from '../api/api'
import path from 'path'
import fs from 'fs'

export default {
    state: {
        loading: false,
        error: null,
        products: JSON.parse(fs.readFileSync('../_data/products.json')),
        product: JSON.parse(fs.readFileSync('../_data/product.json'))
    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.loading = payload;
        },
        SET_PRODUCT(state, payload) {
            state.error = payload;
        }
    },
    actions: {
        async loadProducts({commit}) {

            // const res = await api().get('/product')
            // const products = res.data.data;
            // commit('SET_PRODUCTS')
        },
        async loadProduct({commit}, productId) {
            const res = await api().get(`/product/${productId}`)
            const products = res.data.data;
            commit('SET_PRODUCT')
        }
    },
    getters: {
        getProducts(state) {
            return [...state.products]
        },
        getProduct(state) {
            return [...state.product]
        }
    }
};
