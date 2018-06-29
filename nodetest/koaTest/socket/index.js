import socketIo from 'socket.io'

export default function(server){
  const io = socketIo(server)
  // console.log(IO)
  io.on('connection',(socket)=>{
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(JSON.stringify(data));
      // socket.emit('news', { hello: 'world' });
    });
    socket.on('disconnect', function () {
      io.emit('user disconnected');
    });
  })
}