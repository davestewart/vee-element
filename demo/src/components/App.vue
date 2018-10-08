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
      <Chooser/>
    </div>

    <router-view></router-view>
  </main>
</template>

<script>
import Chooser from './Chooser'

export default {
  components: {
    Chooser
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
    max-width: 650px;
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

  .el-form > .el-form-item {
    margin-bottom: 30px;
  }

  .el-form-item__error {
    padding-left: 4px;
  }

  .el-checkbox-group {
    display: flex;
    flex-direction: column;
    margin-bottom: .5em;
  }

  .el-checkbox {
    display: inline-block;
    width: auto;
    height: 2em;
  }

  .el-checkbox:last-child {
    margin-bottom: .5em;
  }

  .el-checkbox + .el-checkbox {
    margin-left: 0 !important;
  }

  a, a:link, a:visited {
    color: #409EFF;
  }
</style>
