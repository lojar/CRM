var mysql = require('mysql'); //导入mysql包
const fs = require("fs");
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'crm'
});



connection.connect();
var express = require('express');
var server = express();
server.use(express.static('./'));


server.get('/login', function (req, res) {
  var response = {
    "account": req.query.account,
    "password": req.query.password,
  };
  var selectSQL = "select account,password from user where account = '" + req.query.account + "' and password = '" + req.query.password + "'";

  //var selectSQL = "select password from user where account='"+req.query.account+"'";
  var addSqlParams = [req.query.account, req.query.password];
  connection.query(selectSQL, function (err, result) {
    // if(err){
    //  console.log('[login ERROR] - ',err.message);
    //  return;
    // }
    //console.log(result);
    if (result == '') {
      console.log("帐号密码错误");
      // console.log(response.account)
      res.end("0"); //如果登录失败就给客户端返回0，
    } else {
      console.log("OK");
      res.end("1"); //如果登录成就给客户端返回1
    }
  });
  console.log(response);
  //  res.end(JSON.stringify(response));
})

// app.get('/register.html', function (req, res) {
//    res.sendFile( __dirname + "/" + "register.html" );
// })

//注册模块
var addSql = 'INSERT INTO user(account,name,password,state) VALUES(?,?,?,?)';

server.get('/process_get', function (req, res) {

  // 输出 JSON 格式
  var response = {

    "account": req.query.account,
    "name": req.query.name,
    "password": req.query.password,
    "state": req.query.state
  };
  var addSqlParams = [req.query.account, req.query.name, req.query.password, req.query.state];
  var selectSQL1 = "select account from user where account = '" + req.query.account + "'";
  console.log(selectSQL1)
  connection.query(selectSQL1, function (err1, result1) {
    if (err1) {
      console.log('[login ERROR] - ', err1.message);
      return;
    }
    console.log('result1:' + result1);
    if (result1 == '') {
      connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
          console.log('[INSERT ERROR] - ', err.message);
          res.end("0"); //如果注册失败就给客户端返回0
          return; //如果失败了就直接return不会继续下面的代码
        }
        console.log("OK");
        // res.end("1");//如果注册成功就给客户端返回1
        res.end("1"); //如果注册成功就给客户端返回1
      });
    } else {
      console.log("此账号已存在");
      res.end("2"); //如果登录成就给客户端返回1
    }



  })

  console.log(response);
  //  res.end(JSON.stringify(response));
})

// 获取图片
var db = mysql.createConnection({
  honst: 'locallhost',
  user: 'root',
  password: '123456',
  database: 'crm'
})

server.get('/huotu', function (req, res) {
  db.query('SELECT * FROM `base_dict`', (err, data) => {
    if (err) {
      console.log('出错了', err)
    } else {
      console.log('成功了')
      res.end(JSON.stringify(data))
    }
  })

})







// 获取第四个表格   
var sjp01 = mysql.createConnection({
  honst: 'locallhost',
  user: 'root',
  password: '123456',
  database: 'crm'
})

server.get('/kebai01', function (req, res) {
  sjp01.query('SELECT * FROM `kebai`', (err, data) => {
    if (err) {
      console.log('出错了', err)
    } else {
      console.log('成功了')
      res.end(JSON.stringify(data))
    }
  })

})


// 删除第四个表格  
server.get('/kebai02', function (req, res) {

  sjp01.query('DELETE FROM kebai WHERE id=' + req.query.qqqq, (err, data) => {
    if (err) {
      console.log('出错了', err)
    } else {
      console.log('成功了')
      res.end("1")
    }
  })
  //  console.log(&quot;+req.query.qqqq+&quot;)

})


// 第4个表格添加数据
var addSql99 = 'INSERT INTO kebai(id,yname,kname,ftime,fren,fdizhi,fangxin,xiabai) VALUES(?,?,?,?,?,?,?,?)';

server.get('/kebai', function (req, res) {

  // 输出 JSON 格式
  var response99 = {
    "id": req.query.id,
    "yname": req.query.yname,
    "kname": req.query.kname,
    "ftime": req.query.ftime,
    "fren": req.query.fren,
    "fdizhi": req.query.fdizhi,
    "fangxin": req.query.fangxin,
    "xiabai": req.query.xiabai
  };
  var addSqlParams99 = [req.query.id, req.query.yname, req.query.kname, req.query.ftime, req.query.fren, req.query.fdizhi, req.query.fangxin, req.query.xiabai];
  //  var selectSQL99= "select yname from kebai where yname = '"+req.query.yname+"'";
  //  console.log(selectSQL99)
  //  connection.query(selectSQL99,function (err99, result99) {
  // if(err99){
  //   console.log('[login ERROR] - ',err99.message);
  //   return;
  //  }
  //  console.log(result99);
  //  if(result99==''){
  connection.query(addSql99, addSqlParams99, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      res.end("0"); //如果注册失败就给客户端返回0
      return; //如果失败了就直接return不会继续下面的代码
    }
    console.log("OK");
    // res.end("1");//如果注册成功就给客户端返回1
    res.end("1"); //如果注册成功就给客户端返回1
  });
  //     }
  //  else{
  //   console.log("此账号已存在");
  //   res.end("2");//如果登录成就给客户端返回1
  //  }

  console.log(response99);

})


//  res.end(JSON.stringify(response));




var server111 = server.listen(8085, function () {

  var host = server111.address().address
  var port = server111.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})