const mongoose = require('../db/connect')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  pwd: String,
  date:{type:Date,default:Date.now},
  hidden:Boolean,
  age:{type:Number,default:0},
  email:{type:String,default:''}
}, {
  versionKey: false
})

module.exports = mongoose.model('User', userSchema);