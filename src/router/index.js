import Vue from "vue"
import VueRouter from "vue-router"

import App from "../App"
const Home = () =>import('../views/home')
const Item = () =>import('../views/item')
const Score = () =>import('../views/score')


Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        component:App,
        children:[
            {
                path:"",
                component:Home
            },
            {
                path:"/item",
                component:Item
            },
            {
                path:"/score",
                component:Score
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router