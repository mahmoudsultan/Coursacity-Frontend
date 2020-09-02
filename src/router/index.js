import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Courses from '@/views/Courses'
import NewCourse from '@/views/NewCourse'
import Search from '@/views/Search'
import CourseDetails from '@/views/CourseDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/courses/new',
    name: 'NewCourse',
    component: NewCourse
  },
  {
    path: '/courses/:id',
    name: 'CourseDetails',
    component: CourseDetails
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    props: route => ({ query: route.query.q })
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
