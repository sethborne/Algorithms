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