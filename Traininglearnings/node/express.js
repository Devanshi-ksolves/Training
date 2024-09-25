
const http = require('http');

const express = require('express');

const app = express();

app.get("/", (req, res) => {
    return res.send(`Hello ${req.query.name}`)
})

app.get("/about", (req, res) => {
    return res.send("Hello I am Devanshi")
})


// const myServer = http.createServer(app)

// myServer.listen(8000, () => {
//     console.log("Server start")
// })

app.listen(8000, () => console.log("server started"))
