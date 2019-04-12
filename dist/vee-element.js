/**
 * Bundle of: vee-element
 * Generated: 2018-10-10
 * Version: 1.0.0-alpha.4
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('object-get')) :
  typeof define === 'function' && define.amd ? define(['exports', 'object-get'], factory) :
  (factory((global.VeeElement = {}),global.get));
}(this, (function (exports,get) { 'use strict';

  get = get && get.hasOwnProperty('default') ? get['default'] : get;

  function noop () { }

  function isEmpty (value) {
    return value === void 0 ||
      value === null ||
      value === ''
  }

  var VeeDriver = function VeeDriver (validator) {
    this.validator = validator;
  };

  VeeDriver.prototype.validate = function validate (trigger, callback, driver) {
      var this$1 = this;
      if ( callback === void 0 ) callback = noop;
      if ( driver === void 0 ) driver = null;


    // this.validateDisabled = false
    if (trigger === 'blur' && !isEmpty(this.fieldValue)) {
      return
    }

    var rules = this.getRules();
    if (!rules) {
      callback();
    }

    // this.validateState = 'validating'
    var validator = driver.validator;
    validator
      .verify(this.fieldValue, rules)
      .then(function (ref) {
          var valid = ref.valid;
          var errors = ref.errors;

        // variables
        var prop = this$1.prop;
        var error = errors[0];
        var label = (this$1.label) ? this$1.label : this$1.prop;

        // generate error messages
        var theField = 'The {field} field';
        var thisField = validator.dictionary.getAttribute(validator.dictionary.locale, theField) || 'This field';
        var errorField = error
          ? error.replace(theField, thisField)
          : '';
        var errorForm = error
          ? error.replace('{field}', ("\"" + label + "\""))
          : null;
        var invalidFields = {};
        if (!valid) {
          invalidFields[prop] = [{
            field: prop,
            label: this$1.label,
            message: errorForm
          }];
        }

        // update
        this$1.validateState = valid ? 'success' : 'error';
        this$1.validateMessage = errorForm;

        // respond
        callback(errorForm, invalidFields);
        this$1.elForm && this$1.elForm.$emit('validate', prop, !errors, errorForm);
      });
  };

  VeeDriver.prototype.getRules = function getRules () {
    return this.rules
      ? this.rules
      : this.prop
        ? get(this.form.rules, this.prop) || ''
        : ''
  };

  VeeDriver.prototype.getFilteredRule = function getFilteredRule () {
    return this.getRules()
  };

  VeeDriver.prototype.isRequired = function isRequired () {
    var rules = this.getRules();
    return typeof rules === 'string'
      ? /\brequired\b/.test(rules)
      : !!get(rules, 'required')
  };

  var Async = function Async (options) {
    this.validate = options.methods.validate;
    this.getRules = options.methods.getRules;
    this.getFilteredRule = options.methods.getFilteredRule;
    this.isRequired = options.computed.isRequired;
  };

  function main (Vue, validator, asDefault) {
    if ( asDefault === void 0 ) asDefault = true;


    // form
    Vue.options.components.ElForm.options.props.driver = String;

    // form item
    var options = Vue.options.components.ElFormItem.options;

    // drivers
    var defaultDriver = asDefault
      ? 'vee'
      : 'async';
    var drivers = {
      async: new Async(options),
      vee: new VeeDriver(validator),
    };

    // props
    Object.assign(options.props, {
      rules: [Object, String, Array],
      driver: String
    });

    // computed
    options.computed.isRequired = function () {
      return this.getDriver().isRequired.apply(this)
    };

    // methods
    Object.assign(options.methods, {

      getDriver: function getDriver () {
        return drivers[this.form.driver || defaultDriver]
      },

      validate: function validate (trigger, callback) {
        var driver = this.getDriver();
        return driver.validate.apply(this, [trigger, callback, driver]) // pass driver as 3rd argument to get around binding
      },

      getRules: function getRules () {
        return this.getDriver().getRules.apply(this)
      },

      getFilteredRule: function getFilteredRule (trigger) {
        return this.getDriver().getFilteredRule.apply(this, [trigger])
      }
    });
  }

  exports.default = main;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
