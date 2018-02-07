// 13 - Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.

function makeArray(start, end, iter){
    const inputArray = [];
    for(let i = start; i < end + 1; i += iter){
        inputArray.push(i)
    }
    return inputArray;
}

// function returnShiftedArray(min, max){
//     var min = min || 1;
//     var max = max || 10;
//     let inputArray = makeArray(min, max, 1);
//     let firstValue = inputArray[0];
//     // go from first to second to last
//     for(let i = 0; i < inputArray.length - 1; i += 1){
//         inputArray[i] = inputArray[i + 1];
//     }
//     inputArray[inputArray.length - 1] = 0;
//     console.log(inputArray);
// }

function returnShiftedArray(min, max){
    var min = min || 1;
    var max = max || 10;
    let inputArray = makeArray(min, max, 1);
    let length = inputArray.length;
    let firstValue = inputArray.shift();
    inputArray[length - 1] = 0;
    console.log(inputArray);
}

returnShiftedArray();
returnShiftedArray(1, 20);