// Memoization -
/*
Memoization is an optimization technique where the result of an 
expensive function call is cached, so that future calls with the same inputs return 
the cached result instead of recalculating it.

"Memoization is an optimization technique that caches function results to 
avoid repeated computations for the same inputs."

🔹 Why Memoization is Needed -
- Improves performance
- Avoids repeated computations
- Especially useful for recursive or CPU-heavy functions

Memoization vs Caching (Interview Trap)

Memoization	            Caching
Function-level	        System-level
Input-based	            Broader storage
Automatic	            Manual control

*/


//case 1- Simple calcualte sqare of passed number
/*
function squareMemoization() {
    let cache = {}
    return function (n) {
        cache[n] = n * n
        return cache[n]
    }
}

const squareMemo = squareMemoization();
console.log(squareMemo(5));
console.log(squareMemo(10));

*/

//case 2- Cache using memoization

function squareCacheMemoization(){
    let cache = {}
    return function (n) {
        if (n in cache) {
            console.log('cached=' , n)
            return cache[n];
        } else {
            console.log('not cached=' , n)
            cache[n] = n * n;
            return cache[n];
        }
    }  

}

const squareCacheMemo = squareCacheMemoization();
console.log(squareCacheMemo(5));
console.log(squareCacheMemo(10));
console.log(squareCacheMemo(5));