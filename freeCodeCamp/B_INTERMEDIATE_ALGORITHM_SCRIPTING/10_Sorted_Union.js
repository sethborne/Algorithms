function uniteUnique(inputParams) {
    var inputArray = Array.from(arguments);
    console.log(inputArray);
    var uniqueArray = [];
    for(var i = 0; i < inputArray.length; i += 1){
        for(var j = 0; j < inputArray[i].length; j += 1){
            var valExists = false;
            for(var c = 0; c < uniqueArray.length; c += 1){
                if(inputArray[i][j] === uniqueArray[c]){
                    valExists = true;
                }
            }
            if(valExists == false){
                uniqueArray.push(inputArray[i][j]);
            }
        }
    }
    console.log("Unique Array: ");
    console.log(uniqueArray);
    console.log("");
    
    return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
// should return [1, 3, 2, [5], [4]]
uniteUnique([1, 2, 3], [5, 2, 1]); 
// should return [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
// should return [1, 2, 3, 5, 4, 6, 7, 8]