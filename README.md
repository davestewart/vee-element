# Vee Element

A Vue plugin for Element UI that enables the [Vee Validate](https://baianat.github.io/vee-validate) validation library to be used instead of Element's default [Async Validator](https://github.com/yiminghe/async-validator).

Using the Vee Validate driver allows you to set up rules in Element UI like this:

```js
{
  email: 'required|email',
  password: 'required|min:8|max:20'
}
```

## Demo

View the online demo at:

- [vee-element.netlify.com](https://vee-element.netlify.com)

To run the demo locally, see the demo folder:

- [/demo](demo)

## Setup

### Installation

To install in your own projects, run:

```shell
npm i -S vee-element
```

### Configuration

Vee Element is a Vue plugin. It needs to be installed after Element UI, and configured by passing in a Vee Validate instance.

```js
// import plugins
import ElementUI from 'element-ui'
import VeeValidate from 'vee-validate'
import VeeElement from 'vee-element'

// configure validator
const rules = {
  // add custom rules
}

const options = {
  // add custom options
}

const validator = new VeeValidate.Validator(rules, options)

// use plugins
Vue.use(ElementUI)
Vue.use(VeeElement, validator) 
```

## Usage

### Rules declaration

With the plugin installed, you can write Vee Validate style rules instead of Async Validator style rules:

```js
{
  email: 'required|email',
  password: 'required|min:8|max:20'
}
```

Note that Vee Element **does not support any of the Vee Validate directives**; validation is done **only** through rules passed in to either the Form or Form Item components via props.


### Forms

Adding rules to forms is exactly the same as with the original setup:

```vue
<el-form :model="values" :rules="rules">
  ...
</el-form>

<script>
export default {
  data () {
    return {
      values: {
        ...
      },
      rules: {
        email: 'required|email',
        password: 'required|min:8|max:20',
      }
    }
  }
}
</script>
```

### Form Items

Adding rules to Form Items will override the rules on the form:

```vue
<el-form :model="values" :rules="rules" ref="form">
  <el-form-item label="password" prop="password" :rules="rules.password">
    <el-input type="password" v-model.number="values.password" autocomplete="off"/>
  </el-form-item>
</el-form>
```

## Configuration


### Drivers

Vee Element allows you to switch between validators on the fly, by way of [drivers](src/drivers).

By default, installing the plugin configures Element UI to use Vee Validate. To reconfigure the plugin to stick with the default Async Validator, pass `false` as the third argument in the `use()` statement:

```js
Vue.use(VeeElement, validator, false)
```

To configure forms to *individually* to use different validators (for example, when upgrading a large site to Vee Validate, you may wish to go form-by-form) you can set the `driver` property of `ElForm` components:

```vue
<el-form :model="values" :rules="rules" driver="vee">
```

The possible values are `async` or `vee`.


### Rules

For the complete list of built-in rules, see the Vee Validate rules page:

- https://baianat.github.io/vee-validate/guide/rules.html

To add custom rules, see the Vee Validate custom rules page:

- https://baianat.github.io/vee-validate/guide/custom-rules.html

For an example of custom Vee Validator setup, see the demo:
 
- [demo/src/config/validator.js](./demo/src/config/validator.js)


## Limitations

Vee Element does not yet support dependent fields such as `confirmed` or `date_before`:

- https://github.com/baianat/vee-validate/issues/1628#issuecomment-427100704

This should be fixed in a subsequent Vee Validate release.

A workaround may be released in before this.
