export default {
  install: (Vue, options) => {
    // 全局方法
    Vue.$IsEmail = (value) => {
      // Vue.use(Verify)
      // Vue.$IsEmail('444444$IsEmail')
    }
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
    })
    // 3. 注入组件
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
    })
    Vue.prototype.formatTime = (value) => {
      let date = new Date(value)
      let h = date.getHours()
      let m = date.getMinutes()
      let s = date.getSeconds()
      h = h < 10 ? '0' + h : h
      m = m < 10 ? '0' + m : m
      s = s < 10 ? '0' + s : s
      return h + ':' + m + ':' + s
    }
    // 验证邮箱
    Vue.prototype.isEmail = (value) => {
      let reg = new RegExp('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+')
      return reg.test(value)
    }
    // 验证手机号
    Vue.prototype.isPhone = (value) => {
      let reg = new RegExp('^1(3|4|5|7|8)\\d{9}$')
      return reg.test(value)
    }
    // 验证身份证号
    Vue.prototype.isCard = (value) => {
      let reg = new RegExp('(^d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)')
      return reg.test(value)
    }
    // 验证空
    Vue.prototype.isTrim = (value) => {
      return value.replace(/(^\s*)|(\s*$)/g, '') === ''
    }
    // 验证字符串长度
    Vue.prototype.isLength = (value, len) => {
      return value.length < len
    }
    // 验证两个字符串是否相等
    Vue.prototype.isLength = (value1, value2) => {
      return value1 === value2
    }
    // 验证邮编
    Vue.prototype.isZip = (value) => {
      let reg = new RegExp('^\\d{6}$')
      return reg.test(value)
    }
    // 验证是整数
    Vue.prototype.isInteger = (value) => {
      let reg = new RegExp('^[-+]?\\d*$')
      return reg.test(value)
    }
    // 验证小数
    Vue.prototype.isDouble = (value) => {
      let reg = new RegExp('^[-\\+]?\\d+(\\.\\d+)?$')
      return reg.test(value)
    }
    // 判断输入的字符是否为:a-z,A-Z,0-9
    Vue.prototype.isString = (value) => {
      let reg = new RegExp('^[a-zA-Z0-9_]+$')
      return reg.test(value)
    }
    // 是否为中文
    Vue.prototype.isChinese = (value) => {
      let reg = new RegExp('^[\\u0391-\\uFFE5]+')
      return reg.test(value)
    }
    // 英文字母
    Vue.prototype.isLetter = (value) => {
      let reg = new RegExp('^[a-zA-Z]+$')
      return reg.test(value)
    }
    // 是否URL
    Vue.prototype.isUrl = (value) => {
      // let reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-@?^=%&/~+#])?/
      let reg = new RegExp('(http|ftp|https):\\/\\/[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-\\.,@?^=%&:/~\\+#]*[\\w\\-\\@?^=%&/~\\+#])?')
      reg.lastIndex = 0
      return reg.test(value)
    }
    // 格式化数组为 12435 == 124,35.00
    Vue.prototype.formatCurrency = (num) => {
      if (!num) {
        return '0'
      }
      num = num.toString().replace(/\\$|\\, /g, '')
      if (isNaN(num)) {
        num = '0'
      }
      let sign = (num === (num = Math.abs(num)))
      num = Math.floor(num * 100 + 0.50000000001)
      let cents = num % 100
      num = Math.floor(num / 100).toString()
      if (cents < 10) {
        cents = '0' + cents
      }
      for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3))
      }
      return (((sign) ? '' : '-') + num + '.' + cents)
    }
  }
}
