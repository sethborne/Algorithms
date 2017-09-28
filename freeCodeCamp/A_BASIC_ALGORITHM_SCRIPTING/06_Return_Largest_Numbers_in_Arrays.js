function largestOfFour(inputArray) {
    // You can do this!
    var maxArray = [];
    for(var i = 0; i < inputArray.length; i += 1){
        var maxOfArray = inputArray[i][0];
        for(var j = 0; j < inputArray[i].length; j += 1){
            if(inputArray[i][j] > maxOfArray){
                maxOfArray = inputArray[i][j];
            }
            
        }
        maxArray.push(maxOfArray);
        console.log(maxArray);
    }
    return maxArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);