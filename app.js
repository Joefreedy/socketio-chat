var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('bir kullanici baglandi.');
  socket.on('disconnect', function(){
    console.log('Kullanici Çikiş Yapti.');
});
});

io.on('connection', function (socket){
    socket.on('chat message', function(msg){
        console.log('mesaj: ' + msg);
    });
});

http.listen(3000, function(){
  console.log('Port Aktif:3000');
});