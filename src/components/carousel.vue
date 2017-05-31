<template>
  <div id="myCarousel" class="carousel slide">
  {{carouselStore.dataList}}
  <!-- 轮播（Carousel）指标 -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>   
  <!-- 轮播（Carousel）项目 -->
  <div class="carousel-inner">
    <div class="item active">
      <img src="/wp-content/uploads/2014/07/slide1.png" alt="First slide">
    </div>
    <div class="item">
      <img src="/wp-content/uploads/2014/07/slide2.png" alt="Second slide">
    </div>
    <div class="item">
      <img src="/wp-content/uploads/2014/07/slide3.png" alt="Third slide">
    </div>
  </div>
  <!-- 轮播（Carousel）导航 -->
  <a class="carousel-control left" href="#myCarousel" 
     data-slide="prev">&lsaquo;</a>
  <a class="carousel-control right" href="#myCarousel" 
     data-slide="next">&rsaquo;</a>
</div> 
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { CAROUSEL_LIST } from '../store/modules/carouselStore'
export default {
  name: 'Carousel',
  data () {
    return {}
  },
  created () {
    this.CAROUSEL_LIST()
    console.log(this.CAROUSEL_LIST(1))
    console.log(this.carouselStore)
  },
  computed: {
    ...mapGetters({
      carouselStore: 'carouselStore'
    })
  },
  methods: {
    ...mapActions([CAROUSEL_LIST])
  }
}
</script>
<style>
  
</style>
