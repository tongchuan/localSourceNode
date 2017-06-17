<template lang="html">
<div class="container shop mt">
  <div class="row">
    <div class="shop-right clearfix bg">
      <div class="nav-title">
        <span class="title-name">老是奇偶</span>
        <span class="more">more</span>
      </div>
      <ul>
        <li>sdafasd</li>
        <li>sdafasd</li>
        <li>sdafasd</li>
        <li>sdafasd</li>
      </ul>
    </div>
    <div class="shop-left">
      <div class="shop-content clearfix bg">
        <div class="left50" id="focusMap">
                <div class="ban" id="demo1">
                	<div class="ban2" id="ban_pic1">
                		<div class="prev1" id="prev1"><img src="/static/images/index_tab_l.png" width="28" height="51"  alt=""></div>
                		<div class="next1" id="next1"><img src="/static/images/index_tab_r.png" width="28" height="51"  alt=""></div>
                		<ul>
                			<li v-for="(item,index) in focusList" ><a v-bind:href="item.link"><img v-bind:src="item.image" v-bind:alt="item.title" v-bind:title="item.title"></a><p>{{item.title}}</p></li>
                		</ul>
                	</div>
                	<div class="min_pic clearfix">
                		<div class="prev_btn1" id="prev_btn1"><img src="/static/images/feel3.png" width="9" height="18"  alt=""></div>
                		<div class="num clearfix" id="ban_num1">
                			<ul>
                        <li v-for="(item,index) in focusList" ><a v-bind:href="item.link"><img  width="80" height="80" v-bind:src="item.image" v-bind:alt="item.title" v-bind:title="item.title"></a><p>{{item.title}}</p></li>
                				<!-- <li><a href="javascript:;"><img src="/static/images/s1.jpg" width="80" height="80" alt=""></a></li>
                				<li><a href="javascript:;"><img src="/static/images/s2.jpg" width="80" height="80" alt=""></a></li>
                				<li><a href="javascript:;"><img src="/static/images/s3.jpg" width="80" height="80" alt=""></a></li>
                				<li><a href="javascript:;"><img src="/static/images/s4.jpg" width="80" height="80" alt=""></a></li>
                				<li><a href="javascript:;"><img src="/static/images/s5.jpg" width="80" height="80" alt=""></a></li>
                				<li><a href="javascript:;"><img src="/static/images/s1.jpg" width="80" height="80" alt=""></a></li>
                				<li><a href="javascript:;"><img src="/static/images/s2.jpg" width="80" height="80" alt=""></a></li>
                				<li><a href="javascript:;"><img src="/static/images/s3.jpg" width="80" height="80" alt=""></a></li>
                				<li><a href="javascript:;"><img src="/static/images/s4.jpg" width="80" height="80" alt=""></a></li>
                				<li><a href="javascript:;"><img src="/static/images/s5.jpg" width="80" height="80" alt=""></a></li> -->
                			</ul>
                		</div>
                		<div class="next_btn1" id="next_btn1"><img src="/static/images/feel4.png" width="9" height="18"  alt=""></div>
                	</div>
                </div>
        </div>
        <div class="left50">
          <div class="nav-title">
            <span class="title-name">老是奇偶</span>
            <span class="more">more</span>
          </div>
          <ul>
            <li>sdafasd</li>
            <li>sdafasd</li>
            <li>sdafasd</li>
            <li>sdafasd</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import $ from 'jquery'
