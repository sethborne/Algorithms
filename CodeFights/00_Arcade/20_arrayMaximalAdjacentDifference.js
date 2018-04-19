// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
function calcDifference(iter, other){
    let diff = 0;
    if(iter >= 0 && other >= 0){
        diff = iter - other;
        if(diff < 0){
            diff = diff * -1;
        }
    }
    else if(iter >= 0 && other < 0){
        diff = iter - other;
    }
    else if(iter < 0 && other >= 0){
        diff = (-1 * iter) + other;
    }
    else if(iter < 0 && other < 0){
        diff = (iter - other);
    }
    return diff;
}

function arrayMaximalAdjacentDifference(inputArray) {
    // make a maxDifArray
    let maxDiffArray = [];
    // loop through array
    let maxDiff = 0;
    for(let i = 0; i < inputArray.length - 1; i += 1){
        // if 0
        if(i === 0){
            // calc and push diff
            let frontDif = calcDifference(inputArray[i], inputArray[i + 1])
            maxDiffArray.push(frontDif)
            // define and set max value
            maxDiff = frontDif;
        }
        // else or last index
        else if(i === inputArray.length - 1){
            // calc and push diff
            let backDif = calcDifference(inputArray[i], inputArray[i - 1])
            // check and redefine max if necessary
            if(backDif > maxDiff){
                maxDiff = backDif;
            }
        }
        else{
            // let prevDif = dif between index and prev
            let prevDif = calcDifference(inputArray[i], inputArray[i - 1]);
            // let nextDif = dif between index and next
            let nextDif = calcDifference(inputArray[i], inputArray[i + 1]);
            // if prevDif is greater than nextDif then push prevDif
            let max = 0;
            if(prevDif > nextDif){
                max = prevDif;
                maxDiffArray.push(prevDif)
            }
            // else push nexDif
            else{
                max = nextDif;
                maxDiffArray.push(nextDif)
            }
            if(max > maxDiff){
                maxDiff = max;
            }
            // check and redefine max if necessary
        }
    }
    console.log(maxDiffArray);
    console.log(maxDiff);
    return maxDiff
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([1, 1, 1, 1]));
console.log(arrayMaximalAdjacentDifference([-1, 4, 10, 3, -12]));
console.log(arrayMaximalAdjacentDifference([10, 11, 13]));
console.log(arrayMaximalAdjacentDifference([-2, -2, -2, -2, -2]));
console.log(arrayMaximalAdjacentDifference([-1, 1, -3, -4]));

// pos pos
// pos neg
// neg pos
// neg neg

