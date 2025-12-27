/*

Debouncing is a technique that limits the rate at which a function gets 
executed by ensuring that the function is called only 
after a certain delay has passed since the last time it was invoked.

Why Debouncing is Used -
- Prevents excessive function calls
- Improves performance
- Useful in event handling like:
- Window resize
- Input search
- Scroll events
- Reduces unnecessary API calls

Real-World Use Cases -
- Search input: API call only after user stops typing
- Window resizing events
- Scroll events: infinite scrolling, animations
- Button clicks to prevent multiple submissions


Debouncing vs Throttling (Interview Must-Know)
Feature	                 Debouncing	              Throttling
Execution	             After idle period	      At regular intervals
Use case	             Search, resize	          Scroll, rate-limited events
Calls	                 Less frequent	          Periodic

*/

const debounce = (func,delay) => {
    let debouncing;
    return function(...args) {
        const myargs = args; //argument 
       clearTimeout(debouncing); // clear debouning if already there
       debouncing =  setTimeout(()=>func(...myargs), delay); // setTimeout return a Id
    }
    
}

const callAPI = (e) => {
    console.log('calling api',e.target.value)
}

const debounceAPI = debounce(callAPI,500);

/*
DOMContentLoaded is a browser event that fires when the HTML document has been completely 
loaded and parsed, without waiting for images, CSS, fonts, or videos to load.
*/
document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('search-input')
    .addEventListener('input', debounceAPI);
});



function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage
const handleResize = () => console.log('Resized!');
window.addEventListener('resize', debounce(handleResize, 500));
