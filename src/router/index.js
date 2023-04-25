import {createRouter,createWebHistory} from 'vue-router'
import NotFound from '../views/NotFound'


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'HomePage',
            components:{
                users: ()    => import('../views/UserPage'),
                default: () => import('../views/HomePage')
            }
        },
        {
            path:'/user',
            name:'UserPage',
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