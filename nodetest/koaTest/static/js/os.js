
window.socket.on('os.EOL',(data)=>{
  console.log(data)
})
window.socket.on('os.arch',(data)=>{
  console.log(data)
})
window.socket.on('os.constants',(data)=>{
  console.log(data)
})
window.socket.on('os.cpus',(data)=>{
  console.log(data)
})
window.socket.on('os.endianness',(data)=>{
  console.log(data)
})
window.socket.on('os.freemem',(data)=>{
  console.log(data)
})
window.socket.on('os.homedir',(data)=>{
  console.log(data)
})
window.socket.on('os.hostname',(data)=>{
  console.log(data)
})
window.socket.on('os.loadavg',(data)=>{
  console.log(data)
})
window.socket.on('os.networkInterfaces',(data)=>{
  console.log(data)
})
window.socket.on('os.platform',(data)=>{
  console.log(data)
})
window.socket.on('os.release',(data)=>{
  console.log(data)
})
window.socket.on('os.tmpdir',(data)=>{
  console.log(data)
})
window.socket.on('os.totalmem',(data)=>{
  console.log(data)
})
window.socket.on('os.type',(data)=>{
  console.log(data)
})
window.socket.on('os.uptime',(data)=>{
  console.log(data)
})
window.socket.on('os.userInfo',(data)=>{
  console.log(data)
})
// window.socket.emit('os.EOL')
// window.socket.emit('os.arch')
// window.socket.emit('os.constants')
// window.socket.emit('os.cpus')
// window.socket.emit('os.endianness')
// window.socket.emit('os.freemem')
// window.socket.emit('os.homedir')
// window.socket.emit('os.hostname')
// window.socket.emit('os.loadavg')
// window.socket.emit('os.networkInterfaces')
// window.socket.emit('os.platform')
// window.socket.emit('os.release')
// window.socket.emit('os.tmpdir')
// window.socket.emit('os.totalmem')
// window.socket.emit('os.type')
// window.socket.emit('os.uptime')
window.socket.emit('os.userInfo')
