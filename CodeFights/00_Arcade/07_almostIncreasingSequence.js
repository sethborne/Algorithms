function almostIncreasingSequence(sequence) {
    let isFound = false;
    let inputArray = [...sequence]
    for(let i = 0; i < inputArray.length; i += 1){
        // only need to worry if current value is less or equal to the previous...
        if(inputArray[i] <= inputArray[i - 1]){
            if(isFound){
                console.log('hit a');
                return false;
            }
            // if it is less or equal, set bool so it breaks next loop
            isFound = true;
            console.log('Is Current: ', inputArray[i], 'less than or equal to: ', inputArray[i - 1], ' ? ', inputArray[i] <= inputArray[i - 1]);
            // first or last 
            if(i === 1 || i + 1 === inputArray.length){
                console.log('hit b');
                console.log(inputArray);
                continue; //
            }
            // if current value is greater than two previous
            else if(inputArray[i] > inputArray[i - 2]){
                console.log('hit c');
                inputArray[i - 1] = inputArray[i - 2];
                console.log(inputArray);
            }
            else if(inputArray[i - 1] >= inputArray[i + 1]){
                console.log('hit d');
                console.log(inputArray);
                return false;
            }
        }
        console.log(inputArray[i], " is OK");
    }
    return true;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1]));
// console.log(almostIncreasingSequence([1, 3, 2]));
// console.log(almostIncreasingSequence([1, 2, 1, 2]));
// console.log(almostIncreasingSequence([1, 4, 10, 4, 2]));
// console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));
// console.log(almostIncreasingSequence([1, 1, 1, 2, 3]));
console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));
// console.log(almostIncreasingSequence());
// console.log(almostIncreasingSequence());
// console.log(almostIncreasingSequence());


// let inputArray = [...sequence];
// // let greaterArray = [];
// let boolArray = [];
// let max = inputArray[0];
// console.log(inputArray);
// for(let i = 0; i < inputArray.length - 1; i += 1){
//     // check for max
//     if(inputArray[i] > max){
//         max = inputArray[i];
//     }
//     // if the item we are checking is >= the next splice it
//     // if(inputArray[i] >= inputArray[i + 1] || inputArray[i + 1] <= max){
//     if(inputArray[i] >= inputArray[i + 1]){
//         // greaterArray.push(inputArray.splice(i + 1, 1));
//         boolArray.push(false)
//         // console.log(inputArray);
//         // i -= 1;
//     }
//     else{
//         boolArray.push(true)
//     }
// }
// // console.log(boolArray);
// let falseCount = boolArray.filter((item) => {
//     return item === false;
// }).length
// // console.log(falseCount);
// // if there is one false, and that false is either the first or the last
// if(falseCount === 1 && boolArray[0] === false || falseCount === 1 && boolArray[boolArray.length - 1] === false){
//     return true;
// }
// else if(falseCount > 0){
//     return false;
// }
// else {
//     return true;
// }
// // if(greaterArray.length > 1){
// //     return false;
// // }
// // else {
// //     return true;
// // }