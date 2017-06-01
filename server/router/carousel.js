const express = require('express');
const router = express.Router();
const Carousel = require('../model/carouselModel');
const carouselSchema = require('../schema/carouselSchema');

router.all('/save',function(req, res, next){
  let carousel = [{
    title: "adv Title1",
    content: "adv Content1",
    imgurl: "/static/slide1.png",
    link: "/static/slide1.png?img"
  },{
    title: "adv Title2",
    content: "adv Content2",
    imgurl: "/static/slide2.png",
    link: "/static/slide2.png?img"
  },{
    title: "adv Title3",
    content: "adv Content3",
    imgurl: "/static/slide3.png",
    link: "/static/slide3.png?img"
  },{
    title: "adv Title4",
    content: "adv Content4",
    imgurl: "/static/slide1.png",
    link: "/static/slide1.png?img"
  }]
  carousel.forEach((item)=>{
    Carousel.save(item).then(()=>{
      res.send({"code":10000,"msg":"","data":[]})
    },(err)=>{
      res.send({"code":10001,"msg":err.toString(),"data":[]})
    })
  })
  // res.send({"code":10001,"msg":err.toString(),"data":[]})
})

router.all('/find',function(req, res, next){
  Carousel.find().then((data)=>{
    res.send({"code":10000,"msg":"","data":data})
  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":[]})
  })
})
module.exports = router;