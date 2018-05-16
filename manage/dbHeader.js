var mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;
let url = 'mongodb://localhost:27017/my_info';

//查找

var add=function(db,collections,sele,fn){
        //collection 集合名
        db.collection(collections).insert([sele],function(err,data){
            if(err){throw err}
            fn(data)
        })
 }

// 查询
 var find=function(db,collections,sele,fn){
    //collection 集合名
    db.collection(collections).find(sele).toArray(function(err,data){
        if(err){throw err}
        fn(data)
        console.log(data)
    })
}

// 删除
 var del=function(db,collections,sele,fn){
    //collection 集合名
    db.collection(collections).deleteOne(sele,function(err,data){
        if(err){throw err}
        fn(data)
    })
}

 
 //修改
 var update=function(db,collections,sele,fn){
    //collection 集合名
    db.collection(collections).update(sele[0],{$set:sele[1]},function(err,result){
       
        if(err){throw err}
        fn(result)
    })
}




 module.exports = function(req,res,collections,sele,fn){
    MongoClient.connect(url,function(err,db){
        if(err){throw err}
        //req.query  get
        //req.body  post
        moduleType[req.ad](db,collections,sele,fn)
        db.close();
    })
 }


 var moduleType = {
     "add":add,
     "find":find,
     "del":del,
     "update":update
 }