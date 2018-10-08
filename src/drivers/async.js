export default class Async {
  constructor (options) {
    this.validate = options.methods.validate
    this.getRules = options.methods.getRules
    this.getFilteredRule = options.methods.getFilteredRule
    this.isRequired = options.computed.isRequired
  }
}
