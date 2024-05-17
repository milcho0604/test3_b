import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookListView from '../views/BookListView.vue'
import BookEditView from '../views/BookEditView.vue'
import CounterView from '../views/CounterView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/book',
    name: 'BookListView',
    component: BookListView
  },
  {
    path: '/edit/:id',
    name: 'BookEditView',
    component: BookEditView
  },
  {
    path: '/counter',
    name: 'CounterView',
    component: CounterView
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
