import $ from 'jquery'
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

export default jq
