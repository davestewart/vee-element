import Vue from 'vue'
import App from './components/App.vue'

// element ui
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

// vee element
import VeeElement from 'vee-element'
import validator from './config/validator'

// plugins
Vue.use(ElementUI, { locale })

// for the demo, optionally include the vee validate plugin
if(window.location.href.includes('vee')) {
  Vue.use(VeeElement, validator)
}

// vue
new Vue({
  render: h => h(App)
}).$mount('#app')
