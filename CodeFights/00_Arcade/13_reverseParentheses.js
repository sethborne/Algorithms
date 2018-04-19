function returnNewString(openIndex, closeIndex, curInputString){
    // console.log(openIndex, closeIndex, curInputString);
    let frontString = curInputString.substring(0, openIndex);
    let midString = curInputString.substring(openIndex + 1, closeIndex);
    midString = midString.split('').reverse().join('')
    let lastString = curInputString.substring(closeIndex + 1, curInputString.length)
    // console.log(frontString, midString, lastString);
    curInputString = frontString + midString + lastString;
    return curInputString
}

function reverseParentheses(inputString) {
    let openIndex = []
    for(let i = 0; i < inputString.length; i += 1){
        if(inputString[i] === '('){
            openIndex.push(i)
            console.log(openIndex);
        }
        else if(inputString[i] === ')'){
            let currentCloseIndex = i;
            console.log(currentCloseIndex, i);
            inputString = returnNewString(openIndex.pop(), currentCloseIndex, inputString)
            i -= 2;
        }
        else{
            console.log(i);
        }
    }
    return inputString
}

console.log(reverseParentheses('a(bc)de'));
console.log(reverseParentheses('a(bcdefghijkl(mno)p)q'));
console.log(reverseParentheses('abc(cba)ab(bac)c'));


// let openIndex = []
// let closedIndex = []
// for(let i = 0; i < inputString.length; i += 1){
//     // console.log(inputString[i]);
//     if(inputString[i] === '('){
//         openIndex.push(i)
//     }
// }
// for(let e = inputString.length - 1; e >= 0; e -= 1){
//     if(inputString[e] === ')'){
//         closedIndex.push(e)
//     }
// }
// console.log(openIndex, closedIndex, inputString.length);
// let loop = 0;
// while(openIndex.length > 0){
//     let openChar = openIndex.pop();
//     let closedChar = closedIndex.pop();
//     // console.log(openChar, closedChar);
//     let firstPart = inputString.substring(0, openChar);
//     let reversePart = inputString.substring(openChar + 1, closedChar - loop * 2);
//     reversePart = reversePart.split('').reverse().join('')
//     // console.log(typeof reversePart);
//     let lastPart = inputString.substring(closedChar + 1 - loop * 2, inputString.length)
//     console.log(firstPart, "|", reversePart, "|", lastPart);
//     inputString = firstPart + reversePart + lastPart;
//     loop += 1
//     // console.log(inputString);
//     // console.log(openIndex, closedIndex);
// }
// console.log(inputString);