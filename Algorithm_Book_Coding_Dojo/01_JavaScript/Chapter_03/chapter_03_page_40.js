function giveMeSpace(){
    console.log("                                                                ");
}

function arrayReverse(inputArray){
    var iter = 0;
    var limit = Math.floor(inputArray.length / 2);
    // console.log(limit);
    for(var i = inputArray.length - 1; i > 0; i -= 1){
        if(iter < limit){
            // console.log(`Loop: ${i}`);
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
            // console.log(inputArray);
            return inputArray;
        }
        else{
            while(numValLoop < shiftAmount){
                // console.log("Loop");
                tempVar = inputArray[ inputArray.length - 1 ];
                for(var i = inputArray.length - 1; i > 0; i -= 1){
                    // console.log(`Loop No: ${i}`);
                    inputArray[i] = inputArray[i - 1];
                }
                inputArray[0] = tempVar; 
                // console.log(`Loop No: ${i}: inputArray: ${inputArray}`);
                numValLoop += 1;
            }
        }
        // console.log(numValLoop);
        console.log(inputArray);
        return inputArray;
    }
}
giveMeSpace();
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
            // console.log(inputArray);
            return inputArray;
        }
        else{
            while(numValLoop < shiftAmount){
                // console.log("Loop");
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
        // console.log(numValLoop);
        console.log(inputArray);
        return inputArray;
    }
}
giveMeSpace();
arrayRotateLeft([ 1, 2, 3, 4, 5, 6, 7, 8 ], 3)

function arrayFilterRange(inputArray, numFirst, numLast){
    // checks to make sure that input is in the correct order.
    var numFirstIndex;
    var numLastIndex;
    // var hitFirst = false;
    // var hitLast = false;
    var length = inputArray.length
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] == numFirst){
            numFirstIndex = i;
        }
        else if(inputArray[i] == numLast){
            numLastIndex = i;
        }
    }
    // console.log(numFirstIndex);
    // console.log(numLastIndex);
    if(numFirstIndex == undefined && numLastIndex == undefined){
        console.log(`The First and Last Values were not found in the Array.  Please Enter Valid Values`);
    }
    else if(numFirstIndex == undefined){
        console.log(`The First Value: ${numFirst} was not found in the Array. Please Enter Valid Value`);
    }
    else if(numLastIndex == undefined){
        console.log(`The Last Value: ${numLast} was not found in the Array. Please Enter Valid Value`);
    }
    else if(numLastIndex < numFirstIndex){
        console.log(`The First and Last Values are in the incorrect Order. Please Enter Valid Values`);
    }
    // real code
    for(var i = 0; i < length; i += 1){
        // if(inputArray[i] == numFirst){
        //     hitFirst = true;
        //     console.log(`Loop: ${i}`);
        //     console.log("PRINT ME");
        // }
        // else if(hitFirst == false){
        // console.log(numFirstIndex);
        // console.log(numLastIndex);
        if(i < numFirstIndex){
            // console.log(`Array Print One: ${inputArray}`);
            // console.log(`Loop: I is: ${i}`);
            for(var j = i; j < inputArray.length - 1; j += 1){
                // console.log(`j is ${j}: hitFirst is ${hitFirst}: value is ${inputArray[j]}`);
                inputArray[j] = inputArray[j + 1];
            }
            // console.log(`Array Print Two: ${inputArray}`);
            // console.log(`Out of While Loop - Pre numFirst`);
            inputArray.pop(inputArray[inputArray.length - 1]);
            numFirstIndex -= 1;
            numLastIndex -= 1;
            // console.log(`Array Print Post: ${inputArray}`);
            // console.log(`Length: ${inputArray.length}`);
        }
        else if(i >= numFirstIndex && i < numLastIndex){
            // console.log(`Loop ${i}: At: ${inputArray[i]}`);
            // console.log(inputArray);
        }
        else if(i > numLastIndex){
            // console.log(`Loop ${i}: At: ${inputArray[i]}`);
            inputArray.pop(inputArray[i]);
        }
    }
    // console.log(inputArray);
    return inputArray;
}

