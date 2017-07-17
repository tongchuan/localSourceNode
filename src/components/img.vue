<template>
  <div class="container">
    <div class="baguetteBoxOne gallery">
      <ul>
        <li><a href="/static/img/1-1.jpg" data-caption="Golden Gate Bridge"><img src="/static/img/thumbs/1-1.jpg"></a>
        <a href="/static/img/1-2.jpg" title="Midnight City"><img src="/static/img/thumbs/1-2.jpg"></a>
        <a href="/static/img/1-3.jpg"><img src="/static/img/thumbs/1-3.jpg"></a>
        <a href="/static/img/1-4.jpg"><img src="/static/img/thumbs/1-4.jpg"></a>
        <a href="/static/img/1-5.jpg"><img src="/static/img/thumbs/1-5.jpg"></a></li>
        <li><a href="/static/img/1-6.jpg"><img src="/static/img/thumbs/1-6.jpg"></a>
        <a href="/static/img/1-7.jpg"><img src="/static/img/thumbs/1-7.jpg"></a>
        <a href="/static/img/1-8.jpg"><img src="/static/img/thumbs/1-8.jpg"></a></li>
      </ul>
        
        
    </div>
  </div>
</template>
<script type="text/javascript">
import baguettebox from 'baguettebox.js'
import 'baguettebox.js/dist/baguettebox.css'
export default {
  name: 'img',
  data () {
    return {}
  },
  mounted () {
    baguettebox.run('.gallery', {
      // buttons: false,
      // afterShow: () => {
      //   console.log('afterShow')
      // },
      // afterHide: () => {
      //   console.log('afterHide')
      // }
    })
  }
}
</script>
<style type="text/css">
  .baguetteBoxOne li{
    width: 50%;
    padding: 0 10px;
    float: left;
  }
  .baguetteBoxOne li img{
    width: 100%;
    margin: 10px;
  }
</style>
