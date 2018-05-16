const express = require('express');
const mongodb = require('mongodb');
let app = express();
const path = require('path');
const dbHeader = require("./dbHeader")


app.use(express.static(path.join(__dirname,'public')));


// 二次封装的调用
app.get('/add',function(req,res){
    req.ad = "add";
    function fn(result){
        res.send({
            data:"成功"
        })
    }
    dbHeader(req,res,'director',req.query,fn)
})

app.get('/find',function(req,res){
    req.ad = "find";
    function fn(result){
        res.send({
            data:"成功",
            result:result
        })
    }
    dbHeader(req,res,'director',req.query,fn)
})

//director  find
app.get('/director.html/find',function(req,res){
    req.ad = "find";
    console.log(req.query)
    function fn(result){
        res.send({
            data:"成功",
            result:result
        })
    }
    dbHeader(req,res,'stu',req.query,fn)
})
//director  delete
app.get('/director.html/delete',function(req,res){
    req.ad = "del";
    function fn(result){
        res.send({
            data:"成功"
        })
    }
    dbHeader(req,res,'stu',req.query,fn)
})

//director  update
app.get('/director.html/update',function(req,res){
    req.ad = "update";
    console.log(req.query)
    function fn(result){
        res.send({
            data:"成功"
        })
    }
    dbHeader(req,res,'stu',
    [
        {name:req.query.name},
        {
             语文:req.query.语文,
             数学:req.query.数学,
             英语:req.query.英语      
        }
    ],fn)    
})
// director add
app.get('/director.html/add',function(req,res){
    req.ad = "add";
    function fn(result){
        res.send({
            data:"成功"
        })
    }
    dbHeader(req,res,'stu',req.query,fn)
})

// student find
app.get('/student.html/find',function(req,res){
    req.ad = "find";
    console.log(req.query)
    function fn(result){
        res.send({
            data:"成功",
            result:result
        })
    }
    dbHeader(req,res,'stu',req.query,fn)
})


app.get('/stufind',function(req,res){
    req.ad = "find";
    console.log(req.query)
    function fn(result){
        res.send({
            data:"成功",
            result:result
        })
    }
    dbHeader(req,res,'student',req.query,fn)
})
// student add   student 学生用户表
app.get('/stuadd',function(req,res){
    req.ad = "add";
    function fn(result){
        res.send({
            data:"成功"
        })
    }
    dbHeader(req,res,'student',req.query,fn)
})


//teacher find   注册
app.get('/tfind',function(req,res){
    req.ad = "find";
    console.log(req.query)
    function fn(result){
        res.send({
            data:"成功",
            result:result
        })
    }
    dbHeader(req,res,'teacher',req.query,fn)
})

app.get('/tadd',function(req,res){
    req.ad = "add";
    function fn(result){
        res.send({
            data:"成功"
        })
    }
    dbHeader(req,res,'teacher',req.query,fn)
})



// app.get('/delete',function(req,res){
//     req.ad = "del";
//     function fn(result){
//         res.send({
//             data:"成功"
//         })
//     }
//     dbHeader(req,res,'director',req.query,fn)
// })


// app.get('/update',function(req,res){
//     req.ad = "update";    
//     function fn(result){
//         res.send({
//             data:"成功"
//         })
//     }
//     dbHeader(req,res,'director',[{sname:req.query.sname},{ssex:req.query.ssex}],fn)
//      console.log(req.query)
// })



app.listen(5500,function(err){
    if(err){
        throw err
    }
    console.log("正在创建.........")
})