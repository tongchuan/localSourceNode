const http = require('http');
const net = require('net');
const url = require('url');

// 创建一个 HTTP 代理服务器
const proxy = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
proxy.on('connect', (req, cltSocket, head) => {
	// console.log(req.url)
  // 连接到一个服务器
  const srvUrl = url.parse(`http://${req.url}`);
  const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
    cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n');
    srvSocket.write(head);
    srvSocket.pipe(cltSocket);
    cltSocket.pipe(srvSocket);
  });
});

// 代理服务器正在运行
proxy.listen(1337, '127.0.0.1', () => {

  // 发送一个请求到代理服务器
  const options = {
    port: 1337,
    hostname: '127.0.0.1',
    method: 'CONNECT',
    path: 'www.google.com:80'
  };

  const req = http.request(options);
  req.end();

  req.on('connect', (res, socket, head) => {
    console.log('已连接！');

    // 通过代理服务器发送一个请求
    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: www.google.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
    socket.on('data', (chunk) => {
      console.log(chunk.toString());
    });
    socket.on('end', () => {
      proxy.close();
    });
  });
});






// const http = require('http');
// const keepAliveAgent = new http.Agent({ keepAlive: true });
// options.agent = keepAliveAgent;
// http.request(options, onResponseCallback);



// NODE_DEBUG=foo
// const util = require('util');
// const debuglog = util.debuglog('foo');

// // debuglog('hello from foo [%d]', 123);
// console.log(Object.keys(util))
// util.log(util.types)
// util.debug('3')
// console.log('4444')
// console.log(util.isSymbol(Symbol('111')))
// console.log(util.isSymbol(111))
// console.log(Object.keys(util.__proto__))
// console.log('ddddddddddd')


// setTimeout(function(){
//     console.log("setTimeout");
// },0);
// setImmediate(function(){
//     console.log("setImmediate");
// });


// const util = require('util');

// async function fn() {
//   return 'hello world';
// }
// const callbackFunction = util.callbackify(fn);

// callbackFunction((err, ret) => {
// 	console.log(err,ret)
//   if (err) throw err;
//   console.log(ret);
// });


// const util = require('util');
// const setImmediatePromise = util.promisify(setImmediate);

// setImmediatePromise('foobar').then((value) => {
// 	console.log(value)
// 	console.log('==========')
//   // value === 'foobar' (passing values is optional)
//   // This is executed after all I/O callbacks.
// });

// // or with async function
// async function timerExample() {
//   console.log('Before I/O callbacks');
//   await setImmediatePromise();
//   console.log('After I/O callbacks');
// }
// timerExample()





// function myFunc(){
// 	if(myFunc.caller == null){
// 		console.log("该函数在全局作用域内被调用!")
// 	}else{
// 		console.log("调用我的是函数是" + myFunc.caller)
// 	}
// }
// myFunc()

// function f(n){ g(n-1)}
// function g(n){
// 	console.log('before: ', arguments)
// 	// console.log(g.length)
// 	if (n > 0) { f(n); }
//   console.log('after: ', arguments);
// 	// console.log('before: ' + g.arguments)
// }
// f(2)
// console.log(arguments)
// var sum = new Function('a','b','return a+b')
// var sum2 = new Function('a', 'b', 'return a+b')
// console.log(sum(2,3))
// console.log(sum2(2,4))