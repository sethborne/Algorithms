function dropElements(inputArray, func) {
    // Drop them elements.
    var evaluate = false;
    var newArray = [];
    var pushIndex = -1;
    for(var i = 0; i < inputArray.length; i += 1){
        evaluate = func(inputArray[i]);
        // console.log(`Loop: i: ${i} | Evaluate: ${evaluate}`);
        if(evaluate){
            pushIndex = i;
            console.log(`index to save: ${i}`);
            break;
        }
    }
    // console.log(pushIndex);
    if(evaluate){
        for(var p = pushIndex; p < inputArray.length; p += 1){
            newArray.push(inputArray[p]);
        }
    }
    console.log(newArray);
    return newArray;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
// 
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
// should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
// should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;});
// should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
// should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
// should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
// should return [3, 9, 2].