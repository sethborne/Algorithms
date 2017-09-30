function sumAll(inputArray) {
    var numStart;
    var numEnd;
    
    if(inputArray[0] < inputArray[1]){
        numStart = inputArray[0];
        numEnd = inputArray[1];
    }
    else{
        numStart = inputArray[1];
        numEnd = inputArray[0];
    }
    
    var sum = 0;
    
    for(var i = numStart; i < numEnd + 1; i += 1){
        sum += i;
    }
    console.log(sum);
    return sum;
    // return 1;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);