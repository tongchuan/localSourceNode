// 新建的对象默认不是密封的.
var empty = {};
console.log(Object.isSealed(empty)) // false
// 如果你把一个空对象变的不可扩展,则它同时也会变成个密封对象.
console.log(Object.preventExtensions(empty))
console.log(Object.isSealed(empty)) // true

// 但如果这个对象不是空对象,则它不会变成密封对象,因为密封对象的所有自身属性必须是不可配置的.

var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp)
console.log(Object.isSealed(hasProp)) // false

// 最简单的方法来生成一个密封对象,当然是使用Object.seal.
var sealed = {}
console.log(Object.isExtensible(sealed)) // true
console.log(Object.isFrozen(sealed)+'==Object.isFrozen(sealed);') // false
Object.seal(sealed)
console.log(Object.isSealed(sealed)) // true
// 一个密封对象同时也是不可扩展的.
console.log(Object.isExtensible(sealed)) // false
// console.log(Object.preventExtensions(sealed))

// 一个密封对象也可以是一个冻结对象,但不是必须的.
console.log(Object.isFrozen(sealed)) // true 所有的属性都是不可写的