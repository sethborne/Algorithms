function Basic13() {
    
}

// for static methods in ES5, no prototype
Basic13.makeArray = function(min, max, iter){
    let inputArray = [];
    for(let i = min; i < max + 1; i += iter){
        inputArray.push(i);
    }
    return inputArray;
}

// ======================================================================================================================
// 01 - Print 1-255
// Print all the integers from 1 to 255.
// ======================================================================================================================

Basic13.printAllFromMinToMax = function(min, max){
    var min = min || 1;
    var max = max || 255;
    // for(let i = min; i < max + 1; i += 1){
    //     console.log(i);
    // }
    let inputArray = Basic13.makeArray(min, max, 1);
    for(let i = 0; i < inputArray.length; i += 1){
        console.log(inputArray[i]);
    }
}

Basic13.printAllFromMinToMax();
// Basic13.printAllFromMinToMax(1, 20);

// ======================================================================================================================
// 02 - Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
// ======================================================================================================================

Basic13.printSumFromMinToMax = function(min, max){
    var min = min || 0;
    var max = max || 255;
    let finalSum = 0
    for(let i = min; i < max + 1; i += 1){
        console.log("Previous Sum was | " + finalSum + " |  Currently Adding: " + i);
        finalSum += i
    }
    console.log(finalSum);
    return finalSum;
}

// Basic13.printSumFromMinToMax();
// Basic13.printSumFromMinToMax(0, 10);

// ======================================================================================================================
// 03 - Find and Print Max
// Given an array, find and print its largest element.
// ======================================================================================================================

Basic13.findAndPrintMax = function(min, max){
    var min = min || 1;
    var max = max || 20;
    let inputArray = Basic13.makeArray(min, max, 1);
    var max = inputArray[0] || undefined;
    for(let i = 0; i < inputArray.length; i += 1){
        if(max !== undefined){
            if(inputArray[i] > max){
                max = inputArray[i];
            }
        }
    }
    console.log(max);
    return max;
}

// Basic13.findAndPrintMax();
// Basic13.findAndPrintMax(0, 200);

// ======================================================================================================================
// 04 - Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
// ======================================================================================================================

Basic13.returnOddArray = function(min, max){
    var min = min || 1;
    var max = max || 20;
    let inputArray = Basic13.makeArray(min, max, 1);
    let oddArray = [];
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] % 2 === 1){
            oddArray.push(inputArray[i]);
        }
    }
    console.log(oddArray);
    return oddArray;
}

// Basic13.returnOddArray();
// Basic13.returnOddArray(0, 50)

// ======================================================================================================================
// 05 - Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
// ======================================================================================================================

Basic13.countAndPrintArrayValuesGreaterThanY = function(min, max, numValY){
    var min = min || 1;
    var max = max || 20;
    var numValY = numValY || 10;
    let inputArray = Basic13.makeArray(min, max, 1);
    let greaterThanArray = [];
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] > numValY){
            greaterThanArray.push(inputArray[i]);
        }
    }
    let countGreaterThanY = greaterThanArray.length;
    console.log(countGreaterThanY);
    return countGreaterThanY;
}

// Basic13.countAndPrintArrayValuesGreaterThanY();
// Basic13.countAndPrintArrayValuesGreaterThanY(1, 100, 35);

// ======================================================================================================================
// 06 - Max, Min, Average
// Given an array, print the max, min and average values for that array.
// ======================================================================================================================

Basic13.printMinMaxAndAverage = function(arrMin, arrMax){
    var arrMin = arrMin;
    var arrMax = arrMax;
    // var arrMin = arrMin || 1;
    // var arrMax = arrMax || 40;
    let inputArray = Basic13.makeArray(arrMin, arrMax, 1);
    var min = inputArray[0] || undefined;
    var max = inputArray[0] || undefined;
    let finalSum = 0;
    for(let i = 0; i < inputArray.length; i += 1){
        if(min !== undefined && max !== undefined){
            if(inputArray[i] < min){
                min = inputArray[i];
            }
            else if(inputArray[i] > max){
                max = inputArray[i];
            }
            finalSum += inputArray[i];
        }
    }
    var average = undefined;
    if(min !== undefined && max !== undefined){
        average = finalSum / inputArray.length;
    } else {
        average = undefined;
        console.log("Max: " + max + " | Min: " + min + " | Average: " + average);
    }
    if(min !== undefined && max !== undefined && average !== undefined){
        console.log("Max: " + max + " | Min: " + min + " | Average: " + average);
        let returnArray = []
        returnArray[0] = max;
        returnArray[1] = min;
        returnArray[2] = average;
        console.log(returnArray);
        return returnArray;
    } else {
        console.log("Error:  Please check your inputs");
        return "Error:  Please check your inputs"
    }
}

