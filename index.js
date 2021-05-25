const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const requests = require("requests");
const { response } = require("express");


const server = http.createServer((req, res)=>{
    fs.readFile(`userapi.json` , "utf-8" , (err , data) =>{
        console.log(data);
        res.end(data);
    })
});

server.listen(8000 , "127.0.0.1" , () =>{
    console.log("listening to port 8000");
});

//app.get("/", (req, res) => {
 //  res.send(
   //      rd = fs.readFile(`userapi.json`, "utf-8", (err, data) => {
     //       console.log(data);})
           
    //);
    //res.send(rd);
 //});


//app.listen(5000, () => {
 //   console.log("listening to port number 5000");
//});