// [ 4, 6, 5, 3 ]
// arrayFilterRange([ 2, 4, 6, 5, 3, 1 ], 4, 3)
// arrayFilterRange([ 2, 4, 6, 5, 3, 1 ], 2, 1)
// arrayFilterRange([ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ], 9, 6)

function arrayFilterRange2(inputArray, numFirst, numLast){
    var numFirstIndex;
    var numLastIndex;
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] == numFirst){
            numFirstIndex = i;
        }
        if(inputArray[i] == numLast){
            numLastIndex = i;
        }
    }
    if(numFirstIndex == undefined && numLastIndex == undefined){
        return console.log(`The First and Last Values were not found in the Array.  Please Enter Valid Values`);
    }
    else if(numFirstIndex == undefined){
        return console.log(`The First Value: ${numFirst} was not found in the Array. Please Enter Valid Value`);
    }
    else if(numLastIndex == undefined){
        return console.log(`The Last Value: ${numLast} was not found in the Array. Please Enter Valid Value`);
    }
    else if(numLastIndex < numFirstIndex){
        return console.log(`The First and Last Values are in the incorrect Order. Please Enter Valid Values`);
    }
    // console.log(`numFirst Val: ${inputArray[numFirstIndex]} | At Index: ${numFirstIndex}`);
    // console.log(`numLast Val: ${inputArray[numLastIndex]} | At Index: ${numLastIndex}`);
    while(inputArray[0] != numFirst){
        for(var i = 0; i < inputArray.length; i += 1){
            inputArray[i] = inputArray[i + 1];
        }
        inputArray.pop(inputArray[inputArray.length - 1])
        numFirstIndex -= 1
        numLastIndex -= 1
    }
    // console.log(inputArray);
    // console.log(`numFirst Val: ${inputArray[numFirstIndex]} | At Index: ${numFirstIndex}`);
    // console.log(`numLast Val: ${inputArray[numLastIndex]} | At Index: ${numLastIndex}`);
    for(var i = inputArray.length - 1; i > numLastIndex; i -= 1){
        // console.log("Hi");
        // console.log(`Loop: ${i} | numFirstIndex: ${numLastIndex}`);
        inputArray.pop(inputArray[inputArray.length - 1]);
    }
    console.log(inputArray);
    return inputArray;
}
giveMeSpace();
arrayFilterRange2([ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ], 20, 15)
arrayFilterRange2([ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ], 20, 10)
arrayFilterRange2([ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ], 10, 15)
arrayFilterRange2([ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ], 5, 10)
arrayFilterRange2([ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ], 9, 6)
arrayFilterRange2([ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ], 1, 3)
arrayFilterRange2([ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ], 3, 6)

function arrayConcat(inputArrayOne, inputArrayTwo){
    if(inputArrayOne < 1){
        console.log(inputArrayOne);
        return inputArrayOne;
    }
    if(inputArrayTwo < 1){
        console.log(inputArrayTwo);
        return inputArrayTwo;
    }
    arrayConcat = [];
    for(var i = 0; i < inputArrayOne.length; i += 1){
        arrayConcat.push(inputArrayOne[i]);
    }
    for(var j = 0; j < inputArrayTwo.length; j += 1){
        arrayConcat.push(inputArrayTwo[j])
    }
    console.log(arrayConcat);
    return arrayConcat;
}
giveMeSpace();
arrayConcat([ "a", "b" ], [ 1, 2 ]);


function skyline(inputArray){
    var currentMax = -Infinity;
    var arraySkyline = [];
    
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] > currentMax && inputArray[i] > 0){
            arraySkyline.push(inputArray[i]);
            if(inputArray[i] > currentMax){
                currentMax = inputArray[i]
            }
        }
    }
    console.log(arraySkyline);
    return arraySkyline;
}
giveMeSpace();
skyline([ -1, 1, 0, 3, 2 ])
// 1, 3, 4, 8, 12
skyline([ 0, -1, 1, -2, -1, 0, 1, -4, -2, 3, -2, 4, -4, 2, 3, -1, -2, 8, 12 ])