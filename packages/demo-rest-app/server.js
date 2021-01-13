const express = require('express')
const app = express()
const config = require("./config");

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('rest app.')
})

app.get('/api/userlist', function (req, res) {
    res.json([{name: "Jacky"}, {name: "Tom"}])
})

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
})