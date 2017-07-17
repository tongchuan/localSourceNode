<template lang="html">
        <div class="ban" ref="focusmapId">
          <div class="ban2 clearfix" ref="ban_pic1">
            <div class="prev1" id="prev1">
              <!-- <img src="/static/images/index_tab_l.png" width="28" height="51"  alt=""> -->
            </div>
            <div class="next1" id="next1">
              <!-- <img src="/static/images/index_tab_r.png" width="28" height="51"  alt=""> -->
            </div>
            <ul>
              <li v-for="(item,index) in focusList" ><a v-bind:href="item.link"><img v-bind:src="item.image" v-bind:alt="item.title" v-bind:title="item.title"></a><p>{{item.title}}</p></li>
            </ul>
          </div>
          <div class="min_pic clearfix">
            <div class="prev_btn1" ref="prev_btn1"><img src="/static/images/feel3.png" width="9" height="18"  alt=""></div>
            <div class="num clearfix" ref="ban_num1">
              <ul>
                <li v-for="(item,index) in focusList" ><img v-bind:src="item.image" v-bind:alt="item.title" v-bind:title="item.title"></li>
              </ul>
            </div>
            <div class="next_btn1" ref="next_btn1"><img src="/static/images/feel4.png" width="9" height="18"  alt=""></div>
          </div>
        </div>
</template>

<script>
import $ from 'jquery'
import jq from '@/util/focusMap'
// import pinchImage from '../components/PinchImage'
export default {
  name: 'top2',
  props: ['focusList'],
  data () {
    return {
      focusmapId: 'focusmapId' + Math.random(),
      ban_pic1: 'ban_pic1' + Math.random(),
      ban_num1: 'ban_num1' + Math.random(),
      prev_btn1: 'prev_btn1' + Math.random(),
      next_btn1: 'next_btn1' + Math.random(),
      screenWidth: document.body.clientWidth
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
    that.focusMapFun()
  },
  // updated () {
  //   this.focusMapFun()
  //   console.log(this.screenWidth)
  //   console.log('updated')
  // },
  methods: {
    focusMapFun () {
      let that = this
      $(function () {
        $(that.$refs.focusmapId).width('100%')
        let parent = $(that.$refs.focusmapId).closest('div')
        let width = parent.width() // that.width // $('#focusMap').width()
        let height = parent.height() // that.height - 55 // $('#focusMap').height() - 55
        jq('.ban').width(width).height(height)
        jq('.ban2,.ban2 ul li,.ban2 ul li img').width(width).height(height - 100)
        jq('.min_pic').width(width)
        jq('.num').width(width - 32)
        jq(that.$refs.focusmapId).banqh({
          box: that.$refs.focusmapId, // 总框架
          pic: that.$refs.ban_pic1, // 大图框架
          pnum: that.$refs.ban_num1, // 小图框架
          prev_btn: that.$refs.prev_btn1, // 小图左箭头
          next_btn: that.$refs.next_btn1, // 小图右箭头
          pop_prev: '#prev2', // 弹出框左箭头
          pop_next: '#next2', // 弹出框右箭头
          prev: '#prev1', // 大图左箭头
          next: '#next1', // 大图右箭头
          pop_div: '#demo2', // 弹出框框架
          pop_pic: '#ban_pic2', // 弹出框图片框架
          pop_xx: '.pop_up_xx', // 关闭弹出框按钮
          mhc: '.mhc', // 朦灰层
          autoplay: true, // 是否自动播放
          interTime: 5000, // 图片自动切换间隔
          delayTime: 400, // 切换一张图片时间
          pop_delayTime: 400, // 弹出框切换一张图片时间
          order: 0, // 当前显示的图片（从0开始）
          picdire: true, // 大图滚动方向（true为水平方向滚动）
          mindire: true, // 小图滚动方向（true为水平方向滚动）
          min_picnum: 5, // 小图显示数量
          pop_up: true // 大图是否有弹出框
        })
      })
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.focusMapFun()
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>
<style lang="css">
/*.ban{ width:500px; height:600px; position:relative; overflow:hidden;margin:10px auto;}
.ban2{ width:500px; height:500px; position:relative; overflow:hidden;}
.ban2 ul{ position:absolute; left:0; top:0;}
.ban2 ul li{ width:500px; height:500px; position: relative;}
.ban2 ul li p{display: block;margin: 0;width:100%; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding: 5px 10px; z-index: 10; position: absolute;left:0;bottom: 0; background: rgba(99,99,99,0.5); color: #fff;}
*/
.ban{width: 100%; height: 100%;position: relative;;overflow: hidden;margin:0 auto;}
.ban2{ width:100%; height: calc(100% - 100px); position:relative; overflow:hidden;}
.ban2 ul{ position:absolute; left:0; top:0; height: calc(100% - 100px)}
.ban2 ul li{ width:500px; height: calc(100% - 100px); position: relative;}
.ban2 ul li p{display: block;margin: 0;width:100%; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding: 5px 10px; z-index: 10; position: absolute;left:0;bottom: 0; background: rgba(99,99,99,0.5); color: #fff;}


.prev{ float:left; cursor:pointer;}
.num{ height:82px;overflow:hidden; width:430px; position:relative;float:left;}
.min_pic{ padding-top:10px; width:500px;background: #d2d2d2;}
.num ul{ position:absolute; left:0; top:0;}
.num ul li{ width:78px; height:78px;margin-right:5px;border: transparent; padding:0px;}
.num ul li img{width: 100%; height: 100%;}
.num ul li.on{ border:1px solid red; padding:0;}
.prev_btn1{ width:16px; text-align:center;height: 80px;display: block;line-height: 80px; cursor:pointer; float:left;}
.next_btn1{  width:16px; text-align:center; height: 80px;display: block;line-height: 80px;cursor:pointer;float:right;}
.prev1{ position:absolute; top:220px; left:20px; width:28px; height:51px;z-index:9;cursor:pointer;}
.next1{ position:absolute; top:220px; right:20px; width:28px; height:51px;z-index:9;cursor:pointer;}
.mhc{ background:#000; width:100%;opacity:0.5;-moz-opacity:0.5;filter:alpha(Opacity=50); position:absolute; left:0; top:0; display:none;}
.pop_up{ width:500px; height:500px; padding:10px; background:#fff; position:fixed; -position:absolute; left:50%; top:50%; margin-left:-255px; margin-top:-255px; display:none; z-index:99;}
.pop_up_xx{ width:40px; height:40px; position:absolute; top:-40px; right:0; cursor:pointer;}
.pop_up2{ width:500px; height:500px; position:relative; overflow:hidden;}
.pop_up2{ width:500px; height:500px; position:relative; overflow:hidden; float:left;}
.pop_up2 ul{ position:absolute; left:0; top:0;}
.pop_up2 ul li{ width:500px; height:500px; float:left;}

</style>
