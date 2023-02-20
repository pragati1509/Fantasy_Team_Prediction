import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue"
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import UserDashboard from '../components/UserDashboard.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
import Success from '../components/Success.vue'
import Display from '../components/Display.vue'

import Batter from '../components/Batter.vue'
import Bowler from '../components/Bowler.vue'
import Allrounder from '../components/Allrounder.vue'
import Wicketkeeper from '../components/Wicketkeeper.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        name:"home",
        path:'/',
        component:Home
    },
    {
      name:'login',
      path:'/login',
      component:Login
    },
    {
      name:'register',
      path:'/register',
      component: Register
    },
    {
      name:'userdashboard',
      path: '/userdashboard',
      component: UserDashboard
    },
    {
      name:'admindashboard',
      path:'/admindashboard',
      component:AdminDashboard
    },
    {
      name:'batter',
      path:'/batter',
      component:Batter
    },
    {
      name:'bowler',
      path:'/bowler',
      component:Bowler
    },
    {
      name:'allrounder',
      path:'/allrounder',
      component:Allrounder
    },
    {
      name:'wicketkeeper',
      path:'/wicketkeeper',
      component:Wicketkeeper
    },
    {
      name:'success',
      path:'/success',
      component:Success
    },
    {
      name:'display',
      path:'/display',
      component:Display
    }
  ]
})

export default router
