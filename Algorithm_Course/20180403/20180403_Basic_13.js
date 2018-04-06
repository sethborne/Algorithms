makeAnArray = (start, end) => {
    let arrayToReturn = [];
    for(let i = start; i <= end; i += 1){
        arrayToReturn.push(i);
    }
    return arrayToReturn;
}

// ========================================================================================================================
// Print 1-255
// Print all the integers from 1 to 255.
// ========================================================================================================================

    function printFromTo(startNum, endNum){
        for(let i = startNum; i <= endNum; i += 1){
            console.log(i);
        }
    }

    // printFromTo(0, 25)

    function printFromToWhile(startNum, endNum){
        // is there a built in for this?
        let length = endNum;
        while(length >= 0){
            console.log(startNum);
            startNum += 1;
            length -= 1;
        }
    }

    // printFromToWhile(0, 10)

    printFromToES6 = (startNum, endNum) => {
        return makeAnArray(startNum, endNum).map((item) => console.log('item:', item))
    }

    printFromToES6(0, 5);

// ========================================================================================================================
// Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
// ========================================================================================================================

    function printSumFromTo(startNum, endNum){
        let finalSum = 0;
        for(let i = startNum; i <= endNum; i += 1){
            finalSum += i;
            console.log(`Loop: ${i}, Sum is: ${finalSum}`);
        }
    }

    printSumFromTo(0, 10);

    function printSumFromToWhile(startNum, endNum){
        let finalSum = 0;
        let length = endNum;
        while(length >= 0){
            finalSum += startNum;
            startNum += 1;
            length -= 1;
            console.log(`Loop: ${startNum}, Sum is: ${finalSum}`);
        }
    }

    printSumFromToWhile(0, 10)

    printSumFromToES6 = (startNum, endNum) => makeAnArray(startNum, endNum).reduce((acc, val) => acc + val)

    console.log(printSumFromToES6(0, 10));

// ========================================================================================================================
// *Find and Print Max
// Given an array, find and print its largest element.
// ========================================================================================================================

    function findAndPrintMax(inputArray){
        let max = inputArray[0];
        for(let i = 0; i < inputArray.length; i += 1){
            if(inputArray[i] > max){
                max = inputArray[i];
            }
        }
        return max;
    }

    function findAndPrintMaxBI(inputArray){
        // return Math.max(...inputArray);
        return inputArray.reduce((a, b) => Math.max(a, b));
    }

    console.log(findAndPrintMaxBI([1, 10, 200, 42, 80]));

    // findAndPrintMaxES6 = (inputArray) => Math.max(...inputArray);
    findAndPrintMaxES6 = (inputArray) => inputArray.reduce((a, b) => Math.max(a, b))

    console.log(findAndPrintMaxES6([242, 42, 142, 342]));

// ========================================================================================================================
// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
// ========================================================================================================================

    function arrayWithOdd(startNum, endNum){
        let arrayToReturn = [];
        for(let i = startNum; i <= endNum; i += 1){
            if(i % 2 === 1){
                // its odd.  push
                arrayToReturn.push(i);
            }
        }
        return arrayToReturn;
    }

    console.log(arrayWithOdd(0, 10));

    function arrayWithOddBI(startNum, endNum){
        return makeAnArray(startNum, endNum).filter((value) => value % 2 === 1)
    }

    console.log(arrayWithOddBI(0, 10));

    arrayWithOddES6 = (startNum, endNum) => makeAnArray(startNum, endNum).filter((item) => item % 2 === 1);

    console.log(arrayWithOddES6(0, 15));

// ========================================================================================================================
// *Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
// ========================================================================================================================
    // need a count var, it the arr, if the >, count when cond met.
    // for BI - use filter and cound would be arr.length
    
    function greaterThanY(inputArray, valueY){
        let count = 0;
        for(let i = 0; i < inputArray.length; i += 1){
            if(valueY < inputArray[i]){
                count += 1;
            }
        }
        return count;
    }
    
    // 4
    console.log(greaterThanY([1, 2, 3, 4, 5, 6], 2));
    // 2
    console.log(greaterThanY([1, 2, 3, 4, 5, 6], 4));
    
    function greaterThanYBI(inputArray, valueY){
        // let count = inputArray.filter((item) => item > valueY);
        // return count.length
        return inputArray.filter((item) => item > valueY).length;
    }
    // 4
    console.log(greaterThanYBI([1, 2, 3, 4, 5, 6], 2));
    // 2
    console.log(greaterThanYBI([1, 2, 3, 4, 5, 6], 4));
    
    greaterThanYES6 = (inputArray, valueY) => inputArray.filter((item) => item > valueY).length;
    
    // 5
    console.log(greaterThanYES6([1, 2, 3, 4, 5, 6], 1));
    // 3
    console.log(greaterThanYES6([1, 2, 3, 4, 5, 6], 3));
