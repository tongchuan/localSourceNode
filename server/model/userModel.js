const Promise = require('promise');
const User = require('../schema/userSchema');

module.exports.remove = function(data){
  let p = new Promise(function(resolve,reject){
    User.remove(data,function(err){
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

module.exports.findPage = function (page,rows,username){
  let p = new Promise(function(resolve,reject){
    let query = User.find({})
    query.skip((page-1)*rows)
    query.limit(rows)
    query.exec(function(err,doc){
      if(err==null){
        User.find(function(err,result){
          if(err==null){
            resolve({
              data:doc,
              total:result.length
            })
          }else{
            reject(err)
          }
        });
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
