function sortByHeight(inputArray) {
    let numberArray = [];
    for(let i = 0; i < inputArray.length; i += 1){
        console.log(inputArray[i]);
        if(inputArray[i] !== -1){
            numberArray.push(inputArray[i])
        }
    }
    numberArray.sort((a, b) => a > b);
    console.log(numberArray);
    for(let r = 0; r < inputArray.length; r += 1){
        if(inputArray[r] === -1){
            console.log('Can\'t touch this');
        }
        else{
            inputArray[r] = numberArray.shift();
        }
    }
    return inputArray;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));