import socketIo from 'socket.io'
import mos from './module/os'
export default function(server){
  const io = socketIo(server)
  // console.log(IO)
  io.on('connection',(socket)=>{
    socket.on('os.EOL',()=>{
      let data = mos.EOL()
      socket.emit('os.EOL',{data})
    })
    socket.on('os.arch',()=>{
      let data = mos.arch()
      socket.emit('os.arch',{data})
    })
    socket.on('os.constants',()=>{
      let data = mos.constants()
      socket.emit('os.constants',{data})
    })
    socket.on('os.cpus',()=>{
      let data = mos.cpus()
      socket.emit('os.cpus',{data})
    })
    socket.on('os.endianness',()=>{
      let data = mos.endianness()
      socket.emit('os.endianness',{data})
    })
    socket.on('os.freemem',()=>{
      let data = mos.freemem()
      socket.emit('os.freemem',{data})
    })
    socket.on('os.homedir',()=>{
      let data = mos.homedir()
      socket.emit('os.homedir',{data})
    })
    socket.on('os.hostname',()=>{
      let data = mos.hostname()
      socket.emit('os.hostname',{data})
    })
    socket.on('os.loadavg',()=>{
      let data = mos.loadavg()
      socket.emit('os.loadavg',{data})
    })
    socket.on('os.networkInterfaces',()=>{
      let data = mos.networkInterfaces()
      socket.emit('os.networkInterfaces',{data})
    })
    socket.on('os.platform',()=>{
      let data = mos.platform()
      socket.emit('os.platform',{data})
    })
    socket.on('os.release',()=>{
      let data = mos.release()
      socket.emit('os.release',{data})
    })
    socket.on('os.tmpdir',()=>{
      let data = mos.tmpdir()
      socket.emit('os.tmpdir',{data})
    })
    socket.on('os.totalmem',()=>{
      let data = mos.totalmem()
      socket.emit('os.totalmem',{data})
    })
    socket.on('os.type',()=>{
      let data = mos.type()
      socket.emit('os.type',{data})
    })
    socket.on('os.uptime',()=>{
      let data = mos.uptime()
      socket.emit('os.uptime',{data})
    })
    socket.on('os.userInfo',()=>{
      let data = mos.userInfo()
      socket.emit('os.userInfo',{data})
    })
    
    // socket.emit('news', { hello: 'world' });
    // socket.on('my other event', function (data) {
    //   console.log(JSON.stringify(data));
    //   // socket.emit('news', { hello: 'world' });
    // });
    // socket.on('disconnect', function () {
    //   io.emit('user disconnected');
    // });
  })
}