// PushFront
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods. PushFront(arr,val)

// no built ins - ES5
// function pushValToFrontOfArray(inputArray, addValue){
//     // if the array is empty, just push in Value
//     if(inputArray.length < 1){
//         inputArray.push(addValue);
//     }
//     else {
//         // if the array has values, start at the length (thats one bigger than current length) and run to the second value (1)
//         for(let i = inputArray.length; i > 0; i -= 1){
//             inputArray[i] = inputArray[i - 1];
//         }
//         inputArray[0] = addValue;
//     }
//     console.log(inputArray);
//     return inputArray;
// }

// built in - ES5
// function pushValToFrontOfArray(inputArray, addValue){
//     // technically don't need the empty array condition...
//     if(inputArray.length < 1){
//         inputArray.push(addValue);
//     }
//     else {
//         inputArray.unshift(addValue)
//     }
//     console.log(inputArray);
//     return inputArray;
// }

// pushValToFrontOfArray([], 2);
// pushValToFrontOfArray([1, 2, 3, 4, 5, 6], 15);
// pushValToFrontOfArray([1], 3);

// ES6
pushValToFrontOfArray = (inputArray, addValue) => {
    inputArray.length < 1 ? inputArray.push(addValue) : inputArray.unshift(addValue);
    return inputArray; 
}

// console.log(pushValToFrontOfArray([], 2));
// console.log(pushValToFrontOfArray([1, 2, 3, 4, 5, 6], 15));
// pushValToFrontOfArray([1], 3);

// PopFront
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop(). 

// no built in ES5
// function popFirstArrayValue(inputArray){
//     // if the length is below 1, there are no values, so have the function return null.
//     if(inputArray.length < 1){
//         return null;
//     }
//     else {
//         // the array has length, so save the first item in a var, then loop, setting current val to val forward, then set intiaial at end before pop
//         var firstArrayValue = inputArray[0];
//         for(var i = 0; i < inputArray.length; i += 1){
//             inputArray[i] = inputArray[i + 1];
//         }
//         inputArray[inputArray.length - 1] = firstArrayValue;
//         let returnVal = inputArray.pop();
//         console.log(inputArray);
//         console.log(returnVal);
//         return returnVal;
//     }
// }

// built in ES5
// function popFirstArrayValue(inputArray){
//     // if there are not values in the array, return null
//     if(inputArray.length < 0){
//         return null;
//     }
//     else{
//         let returnValue = inputArray.shift();
//         console.log(inputArray);
//         console.log(returnValue);
//         return returnValue;
//     }
// }

// popFirstArrayValue([1, 2, 3, 4, 5, 6])

// ES6
popFirstArrayValue = (inputArray) => {
    let returnValue;
    inputArray.length < 1 ? returnValue = null : returnValue = inputArray.shift();
    console.log(returnValue); 
    return returnValue;
}

// popFirstArrayValue([1, 2, 3, 4, 5, 6]);
// popFirstArrayValue([6, 1, 5, 2, 4, 3]);

// InsertAt
// Given an array, index, and additional value, insert the value into the array at the given index. Do this without using built-in array methods. You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val). 

// ES5 - no builtins
// function insertValueAtIndexIntoArray(inputArray, insertAtIndex, insertValue){
//     // if insertAtIndex exceeds length enough to create undefined spaces, return error message
//     if(insertAtIndex > inputArray.length){
//         let returnError = "Error: Current Value of Index to Insert at (" + insertAtIndex + ") Exceeds Current Array Length (" + inputArray.length +  "), and will cause undefined values.  Aborting Insert, Please modify Insert Index to fit within length parameters";
//         console.log(returnError);
//         return returnError;
//     }
//     else {
//         // run from end to the index value
//         for(let i = inputArray.length; i > insertAtIndex; i -= 1){
//             inputArray[i] = inputArray[i - 1];
//         }
//         // set value at index to insert Value
//         inputArray[insertAtIndex] = insertValue;
//     }
//     console.log(inputArray);
//     return inputArray;
// }