import jq from '../util/focusMap'
import pinchImage from '../components/PinchImage'
export default {
  name: 'top2',
  data () {
    return {
      focusList: [
        {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b1.jpg', link: '/static/images/b1.jpg'},
        {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b2.jpg', link: '/static/images/b2.jpg'},
        {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b3.jpg', link: '/static/images/b3.jpg'},
        {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b4.jpg', link: '/static/images/b4.jpg'},
        {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b5.jpg', link: '/static/images/b5.jpg'}
      ]
    }
  },
  created () {
    $(function () {
      let width = $('#focusMap').width()
      let height = $('#focusMap').height() - 20
      jq('.ban').width(width).height(height)
      jq('.ban2,.ban2 ul li,.ban2 ul li img').width(width).height(height - 100)
      jq('.min_pic').width(width)
      jq('.num').width(width - 32)
      jq('#demo1').banqh({
        box: '#demo1', // 总框架
        pic: '#ban_pic1', // 大图框架
        pnum: '#ban_num1', // 小图框架
        prev_btn: '#prev_btn1', // 小图左箭头
        next_btn: '#next_btn1', // 小图右箭头
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

    /* (function ($) {
      $(function () {
        var jq = $.noConflict()
        jq.fn.banqh = function (can) {
          can = jq.extend({
            box: null, // 总框架
            pic: null, // 大图框架
            pnum: null, // 小图框架
            prev_btn: null, // 小图左箭头
            next_btn: null, // 小图右箭头
            prev: null, // 大图左箭头
            next: null, // 大图右箭头
            pop_prev: null, // 弹出框左箭头
            pop_next: null, // 弹出框右箭头
            autoplay: false, // 是否自动播放
            interTime: 5000, // 图片自动切换间隔
            delayTime: 800, // 切换一张图片时间
            pop_delayTime: 800, // 弹出框切换一张图片时间
            order: 0, // 当前显示的图片（从0开始）
            picdire: true, // 大图滚动方向（true水平方向滚动）
            mindire: true, // 小图滚动方向（true水平方向滚动）
            min_picnum: null, // 小图显示数量
            pop_up: false, // 大图是否有弹出框
            pop_div: null, // 弹出框框架
            pop_pic: null, // 弹出框图片框架
            pop_xx: null, // 关闭弹出框按钮
            mhc: null // 朦灰层
          }, can || {})
          var picnum = jq(can.pic).find('ul li').length
          var picw = jq(can.pic).find('ul li').outerWidth(true)
          var pich = jq(can.pic).find('ul li').outerHeight(true)
          var poppicw = jq(can.pop_pic).find('ul li').outerWidth(true)
          var picminnum = jq(can.pnum).find('ul li').length
          var picpopnum = jq(can.pop_pic).find('ul li').length
          var picminw = jq(can.pnum).find('ul li').outerWidth(true)
          var picminh = jq(can.pnum).find('ul li').outerHeight(true)
          var pictime
          var tpqhnum = 0
          var xtqhnum = 0
          var popnum = 0
          jq(can.pic).find('ul').width(picnum * picw).height(picnum * pich)
          jq(can.pnum).find('ul').width(picminnum * picminw).height(picminnum * picminh)
          jq(can.pop_pic).find('ul').width(picpopnum * poppicw)
          jq(can.pnum).find('li').click(function () {
            tpqhnum = xtqhnum = jq(can.pnum).find('li').index(this)
            show(tpqhnum)
            minshow(xtqhnum)
          }).eq(can.order).trigger('click')
          if (can.pop_up === true) {
            jq(can.pic).find('ul li').click(function () {
              jq(can.mhc).height(jq(document).height()).show()
              jq(can.pop_div).show()
              popnum = jq(this).index()
              var gdjlW = -popnum * poppicw
              jq(can.pop_pic).find('ul').css('left', gdjlW)
              popshow(popnum)
            })
            jq(can.pop_xx).click(function () {
              jq(can.mhc).hide()
              jq(can.pop_div).hide()
            })
          }
          if (can.autoplay === true) {
            pictime = setInterval(function () {
              show(tpqhnum)
              minshow(tpqhnum)
              tpqhnum++
              xtqhnum++
              if (tpqhnum === picnum) { tpqhnum = 0 }
              if (xtqhnum === picminnum) { xtqhnum = 0 }
            }, can.interTime)
            jq(can.box).hover(function () {
              clearInterval(pictime)
            }, function () {
              pictime = setInterval(function () {
                show(tpqhnum)
                minshow(tpqhnum)
                tpqhnum++
                xtqhnum++
                if (tpqhnum === picnum) { tpqhnum = 0 }
                if (xtqhnum === picminnum) { xtqhnum = 0 }
              }, can.interTime)
            })
          }
          jq(can.prev_btn).click(function () {
            if (tpqhnum === 0) { tpqhnum = picnum }
            if (xtqhnum === 0) { xtqhnum = picnum }
            xtqhnum--
            tpqhnum--
            show(tpqhnum)
            minshow(xtqhnum)
          })
          jq(can.next_btn).click(function () {
            if (tpqhnum === picnum - 1) { tpqhnum = -1 }
            if (xtqhnum === picminnum - 1) { xtqhnum = -1 }
            xtqhnum++
            minshow(xtqhnum)
            tpqhnum++
            show(tpqhnum)
          })
          jq(can.prev).click(function () {
            if (tpqhnum === 0) { tpqhnum = picnum }
            if (xtqhnum === 0) { xtqhnum = picnum }
            xtqhnum--
            tpqhnum--
            show(tpqhnum)
            minshow(xtqhnum)
          })
          jq(can.next).click(function () {
            if (tpqhnum === picnum - 1) { tpqhnum = -1 }
            if (xtqhnum === picminnum - 1) { xtqhnum = -1 }
            xtqhnum++
            minshow(xtqhnum)
            tpqhnum++
            show(tpqhnum)
          })
          jq(can.pop_prev).click(function () {
            if (popnum === 0) { popnum = picnum }
            popnum--
            popshow(popnum)
          })
          jq(can.pop_next).click(function () {
            if (popnum === picnum - 1) { popnum = -1 }
            popnum++
            popshow(popnum)
          })
          function minshow (xtqhnum) {
            var mingdjlNum = xtqhnum - can.min_picnum + 2
            var mingdjlW = -mingdjlNum * picminw
            var mingdjlH = -mingdjlNum * picminh
            if (can.mindire === true) {
              jq(can.pnum).find('ul li').css('float', 'left')
              if (picminnum > can.min_picnum) {
                if (xtqhnum < 3) { mingdjlW = 0 }
                if (xtqhnum === picminnum - 1) { mingdjlW = -(mingdjlNum - 1) * picminw }
                jq(can.pnum).find('ul').stop().animate({'left': mingdjlW}, can.delayTime)
              }
            } else {
              jq(can.pnum).find('ul li').css('float', 'none')
              if (picminnum > can.min_picnum) {
                if (xtqhnum < 3) { mingdjlH = 0 }
                if (xtqhnum === picminnum - 1) { mingdjlH = -(mingdjlNum - 1) * picminh }
                jq(can.pnum).find('ul').stop().animate({'top': mingdjlH}, can.delayTime)
              }
            }
          }
          function show (tpqhnum) {
            var gdjlW = -tpqhnum * picw
            var gdjlH = -tpqhnum * pich
            if (can.picdire === true) {
              jq(can.pic).find('ul li').css('float', 'left')
              jq(can.pic).find('ul').stop().animate({'left': gdjlW}, can.delayTime)
            } else {
              jq(can.pic).find('ul').stop().animate({'top': gdjlH}, can.delayTime)
            }
            // jq(can.pic).find('ul li').eq(tpqhnum).fadeIn(can.delayTime).siblings('li').fadeOut(can.delayTime)//淡入淡出
            jq(can.pnum).find('li').eq(tpqhnum).addClass('on').siblings(this).removeClass('on')
          }
          function popshow (popnum) {
            var gdjlW = -popnum * poppicw
            jq(can.pop_pic).find('ul').stop().animate({'left': gdjlW}, can.pop_delayTime)
          }
        }
        jq('#demo1').banqh({
          box: '#demo1', // 总框架
          pic: '#ban_pic1', // 大图框架
          pnum: '#ban_num1', // 小图框架
          prev_btn: '#prev_btn1', // 小图左箭头
          next_btn: '#next_btn1', // 小图右箭头
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
    })($)
    */
  },
  components: {
    pinchImage
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
.shop-right{
  width: 30%;
  float: right;
  padding: 0 15px;
}
.shop-left{
  width: 70%;
  float: left;
  padding-right: 15px;
}
.left50{
  width: 49.9%;
  float: left;
  padding: 0 15px;
  height: 300px;
}

.ban{ width:500px; height:600px; position:relative; overflow:hidden;margin:10px auto;}
.ban2{ width:500px; height:500px; position:relative; overflow:hidden;}
.ban2 ul{ position:absolute; left:0; top:0;}
.ban2 ul li{ width:500px; height:500px; position: relative;}
.ban2 ul li p{display: block;margin: 0;width:100%; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding: 5px 10px; z-index: 10; position: absolute;left:0;bottom: 0; background: rgba(99,99,99,0.5); color: #fff;}
.prev{ float:left; cursor:pointer;}
.num{ height:82px;overflow:hidden; width:430px; position:relative;float:left;}
.min_pic{ padding-top:10px; width:500px;background: #d2d2d2;}
.num ul{ position:absolute; left:0; top:0;}
.num ul li{ width:80px; height:80px; margin-right:5px; padding:1px;}
.num ul li.on{ border:1px solid red; padding:0;}
.prev_btn1{ width:16px; text-align:center;
  height: 80px;
    display: block;
    line-height: 80px; cursor:pointer; float:left;}
.next_btn1{  width:16px; text-align:center; height: 80px;
  display: block;
  line-height: 80px;cursor:pointer;float:right;}
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
