<template>
  <div>
    <div class="column is-12">
    <label class="label" for="email">Email</label>
    <p :class="{ 'control': true }">
        <input v-validate="'required|email'" v-model="email" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
        {{errors}}
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        {{errors.first('register.email')}}
    </p>
</div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      email: ''
    }
  },
  created () {
    this.errors.add('email', '点点滴滴', 'required', 'register')
    this.errors.add('email', '点点滴滴email', 'email', 'register')
    // {field: 'email', msg: '点点滴滴email', rule: 'email', scope: ''}
    // this.errors.add('email', '点点滴滴email', 'email', '')
  }
}
</script>
<style>
  
</style>
