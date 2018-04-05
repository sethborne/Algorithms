// ========================================================================================================================
// Array: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4],// return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this // without using any built-in array methods.
// ========================================================================================================================
// treat results different based on conidtion of array length.  filter that first, then run app for loop

    function swapPairs(inputArray){
        let length;
        if(inputArray.length % 2 === 1){
            // odd
            length = inputArray.length - 1
        }
        else {
            // even
            length = inputArray.length
        }
        for(let i = 0; i < length - 1; i += 2){
            let tempVar = inputArray[i];
            inputArray[i] = inputArray[i + 1];
            inputArray[i + 1] = tempVar;
        }
        return inputArray
    }

    console.log(swapPairs([1, 2, 3, 4, 5]));
    console.log(swapPairs([1, 2, 3, 4]));


// ========================================================================================================================
// Array: Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
// ========================================================================================================================

    function removeDuplicates(inputArray){
        let noDupeArray = [];
        for(let i = 0; i < inputArray.length; i += 1){
            if(inputArray[i] === noDupeArray[noDupeArray.length - 1]){
                // do nothing
            }
            else {
                noDupeArray.push(inputArray[i])
            }
        }
        return noDupeArray
    }

    console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8]));

    function removeDuplicatesBI(inputArray){
        inputArray = inputArray.filter(function(item, index){
            // console.log(item, index);
            return inputArray[index] !== inputArray[index + 1];
        })
        return inputArray;
    }

    console.log(removeDuplicatesBI([2, 2, 4, 4, 6, 6, 8, 8, 10, 12, 14, 16, 16]));

    removeDuplicatesBIES6 = (inputArray) => inputArray.filter((item, index) => inputArray[index] !== inputArray[index + 1]);

    console.log(removeDuplicatesBIES6([3, 3, 6, 6, 9, 9, 12, 12, 15, 15]));

    // Use Set = great thing is this doen't require a sorted Array!  :)

    // use a set - this might be ES6? - yep ES6
    function removeDuplicatesES6UseSet(inputArray){
        let noDups = new Set(inputArray)
        // clearning the array and doing foreach woule be the ES5 way to do this.
        // inputArray = [];
        // noDups.forEach(function(item){
        //     inputArray.push(item)
        // })
        // since set is ES6 - I'll just use the Array.from() method...
        return Array.from(noDups);
    }

    console.log(removeDuplicatesES6UseSet([1, 2, 2, 3, 3, 4, 4, 5, 5]));

    // ES6
    removeDuplicatesES6UseSetDS = (inputArray) => Array.from(new Set(inputArray));

    console.log(removeDuplicatesES6UseSetDS([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]));

// ========================================================================================================================
// Array: Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
// ========================================================================================================================
// for built in, 
    function minToFront(inputArray){
        
    }

// ========================================================================================================================
// Passing By Reference
// Arrays are passed by reference. This means that when an array is sent as an argument, a pointer is sent. For this reason, even though parameters are always copies of the originals, with arrays (and all objects) a pointer is copied, resulting in caller and callee both having a copy of the same pointer. Hence both are looking at the same location in memory, and both will reference the same array. When we pass an array to another function, the array is passed “live” – changes the callee makes in that array are reflected when we return to the caller, regardless of whether the called function returns that array.
// ========================================================================================================================



// ========================================================================================================================
// Array: Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice()
// ========================================================================================================================

    function reverseArray(inputArray){
        let length = Math.floor(inputArray.length / 2);
        let lastVal = inputArray.length - 1;
        for(let i = 0; i < length; i += 1){
            let tempVar = inputArray[i];
            inputArray[i] = inputArray[lastVal];
            inputArray[lastVal] = tempVar;
            lastVal -= 1;
        }
        return inputArray;
    }
    
    console.log(reverseArray([1, 2, 3, 4, 5]));
    console.log(reverseArray([2, 4, 6, 8, 10]));
    
    function reverseArrayBI(inputArray){
        return inputArray.reverse();
    }
    
    console.log(reverseArrayBI([10, 20, 30, 40, 50]));
    
    reverseArrayES6 = (inputArray) => inputArray.reverse();
    
    console.log(reverseArrayES6([100, 200, 300, 400, 500]));
    
