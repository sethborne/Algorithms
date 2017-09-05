function giveMeSpace(){
    console.log("                                                         ");
}

function biggieSize(inputArray){
    var swapVal = "big";
    
    for( var i = 0; i < inputArray.length; i += 1){
        // technically 0 is not positive
        // if(inputArray[i] >= 0){
        if(inputArray[i] > 0){
            inputArray[i] = swapVal;
        }
    }
    console.log(inputArray);
    return inputArray;
}

biggieSize([-3, -2, -1, 0, 1, 2, 3])
biggieSize([3, 2, 1, 0])
biggieSize([-3, 3, -2, 2, -1, 1, 0])

function printLowReturnHigh(inputArray){
    var numValMin = inputArray[0];
    var numValMax = inputArray[0];
    
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] > numValMax){
            numValMax = inputArray[i];
        }
        else if(inputArray[i] < numValMin){
            numValMin = inputArray[i];
        }
    }
    console.log(`Min: ${numValMin}`);
    // turn this off
    console.log(`Max: ${numValMax}`);
    return numValMax;
}

giveMeSpace();
printLowReturnHigh([8, 1, 3, 10]);
printLowReturnHigh([4, 8, 6, 23, 84, -50]);
printLowReturnHigh([42, 150, 57, -57, 58, 12, 31]);

function printOneReturnAnother(inputArray){
    var isOdd = false;
    var firstOdd;
    
    if(inputArray.length >= 2){
        console.log(`Second To Last Value is: ${inputArray[inputArray.length - 1]}`);
        for(var i = 0; i < inputArray.length; i += 1){
            if(inputArray[i] % 2 == 1){
                isOdd = true;
                firstOdd = inputArray[i];
                break;
            }
        }
    }
    else {
        console.log("Array Needs to Be Longer Than 1 to Print Second to Last Value");
    }
    
    if(isOdd){
        console.log(`First Odd Value is: ${firstOdd}`
    );
    }
    else {
        console.log("There Are No Odd Numbers in the Array");
    }
}

giveMeSpace();
printOneReturnAnother([1]);
printOneReturnAnother([1, 2, 3, 4, 5, 6]);
printOneReturnAnother([2, 4, 6, 8, 10])

function doubleVision ( inputArray, factor){
    var newArray = [];
    for(var i = 0; i < inputArray.length; i += 1){
        newArray.push(inputArray[i] * factor);
    }
    console.log(`The New Array, with a Factor of ${factor} is:`);
    console.log(newArray);
    return newArray;
}

giveMeSpace();
doubleVision([1, 2, 3, 4, 5, 6], 2);
doubleVision([2, 4, 6, 8, 10], 4);
doubleVision([-2, 4, -6, 8, -10], -4);

function incrementTheSeconds(inputArray){
    for(var i = 0; i < inputArray.length; i += 1){
        if(i % 2 == 1){
            inputArray[i] += 1; 
        }
    }
    console.log(inputArray);
    return inputArray;
}

giveMeSpace();
incrementTheSeconds([0, 0, 2, 2, 4, 4, 6, 6, 8, 8])

function previousLengths(inputArray){
    var tempNumValLastItemLength = inputArray[ inputArray.length - 1 ].length;
    // console.log(tempNumValLastItemLength);
    for(var i = inputArray.length - 1; i >= 0; i -= 1){
        if( i > 0 ){
            inputArray[i] = inputArray[i - 1].length;
        }
        else {
            inputArray[0] = tempNumValLastItemLength;
        }
    }
    console.log(inputArray);
    return inputArray;
}

giveMeSpace();
previousLengths([ "this", "is", "a", "longish", "kinda", "halfassed", "list", "o'", "strings"]);
//[ 7, 4, 2, 1, 7, 5, 9, 4, 2 ]

function addSevenToMost(inputArray, numValInc){
    var newArray = [];
    if(inputArray.length == 1){
        console.log("Arrays must be longer than 1");
        // break
    }
    for(var i = 0; i < inputArray.length; i += 1){
        if(i > 0){
            // var newNumVal = inputArray[]
            newArray.push(inputArray[i] + numValInc)
        }
        else {
            newArray.push(inputArray[i]);
        }
    }
    console.log("Input Array:");
    console.log(inputArray);
    console.log(`New Array: Add: ${numValInc}`);
    console.log(newArray);
    return newArray;
}

giveMeSpace();
addSevenToMost([0, 0, 7, 14, 21, 28], 7)

function reverseArray(inputArray){
    var startIndex = 0;
    var endIndex = inputArray.length-1;
    
    while(startIndex !== endIndex){
        // 01 - only odd
        //     temp = inputArray[endIndex];
        //     inputArray[endIndex] = inputArray[startIndex];
        //     inputArray[startIndex] = temp;
        //     startIndex += 1;
        //     endIndex -= 1;
        
        // 02 - dirty even + odd
        // if(startIndex + 1 == endIndex){
        //     temp = inputArray[endIndex];
        //     inputArray[endIndex] = inputArray[startIndex];
        //     inputArray[startIndex] = temp;
        //     break
        // }
        // else {
        //     temp = inputArray[endIndex];
        //     inputArray[endIndex] = inputArray[startIndex];
        //     inputArray[startIndex] = temp;
        //     startIndex += 1;
        //     endIndex -= 1;
        // }
        
        // 03 - happiest.  :)
        if(startIndex > endIndex){
            break;
        }
        else {
            temp = inputArray[endIndex];
            inputArray[endIndex] = inputArray[startIndex];
            inputArray[startIndex] = temp;
            startIndex += 1;
            endIndex -= 1;
        }
        
    }
    console.log(inputArray);
    return inputArray;
}

giveMeSpace();
reverseArray([2, 4, 6, 1, 3])
reverseArray([5, 2, 9, 10, 4, 6])

function outlookNegative(inputArray){
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] > 0){
            inputArray[i] = inputArray[i] * -1;
        }
    }
    console.log(inputArray);
    return inputArray;
}

giveMeSpace();
outlookNegative([-3, 2, -1, 0, 1, -2, 3])
outlookNegative([0, 1, 2, 3])

function alwaysHungry(inputArray){
    var countFood = 0;
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] == "food"){
            console.log("yummy");
            countFood += 1;
        }
    }
    if(countFood == 0){
        console.log("I'm Hungry");
    }
}

giveMeSpace();
alwaysHungry([1, 2, 3, 4, 5]);
alwaysHungry(["food", "food", "food", 1, 2, 3])

function swapTowardsCenter(inputArray){
    var startIndex = 0;
    var endIndex = inputArray.length - 1;
    
    if(inputArray.length < 2){
        console.log("Array is too Small:  ");
        console.log(inputArray);
        return inputArray;
    }
    while( startIndex !== endIndex ){
        if( startIndex > endIndex ){
            break;
        }
        else{
            temp = inputArray[endIndex];
            inputArray[endIndex] = inputArray[startIndex];
            inputArray[startIndex] = temp;
            startIndex += 2;
            endIndex -= 2;
        }
    }
    console.log(inputArray);
    return inputArray;
}

giveMeSpace();
swapTowardsCenter([-5, -3, -1, 0, 2, 4, 6]);
swapTowardsCenter([-5, -3, -1, 2, 4, 6]);

function scaleTheArray(inputArray, numVal){
    for (var i = 0; i < inputArray.length; i += 1) {
        inputArray[i] = inputArray[i] * numVal;
    }
    console.log(inputArray);
    return inputArray;
}

scaleTheArray([0, 1, 2, 3, 4, 5], 5);
scaleTheArray([2, 4, 6, 8, 10], 4)