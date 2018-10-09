import Vue from 'vue'
import App from './components/App.vue'
import { router } from './config/routes'

// element ui
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

// vee element
import VeeElement from 'vee-element'
import validator from './config/validator'

// plugins
Vue.use(ElementUI, { locale })
Vue.use(VeeElement, validator, true)

// additional config
Vue.config.devtools = true

// vue
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
