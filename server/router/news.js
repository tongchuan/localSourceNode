const express = require('express');
const router = express.Router();
const News = require('../model/newsModel');

router.all('/save',function(req, res, next){
  let data = {
    newClassId:'593630428e400d33c8a9e03f',
    name: '分类1name',
    enName: '分类1enName',
    title: '分类1title',
    keywords: '分类1keywords',
    description: '分类1description',
    icon: '分类1icon',
    link: '分类1link',
    addDate:new Date(),
    updateDate:new Date(),
    sort:0
  }
  // let data = {
  //   name: 'zhangtongchuan',
  //   pwd: '123456',
  //   date:new Date(),
  //   hidden:true,
  //   age:88,
  //   email:'zhangtch@yonyou.com'
  // }

  News.save(data).then(()=>{
    res.send({"code":10000,"msg":"","data":[]})
  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":[]})
  })
})
router.all('/list',function(req, res, next){
  News.find().then((data)=>{
    res.send({"code":10000,"msg":"","data":data})
  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":[]})
  })
})
module.exports = router;