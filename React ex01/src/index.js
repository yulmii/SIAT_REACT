//import http from 'http'; //바벨이 설치되어야 쓸수 있는 문법 ==> const http = require('http');
//import express from 'express';
const http = require('http');
const express = require('express');

const app = express(); //app을 하면 
app.set('port',3000); //app에다가 'port'는 3000번이다

app.set("view engine", "ejs");
app.set("views", __dirname + '/views');

app.use("/",express.static('public'));



const server = http.createServer(app);
server.listen(app.get('port'),()=>{
    console.log(`http://localhost:${app.get('port')}`)
})