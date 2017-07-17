<template>
  <span>
  <form method="post" ref="upimageForm" v-bind:action="config.img.upimg" v-bind:target="ifameId" enctype="multipart/form-data">
        <a href="javascript:void(0)" v-on:click="addPic">添加图片 </a>
        <!-- <input type="file" @change="onFileChange" multiple style="display: none;"> -->
        <input type="file" name="file" ref="upimageFile" @change="onFileChange" style="display: none;">
        <input type="submit" ref="upimageSubmit" name="tijiao" style="display: none;">
    </form>
    <iframe v-bind:id="ifameId" @load="loaded" v-bind:name="ifameId" style="display:none"></iframe>
    <div ref="imgdata"></div>
  </span>
</template>
<script type="text/javascript">
import config from '@/api/config'
import $ from 'jquery'
export default {
  name: 'upimg',
  props: ['upimgtype'],
  data () {
    return {
      ifameId: 'imag' + Math.random(),
      config: config
    }
  },
  methods: {
    addPic (e) {
      e.preventDefault()
      $(this.$refs.upimageFile).trigger('click')
      return false
    },
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      $(this.$refs.upimageSubmit).trigger('click')
    },
    loaded () {
      let that = this
      let data = window.frames[that.ifameId].document.body.innerHTML
      that.$refs.upimageFile.value = ''
      data = data.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      if (data === '') {
        return
      }
      that.$emit('getImageData', that.upimgtype, JSON.parse(data))
      // $(that.$refs.imgdata).html(JSON.parse(data).image)
    }
  }
}
</script>
<style type="text/css">
  
</style>
