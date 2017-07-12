<template>
  <div>
    <h2>选择图片</h2>
    <a id='addPic' href="" v-on:click="addPic">添加图片 </a>
    <input type="file" @change="onFileChange" multiple style="display: none;">

    <div v-if="images.length >0">
      <ul>
        <li v-for="(item,index) in images">
          <img :src="item" @click='delImage(index)' />
          <a href="#" style="position: absolute;" @click='delImage(index)'>
          <span class="glyphicon glyphicon-remove"></span>
        </a>
        </li>
      </ul>
      <button @click="removeImage">移除全部图片</button>
      <button @click='uploadImage' >上传</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import $ from 'jquery'
export default {
  name: 'upimage',
  data () {
    return {
      images: []
    }
  },
  methods: {
    addPic (e) {
      e.preventDefault()
      $('input[type=file]').trigger('click')
      return false
    },
    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files)
    },
    createImage (file) {
      if (typeof FileReader === 'undefined') {
        alert('您的浏览器不支持图片上传，请升级您的浏览器')
        return false
      }
      // let image = new Image()
      let that = this
      let leng = file.length
      for (let i = 0; i < leng; i++) {
        let reader = new FileReader()
        reader.readAsDataURL(file[i])
        reader.onload = (e) => {
          console.log(e.target)
          that.images.push(e.target.result)
        }
      }
    },
    delImage (index) {
      this.images.shift(index)
    },
    removeImage (e) {
      this.images = []
    },
    uploadImage () {
      console.log(this.images)
      // return false
      let obj = {}
      obj.images = this.images
      $.ajax({
        type: 'post',
        data: obj,
        dataType: 'json',
        url: 'http://127.0.0.1:88/user/upimage',
        success: (data) => {
          console.log(data)
        }
      })
    }
  }
}
// public function upimage(){
//     define('UPLOAD_DIR', './images/');
//     $imgages = $_POST['images'];

//     foreach($imgages as $img){

//       $start = strpos($img,',');
//       $info = substr($img,0,$start+1);
//       // data:image/png;base64
//       $info = substr($info, 0, count($info)-9);
//       $infoStart = strpos($info,'/');
//       // echo "$info";
//       $suffix = substr($info,$infoStart+1);
//       $img= substr($img,$start+1);
//       // $img = str_replace(' ','+', $img);
//       $data = base64_decode($img);
//       $fileName = UPLOAD_DIR . uniqid() . '.'.$suffix;//'.png';
//       $success = file_put_contents($fileName, $data);
//     }

//     $data=array();
//     if($success){
//       $data['status']=1;
//       $data['msg']='上传成功';
//       echo json_encode($data);
//     }else{
//       $data['status']=0;
//       $data['msg']='系统繁忙，请售后再试';
//       echo json_encode($data);
//     }
//     exit();
//   }
</script>
<style type="text/css">
  
</style>
