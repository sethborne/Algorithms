// function getSumofOddsFromMinToMax(min, max){
//     // struct to hold odds
//     var arrayOddsToSum = [];
//     var min = min || 1;
//     var max = max || 5000;
//     for(var i = min; i < max + 1; i += 1){
//         if(i % 2 === 1){
//             arrayOddsToSum.push(i);
//         }
//     }
//     // var to hold reduced array value
//     var finalSumOfOdds = arrayOddsToSum.reduce( (acc, arrayElement) => acc + arrayElement )
    
//     return finalSumOfOdds;
// }

// console.log(getSumofOddsFromMinToMax());


function getSumofOddsFromMinToMax(min, max){
    var finalSum = 0;
    var min = min || 1;
    var max = max || 5000;
    for(var i = min; i < max + 1; i += 1){
        if(i % 2 === 1){
            finalSum = finalSum + i;
        }
    }
    return finalSum;
}

console.log(getSumofOddsFromMinToMax());
