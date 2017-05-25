<template>
  <div id="app">
    <top />
    <router-view></router-view>
    <modal ref="modal" modal="modal"></modal>
  </div>
</template>

<script>
import modal from '@/components/modal2'
import top from '@/components/Top'
export default {
  data () {
    return {
    }
  },
  name: 'app',
  computed: {
  },
  props: {
  },
  components: {
    modal,
    top
  },
  created () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body, html{
  padding: 0;
  margin: 0;
  border: 0;
}

</style>
