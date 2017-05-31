<template>
  <div class="container">
  <span>{{JSON.stringify(userdata)}}</span>
  <form class="login" v-on:submit.prevent="submit">
      <div class="line">  
        <div v-show="btn && !form.id">id不能为空</div>
        <input type="number" placeholder="输入你的id" v-model="form.id">
      </div>
      <div class="line">
        <div v-show="btn && !form.name">用户名不能为空</div>
        <input type="text" placeholder="输入你的用户名" v-model="form.name">
      </div>
      <button>登录</button>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_SIGNIN } from '../store/modules/userStore'
export default {
  name: 'userlogin',
  data () {
    return {
      btn: false,
      form: {
        id: '3',
        name: 'zhang'
      }
    }
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    }),
    userdata () {
      console.log(this.userStore)
      return this.userStore.user
    }
  },
  methods: {
    ...mapActions([USER_SIGNIN]),
    submit () {
      this.btn = true
      if (!this.form.id || !this.form.name) return
      this.USER_SIGNIN(this.form)
      this.$router.replace({ path: '/' })
    }
  }
}
</script>
<style type="text/css">
  
</style>
