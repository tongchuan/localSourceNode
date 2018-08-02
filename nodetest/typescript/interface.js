var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// class Image extends Control {
// }
// class Location {
//     select() { }
// }
/*
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log(c)
*/
/*
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square)
*/
/*
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}
let square = <Square>{};
square.color = 'blue'
square.sideLength = 10
console.log(square)
let square2: Square = {
    color: 'red',
    sideLength: 50
}
console.log(square2)
*/
/*
interface ClickConstructor {
    new (hour: number, minute: number) : ClickInterface;
}
interface ClickInterface {
    tick();
}
function createClick(ctor: ClickConstructor, hour: number, minute: number): ClickInterface{
    return new ctor(hour, minute);
}
class DigitalClock implements ClickInterface{
    constructor(h: number, m: number) { }
    tick() {
      console.log("beep beep");
  }
}
class AnalogClock implements ClickInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClick(DigitalClock, 12, 17);
let analog = createClick(AnalogClock, 7, 32);
console.log(digital.tick())
console.log(analog.tick())

*/
/*
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock implements ClockConstructor { // error TS2420: Class 'Clock' incorrectly implements interface 'ClockConstructor'.
    currentTime: Date;
    constructor(h: number, m: number) { }
}
*/
/*
interface ClockInterface{
    currentTime: Date;
    setTime(d: Date);
}
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date){
        this.currentTime = d;
    }
    constructor(h: number, m: number) {

    }
}
*/
/*
// interface NumberDictionary {
//   [index: string]: number;
//   length: number;    // 可以，length是number类型
//   name: string       // 错误，`name`的类型不是索引类型的子类型
// }
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error! error TS2542: Index signature in type 'ReadonlyStringArray' only permits reading.
*/
/*
class Animal{
    name: string;
}
class Dog extends Animal {
    bread: string;
}
interface NotOkay {
    [x: number]: Animal; // test.ts(9,2): error TS2413: Numeric index type 'Animal' is not assignable to string index type 'Dog'.
    [x: string]: Dog;
}
*/
/*
interface StringArray {
    [index: number]: string; // 可索引的类型
}
let myArray: StringArray;
myArray = ['a', 'b']
let myStr = myArray[0]
*/
/*
// five test
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): boolean {

    return true
}
//  or
let mysearch: SearchFunc = function(sour: string, sub: string): boolean {
    return true
}
*/
/*
// four test
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
function createSquare(config: SquareConfig) : { color: string, area: number} {
    // ....
    return { color: config.color, area: 100}
}
// let mySquare = createSquare({color: 'red', width: 100})
let mySquare = createSquare({color: 'red', width: 100} as SquareConfig)
*/
/*
// three test
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error Cannot assign to 'x' because it is a constant or a read-only property.
console.log(p1.x)

let a: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = a;
// ro[0] = 12 // error
// ro.push(5) //error
// ro.length = 100 // error
// a = ro; // error
*/
/*
// two test
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): {color: string, area: number} {
    let newSquare = { color: "white", area: 100};
    if(config.color) {
        // newSquare.color = config.collor;  // Property 'collor' does not exist on type 'SquareConfig'. Did you mean 'color'?
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black", width: 2200});
console.log(mySquare);
*/
/*
// one test
interface LabelledValue {
    label: string;
}
function printLabel( labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}
let myObj = { size: 10, label: 'Size 10 Object'}
printLabel(myObj);
*/
/*
interface myInterface{
    name: string;
    color?: string; // 可选属性
  width?: number; // 可选属性\
  readonly x: number; //只读属性
  readonly y: number; // 只读属性
  (source: string, subString: string): boolean; // 函数属性
  reset(): void;
}
interface StringArray {
  [index: number]: string;
}

interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

enum Color{
    red,
    green
}

let red = Color.red
*/ 