// ========================================================================================================================
// Max, Min, Average
// Given an array, print the max, min and average values for that array.
// ========================================================================================================================
    // set min/max as first from array, finalSum var, for loop for min, max, finalsum, av is final sum/arr.length.
    // for BI - Math.max(), Math.min(), finalsum = arr.reduce()/arrlength
    
    function minMaxAverage(inputArray){
        let min = inputArray[0];
        let max = inputArray[0];
        let finalSum = 0;
        for(let i = 0; i < inputArray.length; i += 1){
            if(inputArray[i] < min){
                min = inputArray[i];
            }
            if(inputArray[i] > max){
                max = inputArray[i];
            }
            finalSum += inputArray[i]
        }
        let average = finalSum / inputArray.length;
        return {
            min: min,
            max: max,
            finalSum: finalSum,
            length: inputArray.length,
            average: average
        }
    }
    
    console.log(minMaxAverage([1, 2, 3, 4, 5]));
    
    function minMaxAverageBI(inputArray){
        return {
            min: Math.min(...inputArray),
            max: Math.max(...inputArray),
            average: inputArray.reduce((acc, item) => item + acc) / inputArray.length
        }
    }
    
    console.log(minMaxAverageBI([2, 4, 6, 8, 10]));
    
    minMaxAverageES6 = (inputArray) => { 
        return {
            min: Math.min(...inputArray),
            max: Math.max(...inputArray),
            average: inputArray.reduce((acc, item) => acc + item) / inputArray.length
        }
    }
    
    console.log(minMaxAverageES6([3, 6, 9, 12, 15]));
// ========================================================================================================================
// *Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
// ========================================================================================================================
    // loop arr, if - set val to 'dojo'
    
    function swapNegsForString(inputArray){
        for(let i = 0; i < inputArray.length; i += 1){
            let replaceString = 'Dojo';
            if(inputArray[i] < 0){
                inputArray[i] = replaceString
            }
        }
        return inputArray
    }
    
    console.log(swapNegsForString([-1, 1, -2, 2, -3, 3, 0]));
    
    function swapNegsForStringBI(inputArray){
        // replace?
        let replaceString = 'Dojo'
        inputArray.forEach(function(item, index){
            if(item < 0){
                inputArray[index] = replaceString;
            }
        })
        return inputArray
    }
    
    console.log(swapNegsForStringBI([1, -1, 2, -2, 3, -3, 4]));
    
    swapNegsForStringES6 = (inputArray) => inputArray.map((item) => item < 0 ? 'Dojo' : item);
    
    console.log(swapNegsForStringES6([2, -2, 4, -4, 6, -6, 8]));
// ========================================================================================================================
// Print Odds 1-255
// Print all odd integers from 1 to 255.
// ========================================================================================================================

    function printOddsFromTo(inputNumMin, inputNumMax){
        for(let i = inputNumMin; i <= inputNumMax; i += 1){
            if(i % 2 === 1){
                console.log(i);
            }
        }
    }
    
    printOddsFromTo(1, 25);

    function printOddsFromToBI(inputNumMin, inputNumMax){
        for(let i = inputNumMin; i <= inputNumMax; i += 1){
            i % 2 === 1 ? console.log(i) : i
        }
    }
    
    printOddsFromToBI(1, 15)
    
    printOddsFromToES6 = (inputNumMin, inputNumMax) => makeAnArray(inputNumMin, inputNumMax).filter((int) => int % 2 === 1).forEach((int) => console.log(int));
    
    printOddsFromToES6(1, 25)
// ========================================================================================================================
// *Iterate and Print Array
// Iterate through a given array, printing each value.
// ========================================================================================================================
    
    function iterateAndPrintArray(inputArray){
        for(let i = 0; i < inputArray.length; i += 1){
            console.log(inputArray[i]);
        }
    }
    
    iterateAndPrintArray(makeAnArray(10, 20));
    
    function iterateAndPrintArrayBI(inputArray){
        inputArray.map((arrValue) => { console.log(arrValue)})
    }
    
    iterateAndPrintArray(makeAnArray(15, 25))
    
    iterateAndPrintArrayES6 = (inputArray) => { inputArray.forEach( value => console.log(value)) };
    
    iterateAndPrintArrayES6(makeAnArray(100, 120));
// ========================================================================================================================
// Get and Print Average
// Analyze an array’s values and print the average.
// ========================================================================================================================
    
    function getAndPrintAverage(inputArray){
        
    }
    
    function getAndPrintAverageBI(inputArray){
        
    }
    
    getAndPrintAverageES6 = () => {}
// ========================================================================================================================
// Square the Values
// Square each value in a given array, returning that same array with changed values.
// ========================================================================================================================

    function squareTheValue(inputArray){
        
    }
    
    function squareTheValueBI(inputArray){
        
    }
    
    squareTheValueES6 = (inputArray) => inputArray.map((arrayValue) => arrayValue * arrayValue)
    console.log(squareTheValueES6(makeAnArray(1, 5)));
// ========================================================================================================================
// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
// ========================================================================================================================

    function zeroOutNegativeNumber(){
        
    }
    
    function zeroOutNegativeNumberBI(){
        
    }
    
    zeroOutNegativeNumberES6 = () => {
        
    }

// ========================================================================================================================
// *Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
// ========================================================================================================================

    function shiftArrayValues(){
        
    }
    
    function shiftArrayValuesBI(){
        
    }
    
    shiftArrayValuesES6 = () => {
        
    }