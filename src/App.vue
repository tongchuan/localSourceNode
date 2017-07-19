<template>
  <div id="app">
  <!-- less start -->
<!--   <div id="header">
    color: #6c94be
  </div> -->
  <!-- less end -->



    <!-- <cheader /> -->
    <!-- <div class="container bg">
      <ul class="navbar">
        <router-link to="/vue">vue</router-link>
        <router-link to="/">home</router-link>
        <router-link to="/list">list</router-link>
        <router-link to="/form">form</router-link>
        </ul>
    </div> -->

    <router-view></router-view>
    <!-- <cfooter /> -->
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
    userShow (data) {
      console.log(data)
    }
  },
  created () {
    console.log('app')
    console.log(this)
  }
}
</script>
<style>
body, html,#app,.app{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  background: #d2d2d2;
}
.navbar a{
  padding: 3px 5px;
}
.bg{
  background: #fff;
}
.container{
  /*background: #fff;*/
  min-width: 960px;
}
</style>
