import get from 'object-get'
import { noop } from 'element-ui/src/utils/util'

function isEmpty (value) {
  return value === void 0 ||
    value === null ||
    value === ''
}

export default function (Vue, validator) {
  // setup
  const ElFormItem = Vue.options.components.ElFormItem
  const options = ElFormItem.options

  // flag
  options.veeValidate = true

  // props
  options.props.rules = String

  // computed
  options.computed.isRequired = function () {
    return /\brequired\b/.test(this.getRules())
  }

  // methods
  Object.assign(options.methods, {
    validate (trigger, callback = noop) {

      // this.validateDisabled = false
      if (trigger === 'blur' && !isEmpty(this.fieldValue)) {
        return
      }

      const rules = this.getRules()
      if (!rules) {
        callback()
      }

      // this.validateState = 'validating'
      validator
        .verify(this.fieldValue, rules)
        .then(({ valid, errors }) => {
          // variables
          const prop = this.prop
          const error = errors[0]
          const errorField = error ? error.replace('The {field}', 'This') : ''
          const errorForm = error ? error.replace('{field}', prop) : null
          const invalidFields = {
            [prop]: [{
              field: prop,
              message: errorForm
            }]
          }

          // update
          this.validateState = valid ? 'success' : 'error'
          this.validateMessage = errorField

          // respond
          callback(errorForm, invalidFields)
          this.elForm && this.elForm.$emit('validate', prop, !errors, errorForm)
        })
    },

    getRules () {
      return this.rules
        ? this.rules
        : this.prop
          ? get(this.form.rules, this.prop) || ''
          : ''
    },

    getFilteredRule () {
      return this.getRules()
    }
  })
}