// ES5 - builtin
// function insertValueAtIndexIntoArray(inputArray, insertAtIndex, insertValue){
//     if(insertAtIndex > inputArray.length){
//         let returnError = "Error: Current Value of Index to Insert at (" + insertAtIndex + ") Exceeds Current Array Length (" + inputArray.length +  "), and will cause undefined values.  Aborting Insert, Please modify Insert Index to fit within length parameters";
//         console.log(returnError);
//         return returnError;
//     }
//     else {
//         inputArray.splice(insertAtIndex, 0, insertValue);
//     }
//     console.log(inputArray);
//     return inputArray;
// }

// ES6 - builtin
insertValueAtIndexIntoArray = (inputArray, insertAtIndex, insertValue) => {
    // if the index exceeds the lenght, it will start inserting undefined values between
    if(insertAtIndex > inputArray.length){
        let returnError = "Error: Current Value of Index to Insert at (" + insertAtIndex + ") Exceeds Current Array Length (" + inputArray.length +  "), and will cause undefined values.  Aborting Insert, Please modify Insert Index to fit within length parameters";
        console.log(returnError);
        return returnError;
    }
    else {
        // on the input array, splice at the specified index, delete nothing, add specified value
        inputArray.splice(insertAtIndex, 0, insertValue);
        return inputArray;
    }
}
// insertValueAtIndexIntoArray([0, 0, 0, 0, 0, 0, 0 ,0], 5, 25)
// insertValueAtIndexIntoArray([0, 0, 0, 0, 0, 0, 0, 0], 14, 5)

// RemoveAt
// Given an array and an index into the array, remove and return the array value at that index. Do this without using any built-in array methods except pop(). Think of PopFront(arr) as equivalent to RemoveAt(arr,0). 

// ES5 - no built ins
// function removeAndReturnValueAtIndexFromArray(inputArray, removeIndex){
//     // fast fail - if remove Index exceeds the last index of the array, return null
//     if(removeIndex > inputArray.length - 1){
//         console.log("will return null");
//         return null;
//     } // 
//     else{
//         let removedArrayValue = inputArray[removeIndex];
//         for(let i = removeIndex; i < inputArray.length; i += 1){
//             inputArray[i] = inputArray[i + 1];
//         }
//         inputArray[inputArray.length - 1] = removedArrayValue;
//         inputArray.length = inputArray.length - 1
//         console.log(inputArray);
//         console.log(removedArrayValue);
//         return removedArrayValue;
//     }
// }

// ES5 - builtin
// function removeAndReturnValueAtIndexFromArray(inputArray, removeIndex){
//     // fast fail - if remove Index exceeds the last index of the array, return null
//     if(removeIndex > inputArray.length - 1){
//         console.log("will return null");
//         return null;
//     } // splice ond at index 
//     else{
//         let removedArrayValue = inputArray.splice(removeIndex, 1);
//         console.log(removedArrayValue[0]);
//         console.log(inputArray);
//         return removedArrayValue[0];
//     }
// }

// ES6
removeAndReturnValueAtIndexFromArray = (inputArray, removeIndex) => {
    if(removeIndex > inputArray.length - 1){
        console.log("will return null");
        return null;
    }
    else {
        let removedArrayValue = inputArray.filter((element, index) => {
            return removeIndex === index ? element : null; 
        })
        console.log(removedArrayValue[0]);
        inputArray.splice(removeIndex, 1);
        console.log(inputArray);
        return removedArrayValue[0];
    }
}

// removeAndReturnValueAtIndexFromArray([], 5)
// removeAndReturnValueAtIndexFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)

// Second-to-Last
// Return the second-to-last element of an array.
// ES5 - no built ins
// function returnTheSecondToLastOfArray(inputArray){
//     let secondToLastVal = inputArray.length > 1 ? inputArray[inputArray.length - 2] : null;
//     console.log(secondToLastVal);
//     return secondToLastVal;
//     // return inputArray.length > 1 ? inputArray[inputArray.length - 2] : null;
// }

