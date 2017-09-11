//star art
function drawLeft(numValStringLength, numValStars){
    var stringLeft = "";
    if(numValStars > numValStringLength){
        console.log(`Error:  The Number of Stars ${numValStars} must be Lower or Equal to the Length of the String ${numValStringLength}`);
    }
    else {
        for(var i = 0; i < numValStringLength; i += 1){
            if(i < numValStars){
                stringLeft += "*";
            }
            else{
                //just to make sure that this is working
                if( i == numValStringLength - 1 ){
                    stringLeft += "|";
                }
                stringLeft += " ";
            }
        }
        console.log(stringLeft);
    }
}

drawLeft(75, 5);
drawLeft(50, 10);
drawLeft(10, 15);

function drawRight(numValStringLength, numValStars){
    var stringRight = "";
    if(numValStars > numValStringLength){
        console.log(`Error: The Number of Stars ${numValStars} must be Lower or Equal to the Length of the String ${numValStringLength}`);
    }
    else{
        for(var i = 0; i < numValStringLength; i += 1){
            if(i > numValStringLength - numValStars - 1){
                stringRight += "*"
            }
            else{
                if( i == 0 ){
                    stringRight += "|"
                }
                else{
                    stringRight += "-"
                }
            }
        }
        console.log(stringRight);
        // console.log(stringRight[0]);
        // console.log(stringRight[3]);
        // console.log(stringRight[7]);
    }
}

drawRight(10, 5)

function drawRight2(numValStringLength, numValStars){
    // var stringRight = "x".repeat(numValStringLength);
    var stringRight = "";
    // stringRight.length = numValStringLength;
    if(numValStars > numValStringLength){
        console.log(`Error: The Number of Stars ${numValStars} must be Lower or Equal to the Length of the String ${numValStringLength}`);
    }
    else{
        for(var i = numValStringLength-1; i >= 0; i -= 1){
            console.log(`In Loop at ${i}`);
            stringRight[i] += "x";
            
            if(i > numValStringLength - numValStars){
                stringRight[i] += "*";
                console.log(`In Loop: If: at ${i}`);
            }
            else{
                if( i == 0 ){
                    stringRight[i] += "|";
                }
                else{
                    stringRight[i] += "-";
                    console.log(`In Loop: Else: Else: at ${i}`);
                }
            }
        }
        // stringRight[9] = 8;
        console.log(stringRight);
        // console.log(stringRight[0]);
        // console.log(stringRight[3]);
        // console.log(stringRight[7]);
    }
}

drawRight2(10, 5)

function drawCenter(numValStringLength, numValStars){
    var areBothEven;
    var areBothOdd;
    var leftOffset;
    var stringCenter = "";
    if(numValStringLength % 2 == 0 && numValStars % 2 == 0){
        areBothEven = true;
    }
    if(numValStringLength % 2 == 1 && numValStars % 2 == 1){
        areBothOdd = true;
    }
    if(areBothEven == true || areBothOdd == true){
        leftOffset = (numValStringLength - numValStars)/2;
    }
    else{
        // more to right
        leftOffset = Math.floor((numValStringLength - numValStars)/2);
        // more to left
        // leftOffset = Math.ceil((numValStringLength - numValStars)/2);
    }
    for(var i = 0; i < numValStringLength; i += 1){
        if(i < leftOffset - 1){
            stringCenter += "-";
        }
        else if(i > leftOffset - 1  && i < leftOffset + numValStars){
            stringCenter += "*";
        }
        else{
            stringCenter += "-";
        }
    }
    console.log(stringCenter);
}
drawCenter(10, 5)
drawCenter(100, 50)