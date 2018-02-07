// 02 - Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.

// function printSumFromMinToMax(min, max){
//     var min = min || 1;
//     var max = max || 255;
//     let finalSum = 0;
//     for(let i = min; i < max + 1; i += 1){
//         finalSum += i;
//     }
//     console.log(finalSum);
// }

// function printSumFromMinToMax(min, max){
//     var min = min || 1; 
//     var max = max || 255;
//     let sumArray = [];
//     let finalSum = 0;
//     for(let i = min; i < max + 1; i += 1){
//         sumArray.push(i);
//     }
//     sumArray.forEach((element) => {
//         finalSum += element;
//     })
//     console.log(final);
// }

// function printSumFromMinToMax(min, max){
//     var min = min || 1;
//     var max = max || 255;
//     let sumArray = [];
//     for(let i = min; i < max + 1; i += 1){
//         sumArray.push(i);
//     }
//     let finalSum = 0;
//     sumArray.map((element) => {
//         finalSum += element;
//     })
//     console.log(finalSum);
// }

function printSumFromMinToMax(min, max){
    var min = min || 1;
    var max = max || 255;
    let sumArray = [];
    for(let i = min; i < max + 1; i += 1){
        sumArray.push(i);
    }
    let finalSum = sumArray.reduce((acc, element) => {
        return acc + element
    })
    console.log(finalSum);
}

printSumFromMinToMax();
printSumFromMinToMax(1, 20);