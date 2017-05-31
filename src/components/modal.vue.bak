<template>
  <div class="modal" v-show="show" transition="fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">
            <p class="title">{{modal.title}}</p>
          </slot>
          <a v-touch:tap="close(0)" class="close" href="javascript:void(0)"></a>
        </div>
        <div class="modal-body">
          <slot name="body">
            <p class="notice">{{modal.text}}</p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['modalOptions'],
  data () {
    return {
      show: false,
      resolve: '',
      reject: '',
      promise: ''
    }
  },
  computed: {
    get () {
      let modal = this.modalOptions
      modal = {
        title: modal.title || '提示',
        text: modal.text,
        showCancelButton: typeof modal.showCancelButton === 'undefined' ? true : modal.showCancelButton,
        cancelButtonClass: modal.cancelButtonClass ? modal.showCancelButton : 'btn-default',
        cancelButtonText: modal.cancelButtonText ? modal.cancelButtonText : '取消',
        showConfirmButton: typeof modal.showConfirmButton === 'undefined' ? true : modal.cancelButtonClass,
        confirmButtonClass: modal.confirmButtonClass ? modal.confirmButtonClass : 'btn-active',
        confirmButtonText: modal.confirmButtonText ? modal.confirmButtonText : '确定'
      }
      return modal
    }
  },
  methods: {
    submit () {
      this.resolve('submit')
    },
    close (type) {
      this.show = false
      this.reject(type)
    },
    confirm () {
      this.show = true
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
      return this.promise
    }
  }
}
</script>
