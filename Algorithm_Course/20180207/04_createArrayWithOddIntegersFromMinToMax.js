// loop with holding array
// function createArrayWithOddIntegersFromMinToMax(min, max){
//     var min = min || 1;
//     var max = max || 255;
//     let numberArray = [];
//     for(let i = min; i < max + 1; i += 1){
//         if(i % 2 === 1){
//             numberArray.push(i);
//         }
//     }
//     console.log(numberArray);
//     console.log(numberArray[0]);
//     console.log(numberArray[numberArray.length - 1]);
// }

function createArrayWithOddIntegersFromMinToMax(min, max){
    var min = min || 1;
    var max = max || 255;
    let numberArray = [];
    for(let i = min; i < max + 1; i += 1){
        numberArray.push(i);
    }
    console.log(numberArray);
    // let newArray = [...numberArray].sort((a, b) => {
    //     return a - b;
    // });
    // console.log(newArray);
    // let filteredArray = [...numberArray].filter((element) => {
    //     return element % 2 === 1;
    // })
    // console.log(numberArray);
    // console.log(filteredArray);
    let oddArray = [];
    let evenArray = [];
    [...numberArray].filter((element) => {
        return element % 2 === 0 ? evenArray.push(element) : oddArray.push(element);
    })
    console.log(numberArray);
    console.log(oddArray);
    console.log(evenArray);
}

createArrayWithOddIntegersFromMinToMax();
createArrayWithOddIntegersFromMinToMax(1, 25);