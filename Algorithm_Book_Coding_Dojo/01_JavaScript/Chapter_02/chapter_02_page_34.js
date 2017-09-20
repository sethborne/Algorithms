function weekdayName(numValDay){
    if(numValDay < 1 || numValDay > 7){
        console.log(`The Day Number entered: ${numValDay} is out of Range, Please input Integer between 1 and 7 (inclusive)`);
    }
    else{
        switch(numValDay){
            case 1: 
                console.log("Sunday");
                break;
            case 2: 
                console.log("Monday");
                break;
            case 3: 
                console.log("Tuesday");
                break;
            case 4: 
                console.log("Wednesday");
                break;
            case 5: 
                console.log("Thursday");
                break;
            case 6: 
                console.log("Friday");
                break;
            case 7: 
                console.log("Saturday");
                break;
            default: 
                console.log("This should never print");
                break;
        }
    }
}

weekdayName(0)
weekdayName(1)
weekdayName(8)

function weekdayName2(numValDay){
    var isday = "";
    if(numValDay < 1 || numValDay > 365){
        console.log(`The Day Number entered: ${numValDay} is out of Range, Please input Integer between 1 and 365 (inclusive)`);
    }
    else{
        if(numValDay > 7){
            numValDayRemain = numValDay % 7
            if(numValDayRemain == 0){
                numValDayRemain = 7;
            }
        }
        else{
            numValDayRemain = numValDay
        }
        switch(numValDayRemain){
            case 1: 
                console.log("Sunday");
                isDay = "Sunday";
                break;
            case 2: 
                console.log("Monday");
                isDay = "Monday"
                break;
            case 3: 
                console.log("Tuesday");
                isDay = "Tuesday"
                break;
            case 4: 
                console.log("Wednesday");
                isDay = "Wednesday"
                break;
            case 5: 
                console.log("Thursday");
                isDay = "Thursday"
                break;
            case 6: 
                console.log("Friday");
                isDay = "Friday"
                break;
            case 7: 
                console.log("Saturday");
                isDay = "Saturday"
                break;
            default: 
                console.log("This should never print");
                break;
        }
        return isDay;
    }
}

weekdayName2(0);
weekdayName2(2);
weekdayName2(9);
weekdayName2(5);
weekdayName2(12);
weekdayName2(366);

function monthName(numValMonth){
    if(numValMonth < 1 || numValMonth > 12){
        console.log(`Your Input of: ${numValMonth} is out of Range.  Please enter an input between 1 and 12 (inclusive)`);
    }
    else{
        numValMonthArr = numValMonth - 1;
        monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        selectedMonth = monthsOfYear[numValMonthArr]
        console.log(selectedMonth);
        return selectedMonth;
    }
}

monthName(0)
monthName(2)
monthName(3)
monthName(13)

function someDays(numValRun){
    numValRun = numValRun || 17;
    
    var numValDayMin = 1;
    var numValDayMax = 365;
    var randomDay = "";
    
    for(var i = 0; i < numValRun; i += 1){
        var numValRandDay = Math.floor(Math.random()*(numValDayMax - numValDayMin + 1)) + numValDayMin;
        // console.log(`somedays: Loop: ${i}, RandNum: ${numValRandDay}`);
        randomDay = weekdayName2(numValRandDay);
        // console.log(`Text is: ${randomDay}`);
    }
}

someDays()

function monthToDays(monthNum){
    var numDays;
    if(monthNum < 1 || monthNum > 12){
        console.log(`Your Input of: ${monthNum} is out of Range.  Please enter an input between 1 and 12 (inclusive)`);
    }
    else{
        switch(monthNum){
            case 1: 
                numDays = 31;
                break;
            case 2: 
                numDays = 28;
                break;
            case 3: 
                numDays = 31;
                break;
            case 4: 
                numDays = 30;
                break;
            case 5: 
                numDays = 31;
                break;
            case 6: 
                numDays = 30;
                break;
            case 7: 
                numDays = 31;
                break;
            case 8: 
                numDays = 31;
                break;
            case 9: 
                numDays = 30;
                break;
            case 10: 
                numDays = 31;
                break;
            case 11: 
                numDays = 30;
                break;
            case 12: 
                numDays = 31;
                break;
        }
        console.log(numDays);
        return numDays;
    }
}

monthToDays(0)
monthToDays(1)
monthToDays(3)
monthToDays(13)

function dayToMonth(numValDay){
    arrayofDaysPerMonth[ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    arrayofDaysCumulative = [];
    
    if(numValDay > 1 || numValDay < 365){
        console.log(`The Input Value: ${numValDay}, Is Out of Range.  Please enter an Input Value between 1 and 365 (inclusive)`);
    }
    else{
        
    }
}