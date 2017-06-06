const express = require('express');
const router = express.Router();
const NewsClass = require('../model/newsClassModel');
router.all('/save',function(req, res, next){
  let data = {
    name: '分类1name'+Math.random(),
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
  NewsClass.save(data).then(()=>{
    res.send({"code":10000,"msg":"","data":[]})
  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":[]})
  })
})
router.all('/list',function(req, res, next){
  NewsClass.find().then((data)=>{
    res.send({"code":10000,"msg":"","data":data})
  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":[]})
  })
})
module.exports = router;