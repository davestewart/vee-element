import Vue from 'vue'
import App from './components/App.vue'

// element ui
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

// vee element
import VeeElement from 'vee-element'
import validator from './config/validator'

// config
import { useVee} from './config/site'

// plugins
Vue.use(ElementUI, { locale })

// for the demo, optionally include the vee validate plugin
if(useVee) {
  Vue.use(VeeElement, validator)
}

// additional config
Vue.config.devtools = true

// vue
new Vue({
  render: h => h(App)
}).$mount('#app')
