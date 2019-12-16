import VeeDriver from './drivers/vee'
import AsyncDriver from './drivers/async'

export default function (Vue, validator, asDefault = true) {

  // form
  Vue.options.components.ElForm.options.props.driver = String

  // form item
  const ElFormItem = Vue.options.components.ElFormItem

  // drivers
  const defaultDriver = asDefault
    ? 'vee'
    : 'async'
  const drivers = {
    async: new AsyncDriver(ElFormItem.options),
    vee: new VeeDriver(validator),
  }

  // props
  Vue.options.components.ElFormItem = ElFormItem.extend({
    props: {
      rules: [Object, String, Array],
      driver: String
    },

    computed: {
      isRequired () {
        return this.selectedDriver.isRequired.apply(this)
      },

      selectedDriver () {
        return drivers[this.form.driver || defaultDriver]
      }
    },

    methods: {
      validate (trigger, callback) {
        const driver = this.selectedDriver
        return driver.validate.apply(this, [trigger, callback, driver]) // pass driver as 3rd argument to get around binding
      },

      getRules () {
        return this.selectedDriver.getRules.apply(this)
      },

      getFilteredRule (trigger) {
        return this.selectedDriver.getFilteredRule.apply(this, [trigger])
      }
    }
  })
}
