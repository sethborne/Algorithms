// Arrs2Map
// Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For 
// arr1 = ["abc", 3, "yo"] and 
// arr2 = [42, "wassup", true], 
// return {"abc": 42, 3: "wassup", "yo": true}. 

// ES5 - no builtins
var array1 = ['abc', 3, 'yo'];
var array2 = [42, 'wassup', true];

// function arrs2Map(inputArray01, inputArray02){
//     let emptyObj = {};
//     for(let i = 0; i < inputArray01.length; i += 1){
//         emptyObj[inputArray01[i].toString()] = inputArray02[i];
//     }
//     console.log(emptyObj);
//     return emptyObj;
// }

// arrs2Map(array1, array2)

// ES5 - builtin
function arrs2Map(inputArray01, inputArray02){
    let emptyObj = {};
    // user for each, pass the value (arrVal) and the index as params
    inputArray01.forEach(function(arrVal, index){
        // console.log(arrVal, index, inputArray02[index]);
        // make key inputArray Value arrVal make value inputArray Value (at index)
        emptyObj[arrVal] = inputArray02[index];
    })
    console.log(emptyObj);
    return emptyObj;
}

arrs2Map(array1, array2);

// InvertHash
// Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys. 
// Example: 
// given {"name": "Zaphod"; "numHeads": 2}, 
// return {"Zaphod": "name"; 2: "numHeads"}. 

var object01 = { 'name': 'Zaphod', 'numHeads': 2}

function invertHash(inputObject){
    var newObject = {};
    for(var key in inputObject){
        console.log("");
        console.log(key);
        console.log(inputObject[key]);
        // var temp = key;
        // key = inputObject[key];
        // inputObject[key] = temp;
        newObject[inputObject[key]] = key;
    }
    console.log(inputObject, newObject);
    return newObject
}

// invertHash(object01);

function invertHash2(inputObject){
    console.log(inputObject);
    for(var key in inputObject){
        // console.log("");
        // console.log("key:", key, "| value:", inputObject[key]);
        // console.log("");
        var temp = key;
        // console.log("key:", key, "| value:", inputObject[key], "| temp:", temp);
        key = inputObject[key];
        // console.log("key:", key, "| value:", inputObject[key], "| temp:", temp);
        inputObject[key] = temp;
        // console.log("key:", key, "| value:", inputObject[key], "| temp:", temp);
        delete inputObject[temp]
    }
    console.log(inputObject);
    return inputObject;
}

// invertHash2(object01);

// ES5 - builtins
function invertHashBI(inputObject){
    // store keys and values in arrays
    let keys = Object.keys(inputObject);
    let values = Object.values(inputObject);
    // clear object
    inputObject = {};
    keys.forEach(function(keyArrayValue, keyArrayindex){
        //make object key value array value at key array index. <-- this is crazy but it works.
        inputObject[values[keyArrayindex]] = keyArrayValue;
    })
    console.log(inputObject);
    return inputObject
}

invertHashBI(object01);

// .myJoin method (arr) => return string
// Given an array of strings, return a string
// Given [‘a’,’b’,’c’]
// Return ‘abc’

var array1 = [ 'a', 'b', 'c']

function myJoin(inputArray){
    let str = '';
    for(let i = 0; i < inputArray.length; i += 1){
        str = str + inputArray[i];
    }
    console.log(str);
    return str
}

// myJoin(array1);

// ES5 method builtin(just the method)

function myJoinBI(inputArray){
    inputArray = inputArray.join('');
    console.log(inputArray);
    return inputArray
}

myJoinBI(array1)

// .mySplit method (str) => return array
// Given ‘abc’
// Return [‘a’,’b’,’c’]

var string1 = 'abc';

function mySplit(inputString){
    let returnArray = [];
    for(let i = 0; i < inputString.length; i += 1){
        returnArray.push(inputString[i])
    }
    console.log(returnArray);
    return returnArray;
}

// mySplit(string1);

function mySplitBI(inputString){
    inputString = inputString.split('');
    console.log("BI", inputString);
    return inputString;
}

mySplitBI(string1);

// ReverseString
// Implement a function reverseString(str) that, given a string, will return the string of the same length but with characters reversed. Example: 
// given "creature", 
// return "erutaerc". 
// Do not use the built-in reverse() function! 

function reverseString(inputString){
    let newString = '';
    for(let i = inputString.length - 1; i >= 0; i -= 1){
        newString = newString + inputString[i];
    }
    console.log(newString);
    return newString
}
// reverseString("creature");

function reverseString2(inputString){
    let reverseStringArray = [];
    let inputStringSplit = inputString.split("");
    for(let i = inputStringSplit.length - 1; i >= 0; i -= 1){
        reverseStringArray.push(inputStringSplit[i]);
    }
    reverseStringArray = reverseStringArray.join("");
    console.log(reverseStringArray);
    return reverseStringArray;
}
// reverseString2("creature");

function reverseString3(inputString){
    let inputStringSplit = inputString.split("");
    // only go half way and swap vals
    // for evens floor / 2, works for odds because don't need to swap middle
    let frontIndex = 0;
    for(let i = inputStringSplit.length - 1; i >= Math.floor(inputStringSplit.length - 1 / 2); i -= 1){
        let tempSwap = inputStringSplit[frontIndex];
        inputStringSplit[frontIndex] = inputStringSplit[i];
        inputStringSplit[i] = tempSwap;
        frontIndex += 1;
    }
    // console.log(inputStringSplit);
    inputStringSplit = inputStringSplit.join("");
    
    // console.log(inputStringSplit);
    return inputStringSplit;
}
// reverseString3("creature");

