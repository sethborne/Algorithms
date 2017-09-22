function giveMeSpace(){
    console.log("                                                                ");
}

function arrayRemoveNegatives(inputArray){
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] < 0){
            // console.log(`Pre While: ${inputArray}`);
            // tempVar = inputArray[i];
            // while(inputArray[i] != inputArray[inputArray.length -1]){
            //     console.log(`In While A: Loop: ${i} | tempVar: ${tempVar} | inputArray: ${inputArray}`);
            //     for(var j = i; j < inputArray.length; j += 1){
            //         inputArray[j] = inputArray[j + 1];
            //     }
            //     // inputArray[j] = inputArray[j + 1];
            //     console.log(`In While B: Loop: ${i} | tempVar: ${tempVar} | inputArray: ${inputArray}`);
            //     inputArray[inputArray.length - 1] = tempVar;
            //     console.log(`In While C: Loop: ${i} | tempVar: ${tempVar} | inputArray: ${inputArray}`);
            //     inputArray.pop(inputArray.length - 1);
            // }
            // console.log(`In While D: Loop: ${i} | inputArray: ${inputArray}`);
            // console.log(inputArray[i]);
        }
    }
    console.log(inputArray);
    return inputArray;
}

arrayRemoveNegatives([ 1, -2, 3, -4, 5, -6, 7, -8 ])

function arraySecondToLast(inputArray){
    if(inputArray.length < 2){
        console.log("Array is Too Short.  Please Enter an Array of 2 or Larger");
        console.log("null");
        return null;
    }
    else{
        valSecondToLast = inputArray[inputArray.length - 2];
        console.log(valSecondToLast);
        return valSecondToLast;
    }
}
giveMeSpace();
arraySecondToLast([ 1, 2, 3, 4 ]);
arraySecondToLast([ "Temp", "Vars", "are", "Amazing"]);
arraySecondToLast([1])

function arraySecondToLargest(inputArray){
    var numberCount = 0;
    var secondToLast;
    for(var i = 0; i < inputArray.length; i += 1){
        if(typeof i == "number"){
            numberCount += 1;
        }
    }
    if(numberCount < 2 || inputArray.length < 2){
        return console.log(`Can not continue, either the Array is too Short, or does not contain enough numeric values`);
    }
    else{
        var len = inputArray.length
        // for(var i = len - 1; i >= 0; i -= 1){
        //     console.log(`OuterLoop: Loop: I: ${i}`);
        //     for(var j = 1; j <= i; j += 1){
        //         console.log(`InnerLoop: Loop: J: ${j}`);
        //         if(inputArray[j - 1] > inputArray[j]){
        //             console.log(`InnerLoop: If: 01: ${j} | inputArray: ${inputArray}`);
        //             var tempVar = inputArray[j - 1];
        //             inputArray[j - 1] = inputArray[j];
        //             inputArray[j] = tempVar;
        //             console.log(`InnerLoop: If: 02: ${j} | inputArray: ${inputArray}`);
        //         }
        //     }
        // }
        for(var i = len - 1; i >= 0; i -= 1){
            for(var j = 1; j <= i; j += 1){
                if(inputArray[j] < inputArray[j - 1]){
                    var tempVar = inputArray[j];
                    inputArray[j] = inputArray[j - 1];
                    inputArray[j - 1] = tempVar;
                }
            }
        }
        secondToLast = inputArray[len - 2];
        console.log(secondToLast);
        return secondToLast;
    }
}
giveMeSpace();
// 9
arraySecondToLargest([ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ])
arraySecondToLargest([ 2 ])

function nthToLast(inputArray, numValNToLast){
    if(numValNToLast > inputArray.length){
        console.log(`Nth Last Value: ${numValNToLast} to Return Exceeds Length of Array: ${inputArray.length}.  Please Enter a Smaller Nth Value, or Larger Array`);
        return null;
    }
    else{
        // console.log("Yep");
        numValIndexLastReturn = inputArray.length - numValNToLast;
        numValToReturn = inputArray[numValIndexLastReturn];
        console.log(numValToReturn);
        return numValToReturn;
    }
}
giveMeSpace();
nthToLast([ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ], 3)

function nthLargest(inputArray, numVal){
    var len = inputArray.length;
    for(var i = len - 1; i >= 0; i -= 1){
        for(var j = 1; j <= i; j += 1){
            if(inputArray[j] < inputArray[j - 1]){
                var tempVar = inputArray[j];
                inputArray[j] = inputArray[j - 1];
                inputArray[j - 1] = tempVar;
            }
        }
    }
    console.log(inputArray);
    indexValToReturn = inputArray.length - numVal;
    valueToReturn = inputArray[indexValToReturn];
    console.log(valueToReturn);
    return valueToReturn;
}
giveMeSpace();
// 3
nthLargest([ 6, 1, 5, 2, 4, 3 ], 4);