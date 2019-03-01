var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
    res.write('data');

    res.end(' veri');

    console.log(req.url)
})

app.get('/login', function(req, res) {
    fs.readFile('index.html', function (err, data) {

        res.write(data)
        res.end('hellono')

        console.log(req.url)

    })


})

app.listen(3000)