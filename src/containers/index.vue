<template>
  <div>
    <!-- <carousel />
    <input type="text" v-model="msg" value="" name="">
    <badge name="Messages" v-bind:msg="msg" my-message="zhang" />
    <page v-bind:total="total" v-bind:rows -->="rows" v-bind:page="page" v-bind:set-page="setPage" />
  </div>
</template>
<script>
// import { mapGetters, mapActions } from 'vuex'
// import { CAROUSEL_LIST } from '../store/modules/carouselStore'
import carousel from '@/components/carousel'
import badge from '@/components/badge'
import page from '@/components/page'
export default {
  name: 'Index',
  data () {
    return {
      msg: '',
      total: 100, // 一共多少条
      rows: 9, // 一页几条
      page: 1 // 当前页
    }
  },
  created () {
    // console.log(this)
    // console.log(carouselStore)
    // this.CAROUSEL_LIST(1)
  },
  components: {
    carousel,
    badge,
    page
  },
  computed: {
    // ...mapGetters({
    //   carouselStore: 'carouselStore'
    // })
  },
  methods: {
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
