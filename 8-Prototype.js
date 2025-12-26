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