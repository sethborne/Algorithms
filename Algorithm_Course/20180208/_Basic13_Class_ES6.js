class Basic13 {
    // 
    static makeArray(min, max, iter){
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
    
    static printAllFromMinToMax(min = 1, max = 255){
        let inputArray = Basic13.makeArray(min, max, 1);
        inputArray.map((element) => {
            return console.log(element);
        })
    }
    
    // ======================================================================================================================
    // 02 - Print Sum 0-255
    // Print integers from 0 to 255, and with each integer print the sum so far.
    // ======================================================================================================================
    
    static printSumFromMinToMax(min = 0, max = 255){
        let inputArray = Basic13.makeArray(min, max, 1);
        let finalSum = inputArray.reduce((acc, element, index) => {
            console.log(`Current Sum: ${acc} | Adding: ${element} | At index: ${index}`);
            return acc + element;
        })
        console.log(finalSum);
    }
    
    // ======================================================================================================================
    // 03 - Find and Print Max
    // Given an array, find and print its largest element.
    // ======================================================================================================================
    
    static findAndPrintMax(min = 1, max = 20){
        let inputArray = Basic13.makeArray(min, max, 1);
        // let sortedArray = inputArray.sort((a,b) => {
        //     return a - b;
        // })
        // let maxOfArray = sortedArray[sortedArray.length - 1];
        let maxOfArray = inputArray.reduce((a, b) => {
            return Math.max(a, b);
        })
        console.log(maxOfArray);
        return maxOfArray;
    }
    
    // ======================================================================================================================
    // 04 - Array with Odds
    // Create an array with all the odd integers between 1 and 255 (inclusive).
    // ======================================================================================================================
    
    static returnOddArray(min = 1, max = 20){
        let inputArray = Basic13.makeArray(min, max, 1);
        // let oddArray = [];
        // inputArray.map((element) => {
        //     if(element % 2 === 1){
        //         oddArray.push(element)
        //     };
        // })
        // let oddArray = inputArray.filter((element) => {
        //     return element % 2 === 1;
        // })
        let oddArray = [];
        let evenArray = [];
        inputArray.map((element) => {
            element % 2 === 1 ? oddArray.push(element) : evenArray.push(element);
        })
        console.log(oddArray);
        return oddArray;
    }
    
    // ======================================================================================================================
    // 05 - Greater Than Y
    // Given an array and a value Y, count and print the number of array values greater than Y.
    // ======================================================================================================================
    
    static countAndPrintArrayValuesGreaterThanY(min = 1, max = 20, numValY = max / 2){
        // console.log(numValY);
        let inputArray = Basic13.makeArray(min, max, 1);
        // let greaterThanArray = inputArray.filter((element) => {
        //     return element > numValY;
        // })
        let indexOfGreaterValue = undefined;
        inputArray.filter((element, index) => {
            if(element < numValY){
                indexOfGreaterValue = index
            }
        })
        indexOfGreaterValue += 1;
        if(inputArray[indexOfGreaterValue] === numValY){
            indexOfGreaterValue += 1;
        }
        // let greaterThanArray = [...inputArray].slice(indexOfGreaterValue);
        let greaterThanArray = [...inputArray].splice(indexOfGreaterValue)
        // console.log(indexOfGreaterValue);
        // console.log(inputArray[indexOfGreaterValue]);
        console.log(greaterThanArray);
        return greaterThanArray;
    }
    
    // ======================================================================================================================
    // 06 - Max, Min, Average
    // Given an array, print the max, min and average values for that array.
    // ======================================================================================================================
    
    static printMinMaxAndAverage(min = 1, max = 20){
        let inputArray = Basic13.makeArray(min, max, 1);
        // let minOfArray = inputArray.reduce((a,b) => {
        //     return Math.min(a, b);
        // })
        // // console.log(minOfArray);
        // let maxOfArray = inputArray.reduce((a, b) => {
        //     return Math.max(a, b);
        // })
        // console.log(maxOfArray);
        
        let sortedArray = inputArray.sort((a, b) => {
            // highest first, lowest last
            return b - a;
        })
        // console.log(sortedArray);
        let minOfArray = sortedArray[sortedArray.length - 1];
        let maxOfArray = sortedArray[0]
        console.log(minOfArray, maxOfArray);
        
        let sumOfArray = inputArray.reduce((acc, element) => {
            return acc + element;
        })
        // console.log(sumOfArray);
        let average = sumOfArray / inputArray.length;
        // console.log(average);
        let returnArray = [];
        returnArray[0] = min;
        returnArray[1] = max;
        returnArray[2] = average;
        console.log(returnArray);
        return returnArray;
    }
    
    
    // ======================================================================================================================
    // 07 - Swap String For Array Negative Values
    // Replace any negative array values with 'Dojo'.
    // ======================================================================================================================
    
    static returnArrayReplaceNegValuesWithString(min = -10, max = 10){
        let inputArray = Basic13.makeArray(min, max, 1);
        let returnArray = inputArray.map((element) => {
            return element < 0 ? 'Dojo' : element;
        })
        console.log(returnArray);
        return returnArray;
    }
    
    // ======================================================================================================================
    // 08 - Print Odds 1-255
    // Print all odd integers from 1 to 255.
    // ======================================================================================================================
    
    static printIntegersFromMinToMax(min = 1, max = 20){
        let inputArray = Basic13.makeArray(min, max, 1);
        inputArray.map((element) => {
            return element % 2 === 1 ? console.log(element) : element;
        })
    }
    
    // ======================================================================================================================
    // 09 - Iterate and Print Array
    // Iterate through a given array, printing each value.
    // ======================================================================================================================
    
    static iterateAndPrintArray(min = 1, max = 100){
        let inputArray = Basic13.makeArray(min, max, 1);
        for(let i = 0; i < inputArray.length; i += 1){
            console.log(inputArray[i]);
        }
        return inputArray;
    }
    
    // ======================================================================================================================
    // 10 - Get and Print Average
    // Analyze an array’s values and print the average.
    // ======================================================================================================================   
    
    static returnAverageFromAnArray(min = 1, max = 30){
        let inputArray = Basic13.makeArray(min, max, 1);
        let finalSum = inputArray.reduce((acc, element) => {
            return acc + element;
        })
        let average = finalSum / inputArray.length;
        console.log('Average: ' + average);
        return average;
    }
    
    // ======================================================================================================================
    // 11 - Square the Values
    // Square each value in a given array, returning that same array with changed values.
    // ======================================================================================================================   
    
    static returnArrayWithSquaredValues(min = 1, max = 5){
        let inputArray = Basic13.makeArray(min, max, 1);
        let squaredArray = inputArray.map((element) => {
            return element * element;
        })
        console.log(inputArray);
        console.log(squaredArray);
        return squaredArray;
    }
    
    // ======================================================================================================================
    // 12 - Zero Out Negative Numbers
    // Return the given array, after setting any negative values to zero.
    // ======================================================================================================================
    
    static returnArrayNoNegValues(min = -5, max = 5){
        let inputArray = Basic13.makeArray(min, max, 1)
        let noNegArray = inputArray.map((element) => {
            return element < 0 ? 0 : element
        })
        console.log(inputArray);
        console.log(noNegArray);
        return noNegArray;
    }
    
    // ======================================================================================================================
    // 13 - Shift Array Values
    // Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
    // ======================================================================================================================
    
    static returnShiftedArray(min = 1, max = 10){
        let inputArray = Basic13.makeArray(min, max, 1);
        let firstValue = inputArray.shift();
        inputArray.push(0);
        console.log(inputArray);
        return inputArray;
    }
    
}

// 01
Basic13.printAllFromMinToMax(1, 20);
// 02
Basic13.printSumFromMinToMax(1, 10);
// 03
Basic13.findAndPrintMax(1, 100);
// 04
Basic13.returnOddArray(1, 20);
// 05
Basic13.countAndPrintArrayValuesGreaterThanY();
// 06
Basic13.printMinMaxAndAverage()
// 07
Basic13.returnArrayReplaceNegValuesWithString();
// 08
Basic13.printIntegersFromMinToMax(1, 10);
// 09
Basic13.iterateAndPrintArray(1, 50)
// 10
Basic13.returnAverageFromAnArray(1, 19);
// 11
Basic13.returnArrayWithSquaredValues(1, 10);
// 12
Basic13.returnArrayNoNegValues(-10, 10);
// 13
Basic13.returnShiftedArray(1, 10);

