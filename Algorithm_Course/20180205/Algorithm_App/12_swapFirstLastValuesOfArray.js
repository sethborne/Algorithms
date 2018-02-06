function swapFirstLastValuesOfArray(inputArray){
    var inputArray = inputArray || [ 1, 5, 10, -2 ];
    var tempVal = inputArray[inputArray.length - 1];
    inputArray[inputArray.length - 1] = inputArray[0];
    inputArray[0] = tempVal;
    console.log(inputArray);
    return inputArray;
}

swapFirstLastValuesOfArray();
swapFirstLastValuesOfArray([ 10, 4, 6, 8, 2 ]);