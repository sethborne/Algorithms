function compareNumbers(a, b){
    return a - b;
}

function getIndexToIns(inputArray, numValMed) {
    // Find my place in this sorted array.
    sortInputArray = inputArray.sort(compareNumbers);
    // console.log(sortInputArray);
    var prev = 0;
    for(var i = 0; i < sortInputArray.length; i += 1){
        // console.log(`I Loop: ${i}`);
        // console.log(`numValMed: ${numValMed} | sortInputArray[i]: ${sortInputArray[i]}`);
        if(numValMed <= sortInputArray[i]){
            // console.log("nothing");
            // prev = i;
            // break;
        }
        else{
            prev += 1;
            `Else Loop: ${prev}`
            // break;
        }
        // console.log("prev is " + prev);
    }
    console.log(`prev: ${prev}`);
    return prev;
}

getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 5, 10], 15);
