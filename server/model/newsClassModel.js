const Promise = require('promise');
const NewsClass = require('../schema/newsClassSchema');

module.exports.remove = function(data){
  let p = new Promise(function(resolve,reject){
    NewsClass.remove(data,function(err){
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
    NewsClass.find({},function(err,doc){
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
    let query = NewsClass.find({})
    query.skip((page-1)*rows)
    query.limit(rows)
    query.exec(function(err,doc){
      if(err==null){
        NewsClass.find(function(err,result){
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
    let U = new NewsClass(user)
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
