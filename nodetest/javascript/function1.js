process.on('exit', (code) => {
  console.log(`即将退出，退出码：${code}`);
});
console.log(process)



// process.env.NODE_ENV = 'debug'
// console.log(process.env.NODE_ENV)


// var name = 'xiaowang', age = 17
// var obj = {
// 	name: 'xiaozhang',
// 	objAge: this.age,
// 	myFun:function(){
// 		console.log(this.name + 'age: ' + this.age)
// 	}
// }
// console.log(obj.objAge)


// var o = {
// 	get foo(){},
// 	set foo(x){}
// }
// console.log(o.get.name)
// var descriptor = Object.getOwnPropertyDescriptor(o, 'foo')
// console.log(descriptor.get.name) //get foo
// console.log(descriptor.set.name) // set foo

// var object = {
// 	someMethod: function(){}
// }
// object.someMethod.name = "otherMethod"
// console.log(object.someMethod.name) //someMethod


// var object = {
// 	someMethod: function object_someMethod(){}
// }
// console.log(object.someMethod.name) //object_someMethod



// var f = function(){};
// var object = {
// 	someMethod: function(){}
// }
// console.log(f.name) //f
// console.log(object.someMethod.name) //someMethod


// function doSomething(){}
// console.log(doSomething.name) // doSomething

// (new Function).name // anonymous



// console.log(Function.length)
// console.log((function(){}).length)
// console.log((function(a){}).length)
// console.log((function(a,b){}).length)
// console.log((function(...args){}).length)
// console.log((function(a=1,b,c){}).length)
// console.log((function(a,b=1,c){}).length)
// console.log((function(a,b,c=1){}).length)
