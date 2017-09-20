function arrayReverse(inputArray){
    var iter = 0;
    var limit = Math.floor(inputArray.length / 2);
    console.log(limit);
    for(var i = inputArray.length - 1; i > 0; i -= 1){
        if(iter < limit){
            console.log(`Loop: ${i}`);
            tempArrValue = inputArray[i];
            inputArray[i] = inputArray[iter];
            inputArray[iter] = tempArrValue;
            iter += 1;
        }
    }
    console.log(inputArray);
    return inputArray;
}

arrayReverse([ 4, 2, 1, 3, 5 ])
arrayReverse([ 6, 5, 4, 3, 2, 1 ])

function arrayRotateRight(inputArray, shiftAmount){
    var numValLoop = 0;
    var tempVar;
    if(shiftAmount > inputArray.length){
        console.log(`shiftAmount exceeds the Length of the Array, Please Input a Valid shiftAmount`);
    }
    else{
        if(shiftAmount == inputArray.length){
            console.log(inputArray);
            return inputArray;
        }
        else{
            while(numValLoop < shiftAmount){
                console.log("Loop");
                tempVar = inputArray[ inputArray.length - 1 ];
                for(var i = inputArray.length - 1; i > 0; i -= 1){
                    console.log(`Loop No: ${i}`);
                    inputArray[i] = inputArray[i - 1];
                }
                inputArray[0] = tempVar; 
                console.log(`Loop No: ${i}: inputArray: ${inputArray}`);
                numValLoop += 1;
            }
        }
        console.log(numValLoop);
        console.log(inputArray);
        return inputArray;
    }
}

arrayRotateRight([1, 2, 3], 5)
arrayRotateRight([ 1, 2, 3, 4, 5, 6, 7, 8 ], 2)

function arrayRotateLeft(inputArray, shiftAmount){
    var numValLoop = 0;
    var tempVar;
    if(shiftAmount > inputArray.length){
        console.log(`shiftAmount exceeds the Length of the Array, Please Input a Valid shiftAmount`);
    }
    else{
        if(shiftAmount == inputArray.length){
            console.log(inputArray);
            return inputArray;
        }
        else{
            while(numValLoop < shiftAmount){
                console.log("Loop");
                tempVar = inputArray[0];
                for(var i = 0; i < inputArray.length; i += 1){
                    // console.log(`Loop No: ${i}`);
                    inputArray[i] = inputArray[i + 1]
                }
                inputArray[inputArray.length - 1] = tempVar;
                // console.log(`Loop No: ${i}: inputArray: ${inputArray}`);
                numValLoop += 1;
            }
        }
        console.log(numValLoop);
        console.log(inputArray);
        return inputArray;
    }
}

arrayRotateLeft([ 1, 2, 3, 4, 5, 6, 7, 8 ], 3)