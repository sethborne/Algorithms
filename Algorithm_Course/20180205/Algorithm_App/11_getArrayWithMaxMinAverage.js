function getArrayWithMaxMinAverage(inputArray){
    var inputArray = inputArray || [ 1, 5, 10, -2 ];
    var MaxMinAverage = [];
    var min = Infinity;
    var max = -Infinity;
    var average = 0;
    var sum = 0;
    for(let i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] < min){
            min = inputArray[i];
        }
        if(inputArray[i] > max){
            max = inputArray[i];
        }
        sum = sum + inputArray[i];
    }
    if(sum !== 0){
        // console.log(sum);
        average = sum / inputArray.length;
    }
    console.log(min);
    console.log(max);
    console.log(sum);
    MaxMinAverage.push(max);
    MaxMinAverage.push(min);
    MaxMinAverage.push(average);
    return MaxMinAverage;
}

getArrayWithMaxMinAverage();
getArrayWithMaxMinAverage([ -10, 20, -30, 80, 60])