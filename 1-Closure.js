/*
what is 

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
       return count; return count; 
    }
    return inner;
}


const myinc = increment();

console.log(myinc());
console.log(myinc());
console.log(myinc());




