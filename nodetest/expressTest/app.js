const express = require('express')

let app = express()

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use((req, res, next)=>{
  console.log('Time:', Date.now());
  next();
});

app.get('/',(req, res)=>{
	res.send('Hello world!')
});

app.use(express.static('public'))
let server = app.listen(3000,()=>{
	console.log(server.address())
	let host = server.address().address
	let port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port)
})