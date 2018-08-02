var empty = {}
let extents = Object.isExtensible(empty)
console.log(extents)

Object.preventExtensions(empty)
extents = Object.isExtensible(empty)
console.log(extents)

// 密封对象是不可扩展的.
var sealed = Object.seal({})
console.log(Object.isExtensible(sealed))

// 冻结对象也是不可扩展.
var frozen = Object.freeze({})
console.log(Object.isExtensible(frozen))

Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES6 code)