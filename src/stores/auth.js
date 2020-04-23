// import auth from "../api/auth.service";
import authService from "../api/auth.service";
import router from "../router/router";
import api from '../api/api'
export default {
    namespaced: true,
    state: {
        user: null,
        token: ''
    },
    mutations: {
        LOGOUT_USER(state) {
            state.user = {};
            state.token = '';
            window.localStorage.user = JSON.stringify({});
        },
        SET_CURRENT_USER(state, user) {
            state.user = user;
            window.localStorage.user = JSON.stringify(user);
        }
    },
    actions: {
        async login({commit, dispatch}, loginInfo) {
            try {
                let response = await api().post("/auth/login", loginInfo);
                let user = response.data.data;
                commit("SET_CURRENT_USER", user);
                return user;
            } catch {
                return {
                    error: "Email/password combination was incorrect.  Please try again."
                };
            }
        },
        async register({commit, dispatch}, registerInfo) {
            try {
                let response = await api().post("/auth/signup", registerInfo);
                let user = response.data.data;
                commit("SET_CURRENT_USER", user);
                return user;
            } catch {
                return {error: "There was an error.  Please try again."};
            }
        },
        async logout({commit}) {
            try {
                let response = await api(true).post("/auth/logout");
                commit("LOGOUT_USER");
                return {message: "user logout successfully"};
            } catch {
                return {error: "There was an error.  Please try again."};
            }
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        userIsAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
};
