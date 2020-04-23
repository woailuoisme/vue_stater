export default {
    state: {
        loading: false,
        error: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setError(state, payload) {
            state.error = payload;
        }
    },
    actions: {},
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isError(state) {
            return !!state.error;
        },
        errorMsg(state) {
            return state.error;
        }
    }
};
