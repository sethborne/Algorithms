function getSquaredArray(inputArray){
    var inputArray = inputArray || [ 1, 5, 10, -2 ];
    var squaredArray = [];
    for(let i = 0; i < inputArray.length; i += 1){
        squaredArray.push(inputArray[i] * inputArray[i]);
    }
    return squaredArray;
}