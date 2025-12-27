/*
 Event delegation is a JavaScript technique where a single event
 listener is attached to a parent element to handle events for its child elements,
 by leveraging event bubbling.

Instead of adding listeners to multiple child elements, we delegate the responsibility to 
their parent.

Why Event Delegation Is Used -
- Improves performance
- Reduces memory usage
- Handles dynamically added elements
- Cleaner and scalable code

When NOT to Use Event Delegation -
- Events that do not bubble (e.g. focus, blur)
- When parent is frequently removed
- Very small DOM trees (overkill)

*/
const table = document.getElementById('table');
const submit= document.getElementById('submit');
const workingHours = {}
table.addEventListener('input', (event)=>{
    //console.log(event.target.name, event.target.value);
    workingHours[event.target.name] = event.target.value;
    // console.log('workingHours', workingHours)
})

submit.addEventListener('click', () =>{
   console.log(workingHours);
});
