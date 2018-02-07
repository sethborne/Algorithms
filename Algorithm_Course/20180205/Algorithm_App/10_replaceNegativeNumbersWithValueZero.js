function replaceNegativeNumbersWithValueZero(inputArray){
    var inputArray = inputArray || [ 1, 5, 10, -2 ];
    var noNegArray = [];
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] < 0){
            noNegArray.push(0);
        }
        else {
            noNegArray.push(inputArray[i]);
        }
    }
    console.log(noNegArray);
    return noNegArray;
}

replaceNegativeNumbersWithValueZero();
replaceNegativeNumbersWithValueZero([ -5, 3, -2, 5, -40, -10 ]);