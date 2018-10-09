<template>
  <div class="navigation">
    <el-menu :router="true"
             :default-active="$route.path"
             class="el-menu-demo"
             mode="horizontal"
             @select="path => $router.push({path})">
      <el-menu-item index="/"><span>Home</span></el-menu-item>
      <el-menu-item index="/simple"><span>Simple</span></el-menu-item>
      <el-menu-item index="/complex"><span>Complex</span></el-menu-item>
      <!--<el-menu-item index="/localised"><span>Localised</span></el-menu-item>-->
      <li class="el-menu-item switch">
        <transition name="fade">
          <el-switch v-show="show" v-model="value" :inactiveText="label"/>
        </transition>
      </li>
    </el-menu>
  </div>
</template>

<script>
import store from '../config/store'

export default {
  data () {
    return {
      store,
      value: store.isVee,
    }
  },

  computed: {
    show () {
      return this.$route.path !== '/'
    },

    label () {
      return this.value ? 'Vee Validate' : 'Async Validator'
    },
  },

  watch: {
    value (value) {
      this.store.driver = value ? 'vee' : 'async'
    }
  }
}

</script>

<style lang="scss" scoped>
  .el-menu-item.switch {
    position: relative;
    float: right;

    .el-switch,
    .el-switch__label {
      line-height: 1.2em !important;
    }
  }
</style>
