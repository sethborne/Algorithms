// =======================================================================================================
// rSigma
// =======================================================================================================
// Write a recursive function that, given a number, returns the sum of integers from one up to that number. For example, 
// rSigma(5) = 1+2+3+4+5 = 15; 
// rSigma(2.5) = 1+2 = 3; 
// rSigma(-1) = 0.

    function rSigma(inputNumber){
        // input control
        if(!Number.isInteger(inputNumber)){
            inputNumber = Math.floor(inputNumber);
        }
        console.log("inputCheck: ", inputNumber);
        let finalSum = 0;
        if(inputNumber === 0){
            return finalSum;
        }
        else {
            finalSum += inputNumber;
            console.log(finalSum, inputNumber);
            return finalSum + rSigma(inputNumber - 1);
        }
    }
    
    console.log("final: ", rSigma(3.5));

// -------------------------------------------------------------------------------------------------------
// =======================================================================================================
// rBinarySearch
// =======================================================================================================
// Write a recursive function that, given a sorted array and a value, determines whether the value is found within the array. For example, rBinarySearch([1,3,5,6], 4) = false; rBinarySearch([4,5,6,8,12], 5) = true.

    function rBinarySearch(inputArray, findValue){
        let value = inputArray.pop();
        console.log("value: ", value);
        if(value === findValue){
            return true;
        }
        else if(inputArray.length === 0){
            return false;
        }

        return rBinarySearch(inputArray, findValue);
    }

    console.log(rBinarySearch([1, 2, 3, 4, 5], 5));
    console.log(rBinarySearch([1, 2, 3, 4, 5], 0));
    
    // how to do this with a incrementor?

// -------------------------------------------------------------------------------------------------------
// =======================================================================================================
// Recursive Fibonacci
// =======================================================================================================
// Write rFib(num). Recursively compute and return the numth Fibonacci value. As earlier, treat the first two (num = 0, num = 1) Fibonacci values as 0 and 1. Thus, rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). Also, rFib(3.65) = rFib(3) = 2. Finally, rFib(-2) = rFib(0) = 0.

    function rFibonacci(inputNumber, statNumber){
        let fibArray = [0, 1];
        // input check, floor a float
        if(!Number.isInteger(inputNumber)){
            inputNumber = Math.floor(inputNumber);
        }
        // catch all edge cases
        if(inputNumber === 0 || inputNumber < 0 || inputNumber === 1){
            if(inputNumber !== 1){
                return fibArray[0];
            } else {
                return fibArray[1];
            }
        }
        else {
            console.log(inputNumber, statNumber);
            let printNum = ((inputNumber / statNumber) * 100 - 100) * -1;
            console.log("percent complete: ", printNum, "%");
            return rFibonacci(inputNumber - 1, statNumber) + rFibonacci(inputNumber - 2, statNumber);
            // return
        }
    }

    
    console.log("Neg", rFibonacci(-3));
    console.log("Zero", rFibonacci(0));
    console.log("One", rFibonacci(1));
    console.log("Two", rFibonacci(2));
    console.log("Three", rFibonacci(30, 30));

// -------------------------------------------------------------------------------------------------------
// =======================================================================================================
// Binary String Expansion
// =======================================================================================================
// You will be given a string containing characters ‘0’, ‘1’, and ‘?’. For every ‘?’, either ‘0’ or ‘1’ characters can be substituted. Write a recursive function that returns an array of all valid strings that have ‘?’ characters expanded into ‘0’ or ‘1’. Ex.: binStrExpand("1?0?") should return ["1000","1001","1100","1101"]. For this challenge, you can use string functions such as slice(), etc., but be frugal with their use, as they are expensive. 

    function rBinaryStringExpansion(inputString){
        let length = inputString.length;
        console.log(length);
    }

    rBinaryStringExpansion('1?0?');
    
// -------------------------------------------------------------------------------------------------------