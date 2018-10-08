import store from '../config/store'

export default {
  data () {
    return {
      store,
      errors: null,
      status: '',
      values: {}
    }
  },

  rules () {
    return {}
  },

  mounted () {
    console.log(this.rules)
  },

  methods: {
    submit () {
      let form = this.$refs.form
      form
        .validate((valid, errors) => {
          if (valid) {
            this.reset()
            this.status = 'Your data has been submitted, thank you!'
            this.errors = false
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
