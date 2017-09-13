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

fibonacci(9)
// 8
fibonacci(8)
// 0
fibonacci(5)
// 5