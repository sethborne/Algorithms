// 10 - Get and Print Average
// Analyze an array’s values and print the average.

// function printAverageOfArrayValues(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = [];
//     for(let i = min; i < max + 1; i += 1){
//         inputArray.push(i);
//     }
//     let sum = 0;
//     for(let i = 0; i < inputArray.length; i += 1){
//         sum = sum + inputArray[i];
//     }
//     let average = sum / inputArray.length;
//     console.log(average);
// }

// function printAverageOfArrayValues(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = [];
//     for(let i = min; i < max + 1; i += 1){
//         inputArray.push(i);
//     }
//     let finalSum = inputArray.reduce((acc, element) => {
//         return acc + element;
//     })
//     let average = finalSum / inputArray.length;
//     console.log(average);
// }

function printAverageOfArrayValues(min, max){
    var min = min || 1;
    var max = max || 50;
    let inputArray = makeArray(min, max, 2)
    let finalSum = 0;
    inputArray.forEach((element) => {
        finalSum += element;
    })
    let average = finalSum / inputArray.length;
    console.log(average);
}

printAverageOfArrayValues();
printAverageOfArrayValues(1, 100);

function makeArray(start, end, iter){
    const inputArray = [];
    for(let i = start; i < end + 1; i += iter){
        inputArray.push(i)
    }
    return inputArray;
}