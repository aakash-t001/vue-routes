import {createRouter,createWebHistory} from 'vue-router'
import NotFound from '../views/NotFound'
import HomePage from "../views/HomePage";


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component:{
                users:()=> import('../views/UserPage'),
                default: HomePage,
            }
        },
        {
            path:'/user',
            name:'user',
            component:()=> import('../views/UserPage'),
            children:[
                {
                    path:'/user/:id',
                    name:'user-details',
                    component:()=>import('../views/UserDetails'),
                    props:true
                }
            ]
        },
        {
            path:'/more-users',
            redirect:'/user',

        },
        {
            path: '/:catchAll(.*)',
            name:'NotFound',
            component:NotFound,
        }

    ]
})
export default router