// ES5 - builtins
// function returnTheSecondToLastOfArray(inputArray){
//     let secondToLastValIndex = inputArray.length > 1 ? inputArray.indexOf(inputArray[inputArray.length - 2]) : null;
//     console.log(secondToLastValIndex);
//     let secondToLastVal = inputArray[secondToLastValIndex];
//     console.log(secondToLastVal);
//     return secondToLastVal;
// }

// ES6
returnTheSecondToLastOfArray = (inputArray) => {
    let secondToLastVal = inputArray.length > 1 ? inputArray.filter((element, index) => {
        return index === inputArray.length - 2;
    }) : null;
    secondToLastVal !== null ? secondToLastVal = secondToLastVal[0] : null;
    console.log(secondToLastVal);
    return secondToLastVal;
}

// console.log(returnTheSecondToLastOfArray([1]));
// returnTheSecondToLastOfArray([1]);
// returnTheSecondToLastOfArray([1, 2, 3]);
// returnTheSecondToLastOfArray([12, 15, 23, 34, 223])

// Nth-to-Last
// Return the element that is N-from-array’s-end.

// ES5 no built ins
// function returnTheNthToLastElementOfArray(inputArray, nthFromLast){
//     // 
//     let nthFromLastElementValue = inputArray.length - nthFromLast > -1 ? inputArray[inputArray.length - nthFromLast] : null; 
//     console.log(nthFromLastElementValue);
//     return nthFromLastElementValue;
// }

// ES5 - built in
function returnTheNthToLastElementOfArray(inputArray, nthFromLast){
    let nthFromLastValIndex = inputArray.length - nthFromLast > -1 ? inputArray.indexOf(inputArray[inputArray.length - nthFromLast]) : null;
    console.log(nthFromLastValIndex);
    let nthFromLastVal = nthFromLastValIndex !== null ? inputArray[nthFromLastValIndex] : null;
    console.log(nthFromLastVal);
    return nthFromLastVal;
}

// returnTheNthToLastElementOfArray([1], 2);
// returnTheNthToLastElementOfArray([1, 2, 3], 3);
// returnTheNthToLastElementOfArray([12, 15, 23, 34, 223, 22, 06, 38, 56], 5)

function putValueAtIndex(currentSortedArray, indexOfSortedArray, inputArrayValue){
    // again, AN IF ELSE that is not necessarily needed, but 
    if(indexOfSortedArray === currentSortedArray.length){
        currentSortedArray.push(inputArrayValue);
    }
    else{
        // now set a decrimenting loop starting at length, and going until the iterator is greater than the indexOfSortedArray
        for(let i = currentSortedArray.length; i > indexOfSortedArray; i -= 1){
            // this will set values to back, and open a slot to redefine the value for the input (there will be a duplicate value if you console log the array outside of this loop)
            currentSortedArray[i] = currentSortedArray[i - 1];
        }
        // if this log is on you will see duplicate value at index insertion
        console.log("Array with Dup at Index: ", currentSortedArray);
        currentSortedArray[indexOfSortedArray] = inputArrayValue;
        console.log("Array with inputArrayValue in the correct index: ", currentSortedArray);
    }
    return currentSortedArray
}

function findIndexToPutAt(currentSortedArray, valueToPlace){
    let indexToPlaceValueAt;
    // use a ternary for length of only 1 (its a quick compare) - BUT THIS IF/ELSE ISN'T NEEDED, CAN cancel and just use the for loop
    if(currentSortedArray.length < 2){
        currentSortedArray[0] > valueToPlace ? indexToPlaceValueAt = 0 : indexToPlaceValueAt = 1
    }
    // if the array is larger than 1 - go through it and check to the index where the value should be inserted.
    else {
        for(let i = 0; i < currentSortedArray.length; i += 1){
            // if the valueToPlace is lower than the current
            // console.log(valueToPlace, currentSortedArray[i]);
            if(valueToPlace < currentSortedArray[i]){
                indexToPlaceValueAt = i;
                // once this gets set, break the loop
                break;
            }
            else{
                // if you iterate through the entire array, and dont' get a value then break, then the value should go at the end.
                indexToPlaceValueAt = currentSortedArray.length;
            }
        }
    }
    return indexToPlaceValueAt;
}


