// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(inputArray) {
    let finalLength = inputArray[0].length + 2;
    let finalArrayLength = inputArray.length + 2;
    let borderArray = [];
    let borderChar = '*';
    let topBottomFrame = new Array(finalLength).fill(borderChar).join('')
    for(let s = 0; s < inputArray.length; s += 1){
        inputArray[s] = borderChar + inputArray[s] + borderChar;
    }
    console.log(inputArray);
    for(let n = 0; n < finalArrayLength; n += 1){
        if(n === 0){
            borderArray.push(topBottomFrame);
        }
        else if(n === finalArrayLength - 1){
            borderArray.push(topBottomFrame);            
        }
        else{
            borderArray.push(inputArray[n - 1])
        }
    }
    return borderArray;
}

console.log(addBorder(
    ["abc",
     "ded"]));