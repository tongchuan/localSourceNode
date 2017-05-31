<template>
  <div class="container">
  <span>{{JSON.stringify(userdata)}}</span>
  <form class="login" v-on:submit.prevent="submit">
      <div class="line">
        <div v-show="btn && !form.name">用户名不能为空</div>
        <input type="text" placeholder="输入你的用户名" v-model="form.name">
      </div>
      <div class="line">
        <div v-show="btn && !form.name">密码不能为空</div>
        <input type="password" placeholder="输入你的密码" v-model="form.pwd">
      </div>
      <div class="line">
        <div v-show="btn && !form.name">年龄不能为空</div>
        <input type="number" placeholder="输入你的年龄" v-model="form.age">
      </div>
      <div class="line">
        <div v-show="btn && !form.name">email</div>
        <input type="text" placeholder="输入你的email" v-model="form.email">
      </div>
      <button>登录</button>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_SAVE } from '../store/modules/userStore'
export default {
  name: 'userSave',
  data () {
    return {
      btn: false,
      form: {
        name: 'zhangtongchuan' + Math.random(),
        pwd: '123456',
        date: new Date(),
        hidden: true,
        age: 88,
        email: 'zhangtch@yonyou.com'
      }
    }
  },
  created () {

  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    }),
    userdata () {
      console.log(this.userStore)
      return this.userStore.user
    },
    code () {
      return this.userStore.userSaveMsg.code
    }
  },
  methods: {
    ...mapActions([USER_SAVE]),
    submit () {
      this.btn = true
      // if (!this.form.id || !this.form.name) return
      let data = Object.assign({}, this.form)
      // this.form = {
      //   name: '',
      //   pwd: '',
      //   date: new Date(),
      //   hidden: true,
      //   age: 0,
      //   email: 'zhangtch@yonyou.com'
      // }
      this.form.name = 'ztc' + Math.random()
      this.USER_SAVE(data)
      // this.$router.replace({ path: '/' })
    }
  },
  watch: {
    code (newVal, oldVal) {
      console.log('watch' + newVal, oldVal)
      this.userStore.userSaveMsg.code = 0
    }
  }
}
</script>
<style type="text/css">

</style>
