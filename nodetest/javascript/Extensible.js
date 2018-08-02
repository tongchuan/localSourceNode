// Object.preventExtensions() 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性
/*
语法: Object.preventExtensions(obj)
	obj: 将要变得不可扩展的对象。
	返回值: 已经不可扩展的对象。

描述:
	如果一个对象可以添加新的属性，则这个对象是可扩展的。Object.preventExtensions()将对象标记为不再可扩展，因此它将永远不会具有超出它被标记为不可扩展的属性。注意，一般来说，不可扩展对象的属性可能仍然可被删除。尝试将新属性添加到不可扩展对象将静默失败或抛出TypeError（最常见但不排除其他情况，如在strict mode中）。
	Object.preventExtensions()仅阻止添加自身的属性。但属性仍然可以添加到对象原型。
	一旦使其不可扩展，就无法再对象进行扩展。
*/

var obj = {name:'zhang', class: '1'}

console.log(Object.isExtensible(obj))  // true可以扩展
var obj2 = Object.preventExtensions(obj)
console.log(obj === obj2) //  true 同一个对象
console.log(Object.isExtensible(obj))  // false  不可以扩展
// obj.age = 1 // failure 
obj.__proto__.age = 2 // success

// obj.__proto__ = {test: 'test'} // TypeError: #<Object> is not extensible

obj.name = "tong"
console.log(obj) // { name: 'tong', class: '1' }
delete obj.name
console.log(obj) // { class: '1' }

// Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

// Object.preventExtensions(1);
// 1                             (ES2015 code)



