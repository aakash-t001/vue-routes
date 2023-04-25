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
        increment(state){
            state.counter++
        }
    }
})
const app=createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
