import { reactive } from 'vue';
import { createStore } from 'vuex';
// import user from './modules/users/index.js'

const store = createStore({
    state: reactive({
        user: null,
        exercise: null
    }),
    mutations: {
        setUser(state, payload) {
            state.user = payload ? payload.user : null
        },
    },
    actions: {},
    getters: {}
    
})


export default store;