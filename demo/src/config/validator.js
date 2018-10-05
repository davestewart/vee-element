import VeeValidate from 'vee-validate'

const Validator = VeeValidate.Validator

const validations = {}

const options = {}

export default new VeeValidate.Validator(validations, options)

Validator.extend('picked', {
  validate (data, args) {
    const min = Number(args[0])
    const max = Number(args[1])
    const valid = args.length === 1
      ? data.length >= min
      : data.length >= min && data.length <= max
    return {
      valid,
      data
    }
  },
  getMessage (field, params, value) {
    const [min, max] = params
    return params.length === 1
      ? `The {field} field requires at least ${min} item${min > 1 ? 's' : ''}`
      : `The {field} field requires between ${min} and ${max} items`
  }
})
