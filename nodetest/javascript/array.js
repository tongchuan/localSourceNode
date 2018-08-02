
console.groupCollapsed('one');
console.group('array')
var fruits = ['Apple', 'Banana']
console.log(fruits.length) // 2

var first = fruits[0]
console.log(first) // Apple
 
// 通过索引访问数组元素
var last = fruits[fruits.length-1]
console.log(last) // Banana

// 遍历数组
fruits.forEach( function(item, index, array) {
	console.log(item, index)
	// Apple 0
	// Banana 1
});

// 添加元素到数组的末尾
var newLength = fruits.push('Orange')
console.log(newLength) // 3
console.log(fruits) // [ 'Apple', 'Banana', 'Orange' ]
console.groupEnd()
console.groupEnd()
// 删除数组末尾的元素
console.groupCollapsed('two');
var last = fruits.pop()
console.log(last) // Orange
console.log(fruits) //[ 'Apple', 'Banana' ]

// 删除数组最前面（头部）的元素
var frist = fruits.shift();
console.log(frist) // Apple
console.log(fruits) // [ 'Banana' ]

// 添加元素到数组的头部
var newLenght = fruits.unshift('Strawberry')
console.log(newLenght) // 2
console.log(fruits) //   [ 'Strawberry', 'Banana' ]

// 找出某个元素在数组中的索引
fruits.push('Mango')
var index = fruits.indexOf('Banana')
console.log(index) //1
console.log(fruits) // [ 'Strawberry', 'Banana', 'Mango' ]

// 通过索引删除某个元素
var removedItem = fruits.splice(1, 2, 'zhang', 'tong', 'chuan')
console.log(removedItem) // [ 'Banana', 'Mango' ]
console.log(fruits) // [ 'Strawberry', 'zhang', 'tong', 'chuan' ]

// 复制一个数组
var shallowCopy = fruits.slice()
var fruits2 = fruits
console.log(shallowCopy) // [ 'Strawberry', 'zhang', 'tong', 'chuan' ]
console.log(shallowCopy===fruits) // false
console.log(fruits===fruits2) // true
