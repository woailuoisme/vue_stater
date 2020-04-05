import store from "../stores/index";

export default (to, from, next) => {
  if (store.getters.user) {
    next();
  } else {
    next("/signin");
  }
};
