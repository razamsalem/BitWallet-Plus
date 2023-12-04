import { createStore } from 'vuex'
import contact from './modules/contact'

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
    },
    modules: {
        contact,
    }
}
const store = createStore(storeOptions)
export default store
