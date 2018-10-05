# Vee Element

A Vue plugin for Element UI that enables the [Vee Validate](https://baianat.github.io/vee-validate) validation library to be used instead of Element's default [Async Validator](https://github.com/yiminghe/async-validator).

This allows you to set up rules in Element UI like this:


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

## Installation

To install in your own projects:

```shell
npm i -S vee-element
```

## Setup

Vee Element is a Vue plugin. It needs to be installed after Element UI, and configured by passing in a Vee Validate instance:

```js
// import plugins
import ElementUI from 'element-ui'
import VeeValidate from 'vee-validate'
import VeeElement from './vee-element'

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

See the [demo](./demo/src/main.js) for example code using custom rules.

## Usage

### Rules declaration

With the plugin installed, you can now use Vee Validate style rules instead of Async Validator style rules:

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
<el-form :model="values" :rules="rules" ref="form">
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

## Custom rules

The next minor release of Vee Element will come with a collection of useful custom rules.

**Watch this space!**

## Configuration

For the complete list of built-in rules, see the Vee Validate rules page:

- https://baianat.github.io/vee-validate/guide/rules.html

To add custom rules, see the Vee Validate custom rules page:

- https://baianat.github.io/vee-validate/guide/custom-rules.html


## Limitations

Vee Element does not yet support dependent fields such as `confirmed` or `date_before`:

- https://github.com/baianat/vee-validate/issues/1628#issuecomment-427100704

This should be fixed in a subsequent Vee Validate release.

A workaround may be released in before this.
