import AuthService from "../api/auth.service";
import toast from '../utils/toast'

export default {
  namespaced: true,
  state: {
    user: window.localStorage.user || {}
  },
  mutations: {
    RESET_USER(state) {
      state.user = {};
      state.token = "";
      window.localStorage.user = JSON.stringify({});
    },
    SET_USER(state, user) {
      state.user = user;
      window.localStorage.user = JSON.stringify(user);
    }
  },
  actions: {
    async login({ commit }, loginInfo) {
      try {
        let response = await AuthService.login(loginInfo);
        let user = response.data.data;
        commit("SET_USER", user);
        toast.success('用户登录成功')
        return user;
      } catch {
          toast.success('Email/password combination was incorrect.  Please try again.')
        return {
          error: "Email/password combination was incorrect.  Please try again."
        };
      }
    },
    async register({ commit }, registerInfo) {
      try {
        let response = await AuthService.register(registerInfo);
        let user = response.data.data;
        commit("SET_USER", user);
        return user;
      } catch {
        return { error: "There was an error.  Please try again." };
      }
    },
    async logout({ commit }) {
      try {
        let response = await AuthService.logout();
        commit("RESET_USER");
        return { message: "user logout successfully" };
      } catch {
        return { error: "There was an error.  Please try again." };
      }
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    token(state) {
      return state.user ? state.user.token : "";
    },
    role(state) {
      return state.user ? state.user.role : "";
    },
    userIsAuthenticated(state) {
      console.log(state.user)
      return !!state.user
    }
  }
};
