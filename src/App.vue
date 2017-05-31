<template>
  <div id="app">
    <cheader />
    <router-view></router-view>
    <cfooter />
  </div>
</template>
<script>
import cheader from '@/components/c_header'
import cfooter from '@/components/c_footer'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {

  },
  components: {
    cheader,
    cfooter
  },
  methods: {

  },
  created () {

  }
}
</script>
<style>
body, html,#app{
  padding: 0;
  margin: 0;
  border: 0;
}
</style>
