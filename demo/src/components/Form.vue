<!--suppress CheckEmptyScriptTag -->
<template>
  <el-form :model="form" :rules="rules" ref="form" label-width="120px" class="demo-form">

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

    <el-form-item label="Name" prop="name">
      <el-input v-model="form.name"/>
    </el-form-item>

    <el-form-item label="Comment" prop="comment">
      <el-input type="textarea" v-model="form.comment"/>
    </el-form-item>

    <el-form-item label="When" required>
      <el-col :span="11">
        <el-form-item prop="when.date">
          <el-date-picker type="date" placeholder="Date" v-model="form.when.date" style="width: 100%;"/>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2" style="text-align: center">-</el-col>
      <el-col :span="11">
        <el-form-item prop="when.time">
          <el-time-picker type="fixed-time" placeholder="Time" v-model="form.when.time" style="width: 100%;"/>
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item label="Zone" prop="region">
      <el-select v-model="form.region">
        <el-option label="Zone one" value="shanghai"/>
        <el-option label="Zone two" value="beijing"/>
      </el-select>
    </el-form-item>

    <el-form-item label="Resource" prop="resource">
      <el-radio-group v-model="form.resource">
        <el-radio label="Sponsorship"/>
        <el-radio label="Venue"/>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="Type" prop="type" required>
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="Online activities" name="type"/>
        <el-checkbox label="Offline activities" name="type"/>
        <el-checkbox label="Indoor activities" name="type"/>
        <el-checkbox label="Outdoor activities" name="type"/>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submit()">Create</el-button>
      <el-button @click="reset()">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    rules: Object
  },

  data () {
    return {
      status: '',
      errors: '',
      form: {
        name: '',
        region: '',
        when: {
          date: '',
          time: '',
        },
        type: [],
        resource: '',
        comment: ''
      },
    }
  },

  methods: {
    submit () {
      let form = this.$refs.form
      console.log(form)
      form
        .validate(valid => {
          if (valid) {
            this.status = 'Your data has been submitted, thank you!'
            this.errors = false
            this.reset()
          } else {
            this.status = 'Your data has errors; please correct them and submit again'
            this.errors = true
            return false
          }
        })
    },
    reset () {
      this.$refs.form.resetFields()
    }
  }

}
</script>

<style scoped>

</style>
