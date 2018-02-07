// function getSumofEvenFromMinToMax(min, max){
//     // data structure for reduce
//     var arrayItemsToSum = [];
//     for(var i = min; i < max + 1; i += 1){
//         if(i % 2 === 0){
//             arrayItemsToSum.push(i);
//         }
//     }
//     // finalSum var, set to the result of the array reduce
//     var finalSum = arrayItemsToSum.reduce( (acc, currentVal) => {
//         return acc + currentVal;
//     })
//     return finalSum;
// }

// console.log(getSumofEvenFromMinToMax(1, 1000));

function getSumofEvenFromMinToMax(min, max){
    var finalSum = 0;
    for(var i = min; i < max + 1; i += 1){
        if(i % 2 === 0){
            finalSum = finalSum + i;
        }
    }
    return finalSum;
}

console.log(getSumofEvenFromMinToMax(1, 1000));