// Second-Largest
// Return the second-largest element of an array.
function returnSecondLargestElementofAnArray(inputArray){
    // fast fail, array not over 2 values
    if(inputArray.length < 2){
        console.log("Second to Last Array Value Does Not Exist, Return: ", null);
        console.log("-----------------------------End Of Function Call---------------------");
        return null;
    } // can now do something, array is over 2 - will still need to check at the end in case lots of dups
    else {
        // make a container for my sorted Array
        let sortedArray = [];
        // start to loop
        for(let i = 0; i < inputArray.length; i += 1){
            // if first index push in to sortedArray
            if(i === 0){
                sortedArray.push(inputArray[i]);
                console.log("sortedArray at first Index: ", sortedArray);
            }
            // if i is larger than the first
            else if( i > 0 ){
                // need to know the index of the next value to push into the sorted array, to do this, have sorted Array and value as param to functions
                console.log("Check Index to Put at Params: ", "sortedArray: ", sortedArray, "| inputArray Value: ", inputArray[i]);
                let pushAtSortedArrayIndex = findIndexToPutAt(sortedArray, inputArray[i]);
                console.log("Put the Value at this Index: ", pushAtSortedArrayIndex);
                // now we have the index from sortedArray at which we need to insert the inputArray value into, so lets call a function, pass the sorted Array, the sorted Array index and the inputArray Value
                // this line will end up returning a value into the stored Array
                console.log("Check the Params forputValueAtIndex: ", "sortedArray: ", sortedArray, "| pushAtSortedArrayIndex: ", pushAtSortedArrayIndex, "| inputArray Value: ", inputArray[i]);
                putValueAtIndex(sortedArray, pushAtSortedArrayIndex, inputArray[i]);
                console.log("");
            }
            console.log("Here is our sortedArray at bottom of loop: ", sortedArray);
            console.log("");
        }
        // now we have a sorted Array!
        console.log("final sortedArray: ", sortedArray);
        let secondToLastElementOfArrayValue = sortedArray[sortedArray.length - 2];
        console.log("secondLargestElementValue: ", secondToLastElementOfArrayValue);
        console.log("-----------------------------End Of Function Call---------------------");
        return secondToLastElementOfArrayValue;
    }
}

// returnSecondLargestElementofAnArray([34, 5, 23, 12]);
// returnSecondLargestElementofAnArray([12, 90, 34, 78, 67, 56, 45, 89, 23]);
// returnSecondLargestElementofAnArray([34]);

function isValueADuplicate(currentSortedArray, indexOfSortedArray, inputArrayValue){
    // this functino will return a boolean if the value trying to be inserted is a duplicate
    let returnCondition = false;
    if(currentSortedArray[indexOfSortedArray] === inputArrayValue || currentSortedArray[indexOfSortedArray - 1] === inputArrayValue || currentSortedArray[indexOfSortedArray + 1] === inputArrayValue){
        returnCondition = true;
    }
    return returnCondition;
}

