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

    // this.validateState = 'validating'
    const validator = driver.validator
    validator
      .verify(this.fieldValue, rules)
      .then(({ valid, errors }) => {
        // variables
        const prop = this.prop
        const error = errors[0]
        const label = (this.label) ? this.label : this.prop

        // generate error messages
        const theField = 'The {field} field'
        const thisField = validator.dictionary.getAttribute(validator.dictionary.locale, theField) || 'This field'
        const errorField = error
          ? error.replace(theField, thisField)
          : ''
        const errorForm = error
          ? error.replace('{field}', `"${label}"`)
          : null
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
        this.validateMessage = errorForm

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
