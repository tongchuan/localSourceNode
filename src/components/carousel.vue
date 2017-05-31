<template>
  <div id="myCarousel" class="carousel slide">
    <!-- 轮播（Carousel）指标 -->
    <ol class="carousel-indicators">
      <li v-for="(item,index) in carouselStore.dataList" data-target="#myCarousel" v-bind:data-slide-to="index" v-bind:class="{active: index===0}"></li>
    </ol>
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
      <div v-for="(item,index) in carouselStore.dataList"  class="item" v-bind:class="{active: index===0}">
        <img v-bind:src="item.image" v-bind:alt="index">
      </div>
    </div>
    <!-- 轮播（Carousel）导航 -->
    <!-- <a class="carousel-control left" href="#myCarousel"
       data-slide="prev">&lsaquo;</a>
    <a class="carousel-control right" href="#myCarousel"
       data-slide="next">&rsaquo;</a> -->
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
    this.CAROUSEL_LIST(1)
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
.carousel-inner>.item>a>img, .carousel-inner>.item>img, .img-responsive, .thumbnail a>img, .thumbnail>img{
  width: 100%;
  height: 300px !important;
}
</style>
