function giveMeSpace(){
    console.log("                                                         ");
}

function printFromTo(numValMin, numValMax){
    for(var i = numValMin; i <= numValMax; i += 1){
        console.log(i);
    }
}

giveMeSpace();
printFromTo(0, 20);

function printFromToWhile(numValMin, numValMax){
    i = numValMin;
    while(i <= numValMax){
        console.log(i);
        i += 1;
    }
}

giveMeSpace();
printFromToWhile(0, 5);

function printIntsSumFromTo(numValMin, numValMax){
    var numValSum = 0;
    for(var i = numValMin; i < numValMax; i += 1){
        console.log(i);
        numValSum += i;
        console.log(numValSum);
    }
}

giveMeSpace();
printIntsSumFromTo(0, 5);

function printIntsSumFromToWhile(numValMin, numValMax){
    var numValSum = 0;
    var i = numValMin;
    while( i < numValMax ){
        console.log(i);
        numValSum += i;
        console.log(numValSum);
        i += 1;
    }
}

giveMeSpace();
printIntsSumFromToWhile(5, 10)

function printMaxOfArray(inputArray){
    var currentMax = inputArray[0];
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] > currentMax){
            currentMax = inputArray[i];
        }
    }
    console.log(currentMax);
    return currentMax;
}

giveMeSpace();
printMaxOfArray([2, 4, 6, 8, 10]);
printMaxOfArray([4, 10, 6, 2, 8, 12]);

function printMaxOfArrayWhile(inputArray){
    var i = 1;
    var currentMax = inputArray[0];
    while( i < inputArray.length ){
        if(inputArray[i] > currentMax){
            currentMax = inputArray[i];
        }
        i += 1;
    }
    console.log(currentMax);
}
giveMeSpace();
printMaxOfArrayWhile([2, 4, 6, 8, 10]);
printMaxOfArrayWhile([4, 10, 6, 2, 8, 12]);

function returnOddsFromTo(numValMin, numValMax){
    var oddArray = [];
    for(var i = numValMin; i <= numValMax; i += 1){
        if(i % 2 == 1){
            oddArray.push(i);
        }
    }
    console.log(oddArray);
    return oddArray;
}
giveMeSpace();
returnOddsFromTo(0, 6);
returnOddsFromTo(10, 20);

function returnArrayCountGreaterThan(inputArray, numVal){
    var count = 0;
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] > numVal){
            count += 1;
        }
    }
    console.log(`Count is: ${count}`);
    return count;
}
giveMeSpace();
returnArrayCountGreaterThan([2, 4, 6, 8, 10], 6)

function printMaxMinAvergeOfArray(inputArray){
    var numValMin = inputArray[0];
    var numValMax = inputArray[0];
    var numValAvg;
    var numValSum = 0;
    
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] < numValMin){
            numValMin = inputArray[i];
        }
        if(inputArray[i] > numValMax){
            numValMax = inputArray[i];
        }
        numValSum += inputArray[i];
    }
    numValAvg = numValSum/inputArray.length;
    
    console.log(`Minimum: ${numValMin}`);
    console.log(`Maximum: ${numValMax}`);
    console.log(`Average: ${numValAvg}`);
}
giveMeSpace();
printMaxMinAvergeOfArray([2, 4, 6, 8, 10])

function swapStringForArrayNeg(inputArray){
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] < 0){
            inputArray[i] = 'dojo';
        }
    }
    console.log(inputArray);
    return inputArray;
}
giveMeSpace();
swapStringForArrayNeg([-2, 4, -6, 8, -10])

function printOddsFromTo(numValMin, numValMax){
    for(var i = numValMin; i < numValMax; i += 1){
        if(i % 2 == 1){
            console.log(i);
        }
    }
}
giveMeSpace();
printOddsFromTo(2, 10);

function printAverageOfArray(inputArray){
    var numValSum = 0;
    var numValAvg;
    
    for(var i = 0; i < inputArray.length; i += 1){
        numValSum += inputArray[i];
    }
    
    numValAvg = numValSum/inputArray.length;
    
    console.log(numValAvg);
}
giveMeSpace();
printAverageOfArray([2, 4, 6, 8, 10]);

function printArrayValues(inputArray){
    for(var i = 0; i < inputArray.length; i += 1){
        console.log(inputArray[i]);
    }
}
giveMeSpace();
printArrayValues([2, 4, 6, 8, 10]);

function squareArrayValues(inputArray){
    for(var i = 0; i < inputArray.length; i += 1){
        inputArray[i] *= inputArray[i];
    }
    console.log(inputArray);
    return inputArray;
}
giveMeSpace();
squareArrayValues([2, 4, 6, 8, 10]);

function zeroOutNegativeNumbers(inputArray){
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] < 0){
            inputArray[i] = 0
        }
    }
    console.log(inputArray);
    return inputArray;
}
giveMeSpace();
zeroOutNegativeNumbers([-2, 4, -6, 8, -10])

function shiftValuesLeft(inputArray){
    for(var i = 0; i < inputArray.length; i += 1){
        if(i < inputArray.length - 1){
            inputArray[i] = inputArray[i + 1];
        }
        else{
            inputArray[i] = 0;
        }
    }
    console.log(inputArray);
}
giveMeSpace();
shiftValuesLeft([2, 4, 6, 8, 10])
