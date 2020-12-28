const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/userlist', function (req, res) {
    res.send('this is a user list.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})