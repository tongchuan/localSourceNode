// Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变。

// 语法: Object.seal(obj)
// 参数: obj 将要被密封的对象。
// 返回值: 被密封的对象。

// 描述: 
	// 通常，一个对象是可扩展的（可以添加新的属性）。密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置。属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性，或者反之。但属性的值仍然可以修改。尝试删除一个密封对象的属性或者将某个密封对象的属性从数据属性转换成访问器属性，结果会静默失败或抛出TypeError（在严格模式 中最常见的，但不唯一）。
	// 不会影响从原型链上继承的属性。但 __proto__ (  ) 属性的值也会不能修改。
	// 返回被密封对象的引用。

var obj = {name: 'zhang', class:'1'}
// console.log(Object.isSealed(obj)) // false
var obj2 = Object.seal(obj)
// console.log(obj2===obj) // true
// console.log(Object.isSealed(obj)) // true

// delete obj.name // failure
// obj.age = 90 // failure
// obj.name = 'tong'
// console.log(obj) // { name: 'tong', class: '1' }


// obj.__proto__.age = 90
// console.log(obj.__proto__) // { age: 90 }


// Object.seal(1);
// TypeError: 1 is not an object (ES5 code)

// Object.seal(1);
// 1                             (ES2015 code)