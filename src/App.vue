<template>
  <div id="app">
    <!-- <top /> -->
    <div class="container">
    <ul class="nav navbar-default nav-pills">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/news">新闻</router-link></li>
      <li><router-link to="/test">测试</router-link></li>
      <li><router-link to="/list">列表</router-link></li>
      <div class="collapse navbar-collapse navbar-user">
        <p class="navbar-text navbar-left" v-if="userStore.user.id">{{loginsin}}您好，{{userStore.user.name}}, <a v-on:click="loginout" href="javascript:void(0)">退出</a></p>
        <p class="navbar-text navbar-left" v-else><router-link to="/login" class="navbar-link">登录</router-link></p>
      </div>
    </ul>
    </div>
    <router-view></router-view>
    <modal ref="modal" modal="modal"></modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import { mapActions, mapState } from 'vuex'
import { USER_SIGNOUT } from './store/modules/userStore'
import modal from '@/components/modal2'
import top from '@/components/Top'
export default {
  data () {
    console.log('data')
    return {
    }
  },
  name: 'app',
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    }),
    loginsin () {
      console.log(this.userStore.user.id)
      if (this.userStore.user.id) {
        return true
      } else {
        return false
      }
    }
  },
  props: {
    // console.log('props')
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
      this.$router.replace({ path: '/login' })
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
.navbar-user p{
  margin: 10px 15px;
}
.navbar-user p a{
  text-decoration: underline;
}
</style>
