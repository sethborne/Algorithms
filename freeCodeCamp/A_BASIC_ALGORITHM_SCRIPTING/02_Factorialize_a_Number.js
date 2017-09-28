//factorialize with for loop

function factorialize(numVal){
    var factorial = 1;
    for(var i = numVal; i > 0; i -= 1){
        factorial *= i;
        console.log(factorial);
    }
    console.log(factorial);
    return factorial;
}

factorialize(10);
factorialize(5);

// could use reduce?