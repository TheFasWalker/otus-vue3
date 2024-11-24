import {createRouter,createWebHistory} from 'vue-router'

import About from '../pages/About.vue'
import Catalog from '../pages/Catalog.vue';
import Home from '../pages/Home.vue';
import ItemPreview from '../pages/ItemPreview.vue';
import checkToken from '../helpers/checkToken';


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
        }
    ]
})
router.beforeEach((to,from,next)=>{
    const token = (checkToken('bearerToken'))
        if(!token && to.name !=='home'){
            return next({name:'home'})
        }
        return next()
})
export default router;