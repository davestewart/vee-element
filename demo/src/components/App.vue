<!--suppress ALL -->
<template>
  <main id="app">

    <header class="header">
      <h1>Vee Element Demo</h1>
      <p>
        <a href="https://github.com/davestewart/vee-element">Vee Element</a> brings the simplicity of
        <a href="https://baianat.github.io/vee-validate/">Vee Validate</a> to
        <a href="https://element.eleme.io/#/en-US">Element UI</a> forms.
      </p>
    </header>

    <div class="header">
      <el-form :model="validator" ref="form" label-width="120px" class="demo-form">
        <el-form-item label="Validator">
          <el-radio-group @change="use" v-model="validator.use" size="small">
            <el-radio-button label="async">Async Validator</el-radio-button>
            <el-radio-button label="vee">Vee Validate</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <main>
      <ExampleForm :rules="rules"/>
    </main>
  </main>
</template>

<script>
import ExampleForm from './Form'
import rules from '../config/rules'
import { useVee } from '../config/site'

export default {
  components: {
    ExampleForm
  },

  data () {
    return {
      validator: {
        use: useVee ? 'vee' : 'async'
      }
    }
  },

  computed: {
    rules () {
      return this.$options.components.ElFormItem.options.veeValidate
        ? rules.vee
        : rules.element
    }
  },

  mounted () {
    console.log(this.rules)
  },

  methods: {
    use () {
      setTimeout(() => {
        window.location.href = '?' + this.validator.use
      }, 350)
    }
  }
}
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    padding: 20px;
    font-family: 'Source Sans Pro', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #app {
    max-width: 800px;
    margin: auto;
  }

  h1, h2, h3 {
    font-weight: 400;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .header {
    margin-bottom: 2em;
  }

  header.header {
    margin-left: 130px;
  }

  p {
    font-size: 1.2em;
  }

  .el-checkbox-group {
    display: flex;
    flex-direction: column;
  }

  .el-checkbox {
    display: inline-block;
    width: auto;
  }

  .el-checkbox + .el-checkbox {
    margin-left: 0 !important;
  }

  a, a:link, a:visited {
    color: #409EFF;
  }
</style>
