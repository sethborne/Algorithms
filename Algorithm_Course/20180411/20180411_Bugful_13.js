// ============================================================================================================================
// The “Bugful 13” (#2) 
// ============================================================================================================================

// ============================================================================================================================
// Print1To255()
// Print all the integers from 1 to 255.
// ============================================================================================================================

function print1to255() {
    // should increment up not down
    for (var num = 1; num <= 255; num += 1) {
        console.log(num);
    }
}

// print1to255();

// ============================================================================================================================
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and the sum so far.
// ============================================================================================================================

function printSum0to255() {
    var sum = 0;
    for (var num = 0; num <= 255; num += 1) {
        sum += num;
        // switch these two so sum comes after the sum is calc'ed.
        console.log(num, "  Sum:", sum);
    }
}

// printSum0to255();

// ============================================================================================================================
// PrintMaxOfArray(arr)
// Print the largest element in a given array.
// ============================================================================================================================

function printArrayMax(arr) {
    if (arr.length == 0) {
        console.log("[ ], no max val.");
        return;
    }
    var max = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        if (arr[idx] > max) {
            max = arr[idx];
        }
    }
    // move the console.log out of the for loop
    console.log("Max val:", max);
}

// printArrayMax([1, 2, 3, 4, 5, 6]);

// ============================================================================================================================
// PrintOdds1To255()
// Print all odd integers from 1 to 255.// ============================================================================================================================

function printOdds1to255() {
    var num = 1;
    while (num <= 255) {
        console.log(num);
        // remove the extra + from ++=
        num += 2;
    }
}

// printOdds1to255();

// ============================================================================================================================
// PrintArrayVals(arr)
// Print all values in a given array.
// ============================================================================================================================

function printArrayValues(arr) {
    for (var idx = 0; idx < arr.length; idx++) {
        // fix console log - logged index "idx" not value at index arr[idx]
        console.log("array[", idx, "] =", arr[idx]);
    }
}

// printArrayValues([1, 2, 3, 4, 5, 6, 7, 8])


// ============================================================================================================================
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
// ============================================================================================================================

function printArrayAverage(arr) {
    if (arr.length == 0) {
        console.log("[ ], no avg val.");
        return;
    }
    // var sum = arr[0]; <-- either make sum 0
    var sum = 0;
    // or init sum at arr[0], start index at 1
    for (var idx = 0; idx < arr.length; idx++){
        sum += arr[idx];
    }
    console.log(sum / arr.length);
}

// printArrayAverage([2, 4, 6]);

// ============================================================================================================================
// The “Bugger’s Banquet 13” (#2) – continued
// ============================================================================================================================

// ============================================================================================================================
// ReturnOddsArray1To255()
// Create & return an array with odd integers from 1 - 255.
// ============================================================================================================================

function oddArray1to255() {
    // create empty array
    // setup for loop, with max iterations
    // add # to array
    // return array
    let oddArray = [];
    for(let i = 1; i <= 255; i += 2){
        oddArray.push(i);
    }
    // console.log(oddArray);
    return oddArray;
}

// console.log(oddArray1to255());

// ============================================================================================================================
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array, return the count that is greater than Y.
// ============================================================================================================================

function numGreaterThanY(arr, y) {
    var numGreater = 0;
    for (var idx = 0; idx < arr.length; idx++) {
        if (arr[idx] > y) {
            // don't increment y - increment the numGreater
            numGreater++; 
        }
    }
    console.log("%d values greater than %d", numGreater, y);
}

// numGreaterThanY([1, 2, 3, 4, 5, 6, 7, 8], 4)

// ============================================================================================================================
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print max, min and average values.
// ============================================================================================================================

function maxMinAverage(arr) {
    if (arr.length == 0) {
        console.log("[] arr, no min/max/avg");
        return;
    }
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    // should not equal arr.length this will give undefined...
    for (var idx = 1; idx < arr.length; idx++) {
        if (arr[idx] < min) { min = arr[idx]; }
        if (arr[idx] > max) { max = arr[idx]; }
        sum += arr[idx];
    }
    console.log("Max val:", max);
    console.log("Min val:", min);
    console.log("Avg val:", sum / arr.length);
    // never declared avg and set?
    let avg = sum / arr.length;
    return [max, min, avg];
}

// maxMinAverage([1, 2, 3])

// ============================================================================================================================
// “Exterminator’s Delight” (#2) – continued
// ============================================================================================================================

// ============================================================================================================================
// SquareArrayVals(arr)
// Given an array, square each value in the array.
// ============================================================================================================================

function squareArrVals(arr) {
    // declare idx as a var - I don't think you actually have too...
    for (let idx = 0; idx < arr.length; idx++) {
        // arr[idx] = arr[idx * idx];
        // value * value not index * index (out of range?)
        arr[idx] = arr[idx] * arr[idx];
    }
    console.log(arr);
}

// squareArrVals([1, 2, 3, 4, 5])


// ============================================================================================================================
// ZeroOutArrayNegativeVals(arr)
// Given an array, set negative values to zero.
// ============================================================================================================================

function setNegsToZero(arr) {
    // for (var idx = 1; idx < arr.length; idx++) {
    // not sure why this starts at 1?    
    for (var idx = 0; idx < arr.length; idx++) {
        if (arr[idx] < 0) {
            arr[idx] = 0;
        }
    }
    console.log(arr);
}

// setNegsToZero([-1, 1, -2, 2, 0])

// ============================================================================================================================
// ShiftArrayValsLeft(arr)
// Given an array, shift values leftward by one.Drop first values and leave extra '0' value(s) at end.
// ============================================================================================================================

function arrShift(arr) {
    // for (var idx = 1; idx < arr.length; idx++) {
    // start at 0
    for (var idx = 0; idx < arr.length; idx++) {
        // arr[idx + 1] = arr[idx];
        // make current === to forward.
        arr[idx] = arr[idx + 1];
        
    }
    arr[arr.length - 1] = 0;
    console.log(arr);
    return arr;
}

// arrShift([1, 2, 3, 4, 5, 6])

// ============================================================================================================================
// SwapStringForArrayNegativeVals(arr)
// Given an array, replace negative values with 'Dojo'. 
// ============================================================================================================================

function subStringForNegs(arr) {
    for (var idx = 0; idx < arr.length; idx++) {
        // if (arr[idx] <= 0) {
        // zero is not neg
        if (arr[idx] < 0) {
            arr[idx] = "Dojo";
        }
    }
    console.log(arr);
    return arr;
}

subStringForNegs([-1, 1, -2, 2, -3, 3])