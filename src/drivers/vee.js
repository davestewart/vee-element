import { get, isEmpty, noop } from '../utils'

export default class VeeDriver {

  constructor (validator) {
    this.validator = validator
  }

  validate (trigger, callback = noop, driver = null) {

    // this.validateDisabled = false
    if (trigger === 'blur' && !isEmpty(this.fieldValue)) {
      return
    }

    const rules = this.getRules()
    if (!rules) {
      callback()
    }

    const verifyOptions = {
      name: this.label,
    }

    // this.validateState = 'validating'
    const validator = driver.validator
    validator
      .verify(this.fieldValue, rules, verifyOptions)
      .then(({ valid, errors }) => {
        // variables
        const prop = this.prop
        const error = errors[0]

        // generate error messages
        const errorField = error || ''
        const errorForm = error || null
        const invalidFields = {}
        if (!valid) {
          invalidFields[prop] = [{
            field: prop,
            label: this.label,
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
  }

  getRules () {
    return this.rules
      ? this.rules
      : this.prop
        ? get(this.form.rules, this.prop) || ''
        : ''
  }

  getFilteredRule () {
    return this.getRules()
  }

  isRequired () {
    const rules = this.getRules()
    return typeof rules === 'string'
      ? /\brequired\b/.test(rules)
      : !!get(rules, 'required')
  }

}
