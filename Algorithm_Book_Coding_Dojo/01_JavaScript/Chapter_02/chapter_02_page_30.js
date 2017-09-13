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

function fibonacci(numValFib){
    var sum = 0;
    // var i = 1;
    var prev = 1;
    // while(numValFib > i){
    //     console.log(`Iterator is: ${i}`);
    //     sum += prev;
    //     console.log(`Sum is: ${sum}`);
    //     i += 1;
    //     prev = sum;
    //     console.log(`Prev is: ${prev}`);
    // }
    for(var i = 1; i < numValFib + 1; i += 1){
        if(i == 1){
            sum += prev;
            console.log(`At ${i}, Sum: ${sum}`);
            // prev = sum;
            console.log(`At ${i}, Prev: ${prev}`);
        }
        else{
            sum += prev
            console.log(`At ${i}, Sum: ${sum}`);
            prev = sum;
            console.log(`At ${i}, Prev: ${prev}`);
        }
    }
}

fibonacci(5)