// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: 
// arrConcat( ['a','b'], [1,2] ) should return ['a','b',1,2].

// ES5 - no builtins
// function arrayConcat(inputArray1, inputArray2){
//     let returnConcatArray = [];
//     for(let i = 0; i < inputArray1.length; i += 1){
//         returnConcatArray.push(inputArray1[i]);
//     }
//     console.log(returnConcatArray);
//     for(let i = 0; i < inputArray2.length; i += 1){
//         returnConcatArray.push(inputArray2[i])
//     }
//     console.log(inputArray1);
//     console.log(inputArray2);
//     console.log(returnConcatArray);
//     return returnConcatArray;
// }

// ES5 - built in
// function arrayConcat(inputArray1, inputArray2){
//     let returnConcatArray = inputArray1.concat(inputArray2);
//     console.log(returnConcatArray);
//     return returnConcatArray;
// }

// ES6

arrayConcat = (inputArray1, inputArray2) => {
    
}

arrayConcat(['a', 'b'], [ 1, 2 ]);


// const numberToFactor = 30000000;
// min that gets time - 1 or 3 quicker, 1 or 3 same, 2 always slowest
// const numberToFactor = 10500;
// in general - 1 and 3 tie, or 3 is faster.  2 always slowest
var numberToFactor = 4
// 1 always fastest, 3 always second, 2 always sloest
// const numberToFactor = 3500000
// 1 always fastest, 3 always second, 2 always sloest
// const numberToFactor = 10000000
// max
// const numberToFactor = 75199999;

// 01
function fasterFactorial(numFactor){
    let start = Date.now();
    // if(number < 0){ return 0; }
    let finalFactorial = 1;
    for(let i = 2; i <= numFactor; i += 1){
        finalFactorial *= i;
    }
    // console.log(finalFactorial);
    let end = Math.ceil(Date.now() - start);
    console.log(finalFactorial);
    console.log("fasterFactorial - took", end, " ms");
    return finalFactorial;
}

fasterFactorial(numberToFactor);

// 02
function fasterFactorialBuildArray(arrLength){
    let start1 = Date.now();
    if(arrLength === 0){ return 1; }
    if(arrLength === 1){ return 1; }
    let arrayToMult = [];
    for(let i = 1; i <= arrLength; i += 1){
        arrayToMult.push(i);
    }
    // console.log(arrayToMult);
    let finalProduct = 1;
    for(let i = 0; i < arrayToMult.length; i += 1){
        finalProduct = finalProduct * arrayToMult[i];
    }
    let end1 = Date.now() - start1;
    console.log(finalProduct);
    console.log("fasterFactorialBuildArray - took ", end1, " ms");
    return finalProduct;
}

// fasterFactorialBuildArray(numberToFactor)

function returnABuiltArray(min, max){
    let tempArray = [];
    for(let i = min; i <= max; i += 1){
        tempArray.push(i)
    }
    // console.log(tempArray);
    return tempArray;
}

// 03
function fasterFactorialPassArray(arrLength){
    if(arrLength < 0){
        arrLength = arrLength * -1;
    }
    let inputArray = returnABuiltArray(1, arrLength);
    // console.log(inputArray);
    let start2 = Date.now();
    if(inputArray.length < 2){
        return 1;
    }
    let finalProduct = 1;
    for(let i = 0; i < inputArray.length; i += 1){
        finalProduct = finalProduct * inputArray[i];
    }
    console.log(finalProduct);
    let end2 = Date.now() - start2;
    console.log("fasterFactorialPassArray - took ", end2, " ms");
    return finalProduct;
}

// fasterFactorialPassArray(numberToFactor);

var arrayOfPreviousFactorials = [];
var arrayOfCalcTimesOfPreviousFactorials = [];

function fastestFactorial(numVal){
    // if you pass 0 or 1
    if(numVal === 0 || numVal === 1){
        // pull the value if it exists
        if(arrayOfPreviousFactorials[numVal]){
            return arrayOfPreviousFactorials[numVal];
        }
        // set the value to 1
        else {
            arrayOfPreviousFactorials[numVal] = 1;
            return arrayOfPreviousFactorials[numVal];
        }
    }
    // if value at the number exists - and isn't undefined (if undefined it will be false and not run the if)
    if(arrayOfPreviousFactorials[numVal]){
        let indexAccessStart = Date.now();
        let numValFactorial = arrayOfPreviousFactorials[numVal];
        let indexAccessEnd = Math.ceil(Date.now() - indexAccessStart);
        console.log(arrayOfPreviousFactorials[numVal]);
        console.log("Array Access Time for Factorial of: ", numVal, " is: ", indexAccessEnd);
        console.log("Generation Time Saved for Factorial was: ", arrayOfCalcTimesOfPreviousFactorials[numVal]);
        return numValFactorial
    } // if the value isn't in the Previous Factorial, then we need to generate it.
    else {
        let generateFactorialStart = Date.now();
        let finalProduct = 1;
        for(let i = 1; i <= numberToFactor; i += 1){
            finalProduct *= i
            // as we iterate, if there is a iteration value that does not exist push it in the array (this is optional)
            // if(!arrayOfPreviousFactorials[i]){
            //     arrayOfPreviousFactorials.push[finalProduct];
            // }    
        }
        let generateFactorialEnd = Math.ceil(Date.now() - generateFactorialStart);
        console.log(generateFactorialEnd);
        arrayOfCalcTimesOfPreviousFactorials[numVal] = generateFactorialEnd;
        // push into array
        arrayOfPreviousFactorials[numVal] = finalProduct;
        console.log(arrayOfPreviousFactorials);
        console.log(arrayOfCalcTimesOfPreviousFactorials);
        console.log("Generation Time for Factorial was: ", generateFactorialEnd, " ms");
        return finalProduct;
    }
}

fastestFactorial(numberToFactor);
// console.log("");

// numberToFactor = 750000
// fasterFactorial(numberToFactor);
// fastestFactorial(numberToFactor);
// console.log("");

// numberToFactor = 750000
// fasterFactorial(numberToFactor);
// fastestFactorial(numberToFactor);
// console.log("");

// numberToFactor = 750000
// fasterFactorial(numberToFactor);
// fastestFactorial(numberToFactor);
// console.log("");

// numberToFactor = 750000
// fasterFactorial(numberToFactor);
// fastestFactorial(numberToFactor);

// shuffle
function randomArrayIndex(min, max){
    let randomIndex = Math.floor((Math.random()*(max-min+1))+min);
    // console.log("randomIndex", randomIndex);
    return randomIndex;
}

function shuffleArrayWithRandom(inputArray){
    for(let i = 0; i < inputArray.length; i += 1){
        let getRandomIndex = randomArrayIndex(0, inputArray.length-1);
        let storeTemp = inputArray[i];
        inputArray[i] = inputArray[getRandomIndex];
        inputArray[getRandomIndex] = storeTemp;
    }
    // console.log(inputArray);
    return inputArray;
}

shuffleArrayWithRandom([1, 2, 3, 4, 5])