function replaceNegValuesWithString(inputArray){
    var inputArray = inputArray || [ -1, -3, 2 ];
    for(let i = 0; i < inputArray.length; i += 1){
        if(i < 0){
            inputArray[i] = "Dojo"
        }
    }
    return inputArray;
}