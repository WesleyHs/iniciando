const express = require('express')
const server = express()

//rotas
server.get("/", function(req, res){
    return res.send("helllo world 3")
})

server.listen(5000, function(){
    console.log("server is runing")
})