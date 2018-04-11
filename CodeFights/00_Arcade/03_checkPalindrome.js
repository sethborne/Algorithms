function checkPalindrome(inputString) {
    let inputStringSplit = inputString.split('')
    let backIndex = inputStringSplit.length - 1;
    for (let i = 0; i < Math.floor(inputStringSplit.length / 2); i += 1) {
        if (inputStringSplit[i] !== inputStringSplit[backIndex]) {
            return false;
        }
        else {
            backIndex -= 1
        }
    }
    return true;
}

console.log(checkPalindrome('aabaa'));