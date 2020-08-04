const express = require('express')

const app= express()

app.get('/',(req,res)=>{
    res.send("hey whars up from express");
})

app.listen(3000);