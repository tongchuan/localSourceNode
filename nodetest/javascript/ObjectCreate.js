function fun1(){
	const person = {
		isHuman: false,
		printIntroduction: function(){
			console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
		}
	}
	const me = Object.create(person)

	me.name = "Matthew"
	me.isHuman = true;
	me.printIntroduction(); // My name is Matthew. Am I human? true
	console.log(me) // { name: 'Matthew', isHuman: true }
	console.log(me.__proto__) // { isHuman: false, printIntroduction: [Function: printIntroduction] }
	person.printIntroduction() //My name is undefined. Am I human? false
}

function fun2(){
	function Shape(){
		this.x = 0;
		this.y = 0;
	}
	Shape.prototype.move = function(x,y){
		this.x += x;
		this.y += y;
		console.info('Shape moved.');
	};
	// Rectangle - 子类(subclass)
	function Rectangle() {
	  Shape.call(this); // call super constructor.
	}
	Rectangle.prototype = Object.create(Shape.prototype);
	Rectangle.prototype.constructor = Rectangle;

	var rect = new Rectangle();
	console.log(rect)
	console.log('Is rect an instance of Rectangle?',rect instanceof Rectangle); // true
	console.log('Is rect an instance of Shape?',rect instanceof Shape); // true
	rect.move(1, 1); 
}

function fun3(){
	var o;
	o = Object.create(null)
	console.log(o)
	o = {}
	o = Object.create(Object.prototype)
	console.log(o)
	o = Object.create(Object.prototype, {
		foo: {
			writable:true,
			configurable: true,
			value: 'Hello'
		},
		bar: {
			configurable: false,
			get: function(){return 10},
			set: function(value){
				console.log("Setting `o.bar` to ", value)
			}
		}
	})
	console.log(o)
}
fun3()