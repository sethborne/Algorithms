function extractOMatic(numVal, numValDigit){
    // if(numValDigit == 1){
    //     numValExtract = numVal % 10;
    //     console.log(numValExtract);
    // }
    switch(numValDigit){
        case 0: 
            numValExtract = numVal % 10;
            numValExtract = Math.floor(numValExtract);
            console.log(numValExtract);
            break;
        case 1: 
            numValExtract = numVal % 100;
            numValExtract = Math.floor(numValExtract / 10);
            console.log(numValExtract);
            break;
        case 2: 
            numValExtract = numVal % 1000;
            numValExtract = Math.floor(numValExtract / 100);
            console.log(numValExtract);
            break;
        case 3: 
            numValExtract = numVal % 10000;
            numValExtract = Math.floor(numValExtract / 1000);
            console.log(numValExtract);
            break;
    }
    
}

extractOMatic(852852.147, 0)
extractOMatic(852852.147, 1)
extractOMatic(852852.147, 2)
extractOMatic(852852.147, 3)

function extractOMaticNegDigit(numVal, numValDigit){
    // if(numValDigit == -1){
    //     numValExtract = numVal % 1/10;
    //     numValExtract = Math.floor(numValExtract * 100);
    //     console.log(numValExtract);
    // }
    switch(numValDigit){
        case -4: 
            numValExtract = numVal * 10000
            numValExtract = Math.floor(numValExtract % 10);
            console.log(`Test ${numValExtract}`);
            break;
        case -3: 
            numValExtract = numVal * 1000
            numValExtract = Math.floor(numValExtract % 10);
            console.log(`Test ${numValExtract}`);
            break;
        case -2: 
            numValExtract = numVal * 100
            numValExtract = Math.floor(numValExtract % 10);
            console.log(`Test ${numValExtract}`);
            break;
        case -1: 
            numValExtract = numVal * 10;
            numValExtract = Math.floor(numValExtract % 10)
            console.log(numValExtract);
            break;
        case 0: 
            numValExtract = numVal % 10;
            console.log(numValExtract);
            break;
        case 1: 
            numValExtract = numVal % 100;
            numValExtract = Math.floor(numValExtract / 10);
            console.log(numValExtract);
            break;
        case 2: 
            numValExtract = numVal % 1000;
            numValExtract = Math.floor(numValExtract / 100);
            console.log(numValExtract);
            break;
        case 3: 
            numValExtract = numVal % 10000;
            numValExtract = Math.floor(numValExtract / 1000);
            console.log(numValExtract);
            break;
    }
    
}

extractOMaticNegDigit(852.147, -1)
extractOMaticNegDigit(852.147, -2)
extractOMaticNegDigit(852.147, -3)
extractOMaticNegDigit(852.147258, -4)
extractOMaticNegDigit(852.147258, -5)
extractOMaticNegDigit(852.147258, -6)

function mostSignificantIntegerDigit(numVal){
    var lastVal;
    var numValProcess = numVal;
    var iter = 0
    
    while(numValProcess){
        lastVal = numValProcess % 10;
        numValProcess = Math.floor(numValProcess / 10);
        iter += 1;
        console.log(`At Loop: ${iter}, Current Digit Popped is: ${lastVal}, Processed Number is: ${numValProcess}`);
    }
    console.log(`Most Significant Digit of ${numVal} is: ${lastVal}`);
}

mostSignificantIntegerDigit(354256);

function mostSignificantFractionalDigit(numVal){
    var lastVal;
    var numValProcess = numVal;
    var iter = 0;
    
    while(numValProcess){
        numValProcess = numValProcess * 10;
        lastVar = Math.floor(numValProcess % 10);
        iter += 1;
        if(lastVar > 0){
            console.log(`At Loop: ${iter}, Current Digit Popped is: ${lastVal}, Processed Number is: ${numValProcess}`);
            return lastVar;
        }
    }
    
}

mostSignificantFractionalDigit(876.543);
mostSignificantFractionalDigit(5.4321);
mostSignificantFractionalDigit(0.01234);
mostSignificantFractionalDigit(0.000000000000000000000000000000000000000000000000000000000000000009)