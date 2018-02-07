// math.max
// function getMaximumNumberInArray(inputArray){
//     var inputArray = inputArray || [ -3, 3, 5, 7];
//     // math.max, with array spread
//     let findMax = Math.max(...inputArray);
//     return findMax;
// }

// console.log(getMaximumNumberInArray());

// reduce
// function getMaximumNumberInArray(inputArray){
//     var inputArray = inputArray || [ -2, 3, 5, 7 ];
//     let findMax = inputArray.reduce( (acc, element) => {
//         // console.log(acc, element);
//         return Math.max(acc, element); 
//     })
//     return findMax;
// }

// console.log(getMaximumNumberInArray());

// from sort - increasing
// function getMaximumNumberInArray(inputArray){
//     var inputArray = inputArray || [ 7, -3, 5, 3 ];
//     let sortedArrayInc = inputArray.sort( (a, b) => {
//         // cut off head, dec, arrow, inc
//         // inc
//         return a - b;
//         // return a > b;
//     })
//     let min = sortedArrayInc[0];
//     let max = sortedArrayInc[sortedArrayInc.length - 1];
//     console.log(min, max);
// }

// getMaximumNumberInArray();
// getMaximumNumberInArray([ -25, 25, 5, -50, 100, 50, -100 ]);

// from sort - decreasing
// function getMaximumNumberInArray(inputArray){
//     var inputArray = inputArray || [ 7, -3, 5, 3, 15 ];
//     let sortedArrayInc = inputArray.sort( (a, b) => {
//         // cut off head, dec, arrow inc
//         // dec
//         return a + b;
//         // return a < b;
//     })
//     let min = sortedArrayInc[sortedArrayInc.length - 1];
//     let max = sortedArrayInc[0];
    
//     console.log(min, max);
// }

// from loop
function getMaximumNumberInArray(inputArray){
    var inputArray = inputArray || [ -3, 3, 5, 7, 10]
    var min = Infinity;
    var max = -Infinity;
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] < min){
            min = inputArray[i];
        }
        if(inputArray[i] > max){
            max = inputArray[i]
        }
    }
    console.log(max);
    return max;
}

getMaximumNumberInArray();
getMaximumNumberInArray([ -25, 25, 5, -50, 100, 50, -100 ]);