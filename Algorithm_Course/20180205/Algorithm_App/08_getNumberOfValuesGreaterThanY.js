function getNumberOfValuesGreaterThanY(inputArray, value){
    var inputArray = inputArray || [ 1, 3, 5, 7 ];
    var value = value || 3;
    var count = 0;
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] > value){
            count += 1;
        }
    }
    return count;
}