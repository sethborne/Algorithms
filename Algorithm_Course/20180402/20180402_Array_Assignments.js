// Array Basic Challenges

// ======================================================================================================================
// PushFront
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods. PushFront(arr,val)
// ======================================================================================================================

// use lenght property to shift values at current index to index + 1 then just swap in the first

// ES5 no built ins
function pushFront(inputArray, frontVal){
    // loop
    for(let i = inputArray.length; i >= 0; i -= 1){
        inputArray[i] = inputArray[i - 1]
    }
    // [ 11, 22, 33 ] => [ 11, 11, 22, 33 ]
    inputArray[0] = frontVal;
    // [ frontVal, 11, 22, 33 ]
    return inputArray;
}

console.log(pushFront([11, 22, 33], 0));

// ES5 built in
function pushFrontBI(inputArray, frontVal){
    inputArray.unshift(frontVal);
    return inputArray;
}

// setting inputArray to the inArr.unshift will return a value = new length.
console.log(pushFrontBI([11, 22, 33], 0));

// ES6 
pushFrontES6 = (inputArray, frontVal) => {
    inputArray.unshift(frontVal);
    return inputArray
}
// or if you try to just return the array, you'll get length (so no fancy one liner...)

console.log(pushFrontES6([11, 22, 33], 0));

// ======================================================================================================================
// InsertAt
// Given an array, index, and additional value, insert the value into the array at the given index. Do this without using built-in array methods. You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).
// ====================================================================================================================== 
// so lets start the loop at the back and run it to the index we want then that index is what is inside the set val line outside the loop

function insertAt(inputArray, insertAtIndex, valueToInsert){
    for(let i = inputArray.length; i >= insertAtIndex; i -= 1){
        inputArray[i] = inputArray[i - 1];
    }
    // at this point, all values should be pushed + 1, and at the insert index, the val after === current index (dup)
    inputArray[insertAtIndex] = valueToInsert;
    return inputArray
}

console.log(insertAt([1, 2, 3, 4, 5], 1, 6));


function insertAtBI(inputArray, insertAtIndex, valueToInsert){
    // use splice
    inputArray.splice(insertAtIndex, 0, valueToInsert)
    return inputArray;
}
console.log(insertAtBI([1, 2, 3, 4, 5], 3, 6))

insertAtES6 = (inputArray, insertAtIndex, valueToInsert) => {
    inputArray.splice(insertAtIndex, 0, valueToInsert)
    return inputArray;
}

console.log(insertAtES6([1, 2, 3, 4, 5], 4, 6));

// ======================================================================================================================
// PopFront
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
// ====================================================================================================================== 
// remove the front.  store front in a temp variable, then move all front, swap last with saved front, pop back

let arrayOfVals = [1, 2, 3, 4, 5, 6];

function popFront(inputArray){
    let tempVar = inputArray[0];
    for(let i = 0; i < inputArray.length - 1; i += 1){
        inputArray[i] = inputArray[i + 1];
    }
    // here you can swap and pop
    inputArray[inputArray.length - 1] = tempVar;
    return inputArray.pop();
    // or just make the lenght shorter and return the tempVar
    // inputArray.length = inputArray.length - 1;
    // return tempVar;
}

console.log('Removed:', popFront(arrayOfVals));
console.log(arrayOfVals);
console.log('Removed:', popFront(arrayOfVals));
console.log(arrayOfVals);

function popFrontBI(inputArray){
    return inputArray.shift();
}

console.log('Removed', popFrontBI(arrayOfVals));
console.log(arrayOfVals);

popFrontES6 = (inputArray) => inputArray.shift();

console.log('Removed', popFrontES6(arrayOfVals));
console.log(arrayOfVals);

// ======================================================================================================================
// RemoveAt
// Given an array and an index into the array, remove and return the array value at that index. Do this without using any built-in array methods except pop(). Think of PopFront(arr) as equivalent to RemoveAt(arr,0). 
// ======================================================================================================================
// Pseudo Code - save value at index to remove.  start loop from index, then go through array, swapping avlues forward.  for the last part, either cut the length -1 and return first value, or push new value to the end and then pop, return pop value.

let arrayOfVals04 = [1, 2, 3, 4, 5, 6];

function removeAt(inputArray, indexToRemove){
    let removeValue = inputArray[indexToRemove];
    for(let i = indexToRemove; i < inputArray.length; i += 1){
        inputArray[i] = inputArray[i + 1];
    }
    // now index to Remove doesn't exist (except in tempVar)
    // so either cut length and return the tempVar
    
    inputArray.length = inputArray.length - 1;
    return removeValue
    
    // or swaup in remove balue to back and pop
    // inputArray[inputArray.length - 1] = removeValue
    // return inputArray.pop();
}

console.log(removeAt(arrayOfVals04, 1));
console.log(arrayOfVals04);

function removeAtBI(inputArray, indexToRemove){
    // seems like this should be splice
    let removedValue = inputArray.splice(indexToRemove, 1);
    return removedValue;
}

console.log(removeAtBI(arrayOfVals04, 2));
console.log(arrayOfVals04);

removeAtES6 = (inputArray, indexToRemove) => {
    let removedValue = inputArray.splice(indexToRemove, 1);
    return removedValue[0];
}

console.log(removeAtES6(arrayOfVals04, 3));
console.log(arrayOfVals04);