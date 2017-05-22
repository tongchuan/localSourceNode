<template>
  <div>
    {{count}}
    {{name}}
    <span v-on:click='setCount' class="glyphicon glyphicon-list-alt"></span>
    <span v-on:click='updateUser(param)' class="glyphicon glyphicon-list-alt"></span>
    <Test v-bind:test='count' g='ddd' v-bind:open="open" />
    <p>{{JSONuser}}</p>
    <input type="button" @click="open" name="but" class="btn btn-default" value="弹框">
  </div>
</template>
<script>
import Test from '@/components/Test'
import Modal from '@/components/modal'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Index',
  components: {
    Test,
    Modal
  },
  data () {
    return {
      name: 'index222222222222',
      param: {
        dd: '3333',
        ss: 'ss'
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    }),
    count () {
      console.log('333')
      console.log(this.user)
      return this.$store.state.count
    },
    JSONuser () {
      return JSON.stringify(this.user)
    }
  },
  methods: {
    ...mapActions(['updateUser']),
    setCount () {
      /* this.$store.commit('increment') */
      this.$store.dispatch({
        type: 'getUser', data: { name: '33333', age: 44, id: 3 }
      })
    },
    open () {
      const h = this.$createElement
      this.$msgbox({
        title: '信息',
        message: h('div', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode'),
          h('input', {value: '3333'}, 'ddd')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      })
    },
    confi (type) {
      console.log(type)
      // var _this = this
      this.$confirm('确认退出吗?', '提示', {
      // type: 'warning'
      }).then(() => {
        // sessionStorage.removeItem('user')
        // _this.$router.push('/login')
      }).catch(() => {
      })
    },
    opend () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: `
          })
        }
      })
    }
  }
}
</script>
<style scoped>

body{
  background: #F00;
}
</style>
