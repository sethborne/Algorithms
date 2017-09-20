function arrayMinToFront(inputArray){
    var min = Infinity;
    var minIndex;
    
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] < min){
            min = inputArray[i];
            minIndex = i;
        }
    }
    for(var j = minIndex; j > 0; j -= 1){
        inputArray[j] = inputArray[j - 1];
    }
    inputArray[0] = min
    
    console.log(inputArray);
}

arrayMinToFront([ 4, 2, 1, 3, 5 ])
arrayMinToFront([ 3, 5, 7, 2, 1 ])