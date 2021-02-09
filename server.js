const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//arquivos staticos
server.use(express.static('public'))

//nunjucks
server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server
})

//rotas
server.get("/", function(req, res){
    return res.render("about")
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio")
})



server.listen(5000, function(){
    console.log("server is runing")
})