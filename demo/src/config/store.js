import Vue from 'vue'

const localStorage = window.localStorage

export default new Vue({
  data () {
    return {
      driver: localStorage.getItem('driver') || 'async'
    }
  },

  computed: {
    isVee () {
      return this.driver === 'vee'
    }
  },

  watch: {
    driver (value) {
      localStorage.setItem('driver', value)
    }
  }

})
