import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import SimpleForm from '../views/SimpleForm'
import ComplexForm from '../views/ComplexForm'

function route (path, component) {
  return { path, component }
}

const routes = [
  route('/', Home),
  route('/simple', SimpleForm),
  route('/complex', ComplexForm),
]

Vue.use(VueRouter)
export const router = new VueRouter({
  routes
})
