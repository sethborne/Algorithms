// traditional for loop
// function replaceNegValuesWithString(inputArray){
//     var inputArray = inputArray || [ 2, -4, 6, -8, 10 ];
//     for(let i = 0; i < inputArray.length; i += 1){
//         if(inputArray[i] < 0){
//             inputArray[i] = 'Dojo';
//         }
//     }
//     console.log(inputArray);
// }

// function replaceNegValuesWithString(inputArray){
//     var inputArray = inputArray || [ 2, -4, 6, -8, 10];
//     for(let i = 0; i < inputArray.length; i += 1){
//         inputArray[i] = inputArray[i] < 0 ? "Dojo1" : inputArray[i];
//     }
//     console.log(inputArray);
// }

function replaceNegValuesWithString(inputArray){
    var inputArray = inputArray || [ 2, -4, 6, -8, 10 ];
    // return new array, ternary to fix negs
    let replaceArray = inputArray.map((element) => {
        return element < 0 ? "Dojo" : element;
    })
    console.log(replaceArray);
}

replaceNegValuesWithString();
replaceNegValuesWithString([5, -15, 10, -25, 30, 40, -5, 10, -50]);