// Basic13.printMinMaxAndAverage();
// Basic13.printMinMaxAndAverage(1, 20);

// ======================================================================================================================
// 07 - Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
// ======================================================================================================================

Basic13.returnArrayReplaceNegValuesWithString = function(min, max){
    var min = min || -5;
    var max = max || 5;
    let inputArray = Basic13.makeArray(min, max, 1);
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] < 0){
            inputArray[i] = 'Dojo';
        }
    }
    console.log(inputArray);
    return inputArray;
}

// Basic13.returnArrayReplaceNegValuesWithString();
// Basic13.returnArrayReplaceNegValuesWithString(-10, 10);

// ======================================================================================================================
// 08 - Print Odds 1-255
// Print all odd integers from 1 to 255.
// ======================================================================================================================

Basic13.printIntegersFromMinToMax = function(min, max){
    var min = min || 1;
    var max = max || 255;
    let inputArray = Basic13.makeArray(min, max, 1);
    let oddArray = [];
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] % 2 === 1){
            console.log(inputArray[i]);
            oddArray.push(inputArray[i])
        }
    }
    console.log(oddArray);
    return oddArray;
}

// Basic13.printIntegersFromMinToMax();
// Basic13.printIntegersFromMinToMax(1, 50);

// ======================================================================================================================
// 09 - Iterate and Print Array
// Iterate through a given array, printing each value.
// ======================================================================================================================

Basic13.iterateAndPrintArray = function(min, max){
    var min = min || 1;
    var max = max || 100;
    let inputArray = Basic13.makeArray(min, max, 1);
    for(let i = 0; i < inputArray.length; i += 1){
        console.log(inputArray[i]);
    }
}

// Basic13.iterateAndPrintArray();
// Basic13.iterateAndPrintArray(1, 200);

// ======================================================================================================================
// 10 - Get and Print Average
// Analyze an array’s values and print the average.
// ======================================================================================================================

Basic13.returnTheAverageOfAnArray = function(min, max) {
    var min = min || 1;
    var max = max || 10;
    let inputArray = Basic13.makeArray(min, max, 1);
    // iter array
    let finalSum = 0;
    for(let i = 0; i < inputArray.length; i += 1){
        finalSum += inputArray[i];
    }
    console.log(finalSum);
    let average = finalSum / inputArray.length;
    console.log(average);
    return average;
}

// Basic13.returnTheAverageOfAnArray();
// Basic13.returnTheAverageOfAnArray(1, 20);

// ======================================================================================================================
// 11 - Square the Values
// Square each value in a given array, returning that same array with changed values.
// ======================================================================================================================

Basic13.returnArrayWithSquaredValues = function(min, max){
    var min = min || 1;
    var max = max || 5;
    let inputArray = Basic13.makeArray(min, max, 1);
    console.log(inputArray);
    for(let i = 0; i < inputArray.length; i += 1){
        inputArray[i] = inputArray[i]*inputArray[i];
    }
    console.log(inputArray);
}

// Basic13.returnArrayWithSquaredValues();
// Basic13.returnArrayWithSquaredValues(1, 10)

// ======================================================================================================================
// 12 - Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
// ======================================================================================================================

Basic13.returnArraySetNegValuesToZero = function(min, max){
    var min = min || -5;
    var max = max || 5;
    let inputArray = Basic13.makeArray(min, max, 1);
    console.log(inputArray);
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] < 0){
            inputArray[i] = 0;
        }
    }
    console.log(inputArray);
}

// Basic13.returnArraySetNegValuesToZero();
// Basic13.returnArraySetNegValuesToZero(-10, 10);

// ======================================================================================================================
// 13 - Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
// ======================================================================================================================

Basic13.returnArrayWithShiftedValues = function(min, max){
    var min = min || 1;
    var max = max || 10;
    let inputArray = Basic13.makeArray(min, max, 1);
    console.log(inputArray);
    let firstValue = inputArray[0];
    for(let i = 0; i < inputArray.length; i += 1){
        inputArray[i] = inputArray[i + 1];
    }
    inputArray[inputArray.length - 1] = 0;
    console.log(inputArray);
    return inputArray;
}

Basic13.returnArrayWithShiftedValues();
Basic13.returnArrayWithShiftedValues(1, 20);