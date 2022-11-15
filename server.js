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

app.get('/tip', function (req, res) {
    res.send('total or tip percentage')
  })
  
  app.get('/tip/:total/:tip', function (req, res) {
      res.send(`${parseInt(req.params.total) * (parseInt(req.params.tip)) / 100}`)
    })

app.listen(3000)