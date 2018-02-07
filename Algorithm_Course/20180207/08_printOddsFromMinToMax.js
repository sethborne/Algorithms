// 08 - Print Odds 1-255
// Print all odd integers from 1 to 255.

// function printOddsFromMinToMax(min, max){
//     var min = min || 1;
//     var max = max || 255;
//     for(let i = min; i < max + 1; i += 1){
//         if(i % 2 === 1){
//             console.log(i);
//         }
//     }
// }

// function printOddsFromMinToMax(min, max){
//     var min = min || 1;
//     var max = max || 255;
//     let numberArray = [];
//     for(let i = min; i < max + 1; i += 1){
//         numberArray.push(i);
//     }
//     let oddArray = numberArray.filter((element) => {
//         return element % 2 === 1;
//     })
//     console.log(oddArray);
//     oddArray.forEach(element => {
//         console.log(element);
//     });
// }

function printOddsFromMinToMax(min, max){
    var min = min || 1;
    var max = max || 255;
    let numberArray = [];
    for(let i = min; i < max; i += 1){
        numberArray.push(i);
    }
    let oddArray = [];
    let evenArray = [];
    numberArray.forEach((element) => {
        return element % 2 === 1 ? oddArray.push(element) : oddArray.push(element)
    })
    // numberArray.forEach((element) => {
    //     console.log(element);
    // })
    numberArray.map((element) => {
        console.log(element);
    })
}

printOddsFromMinToMax();
printOddsFromMinToMax(1, 50);