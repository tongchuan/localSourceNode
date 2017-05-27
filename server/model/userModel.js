const Promise = require('promise');
const User = require('../schema/userSchema');

module.exports.remove = function(){
  let p = new Promise(function(resolve,reject){
    User.remove(where,function(err){
      if(err===null){
        resolve();
      }else{
        reject(err)
      }
    })
  })
  return p;
}

module.exports.find = function (){
  let p = new Promise(function(resolve,reject){
    User.find({},function(err,doc){
      if(err==null){
        resolve(doc)
      }else{
        reject(err)
      }
    })
  })
  return p;
}

module.exports.save = function(user){
  let p = new Promise(function(resolve,reject){
    let U = new User(user)
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