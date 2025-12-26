
/*
Hoisting is JavaScript’s behavior of moving declarations
 to the top of their scope during the memory creation phase, before code execution.

 Important:
- Only declarations are hoisted
- Initializations are NOT hoisted
*/

//Hoisting - Hoisting is javascript default behaviour of moving declartions to the top.
// because JS engine need to allocate memory to the variable inside window/global object.
// example code

console.log(a);
var a = 10;


// how javascript convert it using hosting to
var a;
console.log(a);
a = 10;


// example 2 here we are using let and const
// So for  let and const also hoisted but that store in TDZ (temporray dead zone).
// They store let and const varaible into TDZ (Temporary dead zone). 
//TDZ ()
///debugger;
console.log(a1);
let a1 = 11;
const a2 = 12;


//example 3 -- below code is valid for let
let b1;
console.log(b1);
b1=10;

//example 4- below code is not valid as for const we need to assign value tahe time of declartion.

/*
const c1; // declartion must be initialize
console.log(c1);
c1=15;
*/


// function hoisting
//case 1
test();

function test() {
    console.log('hoisting test function ');
}

/* JS engine convert like this into hoisting
function test() {
    console.log('hoisting test function ');
}
test();
*/

//case 2

test();
var test = function () {
    console.log('test call');    
}


/*
//after JS converting into hoisting 
var test;
test();
test = function () {
console.log('test call')
}
 */