const mongoose = require('../db/connect')
const Schema = mongoose.Schema;

const carouselSchema = new Schema({
  title: {type:String,default:''},
  content: {type:String,default:''},
  imgurl: {type:String,default:''},
  link: {type:String,default:''},
  date:{type:Date,default:Date.now},
  sort:{type:Number,default:0}
}, {
  versionKey: false
})

module.exports = mongoose.model('carousel', carouselSchema);