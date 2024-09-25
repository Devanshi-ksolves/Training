const express = require('express');
const users = require('./data.json');
const fs = require('fs')
const app = express();
const port = 8000;

app.use((req, res, next) => {
    console.log("middleware 1")
    // return res.json({ mgs: "Middleware 1" })
    next()
})

app.use((req, res, next) => {
    fs.appendFile('logs.txt', `\n${Date.now()}: ${req.method} ${req.pathS}`, (err, data) => {
        next()
    })
})

app.get('/users', (req, res) => { return res.json(users); })
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id = id)
    return res.json(user)
})
app.post('/users', (req, res) => { })

app.listen(port, () => console.log(`Server is running at port ${port}`))