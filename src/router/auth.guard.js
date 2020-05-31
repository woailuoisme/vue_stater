import vue from "../main";

const authAdmin = (to, from, next) => {
  if (
    vue.$store.auth.getters.userIsAuthenticated &&
    ["admin", "content", "super"].includes(vue.$store.auth.getters.role)
  ) {
    next();
  } else {
    next({ path: "/login" });
  }
};

const auth = (to, from, next) => {
  if (vue.$store.auth.getters.userIsAuthenticated) {
    next();
  } else {
    next({ path: "/login" });
  }
};

export default {
  auth,
  authAdmin
};
