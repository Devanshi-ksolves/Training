const express = require('express');
const users = require('./data.json');
const app = express();
const port = 8000;

app.get('/users', (req, res) => { return res.json(users); })
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id = id)
    return res.json(user)
})
app.post('/users', (req, res) => { })

app.listen(port, () => console.log(`Server is running at port ${port}`))