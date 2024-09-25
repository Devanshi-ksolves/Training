const http = require('http');
const fs = require('fs');
const url = require("url");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Received \n`
    const myUrl = url.parse(req.url)
    console.log(myUrl)
    if (req.url === "/favicon.ico") return res.end();
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/': res.end("HomePage")
                break
            case '/about': res.end("I an Devanshi")
                break
            default: res.end("404 Not found")
        }

    });

});

myServer.listen(8000, () => {
    console.log("Server start")
})
