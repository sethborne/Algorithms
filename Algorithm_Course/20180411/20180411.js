// ============================================================================================================================
// Parens Valid
// Create a function that, given an input string, returns a boolean whether parentheses in that string are valid. Given input "y(3(p)p(3)r)s", return true. Given "n(0(p)3", return false. Given "n)0(t(0)k", return false. 
// ============================================================================================================================
// empty string? any string? any order?

function parensValid(inputString){
    let checkQueue = [];
    // loop through the inputString.
    // if its a (, push in the checkQueue, or a ), check the queue for a (. if there, pop, else fail - if .length fail, otherwise, true
    for(let i = 0; i < inputString.length; i += 1){
        if(inputString[i] === '('){
            checkQueue.push(inputString[i]);
        }
        else if(inputString[i] === ')'){
            if(checkQueue[checkQueue.length - 1] === '('){
                checkQueue.pop();
            }
            else {
                return false;
            }
        }
    }
    return checkQueue.length === 0 ? true : false;
}

// console.log(parensValid('y(3(p)p(3)r)s'));
// console.log(parensValid('n(0(p)'));
// console.log(parensValid('n)0(t(0)k'));

// ============================================================================================================================
// Braces Valid
// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. For example, given the input string "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!", return true. Given "d(i{a}l[t]o)n{e", return false. Given "a(1)s[O(n]0{t)0}k", return false.
// ============================================================================================================================
// empty string? any string? any order?

let openObj = {
    '{': '}',
    '(': ')',
    '[': ']'
}

let closedObj = {
    '}': true,
    ')': true,
    ']': true
}

function bracesValid(inputString){
    let bracesStack = [];
    // loop through the string, check the value against the bracesOB
    for(let i = 0; i < inputString.length; i += 1){
        // make our char easier to type
        let char = inputString[i];
        // if you hit an opening char {, [, (, push it
        if(openObj[char]){
            // console.log(char, openObj[char]);
            bracesStack.push(char);
        }
        // else if we hit a closing char }, ], ) (this statement will be true), 
        else if(closedObj[char]){
            // what is important when we hit a closing char is that the last item in the bracesQueue is a correspnoding open bracket
            // openChar (last item) from Stack
            let valueInQueueAtLastIndex = bracesStack[bracesStack.length - 1];
            // closedChar from Object
            // let closedChar = openObj[bracesStack[bracesStack.length - 1]]
            let closedChar = openObj[valueInQueueAtLastIndex];
            // we have a 'char' - if the char === closedChar(which is based off the last char in the stack), then remove last
            if(closedChar === char){
                bracesStack.pop();
            }
            else {
                // if the char doesn't match the item pulled from the queue, its invalid.  fail.
                return false;
            }
            
        }
    }
    // completed the loop.
    // now at this point, we have looped through and either have items in the array, or we dont.  if no lenght, then valid, if not, invalid
    return bracesStack.length === 0 ? true : false;
}

// console.log(bracesValid('w(a{t}s[o(n{c}o)m]e)h[e{r}e]!'));
// console.log(bracesValid('d(i{a}l[t]o)n{e'));
// console.log(bracesValid('a(1)s[O(n]0{t)0}k'));
// console.log(bracesValid('a1)sOn]0)0}k'));

// ============================================================================================================================
// Is Palindrome
// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation and capitalization) the letters are the same from front and back. 

// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false. 
// ============================================================================================================================

function isPalindrome(inputString){
    let lastIndex = inputString.length - 1;
    for(let i = 0; i < Math.floor(inputString.length / 2); i += 1){
        if(inputString[i] === inputString[lastIndex]){
            lastIndex -= 1;
        }
        else{
            return false;
        }
    }
    return true;
}

// console.log(isPalindrome('Able was I, ere I saw Elba'));
// console.log(isPalindrome('Madam, I\'m Adam'));
// console.log(isPalindrome('a x a'));
// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('Dud'));
// console.log(isPalindrome('oho!'));

function isPalindromeBI(inputString){
    let revString = inputString.split('').reverse().join('')
    // console.log(revString);
    return revString === inputString ? true : false;
}

// console.log(isPalindromeBI('Able was I, ere I saw Elba'));
// console.log(isPalindromeBI('Madam, I\'m Adam'));
// console.log(isPalindromeBI('a x a'));
// console.log(isPalindromeBI('racecar'));
// console.log(isPalindromeBI('Dud'));
// console.log(isPalindromeBI('oho!'));

// ============================================================================================================================
// Longest Palindrome
// For this challenge, we will look not only at the entire string, but also substrings within it. 

// For a string, return the longest palindromic substring. Given "what up, dada?", return "dad". Given "not much", return "n". Include spaces as well (i.e. be strict, as in the “Is Palindrome” challenge): given "My favorite racecar erupted!", return "e racecar e".
// ============================================================================================================================

function isPalinCheck(inputStringToCheck){
    let lastIndex = inputStringToCheck.length - 1;
    for(let c = 0; c < Math.floor(inputStringToCheck.length / 2); c += 1){
        if(inputStringToCheck[c] !== inputStringToCheck[lastIndex]){
            return false;
        }
        else{
            lastIndex -= 1;
        }
    }
    return true
}

