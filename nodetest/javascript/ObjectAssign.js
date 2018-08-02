function fun1(){
	const object1 = { a: 1, b: 2, c: 3}
	const object2 = Object.assign({c: 4, d: 5}, object1)
	// console.log(object1)
	// console.log(object2)
}

function fun2(){ //复制一个对象
	var obj = {a:1}
	var copy = Object.assign({}, obj)
	var obj1 = Object.assign(obj)
	console.log(obj === obj1)
	console.log(obj===copy);
	console.log(copy);
}
function fun3(){ // 深拷贝问题
	'use strict';
	let obj1 = {a: 0, b: {c:0}}
	let obj2 = Object.assign({}, obj1)
	console.log(JSON.stringify(obj2))
	
	obj1.a = 1;
	console.log(JSON.stringify(obj1))
	console.log(JSON.stringify(obj2))

	obj2.a = 2;
	console.log(JSON.stringify(obj1))
	console.log(JSON.stringify(obj2))

	obj1.b.c = 3
	console.log(JSON.stringify(obj1))
	console.log(JSON.stringify(obj2))

	// Deep Clone
	obj1 = {a:0, b:{c:0}}
	let obj3 = JSON.parse(JSON.stringify(obj1))
	obj1.a = 4;
	obj1.b.c = 4
	console.log(JSON.stringify(obj3))
}
function fun4(){ // 合并对象
	var o1 = {a:1}
	var o2 = {b:2}
	var o3 = {c:3}
	var obj = Object.assign(o1, o2,o3)
	console.log(obj)
	console.log(o1) //注意目标对象自身也会改变。
}

function fun5(){ // 合并具有相同属性的对象
	var o1 = { a: 1, b: 1, c: 1 };
	var o2 = { b: 2, c: 2}
	var o3 = {c: 3}
	var obj = Object.assign({}, o1, o2, o3)
	console.log(obj)
}

function fun6(){ // 拷贝 symbol 类型的属性
	var o1 = { a: 1 };
	var o2 = {[Symbol('foo')]: 2}
	var obj = Object.assign({}, o1, o2)
	console.log(obj)
	console.log(Object.getOwnPropertyNames(obj))
	console.log(Object.getOwnPropertySymbols(obj))
}
function fun7(){ // 继承属性和不可枚举属性是不能拷贝的
	var obj = Object.create({foo:1},{
		bar: { value: 2}, //bar 是个不可枚举属性。
		baz: {
			value: 3,
			enumerable: true // baz 是个自身可枚举属性
		}
	})

	var copy = Object.assign({}, obj)
	console.log(obj) // { baz: 3 }
	console.log(copy) // { baz: 3 }
	console.log(obj.__proto__) // { foo: 1 }
	console.log(copy.__proto__) // {}
}


function fun8(){ // 原始类型会被包装为对象
	var v1 = 'abc'
	var v2 = true
	var v3 = 10
	var v4 = Symbol('foo')
	var obj = Object.assign({}, v1, null, v2, undefined, v3, v4)
	// 原始类型会被包装，null 和 undefined 会被忽略。
	// 注意，只有字符串的包装对象才可能有自身可枚举属性。
	console.log(obj) // { '0': 'a', '1': 'b', '2': 'c' }
	console.log(Object.assign(v1, null, v2, undefined, v3, v4)) //[String: 'abc']
}

function fun9(){ // 异常会打断后续拷贝任务
	var target = Object.defineProperty({}, "foo", {
    value: 1,
    writable: false
	}); // target 的 foo 属性是个只读属性。

	Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4});
	// TypeError: "foo" is read-only
	// 注意这个异常是在拷贝第二个源对象的第二个属性时发生的。

	console.log(target.bar);  // 2，说明第一个源对象拷贝成功了。
	console.log(target.foo2); // 3，说明第二个源对象的第一个属性也拷贝成功了。
	console.log(target.foo);  // 1，只读属性不能被覆盖，所以第二个源对象的第二个属性拷贝失败了。
	console.log(target.foo3); // undefined，异常之后 assign 方法就退出了，第三个属性是不会被拷贝到的。
	console.log(target.baz);  // undefined，第三个源对象更是不会被拷贝到的。

}
function fun10(){ // 拷贝访问器
	var obj = {
		foo:1,
		get bar(){
			return 2
		}
	}
	var copy = Object.assign({}, obj)
	console.log(obj)
	console.log(copy)
	var copy = completeAssign({}, obj);
	console.log(copy);
}

function completeAssign(target, ...sources) { //这个函数会拷贝所有自有属性的属性描述符
	sources.forEach(source => {
		let descriptors = Object.keys(source).reduce((descriptors, key)=>{
			descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
			return descriptors;
		}, {});
		// Object.assign 默认也会拷贝可枚举的Symbols
		Object.getOwnPropertySymbols(source).forEach(sym=>{
			let desciptor = Object.getOwnPropertyDescriptor(sourc, sym)
			if(desciptor.enumerable){
				descriptors[sym] = desciptor
			}
		});
		Object.defineProperties(target, descriptors)
	})
	return target
}

fun10()