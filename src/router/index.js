import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Students from '../views/Students.vue';
import StudentDetails from '../views/StudentDetails.vue';

const routes = [
  {
    path: '/',
    name: 'students',
    component: Students
  },
  {
    path: '/studentDetails',
    name: 'studentDetails',
    component: StudentDetails
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
