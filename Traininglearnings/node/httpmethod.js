//HTTP GET - when want to get data from the sever
//HTTP POST - when we want to send or mutate some data to server
const http = require('http');
const fs = require('fs');
const url = require("url");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.method} ${req.url} New Request Received \n`
    const myUrl = url.parse(req.url)
    if (req.url === "/favicon.ico") return res.end();
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/': if (req.method === 'GET') res.end("HomePage")
                break
            case '/about': res.end("I an Devanshi")
                break
            case '/signup': if (req.method === 'GET') res.end("This is a signup form");
            else if (req.method === 'POST') {
                res.end('Success')

            }
            default: res.end("404 Not found")
        }

    });

});

myServer.listen(8000, () => {
    console.log("Server start")
})
