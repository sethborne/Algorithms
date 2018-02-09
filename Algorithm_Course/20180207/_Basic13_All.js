// ================================================================================
// 01 - Print 1-255
// Print all the integers from 1 to 255.
// ================================================================================

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


// ================================================================================
// 02 - Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
// ================================================================================

// function printSumFromMinToMax(min, max){
//     var min = min || 1;
//     var max = max || 255;
//     let finalSum = 0;
//     for(let i = min; i < max + 1; i += 1){
//         finalSum += i;
//     }
//     console.log(finalSum);
// }

// function printSumFromMinToMax(min, max){
//     var min = min || 1; 
//     var max = max || 255;
//     let sumArray = [];
//     let finalSum = 0;
//     for(let i = min; i < max + 1; i += 1){
//         sumArray.push(i);
//     }
//     sumArray.forEach((element) => {
//         finalSum += element;
//     })
//     console.log(final);
// }

// function printSumFromMinToMax(min, max){
//     var min = min || 1;
//     var max = max || 255;
//     let sumArray = [];
//     for(let i = min; i < max + 1; i += 1){
//         sumArray.push(i);
//     }
//     let finalSum = 0;
//     sumArray.map((element) => {
//         finalSum += element;
//     })
//     console.log(finalSum);
// }

function printSumFromMinToMax(min, max){
    var min = min || 1;
    var max = max || 255;
    let sumArray = [];
    for(let i = min; i < max + 1; i += 1){
        sumArray.push(i);
    }
    let finalSum = sumArray.reduce((acc, element) => {
        return acc + element
    })
    console.log(finalSum);
}

printSumFromMinToMax();
printSumFromMinToMax(1, 20);


// ================================================================================
// 03 - Find and Print Max
// Given an array, find and print its largest element.
// ================================================================================

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

// ================================================================================
// 04 - Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
// ================================================================================

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

// ===========================================================================================
// 05 - Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
// ===========================================================================================

// Given an array and a value Y, count and print the number of array values greater than Y.

// function countPrintNumberOfValuesGreaterthanY(inputArray, numValRef){
//     var inputArray = inputArray || [ 2, 4, 6, 8, 10 ];
//     var numValRef = numValRef || 5;
//     let returnArray = [];
//     for(let i = 0; i < inputArray.length; i += 1){
//         if(inputArray[i] > numValRef){
//             returnArray.push(inputArray[i]);
//         }
//     }
//     console.log(returnArray);
// }

function countPrintNumberOfValuesGreaterthanY(inputArray, numValRef){
    var inputArray = inputArray || [ 2, 4, 6, 8, 10 ];
    var numValRef = numValRef || 5;
    let returnArray = inputArray.filter((element) => {
        return element > numValRef;
    })
    console.log(returnArray);
}

countPrintNumberOfValuesGreaterthanY();
countPrintNumberOfValuesGreaterthanY([ 15, 36, 25, 87, 15, 48, 96, 3, 5, 8, 4, 6], 10);

// ===========================================================================================
// 06 - Max, Min, Average
// Given an array, print the max, min and average values for that array.
// ===========================================================================================

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

// ===========================================================================================
// 07 - Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
// ===========================================================================================

// traditional for loop
// function replaceNegValuesWithString(inputArray){
//     var inputArray = inputArray || [ 2, -4, 6, -8, 10 ];
//     for(let i = 0; i < inputArray.length; i += 1){
//         if(inputArray[i] < 0){
//             inputArray[i] = 'Dojo';
//         }
//     }
//     console.log(inputArray);
// }

// function replaceNegValuesWithString(inputArray){
//     var inputArray = inputArray || [ 2, -4, 6, -8, 10];
//     for(let i = 0; i < inputArray.length; i += 1){
//         inputArray[i] = inputArray[i] < 0 ? "Dojo1" : inputArray[i];
//     }
//     console.log(inputArray);
// }

function replaceNegValuesWithString(inputArray){
    var inputArray = inputArray || [ 2, -4, 6, -8, 10 ];
    // return new array, ternary to fix negs
    let replaceArray = inputArray.map((element) => {
        return element < 0 ? "Dojo" : element;
    })
    console.log(replaceArray);
}

replaceNegValuesWithString();
replaceNegValuesWithString([5, -15, 10, -25, 30, 40, -5, 10, -50]);

// ===========================================================================================
// 08 - Print Odds 1-255
// Print all odd integers from 1 to 255.
// ===========================================================================================

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

// ===========================================================================================
// 09 - Iterate and Print Array
// Iterate through a given array, printing each value.
// ===========================================================================================

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

// ===========================================================================================
// 10 - Get and Print Average
// Analyze an array’s values and print the average.
// ===========================================================================================

