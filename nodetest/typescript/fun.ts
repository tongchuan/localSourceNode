interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

/*
function f(this: void) {
    // make sure `this` is unusable in this standalone function
}
/*
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         return function() {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);

//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


/*
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
/*
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
/*
function buildName(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"
/*
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
//function buildName(firstName: string, lastName?: string) {
//    // ...
//}
let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right
/*
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");
// let result2 = buildName("Bob", "Adams", "Sr.") // error, too many parameters
let result3 = buildName("Bob", "Adams");
/*
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
// let result1 = buildName("Bob"); //  error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.") // error, too many parameters
let result3 = buildName("Bob", "Adams");

/*
let myAdd: (x: number, y: number)=>number = function(x: number, y: number): number {return x+y}
let myAdd2: (baseValue:number, increment:number) => number = function(x: number, y: number): number { return x + y; };
let myAdd3 = function(x: number, y: number): number { return x + y; };
let myAdd4: (baseValue:number, increment:number) => number = function(x, y) { return x + y; };


/*
console.log(add(1,2));
// console.log(myAdd(2,3)); //  TS2448: Block-scoped variable 'myAdd' used before its declaration.
function add(x: number, y: number): number {
	return x + y;
}
let myAdd = function(x: number, y: number) : number {
	return x + y;
}
console.log(myAdd(2,3));

*/