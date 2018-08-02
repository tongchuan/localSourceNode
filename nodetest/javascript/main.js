var cp = require('child_process')
var n = cp.fork('./child.js')
n.on('message',function(m){
	console.log('main')
	console.log(m)
})

n.send({"message":"hello1"})

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);