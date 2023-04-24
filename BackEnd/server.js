
import path from "path";

// const express = require('express');
import express, { response } from 'express';
import nunjucks from 'nunjucks';
//import bodyParser from "body-parser";

import mysql from 'mysql';
import bodyParser from "body-parser";

const app = express();
const __dirname = path.resolve();

const dbconfig = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'a12301230a',
    database: 'test_board',
}

let connection = mysql.createConnection(dbconfig);  //DB 커넥션 생성
connection.connect(); //DB 접속

//let sql = "INSERT INTO `board` (`B_TITLE`, `USER_ID`) VALUES ('for test01', 'test texts02')";

//connection.query(sql, function(err, results, fields) {
//    if (err) {
//        console.log(err);
//    }
//    console.log(results);
//});

//sql = "SELECT * FROM board";

//connection.query(sql, function (err, results, fields) {
//    if (err) {
//        console.log(err);
//    }
//    console.log(results);
//});

// Read



app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view/index.html");
});

app.listen(3000, function() {
    console.log("server가 로컬호스트 3000에서 러닝중")
});

app.set('view engine', 'html');
nunjucks.configure('view', {express: app});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

// Create

app.get('/write', (req, res) => {
    res.render('write.html');
});

//app.get('/list', (req, res) => {
//    res.render('list.html');
//});

app.post('/create', (req, res) => {
    console.log(req.body)
})

//connection.end();

app.get('/list', (req, res) => {
    
    const readSql = "select * from board"
    connection.query(readSql, function (err, results, fields) {
        if (err) throw err;
        res.send(results)
    });
    
});