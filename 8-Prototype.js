/**
Prototype -
Prototype is a property of constructor functions that is used to define 
shared properties and methods for all objects created by that constructor. 
Key Points -
- Exists only on constructor functions
- Used for inheritance
- Methods are stored once → memory efficient
- Shared across all instances


__proto__ -
__proto__ is an internal reference (accessor) on every JavaScript object that points 
to its prototype, enabling the prototype chain.

Key Points -
- Exists on all JavaScript objects
- Used internally by JavaScript engine
- Links an object to its constructor’s prototype
- Enables property lookup via prototype chain

🔥 Key Differences (Interview Must-Know)
Feature	                prototype	                   __proto__
Belongs to	            Constructor function	       Object instance
Purpose	                Store shared methods	       Link object to prototype
Used for	            Defining inheritance	       Accessing inheritance
Exists on	            Functions only	               All objects
Recommended use	        ✅ Yes	                     ❌ Avoid direct use


//////////////////////////////////
function Car() {}
const c = new Car();

c.__proto__  →  Car.prototype
Car.prototype.__proto__  →  Object.prototype
Object.prototype.__proto__  →  null
//////////////////////////////////


*/

console.log('prototype');

Array.prototype.sum = function () {
    return this.reduce((acc,currentValue) => acc + currentValue , 0);
}

const arr = [1,2,3,4];
console.log(arr.sum()); // output - 10

console.log(arr.__proto__);
// this will display all method and sum will alos


// add getLastYesr method for Date

Date.prototype.getLastYear = function () {
    return this.getFullYear() - 1;
}
const d= new Date();
console.log('get current year=' , d.getFullYear());
console.log('get last year=' , d.getLastYear());



class Animal {
    constructor(name) {
        this.name = name;
    }
}

Animal.prototype.eat = function () {
    return `${this.name} is eating`;
}

const dog = new Animal('Buddy');
console.log(dog.eat());
console.log(dog.__proto__);