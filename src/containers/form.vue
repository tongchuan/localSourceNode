<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="username">{{errors['username']}}<br/>
      <input type="password" v-model="password">{{errors['password']}}<br/>
      <input type="email" v-model="email">{{errors['email']}}<br/>
      <input type="tel" v-model="phone">{{errors['phone']}}<br/>
      <input type="submit">
      <!-- <ul><li v-for="err in errors" v-text="err"></li></ul> -->
    </form>
  </div>
</template>
<script>
export default {
  name: 'from',
  data () {
    return {
      vuerify: 0,
      username: '',
      password: '',
      email: '',
      phone: ''
    }
  },
  computed: {
    errors () {
      console.log(this.$vuerify.$errors)
      // return []
      return this.vuerify === 0 ? [] : this.$vuerify.$errors // 错误信息会在 $vuerify.$errors 内体现
    }
  },
  vuerify: {
    username: {
      test: /\w{4,}/,  // 自定义规则，可以是函数，正则或者全局注册的规则（填字符串）
      message: '至少 4 位字符'
    },
    password: 'required', // 使用全局注册的规则
    email: [ // 支持传入数组
      'required',
      'email',
      { test: /@gmail/, message: '只能是谷歌邮箱' }
    ],
    phone: 'phone' // 使用全局自定义规则
  },
  methods: {
    handleSubmit () {
      this.vuerify ++
      if (this.$vuerify.check()) { // 手动触发校验所有数据
        // do something
      }
    }
  }
}
</script>
<style>
  
</style>
