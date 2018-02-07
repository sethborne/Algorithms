// Given an array and a value Y, count and print the number of array values greater than Y.

// function countPrintNumberOfValuesGreaterthanY(inputArray, numValRef){
//     var inputArray = inputArray || [ 2, 4, 6, 8, 10 ];
//     var numValRef = numValRef || 5;
//     let returnArray = [];
//     for(let i = 0; i < inputArray.length; i += 1){
//         if(inputArray[i] > numValRef){
//             returnArray.push(inputArray[i]);
//         }
//     }
//     console.log(returnArray);
// }

function countPrintNumberOfValuesGreaterthanY(inputArray, numValRef){
    var inputArray = inputArray || [ 2, 4, 6, 8, 10 ];
    var numValRef = numValRef || 5;
    let returnArray = inputArray.filter((element) => {
        return element > numValRef;
    })
    console.log(returnArray);
}

countPrintNumberOfValuesGreaterthanY();
countPrintNumberOfValuesGreaterthanY([ 15, 36, 25, 87, 15, 48, 96, 3, 5, 8, 4, 6], 10);