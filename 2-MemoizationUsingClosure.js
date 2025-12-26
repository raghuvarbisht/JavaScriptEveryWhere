// Memoization -
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