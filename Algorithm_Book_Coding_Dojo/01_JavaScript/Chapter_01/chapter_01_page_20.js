function countDown(numVal){
    var newArray = [];
    for(var i = numVal; i >= 0; i -= 1){
        newArray.push(i);
    }
    console.log(newArray);
    return newArray;
}

countDown(5)
//[ 5, 4, 3, 2, 1, 0]
countDown(3)
//[ 3, 2, 1, 0]

function printAndReturn(inputArray){
    console.log(inputArray[0]);
    console.log(inputArray[1]);
    return inputArray[1];
}

printAndReturn([3, 2])
// 3
// 2
printAndReturn([5, 4])
// 5
// 4

function firstPlusLength(inputArray){
    var sum;
    sum = inputArray[0] + inputArray.length;
    console.log(sum);
}

firstPlusLength([17, 12])
firstPlusLength(["Temp", 4])
firstPlusLength([true, 0])
firstPlusLength([false, 0])

function firstPlusLength2(inputArray) {
    var sum;
    if(typeof inputArray[0] === 'number'){
        // console.log("Is a Number");
        sum = inputArray[0] + inputArray.length;
        console.log(sum);
    }
    else{
        // console.log('Not a Number');
        console.log(`The First Value of the Array - ${inputArray[0]} - is Not a Number - So the Sum Can Not Be Calculated.  Please Enter Valid Parameters into Your Array and Try Again.`);
    }
}

firstPlusLength2(["test", 0]);
firstPlusLength2([true, 2])
firstPlusLength2([4, 0]);

function valuesGreaterThanSecond(inputArray){
    var count = 0;
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] > inputArray[1] ){
            console.log(inputArray[i]);
            count += 1;
        }
    }
    console.log(`Count: ${count}`);
}
console.log("                                                 ");
valuesGreaterThanSecond([ 1, 3, 5, 7, 9, 11, 13 ])
valuesGreaterThanSecond([ 13, 11, 9, 7, 5, 3, 1])

function valuesGreaterThanSecondGeneralized(inputArray){
    var count = 0;
    var newArray = [];
    for(var i = 0; i < inputArray.length; i += 1){
        if(inputArray[i] > inputArray[1]){
            newArray.push(inputArray[i]);
            count += 1;
        }
    }
    console.log(newArray);
    console.log(`Count: ${count}`);
}

console.log("                                                 ");
valuesGreaterThanSecondGeneralized([ 1, 3, 5, 7, 9, 11, 13 ])
valuesGreaterThanSecondGeneralized([ 13, 11, 9, 7, 5, 3, 1])

function thisLengthThatValue(numVal1, numVal2){
    var newArray = [];
    if(numVal1 === numVal2){
        console.log("Jinx!");
    }
    else{
        for(var i = 0; i < numVal1; i += 1){
            newArray.push(numVal2)
        }
        console.log(newArray);
        return newArray;
    }
}

thisLengthThatValue(2, 3);
thisLengthThatValue(2, 2);
thisLengthThatValue(10, 2)

function fitTheFirstValue(inputArray){
    if(inputArray[0] > inputArray.length){
        console.log("Too Big");
    }
    else if(inputArray[0] < inputArray.length){
        console.log("Too Small");
    }
    else{
        console.log("Just Right");
    }
}

fitTheFirstValue([6, 1, 2, 3])
fitTheFirstValue([0, 1, 2])
fitTheFirstValue([3, 1, 2])

function fahrenheitToCelcius(fahrenheitDegrees){
    var numCelcius;
    numCelcius = 5/9*(fahrenheitDegrees - 32);
    console.log(`${fahrenheitDegrees} converted to Celcius is: ${numCelcius}`);
}

fahrenheitToCelcius(212);
fahrenheitToCelcius(32)

function celciusToFarhenheit(celciusDegrees){
    var numFarhenheit;
    numFarhenheit = (9/5 * celciusDegrees) + 32;
    console.log(`${celciusDegrees} converted to Farhenheit is: ${numFarhenheit}`);
}

celciusToFarhenheit(100);
celciusToFarhenheit(0);

function findFarhenheitCelciusEqual(celciusDegrees) {
    var numFarhenheit;
    for(var i = celciusDegrees; i > -200; i -= 1){
        numFarhenheit = (9/5 * i) + 32;
        // console.log(`At ${i}:  Celcius Degrees:  ${i} | Farhenheit Degrees: ${numFarhenheit}`);
        
        if(numFarhenheit === i){
            console.log(`At ${i} degrees, the Celcius and Fahrenheit Scales are Equal`);
            return i;
        }
    }
}

findFarhenheitCelciusEqual(200);

function findFarhenheitCelciusEqualWhile(celciusDegrees){
    var count = 0;
    while(count < 10000){
        numFarhenheit = (9/5 * celciusDegrees) + 32;
        if(numFarhenheit === celciusDegrees){
            console.log(`At ${numFarhenheit} degrees, the Celcius and Farhenheit Scales are Equal`);
            return numFarhenheit;
        }
        // console.log(`At ${celciusDegrees}: Celcius Degrees | Equivalent is ${numFarhenheit} Fahrenheit Degrees`);
        count += 1;
        celciusDegrees -= 1;
    }
}

findFarhenheitCelciusEqualWhile(200);