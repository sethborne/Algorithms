function giveMeSpace(){
    console.log("                                                                ");
}

function arrayShuffle(inputArray){
    var len = inputArray.length;
    var tempArr;
    
    for(var i = len - 1; i >= 0; i -= 1){
        var numValMin = 0;
        var numValMax = len - 1;
        
        var mathRandom = Math.floor(Math.random()*(numValMax - numValMin + 1)) + numValMin;
        
        tempArr = inputArray[i];
        inputArray[i] = inputArray[mathRandom];
        inputArray[mathRandom] = tempArr;
    }
    
    console.log(inputArray);
    return inputArray;
}

arrayShuffle([ 1, 2, 3, 4, 5, 6 ]);
arrayShuffle([ 10, 20, 30, 40, 50, 60 ]);

function arrayRemoveRange(inputArray, numValStart, numValEnd){
    var len = inputArray.length;
    var popVar;
    var endVal;
    
    for(var i = len - 1; i >= 0; i -= 1){
        console.log(inputArray);
        if( i <= numValEnd && i >= numValStart ){
        // if( i <= numValEnd ){
            // if( i >= numValStart ){
                popVar = inputArray[i];
                for(var j = i; j < inputArray.length; j += 1 ){
                    inputArray[j] = inputArray[j + 1];
                }
                endVal = inputArray[inputArray.length - 1];
                endVal = popVar;
                inputArray.pop(endVal);
            // }
        }
    }
    console.log(inputArray);
    return inputArray;
}

arrayRemoveRange([ 1, 2, 3, 4, 5, 6 ], 2, 4);
arrayRemoveRange([ 10, 20, 30, 40, 50, 60 ], 1, 6);

function intermediateSums(inputArray){
    var sum = 0;
    for(var i = 0; i < inputArray.length; i += 1){
        if(i !== 0 && i < 10 ){
            sum += inputArray[i];
            // console.log(`At loop i ${i}: sum: ${sum}`);
        }
        else if( i > 9 && i < inputArray.length - 1){
            if(i % 10 == 0){
                for(var j = inputArray.length; j >= i; j -= 1){
                    inputArray[j] = inputArray[j - 1];
                    // console.log(`At Loop: j ${j} | sum: ${sum} `);
                }
                inputArray[i] = sum;
                // console.log(`At Loop: i ${i} | sum: ${sum}`);
                sum = 0;
            }
            else{
                sum += inputArray[i];
                // console.log(`At Loop: i ${i} | else: | sum: ${sum}`);
            }
        }
        else if( i == inputArray.length - 1 ){
            // console.log(`Last Index: ${i} | sum: ${sum}`);
            sum += inputArray[i];
            // inputArray.push(sum);
            inputArray[i] = sum
        }
        else{
            
            
        }
        // console.log(inputArray);
    }
    console.log(inputArray);
    return inputArray;
}
giveMeSpace();
intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ])

function doubleTrouble(inputArray){
    inputArray.length = inputArray.length * 2;
    var len = inputArray.length;
    var half;
    
    for(var i = len - 2; i >= 0; i -= 2){
        half = i / 2;
        inputArray[i] = inputArray[half];
        inputArray[i + 1] = inputArray[i];
    }
    console.log(inputArray);
    return inputArray;
}
giveMeSpace();
doubleTrouble([ 1, 2, 3, 4 ])

function zipIt(inputArrayOne, inputArrayTwo){
    var inputArrayOneLength = inputArrayOne.length;
    var inputArrayTwoLength = inputArrayTwo.length;
    
    var longArr;
    var shortArr;
    
    var newArray = [];
    
    if(inputArrayOneLength > inputArrayTwoLength){
        longArr = inputArrayOne;
        shortArr = inputArrayTwo;
    }
    else{
        longArr = inputArrayTwo;
        shortArr = inputArrayOne;
    }
    if(longArr.length == inputArrayOne.length){
        for(var i = 0; i < longArr.length; i += 1){
            newArray.push(longArr[i]);
            // for(var j = 0; j < shortArr.length; j += 1){
            if(i < shortArr.length){
                newArray.push(shortArr[i]);
            }
        }
    }
    else{
        for(var i = 0; i < longArr.length; i += 1){
            // for(var j = 0; j < shortArr.length; j += 1){
            if(i < shortArr.length){
                newArray.push(shortArr[i]);
            }
            newArray.push(longArr[i]);
        }
    }
    console.log(newArray);
    return newArray;
}
giveMeSpace();
zipIt([ 1, 2 ], [ 10, 20, 30, 40 ]);
zipIt([ 10, 20, 30, 40 ], [ 1, 2 ]);