<template>
  <div>
    <h4>v-text</h4>
    <li v-text="msg"></li>
    <li>{{msg}}</li>
    <h4>v-html</h4>
    <li v-html="html"></li>
    <li>{{html}}</li>
    <h4>v-show</h4>
    <li v-show="show">{{show}}</li>
    <h4>v-if v-else</h4>
    <li v-if="ok">if ok</li>
    <li v-else="ok">v-else</li>
    <h4>v-else-if</h4>
    <li v-if="type==='a'">is a</li>
    <li v-else-if="type==='b'">b</li>
    <li v-else-if="type==='c'">c</li>
    <li v-else="type==='d'">d</li>
    <h4>v-for</h4>
    <li v-for="item in items">{{item.message}}</li>
    <h4>v-on</h4>
    <li v-on:click="click">v-on:click</li>
    <h4>v-bind</h4>
    <li v-bind:class="{isActiveddd:isActive}"></li>
    <h4>v-model</h4>
    <li>{{msg}}</li>
    <li><input type="text" v-model="msg" name=""></li>
    <h4>v-pre</h4>
    <li v-pre>{{msg}}</li>
    <h4>v-cloak</h4>
    <li v-cloak>{{msg}}</li>
    <h4>v-once</h4>
    <li><span v-once>This will never change: {{msg}}</span></li>
  </div>
</template>
<script>
export default {
  name: 'TEST',
  data () {
    return {
      msg: 'v-text',
      html: '<span style="color:red">html</span>',
      show: true,
      ok: true,
      type: 'c',
      items: [
        {message: 'Foo'},
        {message: 'Bar'}
      ],
      isActive: true
    }
  },
  components: {

  },
  computed: {

  },
  methods: {
    click () {
      // console.log('click')
    }
  },
  watch: {
  },
  created () {
    this.$on('kaishi', function (type) {
      console.log(type)
      this.$off('kaishi')
    })
    this.$once('kaishi', function (type) {
      // console.log('水水' + type)
    })
    let that = this
    setInterval(function () {
      that.$emit('kaishi', 'dddd')
    }, 3000)
  }
}
</script>
