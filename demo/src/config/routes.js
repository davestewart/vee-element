import Vue from 'vue'
import VueRouter from 'vue-router'

import ComplexForm from '../views/ComplexForm'

function route (path, component) {
  return { path, component }
}

const routes = [
  route('/', ComplexForm)
]

Vue.use(VueRouter)
export const router = new VueRouter({
  routes
})
