const EventEmitter = require('events')

class MyEmitter extends EventEmitter{

}

const myEmitter = new MyEmitter()
// myEmitter.on('event',()=>{
// 	console.log('触发了一个事件！');
// })

// myEmitter.emit('event')
// let m = 0;
// myEmitter.on('event',function(a,b){
// 	console.log(++m);
// 	setImmediate(()=>{
// 		console.log('这个是异步发生的');
// 	})
// 	console.log(a,b,this)
// })

// myEmitter.emit('event','a','b')
// myEmitter.emit('event','a','b')

// let m = 0;
// myEmitter.once('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // 打印: 1
// myEmitter.emit('event');
// // 忽略

// myEmitter.on('error', (err) => {
//   console.error('有错误');
// });
// myEmitter.emit('error', new Error('whoops!'));


// // 只处理一次，所以不会无限循环
// myEmitter.once('newListener', (event, listener) => {
//   if (event === 'event') {
//     // 在开头插入一个新的监听器
//     myEmitter.on('event', () => {
//       console.log('B');
//     });
//   }
// });
// myEmitter.on('event', () => {
//   console.log('A');
// });
// myEmitter.emit('event');
// // 打印:
// //   B
// //   A


myEmitter.on('newListener',(event,listener)=>{
	console.log('a')
	console.log(event)
})
myEmitter.on('newListener',(event,listener)=>{
	console.log('b')
	console.log(event)
})
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.on('event2', () => {
  console.log('A');
});
myEmitter.emit('event');
myEmitter.emit('event2');

console.log(myEmitter.eventNames())