function findElement(inputArray, func) {
    var numVal = 0;
    var isTrue = false;
    for(var i = 0; i < inputArray.length; i += 1){
        console.log(inputArray[i]);
        numVal = func(inputArray[i]);
        if(numVal){
            isTrue = true;
            numVal = inputArray[i];
            break;
        }
        console.log(numVal);
    }
    if(isTrue){
        return numVal;
    }
    else {
        return undefined;
    }
}

findElement([1, 2, 3, 4], function(input){ return input % 2 === 0; });
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
// should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })
// should return undefined.