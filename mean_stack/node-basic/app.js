// const express = require('express')

// const app= express()

// app.get('/',(req,res)=>{
//     res.send("hey whars up from express");
// })

// app.listen(3000);

const fs= require('fs');
const fileName="target.txt";
// fs.watch(fileName,()=>console.log('File Changed!'));
fs.readFile(fileName,(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log("Node js asynchronous programming");