<template>
  <div>
  <div class="container" style="min-width:960px">
    <!-- <banner v-bind:data="bannerData" /> -->
    <!-- <div class="row">
      <div class="col-xs-4" style="height:300px">
        <focusmap v-bind:focusList="focusList" />
      </div>
    </div> -->
  </div>
  <iviewtime />
    <!-- <upimg upimgtype="up1" v-on:getImageData="imageData" />
    <upimg upimgtype="up2" v-on:getImageData="imageData" />
    <upimg upimgtype="up3" v-on:getImageData="imageData" /> -->
    <!-- <form method="post" ref="upimageForm" action="http://127.0.0.1:88/user/upi" v-bind:target="ifameId" enctype="multipart/form-data">
        <a href="javascript:void(0)" v-on:click="addPic">添加图片 </a>
        <input type="file" @change="onFileChange" multiple style="display: none;">
        <input type="file" name="file" ref="upimageFile" @change="onFileChange" style="display: none;">
        <input type="submit" @click="submitupimg" ref="upimageSubmit" name="tijiao" style="display: none;">
    </form>
    <iframe v-bind:id="ifameId" @load="loaded" v-bind:name="ifameId" style="display:none"></iframe>
    <div ref="imgdata"></div> -->
    <!-- <upimage /> -->
    <!-- <carousel />
    <input type="text" v-model="msg" value="" name="">
    <badge name="Messages" v-bind:msg="msg" my-message="zhang" />
    <page v-bind:total="total" v-bind:rows ="rows" v-bind:page="page" v-bind:set-page="setPage" />-->
    <!-- <pagetwo v-bind:total="total"  v-bind:rows ="rows" v-bind:page="page" v-bind:set-page="setPage" /> -->
  </div>
</template>
<script>
// import $ from 'jquery'
// import { mapGetters, mapActions } from 'vuex'
// import { CAROUSEL_LIST } from '../store/modules/carouselStore'
import carousel from '@/components/carousel'
import badge from '@/components/badge'
import page from '@/components/page'
import pagetwo from '@/components/page2'
import upimage from '@/components/upimage'
import upimg from '@/components/upimg'
import banner from '@/components/banner'
import focusmap from '@/components/focusmap'
import iviewtime from '@/components/iviewtime'
export default {
  name: 'Index',
  data () {
    return {

      ifameId: 'imag' + Math.random(),
      // focusList: [
      //   {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b1.jpg', link: '/static/images/b1.jpg'},
      //   {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b2.jpg', link: '/static/images/b2.jpg'},
      //   {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b3.jpg', link: '/static/images/b3.jpg'},
      //   {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b4.jpg', link: '/static/images/b4.jpg'},
      //   {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b1.jpg', link: '/static/images/b1.jpg'},
      //   {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b2.jpg', link: '/static/images/b2.jpg'},
      //   {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b3.jpg', link: '/static/images/b3.jpg'},
      //   {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b4.jpg', link: '/static/images/b4.jpg'},
      //   {name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b5.jpg', link: '/static/images/b5.jpg'}
      // ],
      focusList: [],
      images: [],
      msg: '',
      rows: 10, // 一页几条
      page: 1 // 当前页
    }
  },
  created () {
    console.log(this.isEmail('3333@ss.cm'))
    console.log(this.isCard('1306231981220301x'))
    let that = this
    setInterval(function () {
      that.focusLists()
    }, 1000)
    // console.log(Vue)
    // console.log(this)
    // console.log(carouselStore)
    // this.CAROUSEL_LIST(1)
  },
  components: {
    carousel,
    badge,
    page,
    pagetwo,
    upimage,
    upimg,
    banner,
    focusmap,
    iviewtime
  },
  computed: {
    bannerData () {
      let data = []
      for (let i = 0; i < 5; i++) {
        data.push({
          image: '/static/images/1.png',
          title: '巨幅山水画图片',
          content: '昵图网所有作品均是用户自行上传分享并拥有版权或使用权，仅供网友学习交流，未经上传用户书面授权',
          href: ''
        })
      }
      return data
    },
    total () {
      return 90
    }
    // ...mapGetters({
    //   carouselStore: 'carouselStore'
    // })
  },
  methods: {
    focusLists () {
      this.focusList.push({name: '11', title: '焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图片焦点图代码 焦点图代码,JS焦点图代码,焦点图切换代码,焦点图', image: '/static/images/b1.jpg', link: '/static/images/b1.jpg'})
    },
    imageData (type, data) {
      console.log(type, data)
    },
    // addPic (e) {
    //   console.log()
    //   e.preventDefault()
    //   $(this.$refs.upimageFile).trigger('click')
    //   return false
    // },
    // onFileChange (e) {
    //   var files = e.target.files || e.dataTransfer.files
    //   if (!files.length) {
    //     return
    //   }
    //   $(this.$refs.upimageSubmit).trigger('click')
    //   // $('#tijiao').trigger('click')
    // },
    // loaded () {
    //   let that = this
    //   console.log(window.frames[that.ifameId].document.body)
    //   let data = window.frames[that.ifameId].document.body.innerHTML
    //   that.$refs.upimageFile.value = ''
    //   data = data.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    //   if (data === "") {
    //     return
    //   }
    //   $(that.$refs.imgdata).html(JSON.parse(data).image)
    // },
    // submitupimg () {
    //   // let that = this
    //   // console.log(window.frames[that.ifameId])
    //   // console.log($(window.frames[that.ifameId]))
    //   // console.log($('#' + that.ifameId))
    //   // $(window.frames[that.ifameId]).unbind('load').bind('load', () => {
    //   //   alert('')
    //   //   // console.log(e)
    //   //   // console.log(window.frames[that.ifameId].document)
    //   //   let data = window.frames[that.ifameId].document.body.innerHTML
    //   //   // console.log(data)
    //   //   that.$refs.upimageFile.value = ''
    //   //   data = data.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    //   //   // console.log(data)
    //   //   $(that.$refs.imgdata).html(data)
    //   //   window.frames[that.ifameId].document.body.innerHTML = ''
    //   //   // var data = $(window.frames['exec_target'].document.body).html()
    //   //   // console.log(data)
    //   // })
    // },
    setPage (page) {
      console.log('page' + page)
      console.log(this.$router)
      this.$router.replace({ path: '/?page=' + page })
      // this.USER_LIST(Object.assign(this.userStore.ListPage, {page: data}))
      this.page = page
      // this.$router.replace({ path: '/list/' + page })
      // this.USER_LIST(Object.assign(this.userStore.ListPage, {page: page}))
    }
    // ...mapActions([CAROUSEL_LIST])
  }
}
</script>
<style>

</style>
