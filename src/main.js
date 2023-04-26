import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            counter:0
        }
    },
    mutations:{
        increment(state,payload){
            state.counter=state.counter+payload
        }
    },
    getters:{
        getCounter(state){
            return state.counter
        },
        getNormalizedCounter(state,getter){
            if(getter.getCounter >= 50){
                return 50
            }
            return getter.getCounter
        }
    }
})
const app=createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
