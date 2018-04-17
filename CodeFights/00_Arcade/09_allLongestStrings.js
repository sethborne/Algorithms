function allLongestStrings(inputArray) {
    let maxCount = inputArray[0].length;
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i].length > maxCount){
            maxCount = inputArray[i].length;
        }
    }
    console.log(maxCount);
    let arrayOfLongestStrings = [...inputArray].filter((arrayItem) => arrayItem.length === maxCount);
    return arrayOfLongestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));