// Nth-Largest
// Given an array, return the Nth-largest element: there should be (N - 1) elements that are larger.
function returnNthLargestElementofAnArray(inputArray, nthLargest){
    // fast fail, array not over 2 values
    if(inputArray.length - nthLargest < 0){
        console.log("Nth to Last Array Value Does Not Exist, Return: ", null);
        console.log("-----------------------------End Of Function Call---------------------");
        return null;
    } // can now do something, array is over 2 - will still need to check at the end in case lots of dups
    else {
        // make a container for my sorted Array
        let sortedArray = [];
        // start to loop
        for(let i = 0; i < inputArray.length; i += 1){
            // if first index push in to sortedArray
            if(i === 0){
                sortedArray.push(inputArray[i]);
                console.log("sortedArray at first Index: ", sortedArray);
            }
            // if i is larger than the first
            else if( i > 0 ){
                console.log("Check Index to Put at Params: ", "sortedArray: ", sortedArray, "| inputArray Value: ", inputArray[i]);
                // need to know the index of the next value to push into the sorted array, to do this, have sorted Array and value as param to function
                // and set the return value to a var, which gets used in the next function
                let pushAtSortedArrayIndex = findIndexToPutAt(sortedArray, inputArray[i]);
                console.log("Put the Value at this Index: ", pushAtSortedArrayIndex);
                if(isValueADuplicate(sortedArray, pushAtSortedArrayIndex, inputArray[i])){
                    console.log("Value is A Duplicate Value Will not Insert Into Sorted Array");
                }  // else the value is unique, so insert
                else {
                    console.log("Check the Params forputValueAtIndex: ", "sortedArray: ", sortedArray, "| pushAtSortedArrayIndex: ", pushAtSortedArrayIndex, "| inputArray Value: ", inputArray[i]);
                    // now we have the index from sortedArray at which we need to insert the inputArray value into, so lets call a function, pass the sorted Array, the sorted Array index and the inputArray Value
                    // this line will end up returning an array with the inputArray value in the correct spot
                    putValueAtIndex(sortedArray, pushAtSortedArrayIndex, inputArray[i]);
                    console.log("");
                }
            }
            console.log("Here is our sortedArray at bottom of loop: ", sortedArray);
            console.log("");
        }
        // now we have a sorted Array!
        console.log("final sortedArray: ", sortedArray);
        // However, because we have now removed duplicates, its possible that we could have an arrya which is shorter than our nthLargest, so again a check:
        if(sortedArray.length - nthLargest < 0){
            console.log("We've Removed Duplicate Values, but now there aren't enough unique values to return the ", "(", nthLargest, ")", " Nth Largest. Please redefine Your NthLargest Parameter - Return: ", null);
            console.log("-----------------------------End Of Function Call---------------------");
            return null
        } // else there are enough values to find your nth largest
        else {
            let nthToLastElementOfArrayValue = sortedArray[sortedArray.length - nthLargest];
            console.log("nthLargestElementOfArrayValue: " , "(", nthLargest, ")", "is:" , nthToLastElementOfArrayValue);
            console.log("-----------------------------End Of Function Call---------------------");
            return nthToLastElementOfArrayValue;
        }
        
    }
}
// this will be null - too short
// returnNthLargestElementofAnArray([34], 2);
// 12
// returnNthLargestElementofAnArray([34, 5, 23, 12], 3);
// 56
// returnNthLargestElementofAnArray([12, 90, 34, 78, 67, 56, 45, 89, 23], 5);
// 67 - this array will go from 9 values to 6 because 4 (12's)
// returnNthLargestElementofAnArray([12, 90, 34, 78, 67, 12, 45, 12, 12], 3);
// null - this hits the second null catch, because to many values are removed to find the 7th largest
// returnNthLargestElementofAnArray([12, 90, 34, 78, 67, 12, 45, 12, 12], 7);

// ES5 - Builtin Methods
function returnSecondLargestElementofAnArray02(inputArray){
    if(inputArray.length < 2){
        console.log("Return will Be Null - Array too Short");
        return null;
    }
    else {
        let maxArray = [];
        for(let i = 0; i < 2; i += 1){
            let maxOfArray = inputArray.reduce((a, b) => {
                return Math.max(a, b);
            })
            inputArray = inputArray.filter((element) => {
                return element !== maxOfArray
            })
            // console.log(inputArray);
            // console.log(maxOfArray);
            maxArray.push(maxOfArray);
        }
        // console.log(maxArray);
        console.log(maxArray[maxArray.length-1]);
    }
}

returnSecondLargestElementofAnArray02([23])
returnSecondLargestElementofAnArray02([23, 34, 56])