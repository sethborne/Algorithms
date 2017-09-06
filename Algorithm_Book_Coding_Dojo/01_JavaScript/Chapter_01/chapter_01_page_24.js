function giveMeSpace(){
    console.log("                                                         ");
}

function onlyKeepTheLastFew(inputArray, numValArrLength){
    var replaceIndex = 0;
    var endIndex = inputArray.length - numValArrLength;
    
    if(numValArrLength >= inputArray.length){
        console.log("Error:  New Length Value is Larger or Equal to the Initial Length.  Please enter a Length Value Lower than the Initial Array Length ");
        // break;
    }
    else{
        for(var i = endIndex; i < inputArray.length; i += 1){
            console.log(`Replace Index: ${replaceIndex} | With End Index: ${endIndex}`);
            inputArray[replaceIndex] = inputArray[i];
            replaceIndex += 1;
        }
        
        inputArray.length = numValArrLength;

        console.log(inputArray);
        return inputArray;
    }
}

giveMeSpace();
onlyKeepTheLastFew([2, 4, 6, 8, 10], 3)
onlyKeepTheLastFew([2, 4, 6], 5)

function mathHelp(numValM, numValB){
    var xIntercept = 0;
    
    if(numValM > 0 && numValB > 0 || numValM < 0 && numValB < 0){
        xIntercept = -1 * ( numValB / numValM );
        console.log(`xIntercept When M/B is both pos or both neg is: ${xIntercept}`);
        return xIntercept;
    }
    
    else if(numValM > 0 && numValB < 0 || numValM < 0 && numValB > 0){
        xIntercept = 1 * ( numValB / numValM );
        console.log(`xIntercept When one of M OR B is pos and one of M OR B is neg is: ${xIntercept}`);
        return xIntercept;
    }
    
    else if(numValM == 0 && numValB != 0){
        console.log(`xIntercept Can Not Be Calculated`);
    }
    
    else if(numValM == 0 && numValB == 0){
        xIntercept = 0;
        console.log(`xIntercept is 0 when M and B are both 0`);
    }
    
    else if(numValM != 0 && numValB == 0){
        xIntercept = -1 * (numValB / numValM);
        console.log(`If B = 0: Then xIntercept is: ${xIntercept}`);
        return xIntercept
    }
}

giveMeSpace();
mathHelp(5, 2);
giveMeSpace();
mathHelp(-5, 2);
mathHelp(5, -2);
giveMeSpace();
mathHelp(-5, -2);
giveMeSpace();
mathHelp(0, 5)
giveMeSpace();
mathHelp(0, 0)
giveMeSpace();
mathHelp(5, 0)
mathHelp(2, 0)


function whatHappensToday(){
    var numValRand;
    var numValMax = 100;
    var numValMin = 1;

    numValRand = Math.floor(Math.random() * (numValMax - numValMin + 1) ) + numValMin
    console.log(numValRand);
    
    if(numValRand < 11){
        console.log("Forecast for Today: Volcano!");
    }
    else if(numValRand > 11 && numValRand < 26){
        console.log("Forecast for Today: Tsunami!");
    }
    else if(numValRand > 27 && numValRand < 46){
        console.log("Forecast for Today: Earthquake!");
    }
    else if(numValRand > 47 && numValRand < 71){
        console.log("Forecast for Today: Blizzard!");
    }
    else if(numValRand > 71 && numValRand < 101){
        console.log("Forecast for Today: Meteor!");
    }
    else {
        console.log("Please Enter a Valid Number");
    }
}

giveMeSpace();
whatHappensToday();
whatHappensToday();
whatHappensToday();
whatHappensToday();
whatHappensToday();
whatHappensToday();
whatHappensToday();
whatHappensToday();

function calculateDojoIQ(numValStartIQ, numValIQInc, numValDays){
    var prevInc = 0;
    var newIQ = numValStartIQ;

    for(var i = 0; i < numValDays; i += 1){
        prevInc += numValIQInc;
        newIQ += prevInc;
        console.log(`At loop ${i} | prevInc is: ${prevInc} | newIQ is: ${newIQ}`);
    }
    
    console.log(`Final IQ after ${numValDays} is: ${newIQ}`);
    return newIQ;
}

giveMeSpace();
calculateDojoIQ(101, .01, 98);

function letterGrade(numValGrades){
    if(numValGrades >= 90 && numValGrades <= 100){
        console.log("Grade is: A");
    }
    //
    else if(numValGrades >= 80 && numValGrades < 90){
        console.log("Grade is: B");
    }
    //
    else if(numValGrades >= 70 && numValGrades < 80){
        console.log("Grade is: C");
    }
    //
    else if(numValGrades >= 60 && numValGrades < 70){
        console.log("Grade is: D");
    }
    //
    else if(numValGrades >= 0 && numValGrades < 60){
        console.log("Grade is: F");
    }
    
    else{
        console.log("Grade Value is Out of Range.  Please Resubmit Valid Value");
    }
}

giveMeSpace();
letterGrade(100);
letterGrade(90);
giveMeSpace();
letterGrade(89);
letterGrade(80);
giveMeSpace();
letterGrade(79);
letterGrade(70);
giveMeSpace();
letterGrade(69);
letterGrade(60);
giveMeSpace();
letterGrade(59);
letterGrade(0);
giveMeSpace();
letterGrade(150);
letterGrade(-150);

function moreAccurateGrades(numValGrades){
    if(numValGrades >= 92 && numValGrades <= 100){
        console.log("Grade is: A");
    }
    else if(numValGrades >= 90 && numValGrades < 92){
        console.log("Grade is: A-");
    }
    //
    else if(numValGrades >= 88 && numValGrades < 90){
        console.log("Grade is: B+");
    }
    else if(numValGrades >= 82 && numValGrades < 88){
        console.log("Grade is: B");
    }
    else if(numValGrades >= 80 && numValGrades < 82){
        console.log("Grade is: B-");
    }
    //
    else if(numValGrades >= 78 && numValGrades < 80){
        console.log("Grade is: C+");
    }
    else if(numValGrades >= 72 && numValGrades < 78){
        console.log("Grade is: C");
    }
    else if(numValGrades >= 70 && numValGrades < 72){
        console.log("Grade is: C-");
    }
    //
    else if(numValGrades >= 68 && numValGrades < 70){
        console.log("Grade is: D+");
    }
    else if(numValGrades >= 62 && numValGrades < 68){
        console.log("Grade is: D");
    }
    else if(numValGrades >= 60 && numValGrades < 62){
        console.log("Grade is: D-");
    }
    //
    else if(numValGrades >= 0 && numValGrades < 60){
        console.log("Grade is: F");
    }
    
    else{
        console.log("Grade Value is Out of Range.  Please Resubmit Valid Value");
    }
}

giveMeSpace();
moreAccurateGrades(100);
moreAccurateGrades(92);
moreAccurateGrades(91);
moreAccurateGrades(90);
giveMeSpace();
// +
moreAccurateGrades(89);
// 
moreAccurateGrades(87);
moreAccurateGrades(82);
// -
moreAccurateGrades(80);
giveMeSpace();
// +
moreAccurateGrades(79);
// 
moreAccurateGrades(77);
moreAccurateGrades(72);
// -
moreAccurateGrades(70);
giveMeSpace();
// +
moreAccurateGrades(69);
// 
moreAccurateGrades(67);
moreAccurateGrades(62);
// -
moreAccurateGrades(60);
giveMeSpace();
// f
moreAccurateGrades(59)
moreAccurateGrades(0)

moreAccurateGrades(150);
moreAccurateGrades(-50)