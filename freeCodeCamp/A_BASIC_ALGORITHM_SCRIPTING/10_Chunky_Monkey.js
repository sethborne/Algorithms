function chunkArrayInGroups(inputArray, numValSize) {
    // Break it up.
    var newArray = [];
    
    for(var i = 0; i < inputArray.length; i += numValSize){
        newArray.push(inputArray.slice(i, i + numValSize));
        console.log(newArray);
    }
    
    console.log(newArray);
    return newArray;
    // return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);