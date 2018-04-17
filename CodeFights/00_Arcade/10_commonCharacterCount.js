// Given two strings, find the number of common characters between them.

function makeCharMap(string){
    let returnObj = {};
    for(let i = 0; i < string.length; i += 1){
        if(returnObj[string[i]]){
            returnObj[string[i]] += 1;
        }
        else {
            returnObj[string[i]] = 1;
        }
    }
    return returnObj;
}

function commonCharacterCount(inputString1, inputString2){
    // initiate a count var
    let count = 0;
    // make a charMap helper function
    // create charmaps of each string
    let charMapInputString1 = makeCharMap(inputString1);
    let charMapInputString2 = makeCharMap(inputString2);
    console.log(charMapInputString1, charMapInputString2);
    // iterate through one String
    for(let char in charMapInputString1){
        // conditional check if char exists in string2
        if(charMapInputString2[char]){
            let charSize = 0;
            // if the first string has a larger number, add the smaller number from the second
            if(charMapInputString1[char] > charMapInputString2[char]){
                charSize = charMapInputString2[char];
            }
            // if the second string has the larger number, add the smaller number from teh first
            else if(charMapInputString1[char] < charMapInputString2[char]){
                console.log(charMapInputString1[char]);
                charSize = charMapInputString1[char];
            }
            // if they are equal, just add one, doesn't matter which.
            else {
                charSize = charMapInputString1[char];
            }
            console.log('Matching Char is: ', char, ' add: ', charSize);
            // then iterate a count
            count += charSize;
        }
        else {
            console.log('Non Matching Char is: ', char);
        }
    }
    return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('abca', 'xyzbac'));