// function printAverageOfArrayValues(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = [];
//     for(let i = min; i < max + 1; i += 1){
//         inputArray.push(i);
//     }
//     let sum = 0;
//     for(let i = 0; i < inputArray.length; i += 1){
//         sum = sum + inputArray[i];
//     }
//     let average = sum / inputArray.length;
//     console.log(average);
// }

// function printAverageOfArrayValues(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = [];
//     for(let i = min; i < max + 1; i += 1){
//         inputArray.push(i);
//     }
//     let finalSum = inputArray.reduce((acc, element) => {
//         return acc + element;
//     })
//     let average = finalSum / inputArray.length;
//     console.log(average);
// }

function printAverageOfArrayValues(min, max){
    var min = min || 1;
    var max = max || 50;
    let inputArray = makeArray(min, max, 2)
    let finalSum = 0;
    inputArray.forEach((element) => {
        finalSum += element;
    })
    let average = finalSum / inputArray.length;
    console.log(average);
}

printAverageOfArrayValues();
printAverageOfArrayValues(1, 100);

function makeArray(start, end, iter){
    const inputArray = [];
    for(let i = start; i < end + 1; i += iter){
        inputArray.push(i)
    }
    return inputArray;
}

// ===========================================================================================
// 11 - Square the Values
// Square each value in a given array, returning that same array with changed values.
// ===========================================================================================

function makeArray(start, end, iter){
    const inputArray = [];
    for(let i = start; i < end + 1; i += iter){
        inputArray.push(i)
    }
    return inputArray;
}

// function returnArrayOfSquaredValues(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = makeArray(min, max, 1);
//     for(let i = 0; i < inputArray.length; i += 1){
//         inputArray[i] *= inputArray[i];
//     }
//     console.log(inputArray);
// }

// function returnArrayOfSquaredValues(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = makeArray(min, max, 1);
//     let squaredArray = inputArray.map((element) => {
//         return element * element;
//     })
//     console.log(squaredArray);
// }

// function returnArrayOfSquaredValues(min, max){
//     var min = min || 1;
//     var max = max || 50;
//     let inputArray = makeArray(min, max, 1);
//     let returnArray = [];
//     inputArray.forEach((element) => {
//         // console.log(element*element);
//         returnArray.push(element *= element);
//     })
//     console.log(returnArray);
// }

function returnArrayOfSquaredValues(min, max){
    var min = min || 1;
    var max = max || 50;
    let inputArray = makeArray(min, max, 1);
    let returnArray = [];
    inputArray.forEach((element) => {
        returnArray.push(Math.pow(element, 2))
    })
    console.log(returnArray);
}


returnArrayOfSquaredValues();
returnArrayOfSquaredValues(1, 10);


// ===========================================================================================
// 12 - Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
// ===========================================================================================


function makeArray(start, end, iter){
    const inputArray = [];
    for(let i = start; i < end + 1; i += iter){
        inputArray.push(i)
    }
    return inputArray;
}

// function returnArraySetNegsToZero(min, max){
//     var min = min || -2;
//     var max = max || 8;
//     let inputArray = makeArray(min, max, 1);
//     for(let i = 0; i < inputArray.length; i += 1){
//         if(inputArray[i] < 0){
//             inputArray[i] = 0;
//         }
//     }
//     console.log(inputArray);
// }

// function returnArraySetNegsToZero(min, max){
//     var min = min || -2;
//     var max = max || 8;
//     let inputArray = makeArray(min, max, 1);
//     let mappedArray = inputArray.map((element) => {
//         return element < 0 ? 0 : element;
//     })
//     console.log(mappedArray);
// }

function returnArraySetNegsToZero(min, max){
    var min = min || -2;
    var max = max || 8;
    let inputArray = makeArray(min, max, 1);
    let mappedArray = inputArray.map((element) => {
        if(element < 0){
            return element = 0;
        } else {
            return element = element;
        }
    })
    console.log(mappedArray);
}

returnArraySetNegsToZero();
returnArraySetNegsToZero(-5, 10);

// =====================================================================================================================
// 13 - Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
// =====================================================================================================================


function makeArray(start, end, iter){
    const inputArray = [];
    for(let i = start; i < end + 1; i += iter){
        inputArray.push(i)
    }
    return inputArray;
}

// function returnShiftedArray(min, max){
//     var min = min || 1;
//     var max = max || 10;
//     let inputArray = makeArray(min, max, 1);
//     let firstValue = inputArray[0];
//     // go from first to second to last
//     for(let i = 0; i < inputArray.length - 1; i += 1){
//         inputArray[i] = inputArray[i + 1];
//     }
//     inputArray[inputArray.length - 1] = 0;
//     console.log(inputArray);
// }

function returnShiftedArray(min, max){
    var min = min || 1;
    var max = max || 10;
    let inputArray = makeArray(min, max, 1);
    let length = inputArray.length;
    let firstValue = inputArray.shift();
    inputArray[length - 1] = 0;
    console.log(inputArray);
}

returnShiftedArray();
returnShiftedArray(1, 20);