<template>
  <div id="app">
    <!-- <top /> -->
    <div class="container">
    <ul class="nav navbar-default nav-pills">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/news">新闻</router-link></li>
      
      <li><router-link to="/test">测试</router-link></li>
      
      <div class="collapse navbar-collapse">
        <p class="navbar-text" v-if="loginsin">您好，{{userStore.user.name}}, <a v-on:click="loginout" href="javascript:void(0)">退出</a></p>
        <p class="navbar-text" v-else><router-link to="/test">登录</router-link></p>
      </div>
    </ul>

    {{userStore}}
    </div>
    <router-view></router-view>
    <modal ref="modal" modal="modal"></modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_SIGNOUT } from './store/modules/userStore'
import modal from '@/components/modal2'
import top from '@/components/Top'
export default {
  data () {
    return {
    }
  },
  name: 'app',
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    }),
    loginsin () {
      if (this.userStore.user.id) {
        return false
      } else {
        return true
      }
    }
  },
  props: {
  },
  components: {
    modal,
    top
  },
  created () {
  },
  methods: {
    ...mapActions([USER_SIGNOUT]),
    loginout () {
      this.USER_SIGNOUT()
    }
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
