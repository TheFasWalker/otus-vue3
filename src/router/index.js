import {createRouter,createWebHistory} from 'vue-router'

import About from '../pages/About.vue'
import Catalog from '../pages/Catalog.vue';
import Home from '../pages/Home.vue';
import ItemPreview from '../pages/ItemPreview.vue';


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
            name:'catalog',
            component:Catalog
        },
        {
            path:'/catalog/:itemId',
            name:'itemPage',
            component:ItemPreview
        }
    ]
})
export default router;