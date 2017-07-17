<template>
<div>
  <Row>
        <Col span="12">
            <!-- <Time-picker :value="time1" format="HH点mm分ss秒" placeholder="选择时间" style="width: 168px"></Time-picker> -->
             <Time-picker v-model="time1" type="time" placeholder="选择时间" style="width: 168px"></Time-picker>
        </Col>
        <Col span="12">
            <Time-picker v-model="time2" format="HH:mm:ss" type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
        </Col>
    </Row>
    <Row>
        <Col span="12">
        <input type="button" v-on:click="show" value="查看" name="show">
        </Col>
        <Col span="12">

        </Col>
    </Row>
</div>
  
</template>
<script type="text/javascript">
export default {
  name: 'iviewtime',
  data () {
    return {
      time1: '00:00:00',
      time2: ['00:00:00', '00:00:00']
    }
  },
  methods: {
    show () {
      this.formatTime(this.time1)
      console.log(this.formatTime(this.time1))
      console.log(this.formatTime(this.time2[0]))
      console.log(this.formatTime(this.time2[1]))
      // let date = new Date(this.time1)
      // console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
      // console.log(this.time1)
      // console.log(this.time2)
    }
  }
}
</script>
<style type="text/css">
  
</style>
