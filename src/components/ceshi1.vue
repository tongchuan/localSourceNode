<template>
  <Modal
      v-model="modal1"
      title="普通的Modal对话框标题"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
<script type="text/javascript">
// import Vue from 'vue'
export default {
  name: 'text1',
  data () {
    return {
      modal1: false
    }
  },
  methods: {
    ok () {
      this.$Message.info('点击了确定')
    },
    cancel () {
      this.$Message.info('点击了取消')
    }
  },
  mounted () {
    console.log('ceshi1')
    // console.log(this)
    let that = this
    this.$root.$on('test1', (data) => {
      that.modal1 = true
      console.log(data)
    })
    console.log(this)
    // this.$emit('test1')
  }
}
</script>
<style type="text/css">
  
</style>
