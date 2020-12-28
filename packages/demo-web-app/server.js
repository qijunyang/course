const express = require('express')
const app = express()
const config = require('./config');
app.use(express.static('public'))

app.get('/userlist', function (req, res) {
    var http = require('http');
    const url = config.api.user;
    const urlSplit = url.split(":");
    const port = urlSplit[urlSplit.length - 1];
    urlSplit.length = urlSplit.length - 1;
    var options = {
      host: urlSplit.join(""),
      path: '/userlist',
      port
    };

    const callback = function(response) {
      var str = '';

      //another chunk of data has been received, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });

      //the whole response has been received, so we just print it out here
      response.on('end', function () {
        res.json(JSON.parse(str));
      });
    }

    const request = http.request(options, callback).end();

    request.on('error', function(err) {
        res.send(err);
    });

})

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
})