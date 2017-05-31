<template>
  <div>
    <carousel />
  </div>
</template>
<script>
// import { mapGetters, mapActions } from 'vuex'
// import { CAROUSEL_LIST } from '../store/modules/carouselStore'
import carousel from '@/components/carousel'
export default {
  name: 'Index',
  data () {
    return {}
  },
  created () {
    // console.log(this)
    // console.log(carouselStore)
    // this.CAROUSEL_LIST(1)
  },
  components: {
    carousel
  },
  computed: {
    // ...mapGetters({
    //   carouselStore: 'carouselStore'
    // })
  },
  methods: {
    // ...mapActions([CAROUSEL_LIST])
  }
}
</script>
<style>

</style>
