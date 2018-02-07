// function findAndPrintMax(inputArray){
//     var inputArray = inputArray || [ -10, -5, 0, 5, 10 ];
//     let arrayMax = -Infinity;
//     inputArray.forEach((element) => {
//         return element > arrayMax ? arrayMax = element : null;
//     })
//     console.log(arrayMax);
// }

// function findAndPrintMax(inputArray){
//     var inputArray = inputArray || [ -10, -5, 0, 5, 10 ];
//     let arrayMax = inputArray.reduce((iter, element) => {
//         return Math.max(iter, element);
//     });
//     console.log(arrayMax);
// }

function findAndPrintMax(inputArray){
    // var inputArray = inputArray || [ -10, -5, 0, 5, 10 ];
    var inputArray = inputArray || [ 0, 5, 10 ];
    let charCode = [];
    inputArray.forEach((element) => {
        charCode.push(String.fromCodePoint(element));
    })
    // +< dec -> inc
    let arrayMax1 = [...inputArray].sort((a, b) => {
        // return a + b;
        return a < b;
        // return a - b;
        // return a > b;
    })
    let arrayMax2 = [...charCode].sort((a, b) => {
        // return a + b;
        return a < b;
        // return a - b;
        // return a > b;
    })
    
    // console.log(arrayMax);
    // console.log(arrayMax[0]);
    // console.log(arrayMax[arrayMax.length - 1]);
    console.log("inputArray Untouched");
    console.log("------------------------------------------------");
    console.log(inputArray);
    console.log("");
    console.log("inputArray forEach Converted to charCode");
    console.log("------------------------------------------------");
    console.log(charCode);
    console.log("");
    console.log("inputArray Spread - Sorted");
    console.log("------------------------------------------------");
    console.log(arrayMax1);
    console.log("");
    console.log("inputArray forEach Converted to charCode - Sorted");
    console.log("------------------------------------------------");
    console.log(arrayMax2);
    console.log("");
    console.log("================================================");
    console.log("");
}

findAndPrintMax();
// findAndPrintMax([ 2, 10, -20, 5, -100, 100, 50])
findAndPrintMax([ 2, 10, 5, 100, 50])