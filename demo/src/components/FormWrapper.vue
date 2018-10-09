<template>
  <el-form ref="form"
           :driver="store.driver"
           :model="model"
           :rules="rules"
           label-width="120px"
           class="demo-form"
  >
    <el-form-item v-if="status">
      <el-alert
        show-icon
        size="small"
        :title="status"
        :closable="!errors"
        :type="errors ? 'error' : 'success'"
        @close="status = ''"
      />
    </el-form-item>

    <slot></slot>

    <el-form-item>
      <el-button @click="submit" type="primary">Submit</el-button>
      <el-button @click="reset">Reset</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import store from '../config/store'

export default {
  props: {
    rules: [Object, Array],
    model: Object
  },

  data () {
    return {
      store,
      errors: null,
      status: '',
    }
  },

  methods: {
    submit () {
      this.$refs.form
        .validate((valid, errors) => {
          if (valid) {
            this.reset()
            this.status = 'Your data has been submitted, thank you!'
            this.errors = null
          } else {
            this.status = 'Your data has errors; please correct them and submit again'
            this.errors = Object.keys(errors).map(key => errors[key][0].message)
            console.log(this.errors)
            return false
          }
        })
    },

    reset () {
      this.$refs.form.resetFields()
      this.errors = null
      this.status = ''
    }
  }
}

</script>

<style lang="scss">

</style>
