<template>

  <FormWrapper v-bind="{model, rules}">

    <el-form-item label="Name" prop="name">
      <el-input v-model="model.name"/>
    </el-form-item>

    <el-form-item label="Comment" prop="comment">
      <el-input type="textarea" v-model="model.comment"/>
    </el-form-item>

    <el-form-item label="When" required>
      <el-col :span="11">
        <el-form-item prop="when.date">
          <el-date-picker type="date" placeholder="Date" v-model="model.when.date" style="width: 100%;"/>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2" style="text-align: center">-</el-col>
      <el-col :span="11">
        <el-form-item prop="when.time">
          <el-time-picker type="fixed-time" placeholder="Time" v-model="model.when.time" style="width: 100%;"/>
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item label="Region" prop="region">
      <el-select v-model="model.region">
        <el-option label="North" value="north"/>
        <el-option label="South" value="south"/>
      </el-select>
    </el-form-item>

    <el-form-item label="Resource" prop="resource">
      <el-radio-group v-model="model.resource">
        <el-radio label="Sponsorship"/>
        <el-radio label="Venue"/>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="Type" prop="type" required>
      <el-checkbox-group v-model="model.type">
        <el-checkbox label="Online activities" name="type"/>
        <el-checkbox label="Offline activities" name="type"/>
        <el-checkbox label="Indoor activities" name="type"/>
        <el-checkbox label="Outdoor activities" name="type"/>
      </el-checkbox-group>
    </el-form-item>

  </FormWrapper>

</template>

<script>
import Form from '../components/Form'

export default {

  extends: Form,

  data () {
    return {
      model: {
        name: '',
        comment: '',
        when: {
          date: '',
          time: '',
        },
        region: '',
        resource: '',
        type: [],
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
  name: 'required|alpha|min:2|max:5',
  comment: { required: true, alpha: true },
  when: {
    date: 'required',
    time: 'required',
  },
  region: 'required',
  resource: 'required',
  type: 'picked:2,3',
}

const element = {
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  comment: [
    { required: true, message: 'Please input comment', trigger: 'blur' }
  ],
  when: {
    date: [
      { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
    ],
    time: [
      { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
    ],
  },
  region: [
    { required: true, message: 'Please select zone', trigger: 'change' }
  ],
  resource: [
    { required: true, message: 'Please select resource', trigger: 'change' }
  ],
  type: [
    { type: 'array', min: 2, max: 3, required: true, message: 'Please select between 2 and 3 types', trigger: 'change' }
  ],
}

</script>

<style scoped>

</style>
