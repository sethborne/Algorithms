// Parens Valid
// Create a function that, given an input string, returns a boolean whether parentheses in that string are valid. Given input "y(3(p)p(3)r)s", return true. Given "n(0(p)3", return false. Given "n)0(t(0)k", return false. 

function areParensValid(inputString){
    let parensStack = [];
    let isValid = false;
    for(let i = 0; i < inputString.length; i += 1){
        if(inputString[i] === "("){
            parensStack.push(inputString[i])
        }
        else if(inputString[i] === ")"){
            if(parensStack[parensStack.length - 1] === "("){
                // console.log("Valid", i);
                parensStack.pop()
            }
            else {
                console.log(isValid);
                return isValid;
            }
        }
    }
    if(parensStack.length){
        console.log(isValid);
        return isValid;
    }
    else{
        isValid = true;
    }
    console.log(parensStack);
    console.log(isValid);
    return isValid;
}

// areParensValid("y(3(p)p(3)r)s");
// areParensValid("n(0(p)3");
// areParensValid("n)0(t(0)k");

// Braces Valid
// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. For example, given the input string "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!", return true. Given "d(i{a}l[t]o)n{e", return false. Given "a(1)s[O(n]0{t)0}k", return false. 

// get functional with it?
function areBracesValid(inputString){
    let checkStack = [];
    let isValid = false;
    for(let i = 0; i < inputString.length; i += 1){
        // is this a valid Opening Char to push?
        if(isValidOpeningChar(inputString[i])){
            checkStack.push(inputString[i])
        }
        // is this a valid Closing Char?
        else if(isValidClosingChar(inputString[i])){
            // is last Value a matching OpenChar?
            if(isLastValueAMatch(inputString[i], checkStack)){
                checkStack.pop()
            }
            // if not, fail
            else {
                console.log(isValid);
                console.log("Failed Because Chars Don't Match");
                return isValid;
            }
        }
    }
    console.log(checkStack);
    if(checkStack.length){
        console.log(isValid);
        return isValid;
    }
    else {
        isValid = true;
    }
    console.log(checkStack);
    console.log(isValid);
    return isValid;
}

function isValidOpeningChar(char){
    let validOpeningChar = false;
    if(char === '(' || char === '{' || char === '['){
        validOpeningChar = true;
    }
    return validOpeningChar;
}

function isValidClosingChar(char){
    let validClosingChar = false;
    if(char === ')' || char === '}' || char === ']'){
        validClosingChar = true;
    }
    return validClosingChar;
}

function isLastValueAMatch(char, checkStackArr){
    let lastChar = ''
    let isAMatch = false;
    if(char === ')' || char === '}' || char === ']'){
        if(char === ')'){
            lastChar = '('
        }
        else if(char === '}'){
            lastChar = '{'
        }
        else if(char === ']'){
            lastChar = '['
        }
    }
    // console.log(char, lastChar, checkStackArr, isAMatch);
    // does the last Value of the array = last char?
    if(checkStackArr[checkStackArr.length - 1] === lastChar){
        isAMatch = true;
    }
    else {
        isAMatch = false;
    }
    
    return isAMatch;
}

// areBracesValid("w(a{t}s[o(n{c}o)m]e)h[e{r}e]!");
// console.log("");
// areBracesValid("d(i{a}l[t]o)n{e");
// console.log("");
// areBracesValid("a(1)s[O(n]0{t)0}k");

// Is Palindrome
// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation and capitalization) the letters are the same from front and back. 

// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false. 

function isPalindrome(inputString){
    let isStrictPalindrome = false;
    let endIter = inputString.length - 1;
    for(let i = 0; i <= Math.floor((inputString.length - 1) / 2); i += 1){
        if(inputString[i] === inputString[endIter]){
            endIter -= 1;
            isStrictPalindrome = true;
        }
        else{
            isStrictPalindrome = false;
            console.log(isStrictPalindrome);
            return isStrictPalindrome;
        }
        console.log(i, isStrictPalindrome);
    }
    console.log(isStrictPalindrome);
    return isStrictPalindrome;
}

isPalindrome("a x a");
isPalindrome("racecar")
isPalindrome("nobtsbon")

// Longest Palindrome
// For this challenge, we will look not only at the entire string, but also substrings within it. 

// For a string, return the longest palindromic substring. Given "what up, dada?", return "dad". Given "not much", return "n". Include spaces as well (i.e. be strict, as in the “Is Palindrome” challenge): given "My favorite racecar erupted!", return "e racecar e".

function longestPalindrome(inputString){
    let cleanString = cleanTheString(inputString)
    console.log(cleanString);
    let endIter = cleanString.length - 1;
    let longestPalindrome = [];
    let longestPalindromeString = '';
    for(let i = 0; i < cleanString.length; i += 1){
        // start at the beginning
        for(let e = cleanString.length - 1; e > i; e -= 1){
            // for a given char, decrement and see if anything at the end is equal to the char you are at.
            if(cleanString[i] === cleanString[e]){
                // if equal, we have index and value - make a loop that starts at i and ends at e - and add those values to a string
                let maybePalindrome = ''
                for(let m = i; m <= e; m += 1){
                    maybePalindrome += inputString[m];
                }
                // now we have a string
                // console.log(maybePalindrome);
                if(isAPalindromeTest(maybePalindrome)){
                    longestPalindrome.push(maybePalindrome)
                }
                console.log(longestPalindrome);
            }
        }
    }
    if(longestPalindrome.length){
        longestPalindromeString = longestPalindrome[0];
        for(let i = 0; i < longestPalindrome.length; i += 1){
            if(longestPalindrome[i].length > longestPalindromeString.length){
                longestPalindromeString = longestPalindrome[i];
            }
        }
        console.log("The Longest Palindrome String in the Array is:", longestPalindromeString);
    }
    else {
        longestPalindromeString = cleanString[0];
    }
    console.log("The Longest Palindrome String is: ", longestPalindromeString);
    return longestPalindromeString;
}

function cleanTheString(stringToClean){
    let cleanedString = '';
    for(let i = 0; i < stringToClean.length; i += 1){
        if(stringToClean[i] === ',' || stringToClean[i] === '?' || stringToClean[i] === '!'){
            console.log(stringToClean[i], "is not a Valid Char");
        }
        else {
            cleanedString += stringToClean[i]
        }
    }
    return cleanedString
}

function isAPalindromeTest(stringToTest){
    let isAPalindrome = false;
    let endIter = stringToTest.length - 1;
    for(let i = 0; i <= Math.floor((stringToTest.length - 1) / 2); i += 1){
        if(stringToTest[i] === stringToTest[endIter]){
            endIter -= 1;
            isAPalindrome = true;
        }
        else{
            isAPalindrome = false;
            break;
        }
    }
    console.log("isPalinTest", isAPalindrome);
    return isAPalindrome
}

longestPalindrome("what up, dada?")
longestPalindrome("not much")
longestPalindrome("My favorite racecar erupted!")