/*
Method chaining is a JavaScript technique where multiple methods are called on the same object 
in a single statement, because each method returns the object itself (this).

How Method Chaining Works -
Each method returns this, so the next method can be called on the same object.

Why Method Chaining Is Used -
1- Improves code readability
2-Creates fluent / expressive APIs
3-Reduces temporary variables
4-Common in jQuery, Lodash, Moment.js, RxJS
 */

const calculate = {
    value: 0,
    add(num){
        this.value = this.value + num;
        return this; //this line enable chaining
    },
    sub(num) {
        this.value = this.value - num;
        return this;
    },
    multiply(num) {
        this.value = this.value * num;
        return this;
    },
    getValue() {
        return this.value
    }
}


const value = calculate.add(5).multiply(10).sub(3).getValue();
console.log('value of mehod chaining=',value );



// real world example
const result = [1, 2, 3, 4]
  .filter(n => n > 2)
  .map(n => n * 2)
  .reduce((a, b) => a + b);

  console.log('value of result =', result);