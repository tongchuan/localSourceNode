const Promise = require('promise');
const Carousel = require('../schema/carouselSchema');

module.exports.find = function (){
  let p = new Promise(function(resolve,reject){
    Carousel.find({},function(err,doc){
      if(err==null){
        resolve(doc)
      }else{
        reject(err)
      }
    })
  })
  return p;
}

module.exports.save = function(carousel){
  let p = new Promise(function(resolve,reject){
    let U = new Carousel(carousel)
    U.save(function(err){
      if(err===null){
        resolve()
      }else{
        reject(err);
      }
    })
  });
  return p;
}
