// reduce
// function getSumofAllValues(inputArray){
//     var inputArray = inputArray || [ 1, 2, 5];
//     let finalSum = inputArray.reduce( (acc, element) => acc + element )
//     return finalSum;
// }

// console.log(getSumofAllValues());


// // forEach
// function getSumofAllValues(inputArray){
//     var inputArray = inputArray || [ 1, 2, 5 ];
//     var finalSum = 0;
//     inputArray.forEach( (arrayItem) => console.log(finalSum += arrayItem));
//     return finalSum;
// }

// console.log(getSumofAllValues([ 1, 2, 5, 7 ]));


// for loop
function getSumofAllValues(inputArray){
    var inputArray = inputArray || [ 1, 2, 5, 7 ];
    var finalSum = 0;
    for(let i = 0; i < inputArray.length; i += 1){
        finalSum = finalSum + inputArray[i];
    }
    return finalSum;
}

console.log(getSumofAllValues([10, 15, 20, 25]));