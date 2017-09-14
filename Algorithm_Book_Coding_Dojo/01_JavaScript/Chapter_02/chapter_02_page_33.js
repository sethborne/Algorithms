function givemeSpace(){
    console.log("                                                                    ");
}

// gaming fundamentals

function rollOne(numValMin, numValMax){
    
    numValMin = numValMin || 1;
    numValMax = numValMax || 6;
    
    var numValRoll;
    numValRoll = Math.floor(Math.random() * (numValMax - numValMin + 1)) + numValMin;
    // console.log(numValRoll);
    return numValRoll;
    
}

// test
function testRollOne(numValTests){
    var testRollArr = [];
    for(var i = 0; i < numValTests; i += 1){
        var testRoll;
        testRoll = rollOne();
        testRollArr.push(testRoll);
        // if i ever get a number don't want then break
        if(testRoll < 1 || testRoll > 6){
            console.log("ERROR");
            break;
        }
    }
    console.log("" + "[ " + testRollArr + " ]");
}

testRollOne(100);

function playNum(numVal){
    var numValPlay;
    for(var i = 0; i < numVal; i += 1){
        numValPlay = rollOne();
        console.log(numValPlay);
        if(numValPlay === 5){
            console.log("Thats Good Luck");
        }
    }
}

playNum(10)

function playStatistics(numVal){
    numVal = numVal || 8;
    
    var numValStatMin = Infinity;
    var numValStatMax = -Infinity;
    
    var numArrayTest = []
    
    for(var i = 0; i < numVal; i += 1){
        numValPlayRoll = rollOne();
        numArrayTest.push(numValPlayRoll)
        
        if(numValPlayRoll > numValStatMax){
            numValStatMax = numValPlayRoll;
        }
        if(numValPlayRoll < numValStatMin){
            numValStatMin = numValPlayRoll;
        }
    }
    console.log(`The Test Array: ${numArrayTest}`);
    console.log(`The Minimum Value is: ${numValStatMin}`);
    console.log(`The Minimum Value is: ${numValStatMax}`);
}
givemeSpace();
playStatistics();
givemeSpace();
playStatistics(4)

function playStatistics2(numVal){
    numVal = numVal || 8;
    
    var numValStatMin = Infinity;
    var numValStatMax = -Infinity;
    var sum = 0;
    
    var numArrayTest = []
    
    for(var i = 0; i < numVal; i += 1){
        numValPlayRoll = rollOne();
        sum += numValPlayRoll;
        numArrayTest.push(numValPlayRoll)
        
        if(numValPlayRoll > numValStatMax){
            numValStatMax = numValPlayRoll;
        }
        if(numValPlayRoll < numValStatMin){
            numValStatMin = numValPlayRoll;
        }
    }
    console.log(`2 The Test Array: ${numArrayTest}`);
    console.log(`2 The Test Array: ${sum}`);
    console.log(`2 The Minimum Value is: ${numValStatMin}`);
    console.log(`2 The Minimum Value is: ${numValStatMax}`);
}

givemeSpace();
playStatistics2();
givemeSpace();
playStatistics2(4);

// playStatistics3 = would be 2 with ability to have custom numVal - already did that!

function playStatistics4(numVal){
    numVal = numVal || 8;
    
    var numValStatMin = Infinity;
    var numValStatMax = -Infinity;
    var sum = 0;
    var average;
    
    var numArrayTest = []
    
    for(var i = 0; i < numVal; i += 1){
        numValPlayRoll = rollOne();
        sum += numValPlayRoll;
        numArrayTest.push(numValPlayRoll)
        
        if(numValPlayRoll > numValStatMax){
            numValStatMax = numValPlayRoll;
        }
        if(numValPlayRoll < numValStatMin){
            numValStatMin = numValPlayRoll;
        }
    }
    average = sum/numVal;
    console.log(`4 The Test Array: ${numArrayTest}`);
    console.log(`4 The Sum is: ${sum}`);
    console.log(`4 The Average is: ${average}`);
    console.log(`4 The Minimum Value is: ${numValStatMin}`);
    console.log(`4 The Minimum Value is: ${numValStatMax}`);
}

givemeSpace();
playStatistics4();
givemeSpace();
playStatistics4(4);

function statisticsUntilDoubles(numValMin, numValMax){
    numValMin = numValMin || 1;
    numValMax = numValMax || 20;
    
    var numValRollMax = -Infinity;
    var numValRollMin = Infinity;
    var numValPrev;
    var count = 0;
    var numValSum = 0;
    var numValAverage = 0;
    
    var isTwoInARow = false;
    
    while(!isTwoInARow){
        numValRoll = Math.floor(Math.random() * (numValMax - numValMin + 1)) + numValMin;
        if(numValRoll == numValPrev){
            isTwoInARow = true;
            // break;
        }
        if(numValRoll > numValRollMax){
            numValRollMax = numValRoll;
        }
        if(numValRoll < numValRollMin){
            numValRollMin = numValRoll;
        }
        count += 1;
        numValSum += numValRoll;
        console.log(`At Loop: ${count}, numValRoll is: ${numValRoll}, numValPrev is: ${numValPrev}, numValMax is: ${numValRollMax}, numValRollMin is: ${numValRollMin} `);
        numValPrev = numValRoll;
    }
    
    numValAverage = numValSum / count;
    
    console.log(`After ${count} Loops, double values: numValRoll is: ${numValRoll}, numValPrev is: ${numValPrev}, numValMax is: ${numValRollMax}, numValRollMin is: ${numValRollMin}, numValSum is: ${numValSum}, numValAverage is: ${numValAverage} `);
}
givemeSpace();
statisticsUntilDoubles();


//claire is where:

var x;
var y;
var dist;

function reset(){
    x = 0;
    y = 0;
}

function moveBy(xOffset, yOffset){
    x += xOffset;
    y += yOffset;
    return x, y;
}

function xLocation(){
    console.log(x);
    return x;
}

function yLocation(){
    console.log(y);
    return y;
}

function distFromHome(){
    dist = x*x + y*y;
    console.log(dist);
    dist = Math.sqrt(dist);
    console.log(dist);
    return dist;
}
givemeSpace();
reset();
moveBy(1, -2);
moveBy(3, 1);
xLocation();
yLocation();
distFromHome();
givemeSpace();
reset();
moveBy(4, 0);
moveBy(0, 3);
xLocation();
yLocation();
distFromHome();