// ES5 builtin
// in steps
function reverseStringBI(inputString){
    // split into array
    let inputStringSplit = inputString.split('');
    // use reverse method
    let reversedString = inputStringSplit.reverse();
    // use join method
    let joinedReversedString = reversedString.join('');
    console.log("BI - Unchained", joinedReversedString);
    return joinedReversedString;
}

// reverseString("creature")
// pound it into a one liner!
function reverseStringBI(inputString){
    let reversedString = inputString.split('').reverse().join('');
    console.log("BI - Chained", reversedString);
    return reversedString;
}

reverseStringBI("creatureify")



// Remove Blanks
// Create a function that, given a string, returns the string, without blanks. 
// Given "  play  that   Funky Music  ",
// returns a string containing "playthatFunkyMusic".

var string1 = "  play  that   Funky Music  ";

function removeBlanks(inputString){
    let noSpaceString = '';
    for(let i = 0; i < inputString.length; i += 1){
        if(inputString[i] !== ' '){
            noSpaceString = noSpaceString + inputString[i];
        } else {
            // console.log("ain't gonna push this space!");
        }
    }
    console.log(noSpaceString);
    return noSpaceString
}

// removeBlanks(string1);

// ES5 - builtins
function removeBlanksBI(inputString){
    let inputStringSplit = inputString.split('');
    inputStringSplit = inputStringSplit.filter(function(arrVal){
        return arrVal !== " ";
    })
    let joinedString = inputStringSplit.join('');
    console.log(joinedString);
    return joinedString;
}

// removeBlanksBI(string1)

// using search
function removeBlanksBI2(inputString){
    while(inputString.search(' ') !== -1){
        let indexToRemove = inputString.search(' ');
        inputString = inputString.replace(' ', '')
    }
    console.log("BI2", inputString);
    return inputString
}

removeBlanksBI2(string1)

// Get String Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should 
// return the number 1,357,924,680.

var stringDigits1 = '0s1a3y5w7h9a2t4?6!8?0';

function getStringDigits(inputString){
    let stringOfNumbers = '';
    for(let i = 0; i < inputString.length; i += 1){
        if(parseInt(inputString[i]) === Number(inputString[i])){
            stringOfNumbers = stringOfNumbers + inputString[i];
        }
        else{
            // console.log(inputString[i], " is a String!");
        }
    }
    // console.log(stringOfNumbers);
    if(typeof stringOfNumbers === 'string'){
        // console.log("It is a String");
        stringOfNumbers = Number(stringOfNumbers);
    }
    var isStringOfNubmersANumber = false;
    if(typeof stringOfNumbers === 'number'){
        isStringOfNubmersANumber = true;
    }
    console.log(stringOfNumbers + " is a number: " + isStringOfNubmersANumber);
    return stringOfNumbers;
}

getStringDigits(stringDigits1);

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given "there's no free lunch  -  gotta pay yer way", 
// return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", 
// return "LFNYISN".

function acronyms(inputString){
    let acronymString = '';
    let isNextCharFirst = false;
    for(let i = 0; i < inputString.length; i += 1){
        if(i === 0 && inputString[0] !== " "){
            // console.log("only once");
            acronymString += inputString[0]
        }
        // console.log("pre", acronymString, isNextCharFirst, inputString[i], inputString[i + 1]);
        if(isNextCharFirst === false){
            // console.log("if1", acronymString, isNextCharFirst, inputString[i]);
            if(inputString[i + 1] === " " && inputString[i + 2] !== " "){
                // console.log("if one space", acronymString, isNextCharFirst, inputString[i], inputString[i + 1]);
                isNextCharFirst = true;
            }
            else if(inputString[i + 1] === " " && inputString[i + 2] === " "){
                // console.log("if double space", acronymString, isNextCharFirst, inputString[i], inputString[i + 1]);
                isNextCharFirst = true;
            }
        }
        else {
            if(inputString[i] === " " && inputString[i + 1] !== " "){
                // console.log("sec else if", acronymString, isNextCharFirst, inputString[i], inputString[i + 1]);
                acronymString += inputString[i + 1];
                isNextCharFirst = false;
            }
            else if(inputString[i] === " " && inputString[i + 1] === " "){
                // console.log("sec else else if", acronymString, isNextCharFirst, inputString[i], inputString[i + 1]);
                // i += 1;
                acronymString += inputString[i + 2];
                i += 1;
                isNextCharFirst = false;
            }
        }
        
    }
    acronymString = acronymString.toUpperCase();
    console.log(acronymString);
    return acronymString;
}

// acronyms("there's no free lunch  -  gotta pay yer way");
// acronyms("Live from New York, it's Saturday Night!")

function acronyms2(inputString){
    let inputStringSplit = inputString.split(" ");
    // console.log(inputStringSplit);
    let acronymString = '';
    for(let i = 0; i < inputStringSplit.length; i += 1){
        // console.log(inputStringSplit[i].length);
        if(inputStringSplit[i].length > 0){
            acronymString += inputStringSplit[i][0];
        }
        else{
            // console.log("not");
        }
    }
    acronymString = acronymString.toUpperCase();
    console.log(acronymString);
    return acronymString;
}

acronyms2("there's no free lunch  -  gotta pay yer way");
acronyms2("Live from New York, it's Saturday Night!")

// OPTIONAL:
// How to retrieve the Ascii numerical value of 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
// Ascii value of “a”
// Ascii value of “A”

function retrieveASCIINumericalValueOf(inputChar){
    let asciiValOfChar = inputChar.charCodeAt(0);
    console.log(asciiValOfChar);
    return asciiValOfChar;
}

retrieveASCIINumericalValueOf("a");
retrieveASCIINumericalValueOf("A");