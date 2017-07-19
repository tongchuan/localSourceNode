<template>
  <div>
    <div class="btn btn-default" v-on:click="dianji">点击</div>
    <ceshi3 />
  </div>
</template>
<script type="text/javascript">
import ceshi3 from '@/components/ceshi3'
export default {
  name: 'text1',
  data () {
    return {}
  },
  methods: {
    dianji () {
      this.$root.userShow
      // Vue.$emit('test1', 'ddd')
    }
  },
  components: {
    ceshi3
  },
  mounted () {
    console.log('ceshi2')
    console.log(this)
    // this.$emit('test1')
  }
}
</script>
<style type="text/css">
  
</style>
