//配置细节接口文件  业务逻辑
var express = require("express");
var app = express()
var router = express.Router()
var session = require("express-session")
var db = require("./db.js")
var fs = require("fs");
// 加密 crypto
var crypto = require("crypto")
var ObjectID = require("mongodb").ObjectID
function User(user) {
    this.username = user.username;
    this.id = user.id
    this.passsword = user.passsword;
    this.veri = user.veri
}

// 验证码 
router.get("/AdminLoginHandler", function (req, res) {
    var actions = req.query.action
    switch (actions) {
        case "veri":
            /**
             * min  最小数   max  最大数
             * Math.random()   区间  ：0----1
             * eg：0  *  max=10  - min=1+min防止没有实际意义）  
             * 如果不加min   返回值为0  
             * Math.floor()  向下取整
             */
            var random = function (min, max) {
                return Math.floor(Math.random() * (max - min) + min)
            }
            var lastStr = ""
            var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
            for (var i = 0; i < 4; i++) {
                var code = str[random(0, str.length)]
                lastStr += code
            }
            var newUser = new User({
                username: "",
                passsword: "",
                id: "",
                veri: lastStr
            })
            req.session.veri = newUser.veri
            console.log(req.session)
            res.send({ "success": "验证码获取成功", "data": lastStr })
            break;
        case "checkveri":
            console.log(req.query.veri)
            console.log(req.session)
            if (req.query.veri === req.session.veri) {
                res.send({ "success": "校验成功" })
            } else {
                res.send({ "success": "校验失败" })
            }
            break;
        // 信息详情
        case "returninfo":
            var id = new ObjectID(req.session.user.sessionId)
            db.find("adminUser", { _id: id }, function (err, data) {
                console.log(data)
                if (data.length === 0 || data.length > 1) {
                    res.send({ "err": "系统出现故障" })
                } else {
                    res.send({ "success": "获取成功", data: data[0] })
                }
            })
            break;
        // 退出
        case "quit":
            if (req.session.user) {
                req.session.user = {}
                res.send({ "success": "退出成功" })
            } else {
                res.send({ "err": "请登录" })
            }
            break;

    }
})
//注册
router.post("/AdminRegHandler", function (req, res) {
    var actions = req.query.action;
    switch (actions) {
        case "login":

            /**
             * 1.数据库执行find方法
               2.判断当前用户是否存在
               3.获取到前端的用户名和密码还有验证码
             */
            var md5 = crypto.createHash("md5")

            var loginData = {
                "userName": req.body.userName,
                "password": md5.update(req.body.password).digest("base64"),
            }
            db.find("adminUser", loginData, function (err, data) {

                if (err) {
                    return
                }
                if (data.length !== 0) {
                    req.session.user = {}
                    req.session.user.userName = data[0].userName
                    req.session.user.passsword = data[0].passsword
                    req.session.user.sessionId = data[0]._id

                    res.send({ "success": "登录成功" })

                } else {
                    res.send({ "err": "用户不存在" })
                }

            })
            break;

        case "add":

            db.find("adminUser", { "userName": req.body.userName }, function (err, docs) {
                if (docs.length !== 0) {
                    res.send({ "err": "该用户已经存在" })
                } else {
                    db.find("adminUser", {}, function (err, arr) {
                        var md5 = crypto.createHash("md5")
                        if (err) {
                            return
                        }
                        var info = {
                            "userName": req.body.userName,
                            "trueName": req.body.truename,
                            "phone": (/^1[34578][0-9]{9}$/).test(req.body.phone),
                            "password": md5.update("123456").digest("base64"),
                            "createAt": new Date(),
                            "updateAt": new Date(),
                            "tokenId": arr.length + 1,
                            "isDelete": /^fcgl/.test(req.body.truename) ? false : true,
                            "power": req.body.powerCode == "1" ? "系统管理员" : "课程管理员",
                            "powerCode": req.body.powerCode,
                        };
                        db.add("adminUser", info, function (err, data) {

                            res.send({ "success": "添加成功" })
                        })

                    })
                }


            })
            break;
        case "updatepass":
            var md5 = crypto.createHash("md5")
            var mdHash = crypto.createHash("md5")
            var oldPass = md5.update(req.body.password).digest("base64")
            var password = mdHash.update(req.body.newpass).digest("base64")
            var sessionId = new ObjectID(req.session.user.sessionId)
            db.update("adminUser", { _id: sessionId, password: oldPass }, { $set: { password: password } }, function (err, data) {
                if (err) {
                    return
                } else {
                    res.send({ "successs": "修改成功" })
                }
            })
            break;
        case "update":
            var info = {
                userName: req.body.username,
                phone: req.body.phone,
                trueName: req.body.truename
            }
            db.update("adminUser", { "userName": info.userName },
                { $set: { phone: info.phone, trueName: info.trueName } },
                function (err, data) {
                    if (err) {
                        return
                    }
                    res.send({ "success": "修改成功" })
                })
    }
})
router.get("/AdminshowList", function (req, res) {
    /**
     * 1.获取地址栏字段
     * 2.switch
     * 3.查  注：查询条件
     */
    var action = req.query.action
    switch (action) {
        case "show":
            db.find("adminUser", {}, function (err, data) {
                // console.log(data)
                var selector = req.query.searchText ? {
                    //  $regex  进行正则匹配   .*匹配所有  $options  过滤字符  i  不区分大小写
                    userName: { $regex: ".*" + req.query.searchText + ".*", $options: "i" }
                } : {
                        tokenId: {
                            $gt: data.length - (parseInt(req.query.pageStart) * 3 - 3) - 3,
                            $lte: data.length - (parseInt(req.query.pageStart) * 3 - 3)
                        }

                    }
                db.find("adminUser", selector, function (err, result) {
                    if (result.length == 0) {
                        res.send({ "err": "没有数据" })
                    } else {
                        res.send({
                            "success": "获取成功",
                            data: {
                                pageSize: 3,
                                list: result,
                                count: data.length
                            }
                        })
                    }
                })

            })
            break;
        case "delete":
            var tokenId = Number(req.query.tokenId)
            db.del("adminUser", { tokenId: tokenId }, function (err, result) {
                if (err) {
                    return
                } else {
                    db.find("adminUser", { tokenId: { $gt: tokenId } }, function (err, data) {
                        if (err) {
                            return
                        }
                        for (var i = 0; i < data.length; i++) {
                            db.update("adminUser",
                                { tokenId: data[i].tokenId },
                                { $set: { tokenId: data[i].tokenId - 1 } }, function (err, result) {
                                    if (err) {
                                        return
                                    }
                                })
                        }
                        res.send({ "success": "删除成功" })
                    })

                }

            })
            break;
    }
})
router.post("/studentHandler", function (req, res) {
    var action = req.query.type
    switch (action) {
        case "addStudent":
            db.find("student", {}, function (err, data) {
                var studentData = {
                    username: req.body.username,
                    password: "123456",
                    phone: (/^[1][3,4,5,7,8][0-9]{9}$/).test(parseInt(req.body.phone)) ? req.body.phone : 'false',
                    email: (/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/).test(req.body.email) ? req.body.email : 'false',
                    createAt: new Date(),
                    updateAt: new Date(),
                    tokenId: data.length + 1,
                    isstate: req.body.freeze == '冻结' ? "正常" : "已冻结"
                }
                db.add("student", studentData, function (err, data) {
                    if (err) {
                        throw err
                    }
                    res.send({ "success": "添加成功", 'data': data })
                })
            })
            break;
        case "updateFreeze":
            var stuinfo = {
                isstate: req.body.freeze,
                tokenId: req.body.tokenId
            }
            db.update("student", { "tokenId": stuinfo.tokenId },
                { $set: { isstate: req.body.freeze == '冻结' ? "正常" : "已冻结" } },
                function (err, data) {
                    if (err) {
                        return
                    }
                    res.send({ "success": "修改成功" })
                })
    }

})

