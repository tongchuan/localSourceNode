<template>
  <div>
    {{count}}
    {{name}}
    <span v-on:click='setCount' class="glyphicon glyphicon-list-alt"></span>
    <span v-on:click='updateUser(param)' class="glyphicon glyphicon-list-alt"></span>
    <Test v-bind:test='count' g='ddd' v-bind:open="open" />
    <p>{{JSONuser}}</p>
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
    }
  }
}
</script>
<style scoped>

body{
  background: #F00;
}
</style>
