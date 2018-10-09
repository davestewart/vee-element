<template>

  <FormWrapper v-bind="{model, rules}">

    <el-form-item label="Text" prop="text">
      <el-input v-model="model.text"/>
    </el-form-item>

  </FormWrapper>

</template>

<script>
import Form from '../components/Form'

export default {

  beforeCreate () {
    this.template = '<div>Hello</div>'
  },

  extends: Form,

  data () {
    return {
      model: {
        text: '',
      }
    }
  },

  computed: {
    rules () {
      return this.store.isVee ? vee : element
    },
  }

}

const vee = {
  text: 'required|alpha|min:2|max:5',
}

const element = {
  text: [
    { required: true, message: 'Please input text', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5 characters', trigger: 'blur' }
  ],
}

</script>

<style scoped>

</style>
