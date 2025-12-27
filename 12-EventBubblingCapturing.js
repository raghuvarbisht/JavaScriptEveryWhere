/*
Event bubbling - It is the process in which an event is first handled by the target element 
and then propagates upward through its parent elements in the DOM hierarchy 
until it reaches the document or window.

Key points interviewers listen for:
- Bottom → Top propagation
- Default behavior in JavaScript
- Foundation of event delegation


Event capturing (also called trickling) is the process in which an event starts at the top 
of the DOM tree (window/document) and travels downward to the target element, 
allowing parent elements to intercept the event before it reaches the target.

Key points interviewers listen for:
- Top → Bottom propagation
- Must be explicitly enabled
- Used when parent needs priority control

Event capturing sends events from parent to child.
Event bubbling sends events from child to parent after the event is triggered.
*/


const parent = document.getElementById('parent-div');
const child = document.getElementById('child-button');

// case 1 - event bubbling

parent.addEventListener('click', ()=>{
    console.log('Parent clicked');
});

child.addEventListener('click', ()=>{
    console.log('child listener 1');
},)

child.addEventListener('click', ()=>{
    console.log('child listener 2');
})
// Output - 
// child listener 1
// child listener 2
// Parent clicked


/*  case 2 - 
//add true for capturing on parent element
parent.addEventListener('click', ()=>{
    console.log('Parent clicked');
},true); //add true

child.addEventListener('click', ()=>{
    console.log('child listener 1');
},)

child.addEventListener('click', ()=>{
    console.log('child listener 2');
})

Output - 
Parent clicked
child listener 1
child listener 2

*/
/* case 3- event.stopPropagation(); stop  event execution for parent 

parent.addEventListener('click', ()=>{
    console.log('Parent clicked');
});

child.addEventListener('click', (event)=>{
    event.stopPropagation();
    console.log('child listener 1');
},)

child.addEventListener('click', ()=>{
    console.log('child listener 2');
})

// output -
//child listener 1
//child listener 2
*/

/*
// stopImmediatePropagation stop execution of other listener for same element
parent.addEventListener('click', ()=>{
    console.log('Parent clicked');
});

child.addEventListener('click', (event)=>{
    event.stopImmediatePropagation();
    console.log('child listener 1');
},)

child.addEventListener('click', ()=>{
    console.log('child listener 2');
})

// output -
//child listener 1

*/