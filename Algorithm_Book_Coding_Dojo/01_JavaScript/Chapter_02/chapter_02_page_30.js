function giveMeSpace(){
    console.log("                                                         ");
}

function twelveBarBlues(numValMin, numValMax){
    for(var i = numValMin; i <= numValMax; i += 1){
        console.log(`The Loop Value is: ${i}`);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
}
giveMeSpace();
twelveBarBlues(1, 12);

// function fibonacci(numValFib){
//     var sum = 1;
    // var i = 1;
    // var prev = 0;
    // var count = 0;
    // while(numValFib-2 > count){
    //     console.log(`Iterator is: ${count}`);
    //     sum += prev;
    //     console.log(`Sum is: ${sum}`);
    //     count += 1;
    //     prev = sum;
    //     console.log(`Prev is: ${prev}`);
    // }
    // for(var i = 1; i < numValFib + 1; i += 1){
    //     if(i == 1){
    //         sum += prev;
    //         console.log(`At ${i}, Sum: ${sum}`);
    //         // prev = sum;
    //         console.log(`At ${i}, Prev: ${prev}`);
    //     }
    //     else{
    //         sum += prev
    //         console.log(`At ${i}, Sum: ${sum}`);
    //         prev = sum;
    //         console.log(`At ${i}, Prev: ${prev}`);
    //     }
    // }
// }

// fibonacci(4)

function fibonacci(numVal){
    var newArr = [];
    for(var idx = 0; idx < numVal + 1; idx++){
        //populate each spot
        if(idx >= 2){
            //add
            newArrVal = newArr[idx - 1] + newArr[idx - 2];
            newArr.push(newArrVal)
        }
        else{
            newArr.push(idx);
        }
    }
    console.log("The Index number " + numVal +  " of the Fib Sequence is " + newArr[numVal] );
}
giveMeSpace();
fibonacci(9)
// 8
fibonacci(8)
// 0
fibonacci(5)
// 5

function testModulo(numVal){
    numTest = numVal % 10;
    console.log(numTest);
}
giveMeSpace();
testModulo(42)

function sumToOneDigit(numVal){
    var sum = 0;
    var numToSum;
    
    while(numVal){
        numToSum = numVal % 10;
        sum += numToSum;
        if(sum % 10 > 0){
            numToSumEdge = sum % 10;
            sum = Math.floor(sum / 10);
            sum = sum + numToSumEdge
        }
        numVal = Math.floor(numVal / 10);
    }
    console.log(sum);
}
giveMeSpace();
sumToOneDigit(100);
sumToOneDigit(987);

function isAPrime(numVal){
    var isPrime = true;
    for(var i = 2; i < numVal; i += 1){
        console.log(`run loop ${i}`);
        if(numVal % i == 0){
            isPrime = false;
            console.log("   break");
        }
    }
    if(isPrime == true){
        console.log(`${numVal} is a Prime Number`);
    }
    else{
        console.log(`${numVal} is not a Prime Number`);
    }
}
giveMeSpace();
isAPrime(2);
giveMeSpace();
isAPrime(3);
giveMeSpace();
isAPrime(4);
giveMeSpace();
isAPrime(5);
isAPrime(6);
isAPrime(11);
isAPrime(13);

