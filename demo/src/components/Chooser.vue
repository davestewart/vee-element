<template>
  <el-form :model="store" ref="form" label-width="120px" class="demo-form">
    <el-form-item label="Validator">
      <el-radio-group v-model="store.driver" size="small">
        <el-radio-button label="async">Async Validator</el-radio-button>
        <el-radio-button label="vee">Vee Validate</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
import store from '../config/store'

export default {
  data () {
    return {
      store
    }
  }
}
</script>

<style>

</style>
