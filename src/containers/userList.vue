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
      <tfoot>
        <tr>
          <td colspan="3">
            <div class="page-bar">
              <ul>
                  <li v-if="cur>1"><a v-on:click="btnClick(index-1)">{{Number(userStore.ListPage.page)-1}}上一页</a></li>
                  <li v-if="cur==1"><a class="banclick">上一页</a></li>
                  <li v-for="index in indexs"  v-bind:class="{ 'active': cur == index}">
                      <a v-on:click="btnClick(index)">{{ index }}</a>
                  </li>
                  <li v-if="cur!=all"><a v-on:click="btnClick(index+1)">{{Number(userStore.ListPage.page)+1}}下一页</a></li>
                  <li v-if="cur == all"><a class="banclick">下一页</a></li>
                  <li><a>共<i>{{all}}</i>页</a></li>
              </ul>
          </div>
          </td>
        </tr>
      </tfoot>
  </table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_LIST } from '../store/modules/userStore'
export default {
  name: 'userList',
  data () {
    console.log(this.userStore)
    return {
      // all: this.userStore.ListPage.total, // 总页数
      // cur: this.userStore.ListPage.page // 当前页码
    }
  },
  created () {
    this.USER_LIST(this.userStore.ListPage)
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    }),
    all () {
      return Math.ceil(this.userStore.ListPage.total / this.userStore.ListPage.rows)
    },
    cur () {
      return this.userStore.ListPage.page
    },
    indexs: function () {
      var left = 1
      var right = this.all
      var ar = []
      if (this.all >= 5) {
        if (this.cur > 3 && this.cur < this.all - 2) {
          left = this.cur - 2
          right = this.cur + 2
        } else {
          if (this.cur <= 3) {
            left = 1
            right = 5
          } else {
            right = this.all
            left = this.all - 4
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }
  },
  methods: {
    ...mapActions([USER_LIST]),
    btnClick: function (data) { // 页码点击事件
      this.USER_LIST(Object.assign(this.userStore.ListPage, {page: data}))
    },
    pageClick: function () {
      console.log('现在在' + this.cur + '页')
    }
  },
  watch: {
    cur: function (oldValue, newValue) {
      console.log(arguments)
    }
  }
}
</script>
<style>
  .page-bar{
    margin:40px;
}
ul,li{
    margin: 0px;
    padding: 0px;
}
li{
    list-style: none
}
.page-bar li:first-child>a {
   margin-left: 0px
}
.page-bar a{
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer
}
.page-bar a:hover{
    background-color: #eee;
}
.page-bar a.banclick{
    cursor:not-allowed;
}
.page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}
.page-bar i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
}

</style>
