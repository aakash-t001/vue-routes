import {createRouter,createWebHistory} from 'vue-router'
import NotFound from '../views/NotFound'


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'HomePage',
            component:import('../views/HomePage')
            // components:{                    //This is use for the Called Home page in other comp                                                    like users
            //     users: ()    => import('../views/UserPage'),
            //     default: () => import('../views/HomePage')
            // }
        },
        {
            path:'/user',
            name:'UserPage',
            component:()=> import('../views/UserPage'),
            // beforeEnter(to){     //This is use for the when the user is check condition then                                             redirect another page
            //     alert('Please login first')
            //     if(to.name !=='HomePage'){
            //         return '/'
            //     }
            // },
            children:[
                {
                    path:'/user/:id',
                    name:'user-details',
                    component:()=>import('../views/UserDetails'),
                    props:true
                },
            ]
        },
        {
            path:'/user-login-view',
            name:'UserLoginView',
            component:()=>import('../views/UserLoginView'),
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
// router.beforeEach((to) =>{
//     if(to.name !=='HomePage'){
//         return '/'
//     }
//     // return'/'       //its showing error and stop the executing beacause its already a home page then it                     will not redirect
// })

// router.beforeResolve((to,from)=>{     //this is use for url coming from and going to
//     console.log('User Authenticated')
//     console.log('Coming From',from.path)
//     console.log('Going to:',to.path)
// })

// router.beforeEach(()=>{
//     console.log('Before Route Loaded')
// })
// router.beforeEach(()=>{
//     console.log('After Route Loaded ,Before Navigation')
// })
// router.afterEach(()=>{
//     console.log('After Navigation')
// })
export default router