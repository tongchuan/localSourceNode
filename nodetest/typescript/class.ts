
/*
class Point {
	x: number;
  y: number;
}
interface Point3d extends Point {
	z: number
}
let point3d: Point3d = {x: 1, y: 2, z: 3};

/*
class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    }
    else {
      return Greeter.standardGreeting;
    }
  }
}
let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";
let greeter2:Greeter = new greeterMaker();
console.log(greeter2.greet());
console.log(greeter1.greet());

/*
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
/* 
abstract class Department {
	
	constructor(public name: string) {
		// code...
	}
	printName(): void {
		console.log('Department name: ' + this.name);
	}
	abstract printMeeting(): void; //必须在派生类中实现
}

abstract class Department2 extends Department {
	
	constructor(name: string) {
		super(name);
	}
}

class AccountingDepartment extends Department2{
	constructor(){
		super('Accounting and Auditing')
	}
	printMeeting(): void {
		console.log('The Accounting Department meets each Monday at 10am.');
	}
	generateReports(): void {
		console.log('Generating accounting reports...');
	}
}
let department: Department;
// department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports(); // error TS2339: Property 'generateReports' does not exist on type 'Department'.
/*
abstract class Animal {
	abstract makeSound(): void;
	move(): void {
		console.log('roaming the earch...');
	}
}

// let an = new Animal() // Cannot create an instance of an abstract class.

/*

class Grid {
	static origin = {x: 0, y: 0};
	calculateDistanceFromOrigin(point: {x: number; y: number;}) {
		let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
	}
	constructor(public scale: number){

	}
}
let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale
console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));


/*
let passcode = 'secret passcode';
class Employee {
	private _fullName: string;
	get fullName(): string {
		return this._fullName;
	}
	set fullName(newName: string) {
		if(passcode && passcode === 'secret passcode'){
			this._fullName = newName;
		}else{
			console.log("Error: Unauthorized update of employee!");
		}
	}
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    // alert(employee.fullName);
    console.log(employee.fullName);
}
/*
class Employee {
	fullName: string;
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

/*

class Animal {
	constructor(private name: string) {

	}
	move(distanceInMeters: number) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}
let animal = new Animal('snake')
animal.move(3)

/*
class Octopus {
	readonly name: string;
	readonly numberOfLegs: number = 8;

	constructor(theName: string) {
		this.name = theName
	}
	// setName(name: string): void{ // error name is readonly
	// 	this.name = name
	// }
	getName(): string{
		return this.name;
	}
}
let dad = new Octopus("Man with the 8 strong legs");
console.log(dad.name)
console.log(dad.getName());

/*

class Person {
	protected name: string;
	protected constructor(theName: string) {
		this.name = theName;
	}
}

class Employee extends Person {
	private department: string
	constructor(name: string, department: string) {
		super(name)
		this.department = department
	}
	public getElevatorPitch()	{
		return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	}
}
let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // error TS2674: Constructor of class 'Person' is protected and only accessible within the class declaration.



/*
class Person {
	protected name: string;
	constructor(name: string) {
		this.name = name;
	}
}

class Employee extends Person {
	private department: string;
	constructor(name: string, department: string) {
		super(name)
		this.department = department
	}
	public getElevatorPitch(): string{
		return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	}
}
let howard = new Employee('Howard', 'Sales');
console.log(howard.getElevatorPitch());
console.log(howard.name); // error

/*
class Animal {
	public name: string;
	public constructor(theName: string) {
		this.name = theName;
	}
	public move(distanceInMeters: number) {
		 console.log(`${this.name} moved ${distanceInMeters}m.`)
	}
}

/* 
class Animal2 {
	private name: string;
	constructor(theName: string) { this.name = theName; }
}
new Animal2("Cat").name; // Error: 'name' is private;


/*

class Animal{
	name: string;
	constructor(theName: string) {
		this.name = theName;
	}
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`)
	}
}
class Snake extends Animal {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters:number = 5){
		console.log("Slithering...");
		super.move(distanceInMeters);
	}
}

class Horse extends Animal {
	constructor(name: string) {
		// console.log(this);
		super(name);
	}
	move(distanceInMeters: number = 45){
		console.log('Galloping...');
		super.move(distanceInMeters);
	}
}
let sam = new Snake('Sammy the Python');
let tom: Animal = new Horse('Tommy the Palomino');
// sam.move();
tom.move(34)
/*
class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return 'Hello, ' + this.greeting;
	}
}

let greeter = new Greeter('World')
console.log(greeter.greet())

*/