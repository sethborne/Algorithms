// function printMinMaxAverage(inputArray){
//     var inputArray = inputArray || [ 2, 4, 6, 8, 10 ];
//     let min = null || inputArray[0];
//     let max = null || inputArray[0];
//     let average = null;
//     let sum = 0;
//     for(let i = 0; i < inputArray.length; i += 1){
//         if(inputArray[i] > max){
//             max = inputArray[i];
//         }
//         else if (inputArray[i] < min){
//             min = inputArray[i];
//         }
//         sum += inputArray[i]
//     }
//     average = sum / inputArray.length;
    
    
//     let returnArray = [];
//     returnArray.push(min);
//     returnArray.push(max);
//     returnArray.push(average);
    
//     console.log(returnArray);
// }

// function printMinMaxAverage(inputArray){
//     var inputArray = inputArray || [ 2, 4, 6, 8, 10 ];
//     let sum = 0;
    
//     let min = inputArray.reduce((a, b) => {
//         return Math.min(a, b);
//     })
//     let max = inputArray.reduce((a, b) => {
//         return Math.max(a, b)
//     })
//     let average = (inputArray.reduce((a, b) => {
//         return a + b;
//     }))/inputArray.length;
    
//     let returnArray = [];
//     returnArray.push(min);
//     returnArray.push(max);
//     returnArray.push(average);
    
//     console.log(returnArray);
// }


// sorted array
function printMinMaxAverage(inputArray){
    var inputArray = inputArray || [ 2, 4, 6, 8, 10 ];
    
    let sortedArray = inputArray.sort((a, b) => {
        return a > b;
    })
    
    let sum = inputArray.reduce((a, b) => {
        return a + b;
    })
    
    let average = sum / inputArray.length;
    
    let returnArray = [];
    
    returnArray.push(sortedArray[0]);
    returnArray.push(sortedArray[sortedArray.length - 1]);
    returnArray.push(average);
    
    console.log(returnArray);
}

printMinMaxAverage();
printMinMaxAverage([ 15, 61, 17, 25, 47, 45, 23 ])

