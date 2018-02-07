// 09 - Iterate and Print Array
// Iterate through a given array, printing each value.

// function printEachValueInAnArray(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = [];
//     for(let i = min; i < max + 1; i += 1){
//         inputArray.push(i);
//     }
//     for(let i = 0; i < inputArray.length; i += 1){
//         console.log(i);
//     }
// }

// function printEachValueInAnArray(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = [];
//     for(let i = min; i < max + 1; i += 1){
//         inputArray.push(i)
//     }
//     console.log(inputArray);
//     inputArray.map((element) => {
//         return console.log(element);
//     })
// }

function printEachValueInAnArray(min, max){
    var min = min || 1;
    var max = max || 50;
    let inputArray = [];
    for(let i = min; i < max + 1; i += 1){
        inputArray.push(i);
    }
    console.log(inputArray);
    inputArray.forEach((element) => {
        console.log(element);
    })
}

printEachValueInAnArray();
printEachValueInAnArray(1, 100);