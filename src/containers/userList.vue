<template>
  <div class="container">
    <table class="table table-striped table-bordered table-hover table-condensed table-responsive">
      <caption>Optional table caption.</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Pwd</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="item in userStore.userList" class="active success warning danger info">
          <td>{{item.name}}</td>
          <td>{{item.pwd}}</td>
          <td>{{item.email}}</td>
        </tr>
      </tbody>
  </table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_LIST } from '../store/modules/userStore'
export default {
  name: 'userList',
  data () {
    return {
    }
  },
  created () {
    this.USER_LIST()
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    })
  },
  methods: {
    ...mapActions([USER_LIST])
  }
}
</script>
