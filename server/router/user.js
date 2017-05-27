const express = require('express');
const router = express.Router();
const User = require('../model/userModel');
const userSchema = require('../schema/userSchema');
// console.log(req.body.user); //post获取参数
// console.log(req.params.user); //根据url中的路由获取参数
// console.log(req.query.user); //get 获取参数
router.all('/',function(req, res, next){
  res.send('{"name":"user"}')
})
router.all('/save',function(req, res, next){
  // let data = {
  //   name: req.body.name,
  //   pwd: req.body.pwd,
  //   date:new Date(),
  //   hidden:req.body.name,
  //   age:req.body.age,
  //   email:req.body.email
  // }
  let data = {
    name: 'zhangtongchuan',
    pwd: '123456',
    date:new Date(),
    hidden:true,
    age:88,
    email:'zhangtch@yonyou.com'
  }
  let user = new userSchema(data)
  User.save(user).then(()=>{
    res.send({"code":10000,"msg":"","data":[]})
  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":[]})
  })
})
router.all('/delete',function(req, res, next){
  User.save(req.body).then(()=>{
    res.send({"code":10000,"msg":"","data":[]})
  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":[]})
  })
})
router.all('/list',function(req, res, next){
  User.find().then((data)=>{
    res.send({"code":10000,"msg":"","data":data})
  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":[]})
  })
})

router.all('/listPage',function(req, res, next){
  let page = req.query.page ? req.query.page : 1;
  let rows = req.query.rows ? req.query.rows : 10;
  User.findPage(Number(page),Number(rows)).then((data)=>{
    res.send({"code":10000,"msg":"","data":data.data,"total":data.total,page:page,rows:rows})
  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":[]})
  })
})
module.exports = router;
