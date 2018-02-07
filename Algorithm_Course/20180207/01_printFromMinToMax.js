// 01 - Print 1-255
// Print all the integers from 1 to 255.

// make an array then forEach Array
// function printFromMinToMax(min, max){
//     var min = min || 1;
//     var max = max || 255;
//     var printArray = [];
//     for(let i = min; i < max + 1; i += 1){
//         printArray.push(i)
//     }
//     // forEach loop and print
//     printArray.forEach((element) => {
//         console.log(element);
//     })
// }

// loop through, log at each loop
// function printFromMinToMax(min, max){
//     var min = min || 1;
//     var max = max || 255;
//     for(let i = min; i < max + 1; i += 1){
//         console.log(i);
//     }
// }

function printFromMinToMax(min, max){
    var min = min || 1;
    var max = max || 255;
    var printArray = [];
    for(let i = min; i < max + 1; i += .5){
        printArray.push(i);
    }
    console.log(printArray);
    // map and print
    printArray.map((element) => {
        if(Number.isInteger(element)){
            // console.log(Number.isInteger(element));
            console.log(element);
        }
    })
}

// printFromMinToMax();
printFromMinToMax(1, 15);