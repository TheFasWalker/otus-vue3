import {createRouter,createWebHistory} from 'vue-router'

import About from '../pages/About.vue'
import Catalog from '../pages/Catalog.vue';
import Home from '../pages/Home.vue';
import ItemPreview from '../pages/ItemPreview.vue';
import checkToken from '../helpers/checkToken';
import ErrorPage from '../pages/ErrorPage.vue';
import Login from '../pages/Login.vue';

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'',
            name:'home',
            component:Home
        },
        {
            path:'/about',
            name:'about',
            component:About
        },
        {
            path:'/catalog',
            children:[
                {   
                    path:'/',
                    name:'catalog',
                    component:Catalog
                },
                {
                    path:':itemId',
                    name:'itemPage',
                    component:ItemPreview
                }
            ]
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/:pathMatch(.*)*',
            name:'not-found',
            component:ErrorPage
        }

    ]
})
router.beforeEach((to,from,next)=>{
    const token = (checkToken())
        if(!token && to.name !=='login' && to.name != 'not-found'){
            alert('access denied. need bearer token')
            return next({name:'login'})
        }
        return next()
})
export default router;