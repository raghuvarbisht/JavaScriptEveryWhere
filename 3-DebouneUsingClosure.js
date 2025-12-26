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
