const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data") //array do data.js

//arquivos staticos
server.use(express.static('public'))

//nunjucks
server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

//rotas
server.get("/", function (req, res) {

    const about = {
        avatar_url: "https://jpimg.com.br/uploads/2019/04/james-williams-chris.jpg",
        name: "Cris Rock",
        role: "Ator",
        description: 'Todo mundo odeia o Chris. <a href="https://globoplay.globo.com/todo-mundo-odeia-o-chris/t/tDyxRKNSFp/" target="_blank">Assista no Globo play </a>',
        link: [
            { name: "Github", url: "https://github.com/WesleyHs" },
            { name: "Twitter", url: "https://twitter.com/login?lang=pt" },
            { name: "Linkedin", url: "www.linkedin.com" },

        ]
    }
    return res.render("about", { about: about }) //pega o data about
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos })
})

server.get("/video", function (req, res) {
    const id = req.query.id;
    //find um por um
    const video = videos.find(function (video) {
        return video.id == id


        // Ou 
        // if(video.id == id){
        //     return true
        // }
    })

    if (!video) {
        return res.send("Video not found")
    }

    res.render("video", { item: video })
})



server.listen(5000, function () {
    console.log("server is runing")
})