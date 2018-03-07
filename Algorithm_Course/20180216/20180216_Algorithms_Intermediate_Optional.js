// Smarter Sum
// Use a time-space tradeoff to accelerate the average running time of an iSigma(num) function that returns the sum of all positive integers from 1 to num. Recall: sig(1) = 1, sig(2) = 3, sig(3) = 6, sig(4) = 10.

var arraySmarterSum = [ ];

function iSigma(numVal){
    console.log("numVal: ", numVal);
    // if(numVal === 0){
    //     return 0;
    // }
    // else if(numVal === 1){
    //     return 1;
    // }
    if(numVal === 0 && arraySmarterSum[0] === undefined || numVal === 1 && arraySmarterSum[1] === undefined){
        if(numVal === 0){
            arraySmarterSum[0] = 0;
        }
        else if(numVal === 1){
            arraySmarterSum[1] = 1;
        }
    }
    if(arraySmarterSum[numVal] !== undefined){
        console.log("Value returned from the Array: ", arraySmarterSum[numVal]);
        return arraySmarterSum[numVal];
    }
    else {
        let finalSum = 0;
        for(let i = 2; i <= numVal; i += 1){
            finalSum += i;
            // console.log("finalSum at loop: ", i , " is ", finalSum);
        }
        console.log("generated finalSum ( ", finalSum ," ): pushed into array at index: ", numVal);
        arraySmarterSum[numVal] = finalSum;
        console.log(arraySmarterSum);
        return finalSum;
    }
}

// iSigma(0);
// iSigma(1);
// iSigma(2);
// iSigma(3);
// iSigma(4);
// // iSigma(5);
// iSigma(6);
// // give return values
// iSigma(3);
// iSigma(5);
// iSigma(2)
// console.log(arraySmarterSum[3]);

// Fabulous Fibonacci
// Use a time-space tradeoff to accelerate the average running time of an iFibonacci(num) function that returns the ‘num’th number in the Fibonacci sequence. Recall: fib(0) = 0, fib(1) = 1, fib(2) = 1, fib(3) = 2. 

var arrayFabFibonacci = [ 0, 1, 1 ];

function iFibonacci(numVal){
    // if value is 0 , just return 0
    if(numVal === 0){
        console.log("the value returned from the Array (", arrayFabFibonacci[numVal] ,") | at index ", numVal);
        return arrayFabFibonacci[numVal];
    }
    // if the value is defined, pull it from the array
    else if(arrayFabFibonacci[numVal] !== undefined){
        console.log("the value returned from the Array (", arrayFabFibonacci[numVal] ,") | at index ", numVal);
        return arrayFabFibonacci[numVal];
    }
    // if index is over 2, need to calculate it.
    else {
        // start sum at 0
        let finalFibSum= 0;
        for(let i = 3; i <= numVal; i += 1){
            console.log("At Loop i: ", i, "At arrayValue", arrayFabFibonacci[i - 1]," at Index: ", i - 1 , "At arrayValue", arrayFabFibonacci[i - 1]," at Index: ", i - 1 ," arrayFabFibonacci[i - 1]");
            finalFibSum = arrayFabFibonacci[i - 1] + arrayFabFibonacci[i - 2];
            console.log(finalFibSum);
            if(arrayFabFibonacci[i] !== finalFibSum || arrayFabFibonacci[i] === undefined){
                arrayFabFibonacci[i] = finalFibSum;
            }
            console.log("the value returned from the Array (", arrayFabFibonacci[numVal] ,") | at index ", i);
        }
        
        console.log(arrayFabFibonacci);
        console.log("");
    }
}

// iFibonacci(0);
// iFibonacci(10);
// iFibonacci(1);
// iFibonacci(2);
// iFibonacci(3);
// iFibonacci(4);
// iFibonacci(5);
// iFibonacci(6);

// Tricky Tribonacci
// Why stop with fibonacci?  Create a function to retrieve a “tribonacci” number, from the sum of the previous 3. Tribonaccis are {0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, ...}. Again, use a time-space tradeoff to make this fast. 

var arrayTrickyTribonacci = [ 0, 0, 1 ];

function trickyTribonacci(numVal){
    if(numVal === 0){
        console.log("the value returned from the Array (", arrayTrickyTribonacci[numVal] ,") | at index ", numVal);
        return arrayTrickyTribonacci[numVal];
    }
    else if(numVal === 1){
        console.log("the value returned from the Array (", arrayTrickyTribonacci[numVal] ,") | at index ", numVal);
        return arrayTrickyTribonacci[numVal];
    }
    else if(numVal === 2){
        console.log("the value returned from the Array (", arrayTrickyTribonacci[numVal] ,") | at index ", numVal);
        return arrayTrickyTribonacci[numVal];
    }
    else if(arrayTrickyTribonacci[numVal] !== undefined){
        console.log("the value returned from the Array (", arrayTrickyTribonacci[numVal] ,") | at index ", numVal);
        return arrayTrickyTribonacci[numVal];
    }
    else{
        let finalTrickyTribSum = 0;
        for(let i = 3; i <= numVal; i += 1){
            finalTrickyTribSum = arrayTrickyTribonacci[i - 1] + arrayTrickyTribonacci[i - 2] + arrayTrickyTribonacci[i - 3];
            if(arrayTrickyTribonacci[i] === undefined || arrayTrickyTribonacci[i] !== finalTrickyTribSum){
                arrayTrickyTribonacci[i] = finalTrickyTribSum;
            }
        }
        console.log(arrayTrickyTribonacci);
    }
}

trickyTribonacci(0);
trickyTribonacci(1);
trickyTribonacci(12);
trickyTribonacci(2);
trickyTribonacci(3);
trickyTribonacci(4);
trickyTribonacci(5);
trickyTribonacci(6);
trickyTribonacci(7);
trickyTribonacci(8);
