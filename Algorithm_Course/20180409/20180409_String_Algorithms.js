// ===========================================================================================================================
// Arrs2Map
// Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For 
// arr1 = ["abc", 3, "yo"] and 
// arr2 = [42, "wassup", true], 
// return {"abc": 42, 3: "wassup", "yo": true}.
// ===========================================================================================================================

    let array1 = ['abc', 3, 'yo'];
    let array2 = [42, 'wassup', true];
    
    function arrs2Map(inputArray1, inputArray2){
        let comboObj = {};
        for(let i = 0; i < inputArray1.length; i += 1){
            comboObj[inputArray1[i]] = inputArray2[i]
        }
        return comboObj;
    }
    
    console.log(arrs2Map(array1, array2));
    
    function arrs2MapFE(inputArray1, inputArray2){
        let comboObj = {}
        inputArray1.forEach(function(key, index){
            comboObj[key] = array2[index]
        })
        return comboObj;
    }
    
    console.log(arrs2MapFE(array1, array2));
    
    // arrs2MapES6 = (inputArray1, inputArray2) => {
    //     let comboObj = {};
    //     input
    // }
    
    // console.log(arrs2MapES6(array1, array2));

// ===========================================================================================================================
// InvertHash
// Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys. 
// Example: 
// Given {"name": "Zaphod", "numHeads": 2}, 
// Return {"Zaphod": "name", 2: "numHeads"}. 
// You will need to learn and use a JavaScript for ... in here!
// ===========================================================================================================================
    
    let switchObj = { "name": "Zaphod", "numHeads": 2 }
    
    function invertHash(inputArray){
        for(let key in inputArray){
            inputArray[inputArray[key]] = key
            delete inputArray[key];
        }
        return inputArray
    }
    
    console.log(invertHash(switchObj));
    
    function invertHashNewObj(inputArray){
        let newObj = {}
        for(let key in inputArray){
            // console.log(inputArray[key], key);
            newObj[inputArray[key]] = key
        }
        return newObj
    }
    
    console.log(invertHashNewObj({ "name": "Zaphod", "numHeads": 2 }));

// ===========================================================================================================================
// Join2 
// Create join2(arr) that given an array of strings, return a string with all array strings combined.
// Given [‘a’,’b’,’c’], return ‘abc’.
// ===========================================================================================================================

    function join2(inputArray){
        let returnString = '';
        for(let i = 0; i < inputArray.length; i += 1){
            returnString += inputArray[i];
        }
        return returnString;
    }
    
    console.log(join2(['a', 'b', 'c']));
    
    function join2FE(inputArray){
        let returnString = '';
        inputArray.forEach(function(item){
            returnString += item;
        })
        return returnString;
    }

    console.log(join2FE(['d', 'e', 'f']));
    
    
    join2ES6 = (inputArray) => { return inputArray.reduce((acc, item) => acc + item) }
    console.log(join2ES6(['g', 'h', 'i']));
// ===========================================================================================================================
// Split2 
// Create split2(str) that splits a string into individual strings and returns them in an array. 
// Given ‘abc’ return [‘a’,’b’,’c’].
// ===========================================================================================================================

    function split2(inputString){
        let returnArray = [];
        for(let i = 0; i < inputString.length; i += 1){
            returnArray.push(inputString[i])
        }
        return returnArray;
    }
    
    console.log(split2('abcdef'));
    
    function split2BI(inputString){
        let returnArray = [];
        for(let i = 0; i < inputString.length; i += 1){
            returnArray.push(inputString.substr(i, 1))
        }
        return returnArray;
    }
    
    console.log(split2BI('ghijkl'));
    
// ===========================================================================================================================
// ReverseString
// Implement a function reverseString(str) that, given a string, will return the string of the same length but with characters reversed. Example: given "creature", return "erutaerc". 
// Do not use the built-in reverse() function! 
// ===========================================================================================================================

    function reverseString(inputString){
        let reverseString = '';
        for(let i = inputString.length - 1; i >= 0; i -= 1){
            reverseString += inputString[i]
        }
        return reverseString;
    }
    
    console.log(reverseString('letsreversethisstring'));
    console.log(reverseString('gnirtssihtesreverstel'));
    
    function reverseStringBI(inputString){
        return inputString.split('').reverse().join('')
    }
    
    console.log(reverseString('getout'));
    console.log(reverseString('tuoteg'));
    
    reverseStringES6 = (inputString) => inputString.split('').reverse().join('');

    console.log(reverseStringES6('ES6Rocks'));
    console.log(reverseStringES6('skcoR6SE'));

// ===========================================================================================================================
// BONUS:

// .split3 
// Create split3(str, mark) that given a string and a mark, split the string at the mark and return an array with the split strings. 
// Given (‘aa bb cc’, ‘ ’), return [‘aa’,’bb’,’cc’]
// Given (‘aa bb cc’, ‘bb’), return [‘aa ’,’ cc’]
// Given (‘aa bb cc bb dd’, ‘bb’), return [‘aa ’,’ cc ’, ‘ dd’]
// ===========================================================================================================================

    function split3BI(inputString, breakAt){
        inputString = inputString.split(breakAt)
        return inputString;
    }
    console.log(split3BI('aa bb cc', ' '));
    console.log(split3BI('aa bb cc', 'bb'));
    console.log(split3BI('aa bb cc bb dd', 'bb'));