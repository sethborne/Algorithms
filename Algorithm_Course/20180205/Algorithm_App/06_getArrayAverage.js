// from base
function getArrayAverage(inputArray){
    var inputArray = inputArray || [ 20, 10, 30];
    var finalSum = 0;
    var length = inputArray.length;
    for(let i = 0; i < inputArray.length; i += 1){
        finalSum = finalSum + inputArray[i];
    }
    var average = finalSum / length;
    console.log(average);
    return average;
}

getArrayAverage();
getArrayAverage([ 50, 35, 15, 80, 20 ]);