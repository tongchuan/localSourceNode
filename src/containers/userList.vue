<template>
  <div class="container">
    <table class="table table-striped table-bordered table-hover table-condensed table-responsive">
      <caption>Optional table caption.</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Pwd</th>
          <th>email</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="item in userStore.userList" class="active success warning danger info">
          <td>{{item.name}}</td>
          <td>{{item.pwd}}</td>
          <td>{{item.email}}</td>
          <td><a v-on:click="del(item)" href="javascript:void(0)">删除</a></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            <div class="page-bar">
              <ul>
                  <li v-if="cur>1"><a v-on:click="btnClick(cur-1)">上一页</a></li>
                  <li v-if="cur==1"><a class="banclick">上一页</a></li>
                  <li v-for="index in indexs"  v-bind:class="{ 'active': cur == index}">
                      <a v-on:click="btnClick(index)">{{ index }}</a>
                  </li>
                  <li v-if="cur!=all"><a v-on:click="btnClick(cur+1)">下一页</a></li>
                  <li v-if="cur == all"><a class="banclick">下一页</a></li>
                  <li><a>共<i>{{all}}</i>页</a></li>
                  <li><a>当前<i>{{cur}}</i>页</a></li>
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
import { USER_LIST, USER_DEL } from '../store/modules/userStore'
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
    console.log(this.$route.params.page)
    this.userStore.ListPage.page = this.$route.params.page ? Number(this.$route.params.page) : 1
    this.USER_LIST(this.userStore.ListPage)
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    }),
    code () {
      return this.userStore.userDelMsg.code
    },
    all () {
      return Math.ceil(Number(this.userStore.ListPage.total) / Number(this.userStore.ListPage.rows))
    },
    cur () {
      return Number(this.userStore.ListPage.page) > 0 ? Number(this.userStore.ListPage.page) : 1
    },
    indexs: function () {
      let count = 5
      let jian = Math.floor(count / 2)
      var left = 1
      var right = this.all
      var ar = []
      if (this.cur === 1) {
        left = 1
        right = left + count
      } else {
        if ((this.cur - jian) < 1) {
          left = 1
          right = this.cur + jian + (this.cur - jian)
        } else {
          left = this.cur - jian
          right = this.cur + jian
        }
      }
      if (right > this.all) {
        right = this.all
      }
      if (left > (right - count)) {
        left = right - count
      }
      if (left < 1) {
        left = 1
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }
  },
  methods: {
    ...mapActions([USER_LIST, USER_DEL]),
    btnClick: function (data) { // 页码点击事件
      console.log(data)
      console.log(typeof data)
      this.$router.replace({ path: '/list/' + data })
      this.USER_LIST(Object.assign(this.userStore.ListPage, {page: data}))
    },
    pageClick: function () {
      console.log('现在在' + this.cur + '页')
    },
    del: function (item) {
      console.log(item)
      this.USER_DEL({_id: item._id})
    }
  },
  watch: {
    cur: function (oldValue, newValue) {
      console.log(arguments)
    },
    code (newVal, oldVal) {
      console.log('watch' + newVal, oldVal)
      this.USER_LIST(Object.assign({}, this.userStore.ListPage))
      if (newVal === 1) {
        this.ModalShow({
          title: '删除成功',
          content: `<div>
            <ul>
            <li>删除成功</li>
            </ul>
          </div>`,
          cancelValue: undefined,
          confirmValue: undefined,
          type: 2,
          cancelFunc () {
            console.log('cancelFunc')
          },
          confirmFunc () {
            console.log('confirmFunc')
            return false
          }
        })
      }
      this.userStore.userDelMsg.code = 0
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
