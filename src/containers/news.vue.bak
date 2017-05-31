<template>
  <div class="new">
    <a v-on:click='open' href="javascript:void(0)" class="btn btn-default">modal</a>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  components: {
    // modal2
  },
  computed () {

  },
  methods: {
    open () {
      this.ModalShow({
        title: '开始提示',
        content: `<div>
          <ul>
          <li>afsdsfas</li>
          <li>afsdsfas</li>
          <li>afsdsfas</li>
          <li>afsdsfas</li>
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
      // console.log(this.ModalShow({}))
      // console.log(this)
    }
  }
}
</script>
