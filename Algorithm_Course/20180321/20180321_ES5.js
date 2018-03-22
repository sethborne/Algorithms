let paramArray = [
                    [3, 2, 3, 4, 3],
                    [2, 3, 3, 3, 0],
                    [7, 3, 3, 5, 3],
                    [6, 5, 3, 4, 1],
                    [1, 2, 3, 3, 3]
                ]
let beginningCoords = [ 2, 2 ];
let originalValue = paramArray[beginningCoords[0]][beginningCoords[1]];
// console.log("orgVal", originalValue);
let count = 0;
                
                
function floodFill(inputArray, startXY, newColor, whichRec){
    count += 1;
    if(whichRec === "up"){
        console.log('up');
    }
    else if(whichRec === 'down'){
        console.log('down');
    }
    else if(whichRec === 'left'){
        console.log('left');
    }
    else if(whichRec === 'right'){
        console.log('right');
    }
    console.log(count);
    // console.log(Boolean(inputArray[startXY[0]][startXY[1]]));
    let prev;
    // if(inputArray[startXY[0]][startXY[1]]){
    // if startXY[0] is greater than -1 and less than inputArray.length && startXY[1] is greater than -1 and less than startXY[1].length 
    console.log("startXY[0]: - Y: ", startXY[0], "startXY[1]: - X:", startXY[1]);
    if(startXY[0] - 1 >= 0 && startXY[0] + 1 < inputArray.length && startXY[1] - 1 >= 0 && startXY[1] + 1 < inputArray[startXY[1]].length){
        prev = inputArray[startXY[0]][startXY[1]];
        console.log("Val", prev);
        if(prev === originalValue){
            inputArray[startXY[0]][startXY[1]] = newColor;
        }
    }
    // else if(inputArray[startXY[1]].length !== undefined){
    //     return false;
    // }
    // else {
    //     return;
    // }
    let up;
    let down;
    let left;
    let right;
    if(startXY[0] - 1 >= 0 && startXY[0] + 1 < inputArray.length){
        up = [startXY[0] - 1, startXY[1]];
        down = [startXY[0] + 1, startXY[1]];
        
        floodFill(inputArray, up, newColor, "up");
        // floodFill(inputArray, down, newColor, "down");
        
    }
    if((startXY[1] - 1) >= 0 ){
        left = [startXY[0], startXY[1] - 1];
        floodFill(inputArray, left, newColor, "left");
    }
    if((startXY[1] + 1) < inputArray[startXY[1]].length){
        right = [startXY[0], startXY[1] + 1];
        // floodFill(inputArray, right, newColor, "right");
    }
    
    console.log(up, down, left, right);
    
    // we have a value at startXY pos = are subsequent calls equal to this value ?
    // check up, down left right
    // up down would be [startXY[0]-1][startXY[1]] and [startXY[0]+1][startXY[1]]
    // left right would be [startXY[0]][startXY[1]-1] and [startXY[0]][startXY[1]+1]
    return inputArray;
}


// floodFill(paramArray, beginningCoords, 1)
// console.log(paramArray);

function rFibonacci(inputNumber){
    // first two, give straight returns
    if(inputNumber === 0 || inputNumber === 1){
        if(inputNumber === 0){
            return 0;
        }
        else if(inputNumber === 1){
            return 1;
        }
    }
    else {
        // time for the fancy math
        // every fib value is the sum of Number - 1 and Number -2
        return rFibonacci(inputNumber - 1) + rFibonacci(inputNumber - 2)
    }
}

console.log(rFibonacci(5));
console.log(rFibonacci(0));
console.log(rFibonacci(1));
console.log(rFibonacci(7));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// 0  1  2  3  4  5  6   7   8   9  10

// put a number in - get a value back in that place

function rTribonacci(inputNumber){
    // frist three, and error check
    if(inputNumber < 0 || inputNumber === 0 || inputNumber === 1 || inputNumber === 2){
        if(inputNumber < 0){
            return 0;
        }
        else if(inputNumber === 0){
            return 0;
        }
        else if(inputNumber === 1){
            return 0;
        }
        else if(inputNumber === 2){
            return 1;
        }
    }
    else{
        // time for math
        // tri fib value is sum of - 1, - 2, -3
        return rTribonacci(inputNumber - 1) + rTribonacci(inputNumber - 2) + rTribonacci(inputNumber - 3);
    }
}

// 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81?
// 0  1  2  3  4  5  6   7   8   9  10

console.log(rTribonacci(0));
console.log(rTribonacci(1));
console.log(rTribonacci(2));
console.log(rTribonacci(4));
console.log(rTribonacci(6));
console.log(rTribonacci(10));
