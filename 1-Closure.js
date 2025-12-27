/*
Closure 

A closure is a function that remembers and can access variables from 
its outer (lexical) scope even after the outer function has finished executing.

🔹 Key Points to Mention in Interviews
- Created automatically when a function is defined
- Based on lexical scoping
- Stores references, not copies, of variables
- Keeps outer variables alive in memory

One-Line Use Cases -
- Data hiding / encapsulation
- Callbacks & async code
- Function factories
- Memoization

*/

// case 1 -
// function increment() {
//     let count = 0;
//     count = count + 1;
//     return count;
// }

// console.log(increment());//1
// console.log(increment()); //1
// console.log(increment());//1


// case 2 -
//global declaration polute gloabal scope
// let count = 0
// function increment() {
//     count = count + 1;
//     return count;
// }

// console.log(increment());//1
// console.log(increment()); // 2
// console.log(increment());//3

// output is desirable but pollute global scope and anyone case update this count

//case 3- Inner function has access to outer function varaiable. Also called lexaical scope. 
// Excapsulation we can achieve using Closure
// inner() is called closure 
//
// case 1 - Way to write code for closure 
// function increment() {
//     let count = 0;
//     return function() {
//         count = count + 1;       
//        return count; 
//     }
// }
function increment() {
    let count = 0;
    function inner() {
        count = count + 1;       
       return count; 
    }
    return inner;
}


const myinc = increment();

console.log(myinc());
console.log(myinc());
console.log(myinc());




