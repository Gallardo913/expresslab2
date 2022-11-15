const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('greetings')
})

app.get('/greeting', function(req, res) {
    res.send('Hello, stranger')
})

app.get('/greeting/:name', function(req, res) {
    res.send('Hello, ' + (req.params.name) + ' its so nice to see you!')
})


app.listen(3000)