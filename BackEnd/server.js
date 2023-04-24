
import path from "path";

// const express = require('express');
import express from 'express';
import nunjucks from 'nunjucks';
//import bodyParser from "body-parser";

import mysql from 'mysql';
const conn = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'a12301230a',
    database: 'test_board',
}

let connection = mysql.createConnection(conn);  //DB 커넥션 생성
connection.connect(); //DB 접속

//let sql = "INSERT INTO `board` (`B_TITLE`, `USER_ID`) VALUES ('for test01', 'test texts02')";

connection.query(sql, function(err, results, fields) {
    if (err) {
        console.log(err);
    }
    console.log(results);
});

sql = "SELECT * FROM board";

connection.query(sql, function (err, results, fields) {
    if (err) {
        console.log(err);
    }
    console.log(results);
});

connection.end();




const app = express();
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/view/index.html");
});

app.listen(3000, function() {
    console.log("server가 로컬호스트 3000에서 러닝중")
});

app.set('view engine', 'html');
nunjucks.configure('view', {express: app});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));