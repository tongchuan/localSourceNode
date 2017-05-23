import $ from 'jquery'
export default {
  install: (Vue, options) => {
    // 1. 添加全局方法或属性
    Vue.ModalShow = () => {
      // console.log('Vue.show')
    }
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
      // 逻辑...
      }
    })
    // 3. 注入组件
    Vue.mixin({
      created () {
        // console.log(this)
      }
    })
    // 4. 添加实例方法
    Vue.prototype.ModalShow = ({ type = 1, title = '提示', content = '', cancelValue = '取消', confirmValue = '确定', cancelFunc = () => {}, confirmFunc = () => {} }) => {
      let myModal = $('#modal_myModal')
      myModal.find('#modal_myModalLabel').html(title)
      myModal.find('#modal_modal-body').html(content)
      myModal.find('#modal_submit').hide().html(confirmValue).unbind('click').bind('click', function () {
        confirmFunc()
        myModal.modal('hide')
      })
      myModal.find('#modal_close').hide().html(cancelValue).unbind('click').bind('click', function () {
        cancelFunc()
        myModal.modal('hide')
      })
      if (type === 1) {
        myModal.find('#modal_submit').show()
      }
      if (type === 2) {
        myModal.find('#modal_close').show()
        myModal.find('#modal_submit').show()
      }
      myModal.modal({show: true})
    }
  }
}
