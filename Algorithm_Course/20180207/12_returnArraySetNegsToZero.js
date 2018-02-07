// 12 - Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.

function makeArray(start, end, iter){
    const inputArray = [];
    for(let i = start; i < end + 1; i += iter){
        inputArray.push(i)
    }
    return inputArray;
}

// function returnArraySetNegsToZero(min, max){
//     var min = min || -2;
//     var max = max || 8;
//     let inputArray = makeArray(min, max, 1);
//     for(let i = 0; i < inputArray.length; i += 1){
//         if(inputArray[i] < 0){
//             inputArray[i] = 0;
//         }
//     }
//     console.log(inputArray);
// }

// function returnArraySetNegsToZero(min, max){
//     var min = min || -2;
//     var max = max || 8;
//     let inputArray = makeArray(min, max, 1);
//     let mappedArray = inputArray.map((element) => {
//         return element < 0 ? 0 : element;
//     })
//     console.log(mappedArray);
// }

function returnArraySetNegsToZero(min, max){
    var min = min || -2;
    var max = max || 8;
    let inputArray = makeArray(min, max, 1);
    let mappedArray = inputArray.map((element) => {
        if(element < 0){
            return element = 0;
        } else {
            return element = element;
        }
    })
    console.log(mappedArray);
}

returnArraySetNegsToZero();
returnArraySetNegsToZero(-5, 10);