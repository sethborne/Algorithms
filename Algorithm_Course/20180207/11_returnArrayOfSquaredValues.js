function makeArray(start, end, iter){
    const inputArray = [];
    for(let i = start; i < end + 1; i += iter){
        inputArray.push(i)
    }
    return inputArray;
}

// function returnArrayOfSquaredValues(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = makeArray(min, max, 1);
//     for(let i = 0; i < inputArray.length; i += 1){
//         inputArray[i] *= inputArray[i];
//     }
//     console.log(inputArray);
// }

// function returnArrayOfSquaredValues(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = makeArray(min, max, 1);
//     let squaredArray = inputArray.map((element) => {
//         return element * element;
//     })
//     console.log(squaredArray);
// }

// function returnArrayOfSquaredValues(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = makeArray(min, max, 1);
//     let returnArray = [];
//     inputArray.forEach((element) => {
//         // console.log(element*element);
//         returnArray.push(element *= element);
//     })
//     console.log(returnArray);
// }

function returnArrayOfSquaredValues(min, max){
    var min = min || 1;
    var max = max || 50;
    let inputArray = makeArray(min, max, 1);
    let returnArray = [];
    inputArray.forEach((element) => {
        returnArray.push(Math.pow(element, 2))
    })
    console.log(returnArray);
}


returnArrayOfSquaredValues();
returnArrayOfSquaredValues(1, 10);