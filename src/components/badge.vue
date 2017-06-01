<template>
<div class="container-fluid">
  <button class="btn btn-primary" type="button">
  <span v-pre>{{ this will not be compiled }}</span>
    {{name}} Messages <span class="badge">15</span>{{msg}} {{myMessage}}
  </button>
</div>
</template>
<script>
export default {
  name: 'badge',
  props: ['name', 'msg', 'myMessage'],
  data () {
    return {}
  },
  computed: {
    msgS () {
      return this.msg + '===='
    }
  },
  methods: {

  },
  components: {

  },
  watch: {

  },
  beforeCreate () {
    console.log('beforeCreate')
    // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
  },
  created () {
    console.log('created')
    // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
  },
  beforeMount () {
    console.log('beforeMount')
    // 在挂载开始之前被调用：相关的 render 函数首次被调用
  },
  mounted () {
    console.log('mounted')
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内
  },
  beforeUpdate () {
    console.log('beforeUpdate')
    // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
    // 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  },
  updated () {
    console.log('updated')
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
    // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环
  },
  activated () {
    console.log('activated')
    // keep-alive 组件激活时调用。
    // 该钩子在服务器端渲染期间不被调用。
  },
  deactivated () {
    console.log('deactivated')
    // keep-alive 组件停用时调用。
    // 该钩子在服务器端渲染期间不被调用。
  },
  beforeDestroy () {
    console.log('beforeDestroy')
    // 实例销毁之前调用。在这一步，实例仍然完全可用
    // 该钩子在服务器端渲染期间不被调用
  },
  destroyed () {
    console.log('destroyed')
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
    // 该钩子在服务器端渲染期间不被调用
  }
}
</script>
<style>
  
</style>
