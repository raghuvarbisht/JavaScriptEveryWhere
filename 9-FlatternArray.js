
// input [[1,2],[3,4]]
// output [1,2,3,4]


const arr = [[1,2],[3,4],[5,6]];

function flatternArray(arr) {
    let result;
    result = arr.reduce((acc,next) => acc.concat(next),[]);
    return result;
}

console.log(flatternArray(arr));



// flat array of n dimesional
const mdArr = [1,2,[3,4,[5,6]]];

function flatternArrayNew(arr) {
    let result;
    result = arr.reduce((acc,next) => {
        return acc.concat(Array.isArray(next) ? flatternArrayNew(next) : next)        
    },[]);
    console.log(arr)
    return result;
}

console.log('new old array', flatternArrayNew(mdArr) );