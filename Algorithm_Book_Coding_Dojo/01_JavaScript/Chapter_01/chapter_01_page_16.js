function settingAndSwapping(numVal, nameVal) {
    var tempVal = numVal;
    numVal = nameVal;
    nameVal = tempVal;

    console.log("NumVal: " + numVal + " | NameVal: " + nameVal);
}

settingAndSwapping(42, "Seth");
settingAndSwapping("Seth", 42);

function printInteger(numValMin, numValMax) {
    for (var i = numValMin; i <= numValMax; i++) {
        console.log("The Current Integer is: " + i);
    }
}

printInteger(-52, 1066)

function beCheerful(numVal) {
    var count = 1;
    for (var i = 0; i < numVal; i += 1) {
        console.log("The Current Count is: " + count + " | Good Morning");
        count += 1;
    }
}

beCheerful(98);

function printMultiplesOf(numValMin, numValMax, multiple) {
    for (var i = numValMin; i <= numValMax; i += 1) {
        if (i % multiple == 0) {
            if (i != -3 && i != -6) {
                console.log("The Multiple of " + multiple + " is " + i);
            }
        } else {

        }
    }
}

printMultiplesOf(-300, 0, 3)

function printIntegersWithWhile(numValMin, numValMax) {
    var iterator = numValMin;
    while (iterator >= numValMin && iterator <= numValMax) {
        console.log("The Number is: " + iterator);
        iterator += 1;
    }
}

printIntegersWithWhile(200, 528)

function youSayBirthday(numValBirthMonth, numValBirthDay) {
    var birthMonth = 3;
    var birthDay = 25;
    if (numValBirthMonth === birthMonth && numValBirthDay === birthDay || numValBirthMonth === birthDay && numValBirthDay == birthMonth) {
        console.log("How did you Know?");
    } else {
        console.log("Just Another Day");
    }
}

youSayBirthday(3, 25)
youSayBirthday(25, 3)
youSayBirthday(14, 23)
youSayBirthday(3, 14)

function isLeapYear(numValYear){
    if(numValYear % 400 == 0){
        console.log(`${numValYear} is not a Leap Year`);
    }
    else if(numValYear % 100 == 0){
        console.log(`${numValYear} is a Leap Year`);
    }
    else if(numValYear % 4 == 0){
        console.log(`${numValYear} is a Leap Year`);
    }
        
}

isLeapYear(800);
isLeapYear(600);
//no
isLeapYear(400);
//yes
isLeapYear(100);
//no   
isLeapYear(4);

function printAndCountFactors(numValMin, numValMax, numValFactor){
    var count = 0;
    for(var i = numValMin; i <= numValMax; i += 1){
        if(i % numValFactor == 0){
            console.log(`${i} is a Factor of ${numValFactor}`);
            count += 1;
        }
    }
    console.log(`The Final Count of Factors of ${numValFactor}, in the range from ${numValMin} to ${numValMax} is: ${count}`);
    return count;
}

// 5
printAndCountFactors(0, 10, 2)
// 10
printAndCountFactors(3, 30, 3)

function multiplesOfFactor(numValMin, numValMax, numValFactor){
    var i = numValMin;
    while( i <= numValMax ){
        if( i % numValFactor == 0 ){
            console.log(`${i} is a Factor of ${numValFactor}`);
        }
        i += 1;
    }
}

multiplesOfFactor(6, 60, 6)

function countingTheDojoWay(numValMin, numValMax, numValFirstFactor, numValSecondFactor){
    for(var i = numValMin; i <= numValMax; i += 1){
        if(i % numValSecondFactor == 0){
            // console.log(`Number ${i} is Divisible by ${numValSecondFactor}`);
            console.log(`Coding Dojo`);
        }
        else if( i % numValFirstFactor == 0 ){
            // console.log(`Number ${i} is Divisible by ${numValFirstFactor}`);
            console.log(`Coding`);
        }
        else {
            console.log(`Number is ${i}`);
        }
    }
}

countingTheDojoWay(1, 100, 5, 10)

function whatDoYouKnow(incoming){
    console.log(`Incoming is Equal to: ${incoming}`);
}

whatDoYouKnow("Everything");
whatDoYouKnow("is")
whatDoYouKnow("Not Real!")

function whoaThatSuckerIsHuge(numValMin, numValMax){
    if(numValMin / numValMax == 1 || numValMin / numValMax == -1){
        console.log("The Minimum Number and the Maximum Number .  The Sum Will be 0");
    }
    else {
        var sum = 0;
        for(var i = numValMin; i < numValMax; i += 1){
            if( i % 2 != 0 ){
                sum = sum + i;
            }
            console.log(`At ${i}, the Sum is: ${sum}`);
        }
        console.log(sum);
    }
}

whoaThatSuckerIsHuge(-30, 30)

function countDownByFactor(numValMin, numValMax, numValFactor){
    var i = numValMax;
    while( i > numValMin){
        if( i % numValFactor == 0 ){
            console.log(`${i}`);
        }
        i -= 1;
    }
}

countDownByFactor(0, 40, 4)
countDownByFactor(5, 25, 5)