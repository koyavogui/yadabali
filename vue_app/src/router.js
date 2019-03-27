import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Registration from "./views/Registration"
import Panel from "./views/Panel"
import Recette from "./views/Recette"
import AjoutRecette from "./views/AjoutRecette"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path : '/panel',
      name : 'panel',
      component : Panel
    },
    {
      path : '/Recette',
      name : 'recette',
      component : Recette
   },
   {
     path : '/ajoutrecette',
     name : 'ajoutrecette',
     component : AjoutRecette
   }
  ]
})
