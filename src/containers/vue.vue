<template lang="html">
  <div class="app">
    <top2 />
    <!-- <links /> -->
  </div>
</template>

<script>
import top2 from '../components/top2'
import links from '../components/links'
export default {
  name: 'vue',
  data () {
    return {

    }
  },
  components: {
    top2,
    links
  }
}
</script>

<style lang="css">
</style>


<!-- <template>
<div>
   <router-link to="/vue/page1">page1</router-link>
   <router-link to="/vue/page2">page2</router-link>
  <h4>文本</h4>
  <ul>
    <li><span>Message： {{msg}}</span></li>
    <li>This will never change: <span v-once>{{msg}}</span></li>
    <li>{{htmlmsg}}</li>
    <li v-html="htmlmsg"></li>
    <li>{{number+1}}</li>
    <li>{{number}}</li>
    <li>{{ok ? 'Yes' : 'NO'}}</li>
    <li>{{ok}}</li>
    <li v-if="seen">Now you see me!</li>
    <li>{{message}}</li>
    <li>{{message.split('').reverse().join('--')}}</li>
    <li v-bind:id="'list'+id"></li>
    <li>{{ msg | capitalize }}</li>
    <li><a v-bind:href="url">{{url}}</a></li>
    <li><a :href="url">{{url}}</a></li>
    <li><a href="" v-on:click="doSomething">完整语法</a></li>
    <li><a href="" @click="doSomething">缩写 </a></li>
    <li><p>Original message: "{{ message }}"</p></li>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p>Reversed message: "{{ reversedMessageMethods() }}"</p>

  </ul>
  <router-view></router-view>
</div>
</template>
<script type="text/javascript">
export default {
  name: 'Vue',
  data () {
    return {
      msg: 'this is Vue page!',
      htmlmsg: '<h1>v-html</h1>',
      number: 1000,
      ok: true,
      message: 'This is Vue message!',
      id: 'Imid',
      seen: false,
      url: 'http://www.ztc.com'
    }
  },
  methods: {
    doSomething () {

    },
    reversedMessageMethods () {
      return this.message.split('').reverse().join('')
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  watch: {

  }
}
</script>
<style type="text/css">

</style> -->

<!-- <template>
<div class="container">
<h4>声明式渲染</h4>
<ul>
  <li><button v-on:click="seen" class="btn btn-default">消失</button><button class="btn btn-default">添加</button></li>
  <li>{{message}}</li>
  <li v-once>this is v-once message: {{message}}</li>
  <li><span v-bind:title="messageTitle">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span></li>
  <li v-if="seen">现在你看到我了</li>
  <li v-for="(item,index) in todos">{{index}}、{{item.text}}</li>
</ul>
<h4>处理用户输入</h4>
<ul>
  <li>{{message}}</li>
  <li><button v-on:click="reverseMessage">逆转消息</button></li>
  <li><input type="text" v-model="message" name=""></li>
  <todoitem v-for="item in groceryList" v-bind:todo="item"></todoitem>
</ul>
</div>
</template>
<script>
/*import todoitem from '../components/toditem'
export default {
  name: 'Vue',
  data () {
    return {
      message: 'Hello Vue!',
      messageTitle: '页面加载于' + new Date(),
      seen: true,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      groceryList: [
        { text: '蔬菜' },
        { text: '奶酪' },
        { text: '随便其他什么人吃的东西' }
      ]
    }
  },
  components: {
    todoitem
  },
  created () {
    let that = this
    setTimeout(function () {
      that.seen = false
      that.todos.push({text: '新项目'})
    }, 3000)
  },
  methods: {
    reverseMessage () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}*/
</script>
<style>

</style>
 -->
