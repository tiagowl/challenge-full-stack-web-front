import { createRouter, createWebHistory } from 'vue-router'
import Students from '../views/Students.vue';
import StudentDetails from '../views/StudentDetails.vue';
import StudentUpdate from '../views/StudentUpdate.vue';

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
    path: '/studentUpdate/:id',
    name: 'updateStudent',
    component: StudentUpdate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