function longestPalindrome(inputString){ 
    let longestPalindromeArray = []
    for(let i = 0; i < inputString.length; i += 1){
        for(let j = inputString.length - 1; j >= 0; j -= 1){
            if(inputString[i] === inputString[j]){
                // console.log('Match: ', inputString[i], inputString[j]);
                let tempString = ''
                for(let k = i; k <= j; k += 1){
                    // console.log('i', i, 'j', j, 'k', k);
                    tempString += inputString[k]
                }
                // console.log(tempString);
                let checkString = isPalinCheck(tempString);
                if(checkString){
                    // console.log(tempString);
                    longestPalindromeArray.push(tempString)
                }
            }
        }
    }
    // console.log(longestPalindromeArray);
    if(longestPalindromeArray.length > 0){
        let longest = longestPalindromeArray[0];
        for(let l = 0; l < longestPalindromeArray.length; l += 1){
            if(longestPalindromeArray[l].length > longest.length){
                longest = longestPalindromeArray[l]
            }
        }
        if(longest.length === 1){
            return inputString[0];
        }
        else{
            return longest
        }
    }
    else{
        return inputString[0]
    }
}

// console.log(longestPalindrome('what up, dada?'));
// console.log(longestPalindrome('not much'));
// console.log(longestPalindrome('My favorite racecar erupted!'));

// ============================================================================================================================
// Bonus Week 2 Wednesday
// ============================================================================================================================

// ============================================================================================================================
// Book Index
// Write a function that given a sorted array of page numbers, return a string representing a book index. Combine consecutive pages to create ranges. Given [1, 3, 4, 5, 7, 8, 10], return the string "1, 3-5, 7-8, 10".
// ============================================================================================================================

function bookIndex(inputArray){
    /// new idea is to make an index array and only push to it when valid
    let indexArray = [];
    let tempIndexRange = [];
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] + 1 !== inputArray[i + 1]){
            
            if(tempIndexRange[0]){
                tempIndexRange.push(inputArray[i])
                let tempString = `${tempIndexRange[0]}-${tempIndexRange[1]}`
                indexArray.push(tempString);
                tempIndexRange = []
            }
            else{
                indexArray.push(inputArray[i]);
            }
        }
        else if(inputArray[i] + 1 === inputArray[i + 1]){

            if(tempIndexRange.length === 0){
                tempIndexRange.push(inputArray[i])
            }
            else{
                // middle of range so this will skip
            }
        }
        console.log('IA', indexArray);
        console.log('tIR', tempIndexRange);
        
    }
    indexArray = indexArray.join(', ')
    return indexArray
    // at a num 
    // is next index value current index value + 1? 
        // no, push
        // 
    
    // define empty string
    // for loop to look at values
    // look to see if [i + 1] === [i] + 1, if so, store start (or another loop)
    // else, push to am empty string
    // let returnString = [];
    // for(let i = 0; i < inputArray.length; i += 1){
    //     if(inputArray[i] + 1 === inputArray[i + 1]){
    //         let tempString = ''
    //         tempString += inputArray[i] + '-'
    //         console.log('a', tempString);
    //         for(let j = i; j < inputArray.length; j += 1){
    //             if(inputArray[j] + 1 !== inputArray[j + 1]){
    //                 // console.log(inputArray[j]);
    //                 tempString += inputArray[j];
    //                 i += 1;
    //                 break;
    //             }
    //         }
    //         i += 1
    //         console.log(inputArray[i]);
    //         console.log('b', tempString);
    //         returnString.push(tempString)
    //     }
    //     else{
    //         console.log('p', inputArray[i]);
    //         returnString.push(inputArray[i].toString())
    //     }
    // }
    // return returnString.join(', ');
}

console.log(bookIndex([1, 3, 4, 5, 7, 8, 10]));

// ============================================================================================================================
// Common Suffix
// When given an array of words, returns the largest suffix (word-end) that is common between all words. For example, for input ["ovation", "notation", "action"], return "tion". Given ["nice", "ice", "sic"], return "".
// ============================================================================================================================

function commonSuffix(inputArray){
    let shortestWordLength = inputArray[0].length;
    // get index of the shortest word
    for(let l = 0; l < inputArray.length; l += 1){
        if(inputArray[l].length < shortestWordLength){
            shortestWordLength = inputArray[l].length;
        }
    }
    console.log(shortestWordLength);
    // loop through as much as the shortest word
    if(inputArray.length === 1){
        return inputArray[0];
    }
    else {
        let returnString = '';
        let findChar = true;
        let decr = 0
        while(shortestWordLength){
            let tempString = ''
            let firstWordLastIndex = inputArray[0].length - 1 - decr
            let firstWordEndChar = inputArray[0][firstWordLastIndex];
            // console.log(firstWordEndChar, firstWordLastIndex);
            for(let i = 1; i < inputArray.length; i += 1){
                let tempCharLastIndex = inputArray[i].length - 1 - decr;
                let tempChar = inputArray[i][tempCharLastIndex]
                console.log(tempChar, tempCharLastIndex);
                if(firstWordEndChar === tempChar){
                    findChar = true;
                }
                else{
                    findChar = false;
                    break;
                }
            }
            if(findChar){
                returnString += firstWordEndChar;
            }
            firstWordEndChar -= 1;
            // increase decrement
            decr += 1;
            // decrement shortest word length
            shortestWordLength -= 1;
        }
        if(!returnString){
            console.log('returning empty String');
        }
        returnString = returnString.split('').reverse().join('');
        console.log(returnString);
        return returnString
    }
}


// console.log(commonSuffix(['ovation', 'notation', 'action']));
// console.log(commonSuffix(['nice', 'ice', 'sic']));