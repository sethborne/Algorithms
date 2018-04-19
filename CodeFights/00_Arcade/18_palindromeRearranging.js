// Given a string, find out if its characters can be rearranged to form a palindrome.

function palindromeRearranging(inputString) {
    // fast fail
    if(inputString.length === 1){
        return true;
    }
    else{
        let charMap = {}
        // make a charmap
        for(let i = 0; i < inputString.length; i += 1){
            if(charMap[inputString[i]]){
                charMap[inputString[i]] += 1;
            }
            else{
                charMap[inputString[i]] = 1;
            }
        }
        // setup a odd DS for end comparison
        let oddArray = [];
        // loop through charmap
        for(let char in charMap){
            // if current charmap val is odd - push to array
            if(charMap[char] % 2 === 1){
                oddArray.push([char, charMap[char]])
            }
            // else do nothing (could log)
            else{
                console.log('This Value, should be even: ', char, charMap[char]);
            }
        }
        console.log(charMap);
        // after looping, setup return conditionals
        // if inputString.length is even && there is nothing in the odd array, return true
        if(inputString.length % 2 === 0 && oddArray.length === 0){
            return true;
        }
        // else if inputString.length is odd and there is one value in odd Array, return true
        else if(inputString.length % 1 === 0 && oddArray.length === 1){
            return true;
        }
        // else return false
        else{
            return false;
        }
    }
}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc'));
console.log(palindromeRearranging('abbcabb'));
console.log(palindromeRearranging('zyyzzzzz'));
console.log(palindromeRearranging('z'));