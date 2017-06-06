const mongoose = require('../db/connect')
const Schema = mongoose.Schema;

const newsClassSchema = new Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  name: {type:String,default:''},
  enName: {type:String,default:''},
  title: {type:String,default:''},
  keywords: {type:String,default:''},
  description: {type:String,default:''},
  icon: {type:String,default:''},
  link: {type:String,default:''},
  addDate:{type:Date,default:Date.now},
  updateDate:{type:Date,default:Date.now},
  sort:{type:Number,default:0}
}, {
  versionKey: false
})
module.exports = mongoose.model('newsclass', newsClassSchema);