function arrayPushFront(inputArray, insertVal){
    for(var i = inputArray.length; i >= 0; i -= 1){
        if( i > 0 ){
            inputArray[i] = inputArray[i - 1];
            console.log(`Loop: ${i}`);
        }
        else{
            inputArray[0] = insertVal;
        }
    }
    console.log(inputArray);
    return inputArray;
}

arrayPushFront([ 1, 2, 3, 4, 5 ], 6);

function arrayPopFront(inputArray){
    tempVar = inputArray[0];
    for(var i = 0; i < inputArray.length; i += 1){
        if( i == inputArray.length - 1 ){
            inputArray[inputArray.length - 1] = tempVar;
            inputArray.pop(inputArray[inputArray.length - 1]);
        }
        else{
            inputArray[i] = inputArray[i + 1]
        }
    }
    console.log(inputArray);
    return inputArray;
}

arrayPopFront([ 6, 1, 2, 3, 4, 5 ])

function arrayInsertAt(inputArray, insertIndex, numValAdd){
    for(var i = inputArray.length; i >= insertIndex; i -= 1){
        if( i > insertIndex ){
            inputArray[i] = inputArray[i - 1];
        }
        else{
            inputArray[i] = numValAdd;
        }
    }
    console.log(inputArray);
    return inputArray;
}

arrayInsertAt([ 1, 2, 4, 5, 6 ], 2, 3 )

function arrayRemoveAt(inputArray, removeIndex){
    if(removeIndex > inputArray.length - 1){
        console.log(`The removeIndex specified: ${removeIndex}: is outside the index parameters of the Input Array Length: ${inputArray.length - 1}`);
    }
    else{
        returnVal = inputArray[removeIndex];
        console.log(returnVal);
        for(var i = 0; i < inputArray.length; i += 1){
            if( i < removeIndex){
                console.log(`Index: ${i}: is below the specified ${removeIndex}`);
            }
            else if( i == inputArray.length - 1 ){
                inputArray[i] = returnVal;
                console.log(inputArray);
                inputArray.pop(i);
            }
            else{
                inputArray[i] = inputArray[i + 1]
            }
        }
        console.log(inputArray);
        console.log(returnVal);
        return returnVal;
    }
    
}

arrayRemoveAt([ 1, 2, 6, 3, 4, 5], 6)

function arraySwapPairs(inputArray){
    for(var i = 0; i < inputArray.length; i += 1){
        if(i % 2 == 0){
            if(inputArray[i] && inputArray[i + 1]){
                console.log(`Loop: ${i}`);
                tempVar = inputArray[i];
                inputArray[i] = inputArray[i + 1];
                inputArray[i + 1] = tempVar;
            }
            else{
                console.log("Last Index of an Odd Length Array.  Nothing More To Do!");
            }
        }
    }
    console.log(inputArray);
    return inputArray
}

arraySwapPairs([ 2, 1, 4, 3, 6, 5]);
arraySwapPairs([ 8, 7, 9])
arraySwapPairs([ 12, 11, 14, 13, 16, 15 ])

function arrayRemoveDuplicates(inputArray){
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] == inputArray[i + 1]){
            console.log(inputArray[i]);
            console.log(inputArray[i + 1]);
            console.log(`Loop: ${i}`);
            tempVar = inputArray[i + 1];
            for(var j = i + 1; j < inputArray.length; j += 1){
                if(j == inputArray.length - 1){
                    inputArray[j] = tempVar;
                    console.log(`In J Loop: ${j}: Evaluating Index Value: ${inputArray[j]}`);
                    console.log(inputArray);
                    inputArray.pop(inputArray[j])
                }
                else{
                    inputArray[j] = inputArray[j + 1];
                }
            }
        }
        else{
            console.log(`Loop: ${i}: Not in If Loop`);
        }
    }
    console.log(inputArray);
}
console.log("                                        ");
arrayRemoveDuplicates([ 1, 1, 2, 2, 3, 4, 4 ])

function arrayRemoveDuplicatesNoNestedLoops(inputArray){
    newArray = [];
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] !== inputArray[i + 1]){
            newArray.push(inputArray[i]);
        }
        else{
            console.log(`Array Values: ${inputArray[i]} and ${inputArray[i + 1]}: are equal, skipping this loop`);
        }
    }
    console.log(inputArray);
    console.log(newArray);
    return newArray;
}

arrayRemoveDuplicatesNoNestedLoops([ 1, 1, 2, 2, 3, 4, 4, 5 ])