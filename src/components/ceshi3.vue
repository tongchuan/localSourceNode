<template>
  <div>
    <div class="btn btn-default" v-on:click="dianji">点击3</div>
  </div>
</template>
<script type="text/javascript">
// import Vue from 'vue'
export default {
  name: 'text1',
  data () {
    return {}
  },
  methods: {
    dianji () {
      this.$root.$emit('test1', 'ddd')
      // Vue.$emit('test1', 'ddd')
    }
  },
  mounted () {
    console.log('ceshi3')
    console.log(this)
    // this.$emit('test1')
  }
}
</script>
<style type="text/css">
  
</style>
