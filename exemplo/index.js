var http = require('http').Server();
var io = require('socket.io')(http);

var boards = [];
var board = [];
for(let i = 0; i < 100; i++){
    board.push(0);
}

boards.push(board.slice(0));
boards.push(board.slice(0));
boards.push(board.slice(0));
boards.push(board.slice(0));


io.on('connection',(socket) => {

    socket.emit('board',boards);

    socket.broadcast.emit('log',"Another Player");

    socket.on('click',(data) => {
        boards[data.index] = data.board;
      
        io.sockets.emit('board',boards);
    })

});



http.listen('7777',(client)=>{
    console.log("Server UP")
})