router.get("/studentHandlerReg", function (req, res) {
    var action = req.query.type
    switch (action) {
        case "showStudentList":
            db.find("student", {}, function (err, data) {
                var selector = req.query.searchText ? {
                    username: { $regex: ".*" + req.query.searchText + ".*", $options: "i" }
                } : {
                        tokenId: {
                            $gt: data.length - (parseInt(req.query.pageStart) * 3 - 3) - 3,
                            $lte: data.length - (parseInt(req.query.pageStart) * 3 - 3)
                        }
                    }

                db.find("student", selector, function (err, result) {
                    if (result.length == 0) {
                        res.send({ "err": "没有数据" })
                    } else {
                        res.send({
                            "success": "获取成功",
                            data: {
                                pageSize: 3,
                                list: result,
                                count: data.length
                            }
                        })
                    }
                })

            })


    }
})
router.get("/studentHandlerupdate", function (req, res) {
    var action = req.query.type;
    switch (action) {
        case "studentupdate":
            var info = {
                username: req.query.username,
                phone: req.query.phone,
                email: req.query.email,
            }
            console.log(info)
            db.update("student", { username: info.username },
                { $set: { phone: info.phone, email: info.email } },
                function (err, data) {
                    if (err) {
                        return
                    }
                    res.send({ "success": "修改成功" })
                })
    }
})
module.exports = router
