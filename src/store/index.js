import { createStore } from 'vuex'

const storeOptions = {
    strict: true,
    state() {
        return {
            count: 21
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {
        count(state) { return state.count }
    }
}
const store = createStore(storeOptions)
export default store
