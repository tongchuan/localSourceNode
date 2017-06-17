<template lang="html">
<div class="container shop mt bg">
  <div class="nav-title">
    <span class="title-name">测试路由</span>
    <span class="more">more</span>
  </div>
  <div class="row" style="margin-top:15px">
    <div class="nav-left-list">
      <ul>
        <li v-for="item in navList" v-bind:class="{'active': item.selected}"  v-on:click="updateSelected(item)">
          <router-link v-bind:to="item.link"><span v-bind:class="item.icon + ' glyphicon'" v-text="item.name"></span></router-link>
        </li>
      </ul>
    </div>
    <div class="nav-right-content">
      dsadsf
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'top2',
  data () {
    return {
      navList: [
        {name: '开始开始开始', icon: 'glyphicon-asterisk', link: '/vue/page1', selected: true},
        {name: '开始开始开始', icon: 'glyphicon-asterisk', link: '/vue/page2', selected: false},
        {name: '开始开始开始', icon: 'glyphicon-asterisk', link: '/vue/page1', selected: false}
      ]
    }
  },
  created () {
  },
  components: {
  },
  methods: {
    updateSelected (items) {
      let that = this
      that.navList.forEach((item) => {
        item.selected = false
        if (item === items) {
          item.selected = true
        }
      })
      // console.log(item)
    }
  }
}
</script>

<style lang="css">
.overhide{
  overflow: hidden;
}
.nav-title{
  line-height: 45px;
}
.title-name{
  font-size: 18px;
}
.more{
  float: right
}
.mt{
  margin-top: 15px;
}
.nav-left-list{
  width: 200px;
  float: left;
  padding: 0 15px;
  border-right: 1px solid #d2d2d2;
}
.nav-left-list .active{
  color: #090;
  background: #009
}
.nav-left-list a{
  display: block;
}
.nav-right-content{
  margin-left: 215px;
  padding: 0 15px;
  border-left: 1px solid #d2d2d2;
}

</style>
