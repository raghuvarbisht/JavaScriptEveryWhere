/**
 * 
 * sort array of number
 * 
 */
const prices = [4,20,5,8];

console.log('sort array==' , prices.sort());
//output - [20,4,5,8] which is incorrect

const cartPrices = [4,13,22,20,5,8];
console.log('sort without logic change ', cartPrices.sort());
//logic - 1
cartPrices.sort((a,b)=>{
 /**
  +ve --> b will come first
  -ve --> a will come frst
  0 --> keep the orignal order of a and b
  * 
  */
 /* logic - 1
  if (a<b) return 1
  else if (a>b) return -1
  else return 0
  */

  /* logic
   if a-b  is greater then +ve value comes
   if a-b  is less then -ve value come
   if both same then 0
  */
  return a-b; // sort in asending order
  //return b-a; // sort in descending order
})

console.log('sort correct', cartPrices);



/*
localeCompare() compares strings based on language rules and allows options 
 like case-insensitive, numeric,  and punctuation-aware sorting, making it ideal
 for user-facing string sorting.
 | Option                    | Purpose                |
| ------------------------- | ---------------------- |
| `sensitivity: "base"`     | Ignore case & accents  |
| `ignorePunctuation: true` | Ignore special chars   |
| `numeric: true`           | Natural number sorting |

*/

/**
 * 
 * sort array of string
 * 
 */

const strArr = ["zoo", "äpfel", "apple", "Éclair", "ångström", "banana"];

const strArrNew = strArr.sort((a,b) => a.localeCompare(b));
console.log(strArrNew);



const strArr2 = ["zoo", "äpfel", "apple", "Éclair", "ångström", "banana"];

const strArrNew2 = strArr2.sort((a,b) => a.localeCompare(b ,undefined,{
                    sensitivity:"base",
                    ignorePunctuation:true
                })
            );
console.log(strArrNew2);