// ========================================================================================================================
// Array: Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions. 

// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions. Fourth: minimize the touches of each element.
// ========================================================================================================================



// ========================================================================================================================
// Array: Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
// ========================================================================================================================
// if between, keep, if not, remove

    function filterRange(inputArray, min, max){
        for(let i = 0; i < inputArray.length; i += 1){
            if(inputArray[i] > min && inputArray[i] < max){
                console.log(`This Value ${inputArray[i]} can Stay`);
            }
            else {
                console.log(`This Value ${inputArray[i]} can NOT Stay`)
                for(let j = i; j < inputArray.length; j += 1){
                    inputArray[j] = inputArray[j + 1];
                }
                inputArray.pop();
                // because we've shifted vals forward, we'll need to reeval i, so decrement it.
                i -= 1;
            }
            console.log(inputArray);
        }
        return inputArray
    }

    console.log(filterRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7));

    function filterRangeBI(inputArray, min, max){
        for(let i = 0; i < inputArray.length; i += 1){
            if(inputArray[i] > min && inputArray[i] < max){
                // fine, do nothing
            }
            else{
                // get splce out the value at this index
                inputArray.splice(i, 1);
                // splice will return a shorter inputArray - so we need to decrement here.
                i -= 1;
            }
        }
        return inputArray
    }

    console.log(filterRangeBI([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 10, 16));

    // this technically returns a new array...but its functional.  :)
    filterRangeES6 = (inputArray, min, max) => inputArray.filter((arrVal) => arrVal > min && arrVal < max);

    console.log(filterRangeES6([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 8, 18));

// ========================================================================================================================
// Array: Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
// ========================================================================================================================

    function concatArray(inputArray1, inputArray2){
        let concatArray = [];
        for(let i = 0; i < inputArray1.length; i += 1){
            concatArray.push(inputArray1[i]);
        }
        for(let j = 0; j < inputArray2.length; j += 1){
            concatArray.push(inputArray2[j])
        }
        return concatArray
    }
    
    console.log(concatArray(['a', 'b'], [1, 2]));
    
    function concatArrayBI(inputArray1, inputArray2){
        let concatArray = inputArray1.concat(inputArray2);
        return concatArray;
    }
    
    console.log(concatArrayBI(['c', 'd'], [3, 4]));
    
    concatArrayES6 = (inputArray1, inputArray2) => inputArray1.concat(inputArray2);
    
    console.log(concatArrayES6(['e', 'f'], [5, 6]));
    
    concatArrayES6Spread = (inputArray1, inputArray2) => [...inputArray1, ...inputArray2]
    
    console.log(concatArrayES6Spread(['g', 'h'], [7, 8]));
    
    concatArrayES6Values = (inputArray1, inputArray2) => {
        console.log(inputArray1);
        console.log(inputArray2);
        // let val1 = inputArray1.values();
        // val1.next().value;
        // let val2 = inputArray2.values();
        // for(let item of val1){
        //     console.log(item);
        // }
        // Apparently - this values thing is not good.
    }    
    // console.log(concatArrayES6Values(['i', 'j'], [9, 10]));
    
    // let inputArray1 = ['i', 'j'];
    // let val1 = inputArray1.values();
    // console.log(val1.next().value); 
    
// ========================================================================================================================
// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().
// ========================================================================================================================
// need to determine the position of the min and the max
// at 0
    // function skylineHeights(inputArray){
    //     let isHigher = false;
    //     let heightArray = [];
    //     for(let i = 0; i < inputArray.length; i += 1){
    //         if(inputArray[i] < inputArray[i + 1])
    //     }
    // }