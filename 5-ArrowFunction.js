
const obj = {
    name: "Raghuvar",
    age: "35",
    sayhello: function () {
        console.log(this);
        console.log('say hellocalling');
    },
    sayBye: () =>{
         console.log(this);
        console.log('say bye');
    },
    sayGreet: function () { // arrow function refer it parent non arrow function
        const greet = () => {
            console.log(this);
            console.log('say greet');
        }
        greet();         
    }
}

console.log(obj.sayhello());
// {name: 'Raghuvar', age: '35', sayhello: ƒ, sayBye: ƒ, sayGreet: ƒ}
// say hellocalling

console.log(obj.sayBye()); //arrow function call refer window or global this 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// say bye

console.log(obj.sayGreet()); 
// to fix arrow function we need to add non arrow function as parent of arrow function
// {name: 'Raghuvar', age: '35', sayhello: ƒ, sayBye: ƒ, sayGreet: ƒ}
//  say greet



